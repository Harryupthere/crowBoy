import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  BLOCKCHAIN_NAME,
  BlockchainName,
  CHAIN_TYPE,
  CrossChainTrade,
  OnChainTrade,
  SDK,
  LifiTrade,
  AlgebraTrade,
  OpenOceanTrade,
  PriceToken,
  EvmWeb3Public,
  Injector,
} from "rubic-sdk";
import { configuration } from "../constants/sdk-config";
import useAsyncEffect from "use-async-effect";
import SwapBlock from "@/sdkfiles/SwapBlock";
import {
  useAccount,
  useContractRead,
  Chain,
  useChainId,
  useSwitchNetwork,
  useBalance,
} from "wagmi";
import { main_chain_list } from "@/chainstokens/mainChainList";
import { getTokenId, getTokenList } from "@/chainstokens/getTokens";
import TokenAbi from "./TokenAbi.json";
import { LinearProgress } from "@mui/material";
import { useWeb3Modal } from "@web3modal/wagmi/react";
export default function Home() {
  const [toggle, setToggle] = useState(0);
  const [Open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const toggleRef = useRef<any>();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const changeToggle = (index) => {
    setToggle(index);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [loading, setLoading] = useState(true);
  const { address, connector, status } = useAccount();
  const chainId = useChainId();

  const { refetch: fetchMainBalance } = useBalance({
    address,
  });

  const [sdk, setSdk] = useState<SDK | null>(null);
  const [selectedcurrency1, setSelectedcurrency1] = useState(0);
  const [selectedcurrency2, setSelectedcurrency2] = useState(4);
  const [selectedToken1, setSelectedToken1] = useState({
    index: 0,
    blockchain: "",
    address: "",
  });
  const [selectedToken2, setSelectedToken2] = useState({
    index: 0,
    blockchain: "",
    address: "",
  });
  const [inputTokenAmount, setInputTokenAmount] = useState<any>(0);
  const [bestTrade, setBestTrade] = useState<any>();
  const [outputTokenAmount, setOutputTokenAmount] = useState("");
  const [perTokenDollarValue, setPerTokenDollarValue] = useState<
    number | string
  >(0);
  const [token1FullDetails, setToken1FullDetails] = useState({
    blockchain: BLOCKCHAIN_NAME.CRONOS,
    chainName: "cronos",
    image:
      "https://assets.rubic.exchange/assets/cronos/0x0000000000000000000000000000000000000000/logo.png",
  });
  const [subToken1FullDetails, setSubToken1FullDetails] = useState<any>({
    address: "0x0000000000000000000000000000000000000000",
    name: "CRO",
    symbol: "CRO",
    blockchainNetwork: "cronos",
    decimals: 18,
    image:
      "https://assets.rubic.exchange/assets/cronos/0x0000000000000000000000000000000000000000/logo.png",
    rank: 8.0,
    usedInIframe: false,
    coingeckoId: "crypto-com-chain",
    usdPrice: 0.14169,
    coingecko_rank: 35,
    token_security: null,
  });
  const [token2FullDetails, setToken2FullDetails] = useState({
    blockchain: BLOCKCHAIN_NAME.POLYGON,
    chainName: "polygon",
    image:
      "https://assets.rubic.exchange/assets/polygon/0x0000000000000000000000000000000000000000/logo.png",
  });

  const [subToken2FullDetails, setSubToken2FullDetails] = useState({
    address: "0x0169ec1f8f639b32eec6d923e24c2a2ff45b9dd6",
    name: "Algebra",
    symbol: "ALGB",
    blockchainNetwork: "polygon",
    decimals: 18,
    image:
      "https://assets.rubic.exchange/assets/polygon/0x0169ec1f8f639b32eec6d923e24c2a2ff45b9dd6/logo.png",
    rank: 9.0,
    usedInIframe: true,
    coingeckoId: "algebra",
    usdPrice: 0.02361802,
    coingecko_rank: 1470,
    token_security: {
      has_info: true,
      trust_list: null,
      risky_security_items: 0,
      attention_security_items: 0,
      is_airdrop_scam: null,
      fake_token: false,
    },
  });

  console.log("subToken1FullDetails", subToken1FullDetails);

  const [Token1, setToken1] = useState([]);
  const [Token2, setToken2] = useState([]);
  const [calculateBestTrade, setCalculateBestTrade] = useState([]);
  const [openProvider, setOpenProvider] = useState(false);
  const [showPreviewSwap, setShowPreview] = useState(false);

  type WAGMI_CONTRACT_READ = {
    isError: any;
    isLoading: any;
    isSuccess: any;
    refetch: any;
  };

  const {
    isError: getFireTokenBalanceHookError,
    isLoading: getFireTokenBalanceLoading,
    isSuccess: getFireTokenBalanceHookSuccess,
    refetch: getFireTokenBalanceHook,
  }: WAGMI_CONTRACT_READ = useContractRead({
    address: subToken1FullDetails?.address,
    abi: TokenAbi,
    functionName: "balanceOf",
    args: [address],
  });
  const [userBalance, setUserBalance] = useState(0);

  const getUserBalance = async () => {
    if (address) {
      try {
        const { data } = await getFireTokenBalanceHook();
        console.log("balabce", data);
        if (data >= 0) {
          setUserBalance(Number(data));
          // const convertBalance = Number(data) / 10 ** 18;
          // setUserStakes(convertBalance);
        }
      } catch (error) {
        console.log("Error in getUserStakes =>", error);
      }
    }
  };

  const getUserMainBalance = async () => {
    if (address) {
      try {
        const { data }: any = await fetchMainBalance();
        console.log("eeeee", data);
        if (data?.formatted >= 0) {
          setUserBalance(Number(data?.formatted));
          // const convertBalance = Number(data) / 10 ** 18;
          // setUserStakes(convertBalance);
        }
      } catch (error) {
        console.log("Error in getUserStakes =>", error);
      }
    }
  };

  // useEffect(() => {
  //   if (address) {
  //     getUserBalance()
  //     getUserMainBalance()
  //   }
  // }, [subToken1FullDetails, chainId])

  useEffect(() => {
    const res = getTokenId(String(token1FullDetails?.chainName)?.toLowerCase());
    console.log("respppppp", res);
    if (chainId != res && address) {
      switchNetwork(res);
      // alert(`PLease switch on ${token1FullDetails?.chainName} first.`)
    }
  }, [token1FullDetails?.chainName, chainId]);

  useEffect(() => {
    if (address) {
      if (
        subToken1FullDetails?.address ==
        "0x0000000000000000000000000000000000000000"
      ) {
        getUserMainBalance();
      } else {
        getUserBalance();
      }
    }
  }, [subToken1FullDetails?.address, chainId]);

  //console.log("calculateBestTrade",calculateBestTrade[0]?.trade?.deadlineMinutes);
  //console.log("calculateBestTrade",calculateBestTrade[0]?.trade?.gasFeeInfo?.gasFeeInEth?.toFixed());
  // console.log("calculateBestTrade",calculateBestTrade[0]?.trade?.feeInfo?.rubicProxy?.fixedFee?.amount?.toFixed());
  //
  // console.log("calculateBestTrade",calculateBestTrade[0]?.trade?.to?._price?.toFixed());
  // console.log("calculateBestTrade",calculateBestTrade[0]?.trade?.gasFeeInfo);

  // console.log("calculateBestTrade",calculateBestTrade[0]?.trade?.gasFeeInfo?.gasLimit.toFixed());
  // console.log("calculateBestTrade2",calculateBestTrade[0]?.trade?.gasFeeInfo?.gasLimit.toFixed()*calculateBestTrade[0]?.trade?.gasFeeInfo?.maxFeePerGas.toFixed());

  const [tradeIndex, setTradeIndex] = useState(0);
  const getTokenCurrentDollarPrice = async (
    blockChainName: any,
    tokenAddress: string
  ) => {
    const token: PriceToken = await PriceToken.createToken({
      blockchain: blockChainName,
      address: tokenAddress,
    });
    console.log("token?.price?.toFixed()", token?.price?.toFixed());

    setPerTokenDollarValue(
      Number(inputTokenAmount) * Number(token?.price?.toFixed())
    );
  };

  useEffect(() => {
    setOutputTokenAmount("");
    setShowPreview(false);
  }, [selectedToken1, selectedToken2, inputTokenAmount]);

  const FilterCategoryToken1 = (category) => {
    console.log("FilterCategoryToken1", category);
    if (category == "telos-evm") setToken1(getTokenList("telosevm"));
    else setToken1(getTokenList(category));
  };

  const FilterCategoryToken2 = (category) => {
    setToken2(getTokenList(category));
  };

  useAsyncEffect(async () => {
    setSdk(await SDK.createSDK(configuration));
  }, [SDK]);

  useAsyncEffect(async () => {
    try {
      const newConfig: any = {
        ...configuration,
        walletProvider: {
          [CHAIN_TYPE.EVM]: {
            core: window.ethereum,
            address,
          },
        },
      };
      if (sdk?.updateConfiguration) {
        await sdk?.updateConfiguration(newConfig);
      }
    } finally {
    }
  }, [address, sdk]);

  useEffect(() => {
    setToken1(getTokenList("ethereum"));

    setToken2(getTokenList("polygon"));

    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array to run this effect only once on component mount

  const CurrencyData = main_chain_list;

  const [isCalculating, setIsCalculating] = useState(false);

  const calculateExchange = async () => {
    setTradeIndex(0);
    setIsCalculating(true);
    setOpenProvider(false);
    console.log("ddd", selectedToken1, selectedToken2, inputTokenAmount);
    try {
      if (sdk) {
        let fromToken: any = {
          address: subToken1FullDetails.address,
          blockchain: token1FullDetails.blockchain,
        };

        let toToken: any = {
          address: subToken2FullDetails.address,
          blockchain: token2FullDetails.blockchain,
        };
        getTokenCurrentDollarPrice(fromToken?.blockchain, fromToken?.address);

        console.log("here the show", fromToken, toToken);

        if (fromToken?.blockchain == toToken?.blockchain) {
          console.log("same");
          const trades: any = await sdk.onChainManager.calculateTrade(
            fromToken,
            String(inputTokenAmount),
            toToken
          );
          setIsCalculating(false);

          const bestTradeResult = trades[0];
          setOutputTokenAmount(
            bestTradeResult?.trade?.toTokenAmountMin?.tokenAmount?.toFixed()
          );
          setOpenProvider(true);
          setBestTrade(bestTradeResult?.trade);
          console.log("bestTrade array", trades);
          setCalculateBestTrade(trades);
          console.log(
            "bestTrade 2",
            bestTradeResult?.trade?.toTokenAmountMin?.tokenAmount?.toFixed()
          );
        } else {
          console.log("different");
          const wrappedTrades = await sdk.crossChainManager.calculateTrade(
            fromToken,
            String(inputTokenAmount),
            toToken
          );
          console.log("bestTrade array", wrappedTrades);
          setIsCalculating(false);

          const bestTradeResult: any = wrappedTrades[0];
          setBestTrade(bestTradeResult?.trade);
          setOutputTokenAmount(
            bestTradeResult?.trade?.toTokenAmountMin.toFixed()
          );
          setOpenProvider(true);
          setCalculateBestTrade(wrappedTrades);
          console.log("bestTrade array", wrappedTrades);

          console.log(
            "bestTrade",
            bestTradeResult?.trade?.toTokenAmountMin.toFixed()
          );
        }
      }
    } catch (error) {
      console.log("Error while calculating amount", error);
    }
  };
  const setBestTradeFunction = (index: number) => {
    setTradeIndex(index);
    setOpenProvider(false);
    setShowPreview(true);
  };
  console.log("besttrade one", bestTrade?.gasFeeInfo?.gasFeeInUsd.toFixed());

  useEffect(() => {
    if (calculateBestTrade.length > 0) {
      setBestTrade(calculateBestTrade[tradeIndex]?.trade);
    }
  }, [calculateBestTrade, tradeIndex]);
  console.log("calculate", bestTrade);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const { open } = useWeb3Modal();
  const dexLogos = {
    QUICK_SWAP: "https://avatars.githubusercontent.com/u/77100292?s=280&v=4",
    SUSHI_SWAP: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png",
    UNI_SWAP_V3:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/uniswap-7519289-6239548.png",
    ONE_INCH:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKp1GtuAoK1WO3a4KgQ2sSvphmtSDN7SYqi53UTgObSg&s",
    ALGEBRA:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgIvl4UC1crsDdXWEkl9V5Q2WAaRNeJO5JveAANWabA&s",
    QUICK_SWAP_V3: "https://avatars.githubusercontent.com/u/77100292?s=280&v=4",
    XY_DEX:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVT4ZPd6h1VFsRehIJ4q2b2rz8KmLvTglSkBgd7BgSDg&s",
    LIFI: "https://pbs.twimg.com/profile_images/1658625205835636736/Uz-X3vdC_400x400.jpg",
    OPEN_OCEAN:
      "https://pbs.twimg.com/profile_images/1752727383621206018/MCqp6Pxs_400x400.jpg",
    RANGO:
      "https://miro.medium.com/v2/resize:fit:2400/1*J-B8RuVrdvDrAofBhzjeig.jpeg",
  };

  const formatAddress = (address: string): string => {
    if (!address || address.length < 6) {
      return address;
    }

    const firstTwo = address.slice(0, 4);
    const lastTwo = address.slice(-6);
    const middle = "...";

    return `${firstTwo}${middle}${lastTwo}`;
  };

  return (
    <section className="banner banner--style1">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <span className="bg-color d-lg-none"></span>
        </div>
      </div>
      <div className="container">
        <div className="banner__wrapper">
          <div
            className="row gy-2 gx-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-lg-6 col-md-7">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="banner__content-coin">
                  <img src="images/banner/home1/3.png" alt="coin icon" />
                </div>
                <h1 className="banner__content-heading">
                  <span>The Future Is WILD! </span>
                </h1>
                {/* <h1 className="banner__content-heading">
                  <span> Us The Best</span>
                </h1> */}
                <h2 className="banner__content-heading">Quality & Safety</h2>

                <p
                  style={{ color: "#cccccc" }}
                  className="banner__content-moto"
                >
                  Welcome to Crowboys Finance the frontier of decentralized
                  crypto exchange where innovation meets the Wild West of
                  digital assets. Saddle up for a seamless trading experience
                  with our NFT Staking, Token Swapping, and Cross-Chain
                  Technology that is as swift as a mustang, secure as a bank
                  vault, and innovative as the pioneers of the blockchain
                  prairie.
                </p>
                {/* <div className="banner__btn-group btn-group">
                  <Link
                    href="signin"
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    Start Now
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>{' '}
                  </Link>
                </div> */}
              </div>

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div
                className="trade-right-section"
                // data-aos="fade-right"
                // data-aos-duration="1000"
              >
                {toggle === 0 ? (
                  <div className="stacking-approve">
                    <div className="stacking-approve-heading">
                      <div>
                        <span
                          className="form-header__link-title"
                          style={{ color: "white", margin: "5px" }}
                        >
                          <b>Swap</b>
                        </span>
                      </div>
                      <div
                        style={{ position: "relative", top: "0", left: "0" }}
                      >
                        <button>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.94764 5.72727C3.18341 3.06894 5.87732 1.22727 9.00001 1.22727C12.638 1.22727 15.6937 3.7272 16.5399 7.10373C16.6223 7.43246 16.9556 7.63216 17.2843 7.54977C17.6131 7.46738 17.8128 7.1341 17.7304 6.80536C16.7505 2.89587 13.2142 0 9.00001 0C5.68437 0 2.78859 1.79278 1.22727 4.46039V3.06818C1.22727 2.72928 0.952538 2.45455 0.613636 2.45455C0.274734 2.45455 0 2.72928 0 3.06818V6.13636C0 6.58823 0.366313 6.95455 0.818182 6.95455H3.88636C4.22527 6.95455 4.5 6.67981 4.5 6.34091C4.5 6.00201 4.22527 5.72727 3.88636 5.72727H1.94764Z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M1.46009 10.8963C1.3777 10.5675 1.04442 10.3678 0.715684 10.4502C0.38695 10.5326 0.187251 10.8659 0.269644 11.1946C1.2495 15.1041 4.78581 18 9.00001 18C12.3156 18 15.2114 16.2072 16.7727 13.5397V14.9318C16.7727 15.2707 17.0475 15.5455 17.3864 15.5455C17.7253 15.5455 18 15.2707 18 14.9318V11.8636C18 11.4118 17.6337 11.0455 17.1818 11.0455H14.1136C13.7747 11.0455 13.5 11.3202 13.5 11.6591C13.5 11.998 13.7747 12.2727 14.1136 12.2727H16.0524C14.8166 14.9311 12.1227 16.7727 9.00001 16.7727C5.36202 16.7727 2.30638 14.2728 1.46009 10.8963Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setOpen(!Open);
                          }}
                        >
                          <svg
                            width="27"
                            height="23"
                            viewBox="0 0 27 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1626_154)">
                              <path
                                d="M13.5 4.2085H25.1667"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M1.83325 4.2085H7.66661"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M20.7917 18.7915H25.1667"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M1.83325 18.7915H13.4999"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10.5833 7.12483C12.1942 7.12483 13.5 5.81903 13.5 4.20813C13.5 2.59734 12.1942 1.2915 10.5833 1.2915C8.97255 1.2915 7.66675 2.59734 7.66675 4.20813C7.66675 5.81903 8.97255 7.12483 10.5833 7.12483Z"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M17.875 21.7083C19.4858 21.7083 20.7917 20.4025 20.7917 18.7917C20.7917 17.1808 19.4858 15.875 17.875 15.875C16.2642 15.875 14.9583 17.1808 14.9583 18.7917C14.9583 20.4025 16.2642 21.7083 17.875 21.7083Z"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1626_154">
                                <rect width="27" height="23" fill="#fff"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        {Open && (
                          <div ref={toggleRef} className="toggle-box">
                            <div>
                              <p style={{ padding: "10px", fontSize: "12px" }}>
                                <svg
                                  width="15"
                                  height="15"
                                  style={{ marginRight: "4px" }}
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                                    fill="#fff"
                                  ></path>
                                </svg>
                                Slippage tolerance
                              </p>
                            </div>

                            <div className="toggle-box-btn-box">
                              <button
                                className="toggle-box-btn-box-button"
                                style={{
                                  background: "#c3976a",
                                  padding: "6px",
                                  borderRadius: "5px",
                                  margin: "3px",
                                }}
                              >
                                Auto
                              </button>
                              <button
                                style={{
                                  background: "#c3976a",
                                  padding: "6px",
                                  borderRadius: "5px",
                                  margin: "3px",
                                }}
                              >
                                1.5%
                              </button>
                              <button
                                style={{
                                  background: "#c3976a",
                                  padding: "6px",
                                  borderRadius: "5px",
                                  margin: "3px",
                                }}
                              >
                                3%
                              </button>
                              <input type="text" value="3%" />
                            </div>
                            <div>
                              <p style={{ padding: "10px", fontSize: "12px" }}>
                                <svg
                                  width="15"
                                  height="15"
                                  style={{ marginRight: "4px" }}
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                                    fill="#fff"
                                  ></path>
                                </svg>
                                Slippage tolerance
                              </p>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={handleToggle}
                                />
                                <span className="toggle-slider"></span>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="stacking-approve-box">
                      <div className="stacking-approve-box-minibox ">
                        <button
                          className="stacking-approve-box-minibox-btn"
                          onClick={() => changeToggle(1)}
                          style={{ margin: "0px", padding: "10px 3px " }}
                        >
                          <div className="stacking-approve-box-minibox-btn-images">
                            <img
                              src={token1FullDetails?.image} // Accessing the img property from CurrencyData based on selectedcurrency1
                              alt={token1FullDetails?.chainName} // Accessing the name property from CurrencyData based on selectedcurrency1
                              style={{
                                border: "5px solid transparent ",
                                borderRadius: "50%",
                                padding: "0px",
                                margin: "0px",
                              }}
                            />
                            <img
                              src={subToken1FullDetails?.image} // Accessing the img property from TokenData based on the index
                              alt={subToken1FullDetails?.name} // Accessing the name property from TokenData based on the index
                              style={{
                                border: "5px solid #0b090b ",
                                borderRadius: "50%",
                                padding: "0px",
                                margin: "0px",
                              }}
                            />
                          </div>
                          <div className="stacking-approve-box-minibox-btn-content">
                            <p>{subToken1FullDetails?.blockchainNetwork}</p>
                            <h5>
                              {console.log(subToken1FullDetails)}
                              {subToken1FullDetails?.symbol}
                              <img
                                src="images/banner/home1/arrow-down-white.svg"
                                style={{ width: "12px", marginLeft: "4px" }}
                              />
                            </h5>
                          </div>
                        </button>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            disabled={!address}
                            type="number"
                            placeholder={"Enter Amount"}
                            className="stacking-approve-box-minibox-inputbox"
                            style={{
                              marginLeft: "auto",
                              padding: "6px",
                              textAlign: "right",
                            }}
                            onChange={(e) =>
                              setInputTokenAmount(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="hr">
                        <div className="exchange-icons">
                          <img
                            src="images/banner/home1/chevron.svg"
                            style={{
                              transform: "rotate(180deg)",
                              margin: "1px",
                              width: "14px",
                            }}
                          />

                          <img
                            src="images/banner/home1/chevron.svg"
                            style={{ margin: "1px", width: "14px" }}
                          />
                        </div>
                      </div>
                      <div className="stacking-approve-box-minibox ">
                        <button
                          className="stacking-approve-box-minibox-btn"
                          onClick={() => changeToggle(2)}
                          style={{ margin: "0px", padding: "3px" }}
                        >
                          <div className="stacking-approve-box-minibox-btn-images">
                            <img
                              src={token2FullDetails?.image} // Accessing the img property from CurrencyData based on selectedcurrency1
                              alt={token2FullDetails?.chainName} // Accessing the Accessing the name property from CurrencyData based on selectedcurrency1
                              style={{
                                border: "5px solid transparent ",
                                borderRadius: "50%",
                                padding: "0px",
                                margin: "0px",
                              }}
                            />
                            <img
                              src={subToken2FullDetails?.image} // Accessing the img property from TokenData based on the index
                              alt={subToken2FullDetails?.name} /// Accessing the name property from TokenData based on the index
                              style={{
                                border: "5px solid #0b090b ",
                                borderRadius: "50%",
                                padding: "0px",
                                margin: "0px",
                              }}
                            />
                          </div>
                          <div className="stacking-approve-box-minibox-btn-content">
                            <p>{subToken2FullDetails?.blockchainNetwork}</p>
                            <h5>
                              {subToken2FullDetails?.symbol}
                              <img
                                src="images/banner/home1/arrow-down-white.svg"
                                style={{ width: "12px", marginLeft: "4px" }}
                              />
                            </h5>
                          </div>
                        </button>

                        <input
                          type="number"
                          placeholder="0.00"
                          value={outputTokenAmount}
                          className="stacking-approve-box-minibox-inputbox"
                          style={{ margin: "0px", padding: "3px" }}
                          disabled={true}
                        />
                      </div>
                      {isChecked && (
                        <div>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            placeholder="Wallet address or ENS name in target network"
                          />
                        </div>
                      )}
                    </div>
                    <div className="btn-box">
                      {/* {
                        outputTokenAmount ?
                          <SwapBlock onLoadingChange={setLoading} trade={bestTrade} loading={true} address={address} />
                          : <></>
                      } */}
                      {address ? (
                        userBalance <= inputTokenAmount ? (
                          <button
                            className="default-btn"
                            style={{ margin: "20px 16px 20px 4px" }}
                          >
                            Insufficient Balance
                          </button>
                        ) : (
                          <button
                            className="default-btn"
                            onClick={() => {
                              calculateExchange();
                            }}
                          >
                            calculate
                          </button>
                        )
                      ) : (
                        <button
                          onClick={() => open()}
                          className="trk-btn trk-btn--outline22 text-white header-btn-btn w-100 justify-content-center"
                          style={{ margin: "20px 16px 20px 4px" }}
                        >
                          Connect wallet
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setIsChecked(!isChecked);
                        }}
                        style={{
                          background: "black",
                          borderRadius: "12px",
                          padding: "8px",
                          border: "none",
                          margin: "0px",
                        }}
                      >
                        <svg
                          width="31"
                          height="25"
                          viewBox="0 0 31 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.25 13.7517V3.86578L16.9855 0.931901C18.8789 0.458541 20.7131 1.91406 20.7131 3.86578H21.5789C23.2358 3.86578 24.5789 5.20892 24.5789 6.86578V13.7517C24.5789 15.4086 23.2357 16.7517 21.5789 16.7517H8.25C6.59314 16.7517 5.25 15.4086 5.25 13.7517Z"></path>
                          <path
                            d="M5.25 3.86578V13.7517C5.25 15.4086 6.59314 16.7517 8.25 16.7517H21.5789C23.2357 16.7517 24.5789 15.4086 24.5789 13.7517V6.86578C24.5789 5.20892 23.2358 3.86578 21.5789 3.86578H5.25ZM5.25 3.86578L16.9855 0.931901C18.8789 0.458541 20.7131 1.91406 20.7131 3.86578V3.86578"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <circle
                            cx="20.7124"
                            cy="10.3086"
                            r="1.28859"
                            fill="#69686e"
                          ></circle>
                          <path
                            d="M1 9V15C1 18.3137 3.68629 21 7 21H29.25"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M1 6.5L1 5"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M1 2.5L1 1"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M27.6529 18.6529L29.2929 20.2929C29.6834 20.6834 29.6834 21.3166 29.2929 21.7071L27.6529 23.3471"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {toggle === 1 ? (
                  <div className="TokenList">
                    <div className="TokenList-header">
                      <button
                        onClick={() => { changeToggle(0) 
                          setMore(false)}}
                        style={{ background: "transparent", border: "none " }}
                      >
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: "rotate(90deg)" }}
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.50001 6.49976C5.24401 6.49976 4.98801 6.40176 4.79301 6.20676L0.793006 2.20676C0.402006 1.81576 0.402006 1.18376 0.793006 0.792762C1.18401 0.401762 1.81601 0.401762 2.20701 0.792762L5.51201 4.09776L8.80501 0.917762C9.20401 0.534762 9.83501 0.545762 10.219 0.942762C10.603 1.33976 10.592 1.97376 10.195 2.35676L6.19501 6.21876C6.00001 6.40676 5.75001 6.49976 5.50001 6.49976Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </button>
                      <p style={{ color: "white", marginRight: "4px" }}>
                        Token List
                      </p>
                      <p style={{ color: "white", marginRight: "4px" }}></p>
                    </div>

                    <div className="TokenList-search">
                      <input
                        type="text"
                        style={{ zIndex: "0" }}
                        placeholder="search name or past address"
                        className="stacking-approve-ETH-header-input"
                      />
                      <img
                        src="images/banner/home1/Untitled.png"
                        alt="coin icon"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "22px",
                          right: "15px",
                          zIndex: "1",
                        }}
                      />
                    </div>
                    <div className="TokenList-Container">
                      {!more && (
                        <>
                          {/* <div className="TokenList-Container-1">
                        {CurrencyData.map((item, index) => (
                          <div
                            className={`TokenList-Container-1-items ${item?.chainName == token1FullDetails?.chainName ? 'activeItem' : ''}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken1(item.chainName);
                              setToken1FullDetails(item)
                              setSelectedcurrency1(index);
                            }}
                          >
                            
                            <img
                              src={item.image}
                              alt={item.chainName}
                              style={{
                                width: '30px',
                                height: '30px',
                              }}
                            />
                            {item.chainName}
                          </div>
                        ))}
                      </div> */}

                          <div className="TokenList-Container-1">
                            {CurrencyData.slice(0, 11).map((item, index) => (
                              <div
                                className={`TokenList-Container-1-items ${item.chainName == token1FullDetails?.chainName ? "activeItem" : ""}`}
                                key={index}
                                onClick={() => {
                                  FilterCategoryToken1(item.chainName);
                                  setToken1FullDetails(item);
                                  setSelectedcurrency1(index);
                                  setMore(false)
                                }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.chainName}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}
                                />
                                {item.chainName}
                              </div>
                            ))}
                            {CurrencyData.length > 11 && (
                              <div className="TokenList-Container-1-items " onClick={()=>{setMore(true)}}>
                              <img
                                  src="images/plus.png"
                                 
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}/>
                              
                                Load More
                              </div>
                            )}
                          </div>
                          <div className="TokenList-Container-2">
                            {Token1.map((item, index) => (
                              <div
                                className="TokenList-Container-2-items"
                                key={index}
                              >
                                <div
                                  className="TokenList-Container-2-items-div1  "
                                  onClick={() => {
                                    setSubToken1FullDetails(item);
                                    setSelectedToken1({
                                      blockchain: item.blockchain,
                                      address: item.address,
                                      index,
                                    });
                                    changeToggle(0);
                                  }}
                                >
                                  <img
                                    src={item?.image}
                                    alt="coin icon"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />
                                  <div className="TokenList-Container-2-items-div1-content">
                                    <p
                                      style={{
                                        color: "white",
                                        fontSize: " 10px",
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    >
                                      {item?.symbol}
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        style={{ marginLeft: "4px" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_21_17)">
                                          <path
                                            d="M12 23C12 23 21 18.6 21 12V4.3L12 1L3 4.3V12C3 18.6 12 23 12 23Z"
                                            fill="#00E28E"
                                            fill-opacity="0.3"
                                            stroke="#00E28E"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                          <path
                                            d="M11.5223 6.54585C11.6675 6.07601 12.3325 6.07601 12.4777 6.54585L13.3075 9.23116C13.3723 9.44066 13.5659 9.58354 13.7852 9.58354H16.5218C17.0001 9.58354 17.2054 10.1905 16.8254 10.4809L14.5689 12.2046C14.4024 12.3318 14.3329 12.5494 14.3948 12.7496L15.2463 15.5054C15.3901 15.9705 14.8519 16.3458 14.4651 16.0503L12.3035 14.399C12.1243 14.2621 11.8757 14.2621 11.6965 14.399L9.53489 16.0503C9.14804 16.3458 8.60992 15.9705 8.75365 15.5054L9.60523 12.7496C9.66709 12.5494 9.59756 12.3318 9.43105 12.2046L7.17461 10.4809C6.79456 10.1905 6.99988 9.58354 7.47814 9.58354H10.2148C10.434 9.58354 10.6277 9.44066 10.6925 9.23116L11.5223 6.54585Z"
                                            fill="#00E28E"
                                          ></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_21_17">
                                            <rect
                                              width="24"
                                              height="24"
                                              fill="white"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </p>
                                    <h5
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {item?.name}
                                    </h5>
                                  </div>
                                </div>
                                <div className="TokenList-Container-2-items-div2">
                                  :
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                        
                     
                    </div>
                    {more && <>
                        <div className="stacking-approve-box p-3 ">
                       <div className="list-chain">
                       {CurrencyData.map((item, index) => (
                          <ul style={{textAlign:'left'}}>
                            <li className="text-left" style={{margin:'10px'}}>
                            <div
                            className={`${item?.chainName == token1FullDetails?.chainName ? 'activeItem' : ''}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken1(item.chainName);
                              setToken1FullDetails(item)
                              setSelectedcurrency1(index);
                            }}
                          >
                            
                            <img
                              src={item.image}
                              alt={item.chainName}
                              style={{
                                width: '30px',
                                height: '30px',
                                marginRight:'10px'
                              }}
                            />
                            {item.chainName}
                          </div>
                            </li>
                          </ul>
                        ))}
                       </div>
                      </div>
                        </>}
                  </div>
                ) : (
                  ""
                )}
                {toggle === 2 ? (
                  <div className="TokenList">
                    <div className="TokenList-header">
                      <button
                        onClick={() =>{ changeToggle(0) 
                                       setMore(false)}}
                        style={{ background: "transparent", border: "none " }}
                      >
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: "rotate(90deg)" }}
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.50001 6.49976C5.24401 6.49976 4.98801 6.40176 4.79301 6.20676L0.793006 2.20676C0.402006 1.81576 0.402006 1.18376 0.793006 0.792762C1.18401 0.401762 1.81601 0.401762 2.20701 0.792762L5.51201 4.09776L8.80501 0.917762C9.20401 0.534762 9.83501 0.545762 10.219 0.942762C10.603 1.33976 10.592 1.97376 10.195 2.35676L6.19501 6.21876C6.00001 6.40676 5.75001 6.49976 5.50001 6.49976Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </button>
                      <p style={{ color: "white", marginRight: "4px" }}>
                        Token List
                      </p>
                      <p style={{ color: "white", marginRight: "4px" }}></p>
                    </div>

                    <div className="TokenList-search">
                      <input
                        type="text"
                        style={{ zIndex: "0" }}
                        placeholder="search name or past address"
                        className="stacking-approve-ETH-header-input"
                      />
                      <img
                        src="images/banner/home1/Untitled.png"
                        alt="coin icon"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "22px",
                          right: "15px",
                          zIndex: "1",
                        }}
                      />
                    </div>

                    {/* <div className="TokenList-Container">
                      <div className="TokenList-Container-1">
                        {CurrencyData.map((item, index) => (
                          <div
                            className={`TokenList-Container-1-items ${item?.chainName == token2FullDetails?.chainName ? "activeItem" : ""}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken2(item.chainName);
                              setSelectedcurrency2(index);
                              setToken2FullDetails(item);
                            }}
                          >
                            <img src={item.image} alt={item.chainName} />
                            {item.chainName}
                          </div>
                        ))}
                      </div>
                      <div className="TokenList-Container-2">
                        {Token2.map((item, index) => (
                          <div
                            className="TokenList-Container-2-items"
                            key={index}
                          >
                            <div
                              className="TokenList-Container-2-items-div1 "
                              onClick={() => {
                                setSubToken2FullDetails(item);
                                setSelectedToken2({
                                  blockchain: item.blockchain,
                                  address: item.address,
                                  index,
                                });
                                changeToggle(0);
                              }}
                            >
                              <img
                                src={item?.image}
                                alt="coin icon"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                }}
                              />
                              <div className="TokenList-Container-2-items-div1-content">
                                <p
                                  style={{
                                    color: "white",
                                    fontSize: " 10px",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {item?.symbol}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    style={{ marginLeft: "4px" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_21_17)">
                                      <path
                                        d="M12 23C12 23 21 18.6 21 12V4.3L12 1L3 4.3V12C3 18.6 12 23 12 23Z"
                                        fill="#00E28E"
                                        fill-opacity="0.3"
                                        stroke="#00E28E"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M11.5223 6.54585C11.6675 6.07601 12.3325 6.07601 12.4777 6.54585L13.3075 9.23116C13.3723 9.44066 13.5659 9.58354 13.7852 9.58354H16.5218C17.0001 9.58354 17.2054 10.1905 16.8254 10.4809L14.5689 12.2046C14.4024 12.3318 14.3329 12.5494 14.3948 12.7496L15.2463 15.5054C15.3901 15.9705 14.8519 16.3458 14.4651 16.0503L12.3035 14.399C12.1243 14.2621 11.8757 14.2621 11.6965 14.399L9.53489 16.0503C9.14804 16.3458 8.60992 15.9705 8.75365 15.5054L9.60523 12.7496C9.66709 12.5494 9.59756 12.3318 9.43105 12.2046L7.17461 10.4809C6.79456 10.1905 6.99988 9.58354 7.47814 9.58354H10.2148C10.434 9.58354 10.6277 9.44066 10.6925 9.23116L11.5223 6.54585Z"
                                        fill="#00E28E"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_21_17">
                                        <rect
                                          width="24"
                                          height="24"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </p>
                                <h5
                                  style={{ color: "white", fontSize: "12px" }}
                                >
                                  {item?.name}
                                </h5>
                              </div>
                            </div>
                            <div className="TokenList-Container-2-items-div2">
                              :
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> */}


<div className="TokenList-Container">
                      {!more && (
                        <>
                          {/* <div className="TokenList-Container-1">
                        {CurrencyData.map((item, index) => (
                          <div
                            className={`TokenList-Container-1-items ${item?.chainName == token1FullDetails?.chainName ? 'activeItem' : ''}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken1(item.chainName);
                              setToken1FullDetails(item)
                              setSelectedcurrency1(index);
                            }}
                          >
                            
                            <img
                              src={item.image}
                              alt={item.chainName}
                              style={{
                                width: '30px',
                                height: '30px',
                              }}
                            />
                            {item.chainName}
                          </div>
                        ))}
                      </div> */}

                          <div className="TokenList-Container-1">
                            {CurrencyData.slice(0, 11).map((item, index) => (
                              <div
                                className={`TokenList-Container-1-items ${item.chainName == token1FullDetails?.chainName ? "activeItem" : ""}`}
                                key={index}
                                onClick={() => {
                                  FilterCategoryToken2(item.chainName);
                                  setToken2FullDetails(item);
                                  setSelectedcurrency2(index);
                                  setMore(false)
                                }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.chainName}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}
                                />
                                {item.chainName}
                              </div>
                            ))}
                            {CurrencyData.length > 11 && (
                              <div className="TokenList-Container-1-items " onClick={()=>{setMore(true)}}>
                              <img
                                  src="images/plus.png"
                                 
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}/>
                              
                                Load More
                              </div>
                            )}
                          </div>
                          <div className="TokenList-Container-2">
                            {Token1.map((item, index) => (
                              <div
                                className="TokenList-Container-2-items"
                                key={index}
                              >
                                <div
                                  className="TokenList-Container-2-items-div1  "
                                  onClick={() => {
                                    setSubToken2FullDetails(item);
                                    setSelectedToken2({
                                      blockchain: item.blockchain,
                                      address: item.address,
                                      index,
                                    });
                                    changeToggle(0);
                                  }}
                                >
                                  <img
                                    src={item?.image}
                                    alt="coin icon"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />
                                  <div className="TokenList-Container-2-items-div1-content">
                                    <p
                                      style={{
                                        color: "white",
                                        fontSize: " 10px",
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    >
                                      {item?.symbol}
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        style={{ marginLeft: "4px" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_21_17)">
                                          <path
                                            d="M12 23C12 23 21 18.6 21 12V4.3L12 1L3 4.3V12C3 18.6 12 23 12 23Z"
                                            fill="#00E28E"
                                            fill-opacity="0.3"
                                            stroke="#00E28E"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                          <path
                                            d="M11.5223 6.54585C11.6675 6.07601 12.3325 6.07601 12.4777 6.54585L13.3075 9.23116C13.3723 9.44066 13.5659 9.58354 13.7852 9.58354H16.5218C17.0001 9.58354 17.2054 10.1905 16.8254 10.4809L14.5689 12.2046C14.4024 12.3318 14.3329 12.5494 14.3948 12.7496L15.2463 15.5054C15.3901 15.9705 14.8519 16.3458 14.4651 16.0503L12.3035 14.399C12.1243 14.2621 11.8757 14.2621 11.6965 14.399L9.53489 16.0503C9.14804 16.3458 8.60992 15.9705 8.75365 15.5054L9.60523 12.7496C9.66709 12.5494 9.59756 12.3318 9.43105 12.2046L7.17461 10.4809C6.79456 10.1905 6.99988 9.58354 7.47814 9.58354H10.2148C10.434 9.58354 10.6277 9.44066 10.6925 9.23116L11.5223 6.54585Z"
                                            fill="#00E28E"
                                          ></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_21_17">
                                            <rect
                                              width="24"
                                              height="24"
                                              fill="white"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </p>
                                    <h5
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {item?.name}
                                    </h5>
                                  </div>
                                </div>
                                <div className="TokenList-Container-2-items-div2">
                                  :
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                        
                     
                    </div>
                    {more && <>
                        <div className="stacking-approve-box p-3 ">
                       <div className="list-chain">
                       {CurrencyData.map((item, index) => (
                          <ul style={{textAlign:'left'}}>
                            <li className="text-left" style={{margin:'10px'}}>
                            <div
                            className={`${item?.chainName == token1FullDetails?.chainName ? 'activeItem' : ''}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken2(item.chainName);
                              setToken2FullDetails(item)
                              setSelectedcurrency2(index);
                            }}
                          >
                            
                            <img
                              src={item.image}
                              alt={item.chainName}
                              style={{
                                width: '30px',
                                height: '30px',
                                marginRight:'10px'
                              }}
                            />
                            {item.chainName}
                          </div>
                            </li>
                          </ul>
                        ))}
                       </div>
                      </div>
                        </>}
                  </div>
                ) : (
                  ""
                )}
              </div>

              {openProvider ? (
                <div
                  className="trade-right-section"
                  style={
                    1 > 0 && toggle === 0
                      ? { display: "flex", marginTop: "20px" }
                      : { display: "none", marginTop: "20px" }
                  }
                >
                  <div className="Providers-list">
                    <div className="Providers-list-heading">
                      <p>Providers List</p>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpenProvider(false)}
                      >
                        Close
                      </p>
                    </div>
                    <div className="Providers-list-box">
                      <div className="Providers-list-box-minibox ">
                        <div className="Providers-list-box-minibox-div1 "></div>
                        <div style={{ width: "100%" }}>
                          {calculateBestTrade.map((el, i) => {
                            return !el?.error ? (
                              <div
                                onClick={() => setBestTradeFunction(i)}
                                className="Providers-list-box-minibox-div2 "
                              >
                                <div className="Providers-list-box-minibox-div2-item ">
                                  <img
                                    src={
                                      dexLogos[el?.tradeType]
                                        ? dexLogos[el?.tradeType]
                                        : "https://mms.businesswire.com/media/20220422005534/en/1429925/5/Trustswap-Logo-Primary-1080x1080.jpg"
                                    }
                                    alt="https://mms.businesswire.com/media/20220422005534/en/1429925/5/Trustswap-Logo-Primary-1080x1080.jpg"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />
                                  <div className="Providers-list-box-minibox-div2-item-box">
                                    <h5
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Trade Name :
                                      {String(el?.tradeType).replace(/_/g, " ")}{" "}
                                    </h5>

                                    <p
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {el?.trade?.toTokenAmountMin?.tokenAmount?.toFixed()}{" "}
                                      {subToken2FullDetails?.symbol}
                                    </p>
                                    <p
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Slippage tolerance :{" "}
                                      {el?.trade?.slippage ||
                                        el?.trade?.slippageTolerance ||
                                        "Calculating..."}
                                    </p>
                                    <p
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Token price (1{" "}
                                      {subToken1FullDetails?.symbol}) = ${" "}
                                      {perTokenDollarValue}{" "}
                                    </p>
                                    <p
                                      style={{
                                        color: "white",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Deadline:{" "}
                                      {el?.trade?.deadlineMinutes ||
                                        "Calculating..."}{" "}
                                      Minutes
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {isCalculating ? (
                <div
                  className="stacking-approve"
                  style={{ marginTop: 10, height: 100 }}
                >
                  <div className="stacking-approve-heading">
                    <div>
                      <p style={{ color: "white", marginRight: "4px" }}>
                        Looking for Best Providers
                      </p>
                    </div>
                  </div>

                  <LinearProgress variant="buffer" value={progress} />
                </div>
              ) : (
                <></>
              )}

              {showPreviewSwap ? (
                <div className="TokenList">
                  <div className="TokenList-header">
                    <button
                      onClick={() => {
                        setShowPreview(false);
                        // setInputValue(0);
                      }}
                      style={{ background: "transparent", border: "none " }}
                    >
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "rotate(90deg)" }}
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.50001 6.49976C5.24401 6.49976 4.98801 6.40176 4.79301 6.20676L0.793006 2.20676C0.402006 1.81576 0.402006 1.18376 0.793006 0.792762C1.18401 0.401762 1.81601 0.401762 2.20701 0.792762L5.51201 4.09776L8.80501 0.917762C9.20401 0.534762 9.83501 0.545762 10.219 0.942762C10.603 1.33976 10.592 1.97376 10.195 2.35676L6.19501 6.21876C6.00001 6.40676 5.75001 6.49976 5.50001 6.49976Z"
                          fill="#ffffff"
                        ></path>
                      </svg>
                    </button>
                    <p style={{ color: "white", marginRight: "4px" }}>
                      Preview Setup
                    </p>
                    <p style={{ color: "white", marginRight: "4px" }}></p>
                  </div>
                  <div className="Preview-swap-box ">
                    <div className="Preview-swap-box-minibox ">
                      <button
                        className="Preview-swap-box-minibox-btn "
                        style={{ margin: "0px", padding: "10px 3px " }}
                      >
                        <div className="Preview-swap-box-minibox-btn-images">
                          <img
                            src={token1FullDetails?.image} // Accessing the img property from CurrencyData based on selectedcurrency1
                            alt={token1FullDetails?.image} // Accessing the name property from CurrencyData based on selectedcurrency1
                            style={{
                              border: "5px solid transparent ",
                              borderRadius: "50%",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                          <img
                            src={subToken1FullDetails?.image} // Accessing the img property from TokenData based on the index
                            alt={subToken1FullDetails?.image} // Accessing the name property from TokenData based on the index
                            style={{
                              border: "5px solid #0b090b ",
                              borderRadius: "50%",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                          <div className="Preview-swap-box-minibox-btn-content">
                            <h5>
                              {inputTokenAmount} {subToken1FullDetails?.symbol}
                            </h5>
                            <p>
                              ~$ {perTokenDollarValue} - on{" "}
                              {subToken1FullDetails?.symbol}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="Preview-swap-box-minibox ">
                      <button
                        className="Preview-swap-box-minibox-btn "
                        style={{ margin: "0px", padding: "10px 3px " }}
                      >
                        <div className="Preview-swap-box-minibox-btn-images">
                          <img
                            src={
                              dexLogos[bestTrade?.type]
                                ? dexLogos[bestTrade?.type]
                                : "https://mms.businesswire.com/media/20220422005534/en/1429925/5/Trustswap-Logo-Primary-1080x1080.jpg"
                            }
                            style={{
                              border: "5px solid #0b090b ",
                              borderRadius: "50%",
                              padding: "0px",
                              margin: "0px",
                              marginLeft: "40px",
                            }}
                          />
                          <div className="Preview-swap-box-minibox-btn-content">
                            <h5>
                              {" "}
                              {String(bestTrade?.type).replace(/_/g, " ")}{" "}
                            </h5>
                            <p>
                              {subToken1FullDetails?.symbol} &gt;{" "}
                              {subToken2FullDetails?.symbol}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="Preview-swap-box-minibox ">
                      <button
                        className="Preview-swap-box-minibox-btn"
                        style={{ margin: "0px", padding: "3px" }}
                      >
                        <div className="Preview-swap-box-minibox-btn-images">
                          <img
                            src={token2FullDetails?.image} // Accessing the img property from CurrencyData based on selectedcurrency1
                            alt={token2FullDetails?.image} // Accessing the name property from CurrencyData based on selectedcurrency1
                            style={{
                              border: "5px solid transparent ",
                              borderRadius: "50%",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                          <img
                            src={subToken2FullDetails?.image} // Accessing the img property from TokenData based on the index
                            alt={subToken2FullDetails?.image} // Accessing the name property from TokenData based on the index
                            style={{
                              border: "5px solid #0b090b ",
                              borderRadius: "50%",
                              padding: "0px",
                              margin: "0px",
                            }}
                          />
                          <div className="Preview-swap-box-minibox-btn-content">
                            <h5>
                              {Number(outputTokenAmount).toFixed(2)}{" "}
                              {subToken2FullDetails?.symbol}
                            </h5>
                            <p>
                              ~$ {perTokenDollarValue} - on{" "}
                              {subToken2FullDetails?.symbol}{" "}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="Preview-swap-box ">
                    <div
                      className="Preview-swap-box-div2 "
                      style={{ padding: "16px" }}
                    >
                      <div className="content-1-div">
                        <div className="content-1-div">
                          <img src="images/banner/home1/gas.svg" />
                          <p style={{ color: "white" }}>
                            ~${bestTrade?.gasFeeInfo?.gasFeeInUsd.toFixed(5)}
                          </p>
                        </div>
                        <div
                          className="content-1-div"
                          style={{ marginLeft: "10px" }}
                        >
                          <img src="images/banner/home1/money.svg" />
                          <p style={{ color: "white" }}>
                            ~${bestTrade?.gasFeeInfo?.maxFeePerGas.toFixed(5)}
                          </p>
                        </div>
                      </div>
                      <div className="content-2">
                        <div className="content-1-div">
                          <img src="images/banner/home1/time.svg" />
                          <p style={{ color: "white" }}>3 M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="Preview-swap-box "
                    style={{ padding: "16px" }}
                  >
                    <h5 style={{ marginTop: "5px", padding: 0, margin: 0 }}>
                      Transaction details
                    </h5>
                    <div className="Preview-swap-box-div2 ">
                      <div className="content-1">
                        <div className="content-1-div">
                          <svg
                            width="15"
                            height="15"
                            style={{ marginRight: "4px" }}
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                              fill="#c3976a"
                            ></path>
                          </svg>
                          <p style={{ color: "white" }}>Price impact </p>
                        </div>
                      </div>
                      <div className="content-2">
                        <div className="content-1-div">
                          <p style={{ color: "#c3976a" }}>&lt;{""} 0.01%</p>
                        </div>
                      </div>
                    </div>
                    <div className="Preview-swap-box-div2 ">
                      <div className="content-1">
                        <div className="content-1-div">
                          <svg
                            width="15"
                            height="15"
                            style={{ marginRight: "4px" }}
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                              fill="#c3976a"
                            ></path>
                          </svg>
                          <p style={{ color: "white" }}>Slippage</p>
                        </div>
                      </div>
                      <div className="content-2">
                        <div className="content-1-div">
                          <p style={{ color: "white" }}>
                            {bestTrade?.slippage ||
                              bestTrade?.slippageTolerance ||
                              "Calculating..."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="Preview-swap-box-div2 ">
                      <div className="content-1">
                        <div className="content-1-div">
                          <svg
                            width="15"
                            height="15"
                            style={{ marginRight: "4px" }}
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                              fill="#c3976a"
                            ></path>
                          </svg>
                          <p style={{ color: "white" }}>Minimum Received </p>
                        </div>
                      </div>
                      <div className="content-2">
                        <div className="content-1-div">
                          <p style={{ color: "white" }}>
                            {Number(outputTokenAmount)
                              ? Number(outputTokenAmount).toFixed(2)
                              : 0}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="Preview-swap-box-div2 ">
                      <div className="content-1">
                        <div className="content-1-div">
                          <svg
                            width="15"
                            height="15"
                            style={{ marginRight: "4px" }}
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                              fill="#c3976a"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                              fill="#c3976a"
                            ></path>
                          </svg>
                          <p style={{ color: "white" }}>Receiver Address </p>
                        </div>
                      </div>
                      <div className="content-2">
                        <div className="content-1-div">
                          <p style={{ color: "white" }}>
                            {formatAddress(address)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box">
                    <SwapBlock
                      onLoadingChange={setLoading}
                      trade={bestTrade}
                      loading={true}
                      address={address}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
