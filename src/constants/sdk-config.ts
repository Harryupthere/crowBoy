import { BLOCKCHAIN_NAME, CHAIN_TYPE, Configuration } from 'rubic-sdk';

export const configuration: Configuration = {
    rpcProviders: {
        [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
            rpcList: [
                "https://bsc-dataseed.bnbchain.org/",
                "https://bsc-dataseed1.defibit.io/",
                "https://bsc-dataseed1.ninicoin.io/",
                "https://bsc-dataseed2.defibit.io/",
                "https://bsc-dataseed3.defibit.io/",
                "https://bsc-dataseed4.defibit.io/",
                "https://bsc-dataseed2.ninicoin.io/",
                "https://bsc-dataseed3.ninicoin.io/",
                "https://bsc-dataseed4.ninicoin.io/",
                "https://bsc-dataseed1.bnbchain.org/",
                "https://bsc-dataseed2.bnbchain.org/",
                "https://bsc-dataseed3.bnbchain.org/",
                "https://bsc-dataseed4.bnbchain.org/",
                "https://bsc-dataseed6.dict.life/",
                "https://rpc-bsc.48.club",
                "https://koge-rpc-bsc.48.club",
                "https://endpoints.omniatech.io/v1/bsc/mainnet/public",
                "https://bsc-pokt.nodies.app",
                "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",
                "https://rpc.ankr.com/bsc",
                "https://go.getblock.io/cc778cdbdf5c4b028ec9456e0e6c0cf3",
                "https://bscrpc.com",
                "https://bsc.rpcgator.com/",
                "https://binance.nodereal.io",
                "https://bsc-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
                "https://nodes.vefinetwork.org/smartchain",
                "https://1rpc.io/bnb",
                "https://bsc.rpc.blxrbdn.com/",
                "https://bsc.blockpi.network/v1/rpc/public",
                "https://bnb.api.onfinality.io/public",
                "https://bsc-rpc.publicnode.com",
                "wss://bsc-rpc.publicnode.com",
                "https://bsc-mainnet.public.blastapi.io",
                "https://bsc.meowrpc.com",
                "https://api.zan.top/node/v1/bsc/mainnet/public",
                "https://bsc.drpc.org",
                "https://services.tokenview.io/vipapi/nodeservice/bsc?apikey=qVHq2o6jpaakcw3lRstl",
                "https://rpc.polysplit.cloud/v1/chain/56",
                "https://public.stackup.sh/api/v1/node/bsc-mainnet",
                "https://api.tatum.io/v3/blockchain/node/bsc-mainnet"
            ],
        },
        [BLOCKCHAIN_NAME.POLYGON]: {
            rpcList: [
                "https://rpc-mainnet.maticvigil.com",
                "https://endpoints.omniatech.io/v1/matic/mainnet/public",
                "https://polygon-rpc.com",
                "https://rpc-mainnet.matic.network",
                "https://rpc-mainnet.matic.quiknode.pro",
                "https://matic-mainnet-full-rpc.bwarelabs.com",
                "https://matic-mainnet-archive-rpc.bwarelabs.com",
                "https://polygon-pokt.nodies.app",
                "https://rpc.ankr.com/polygon",
                "https://polygon-mainnet.public.blastapi.io",
                "https://polygonapi.terminet.io/rpc",
                "https://1rpc.io/matic",
                "https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
                "https://polygon-bor-rpc.publicnode.com",
                "wss://polygon-bor-rpc.publicnode.com",
                "https://polygon-mainnet-public.unifra.io",
                "https://polygon-mainnet.g.alchemy.com/v2/demo",
                "https://polygon.blockpi.network/v1/rpc/public",
                "https://polygon.api.onfinality.io/public",
                "https://polygon.rpc.blxrbdn.com/",
                "https://polygon.drpc.org",
                "https://polygon.gateway.tenderly.co",
                "https://gateway.tenderly.co/public/polygon",
                "https://api.zan.top/node/v1/polygon/mainnet/public",
                "https://polygon.meowrpc.com",
                "https://getblock.io/nodes/matic/",
                "https://api.stateless.solutions/polygon/v1/demo",
                "https://public.stackup.sh/api/v1/node/polygon-mainnet",
                "https://api.tatum.io/v3/blockchain/node/polygon-mainnet",
                "https://polygon.rpc.subquery.network/public"
            ],
        },
        [BLOCKCHAIN_NAME.ETHEREUM]: {
            rpcList: [
                "https://endpoints.omniatech.io/v1/eth/mainnet/public",
                "https://rpc.ankr.com/eth",
                "https://go.getblock.io/d9fde9abc97545f4887f56ae54f3c2c0",
                "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
                "https://ethereum-rpc.publicnode.com",
                "wss://ethereum-rpc.publicnode.com",
                "https://1rpc.io/eth",
                "https://rpc.builder0x69.io/",
                "https://rpc.mevblocker.io",
                "https://rpc.flashbots.net/",
                "https://virginia.rpc.blxrbdn.com/",
                "https://uk.rpc.blxrbdn.com/",
                "https://singapore.rpc.blxrbdn.com/",
                "https://eth.rpc.blxrbdn.com/",
                "https://cloudflare-eth.com/",
                "https://eth-mainnet.public.blastapi.io",
                "https://api.securerpc.com/v1",
                "https://openapi.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet",
                "https://eth-pokt.nodies.app",
                "https://eth-mainnet-public.unifra.io",
                "https://ethereum.blockpi.network/v1/rpc/public",
                "https://rpc.payload.de",
                "https://api.zmok.io/mainnet/oaen6dy8ff6hju9k",
                "https://eth-mainnet.g.alchemy.com/v2/demo",
                "https://eth.api.onfinality.io/public",
                "https://core.gashawk.io/rpc",
                "https://mainnet.eth.cloud.ava.do/",
                "https://ethereumnodelight.app.runonflux.io",
                "https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
                "https://main-light.eth.linkpool.io",
                "https://rpc.eth.gateway.fm",
                "https://rpc.chain49.com/ethereum?api_key=14d1a8b86d8a4b4797938332394203dc",
                "https://eth.meowrpc.com",
                "https://eth.drpc.org",
                "https://mainnet.gateway.tenderly.co",
                "https://rpc.tenderly.co/fork/c63af728-a183-4cfb-b24e-a92801463484",
                "https://gateway.tenderly.co/public/mainnet",
                "https://api.zan.top/node/v1/eth/mainnet/public",
                "https://eth-mainnet.diamondswap.org/rpc",
                "https://rpc.notadegen.com/eth",
                "https://eth.merkle.io",
                "https://rpc.lokibuilder.xyz/wallet",
                "https://services.tokenview.io/vipapi/nodeservice/eth?apikey=qVHq2o6jpaakcw3lRstl",
                "https://eth.nodeconnect.org/",
                "https://api.stateless.solutions/ethereum/v1/demo",
                "https://rpc.polysplit.cloud/v1/chain/1",
                "https://public.stackup.sh/api/v1/node/ethereum-mainnet",
                "https://eth1.lava.build/lava-referer-ed07f753-8c19-4309-b632-5a4a421aa589/",
                "https://eth1.lava.build/lava-referer-16223de7-12c0-49f3-8d87-e5f1e6a0eb3b/",
                "https://api.tatum.io/v3/blockchain/node/ethereum-mainnet",
                "rpc.nodifi.ai/api/rpc/free",
                "https://gateway.subquery.network/rpc/eth",
                "https://ethereum.rpc.subquery.network/public"
            ],
        },
        [BLOCKCHAIN_NAME.ARBITRUM]: {
            rpcList: [
                "https://arb1.arbitrum.io/rpc",
                "https://rpc.ankr.com/arbitrum",
                "https://1rpc.io/arb",
                "https://arb-pokt.nodies.app",
                "https://arb-mainnet.g.alchemy.com/v2/demo",
                "https://arbitrum.blockpi.network/v1/rpc/public",
                "https://arbitrum-one.public.blastapi.io",
                "https://endpoints.omniatech.io/v1/arbitrum/one/public",
                "https://arb-mainnet-public.unifra.io",
                "https://rpc.arb1.arbitrum.gateway.fm",
                "https://arbitrum-one-rpc.publicnode.com",
                "wss://arbitrum-one-rpc.publicnode.com",
                "https://arbitrum.meowrpc.com",
                "https://api.zan.top/node/v1/arb/one/public",
                "https://arbitrum.drpc.org",
                "https://public.stackup.sh/api/v1/node/arbitrum-one",
                "https://api.stateless.solutions/arbitrum-one/v1/demo",
                "https://arbitrum.rpc.subquery.network/public"
            ],
        },
        [BLOCKCHAIN_NAME.SOLANA]: {
            rpcList: ["https://go.getblock.io/749fcd57cc524ed9b4103f415b0b2d02"]
        },
        [BLOCKCHAIN_NAME.POLYGON_ZKEVM]: {
            rpcList: [
                "https://rpc.ankr.com/polygon_zkevm",
                "https://rpc.polygon-zkevm.gateway.fm",
                "https://1rpc.io/polygon/zkevm",
                "https://polygon-zkevm.blockpi.network/v1/rpc/public",
                "https://polygon-zkevm-mainnet.public.blastapi.io",
                "https://api.zan.top/node/v1/polygonzkevm/mainnet/public",
                "https://polygon-zkevm.drpc.org",
                "https://endpoints.omniatech.io/v1/polygon-zkevm/mainnet/public"
            ]
        },
        [BLOCKCHAIN_NAME.HARMONY]: {
            rpcList:  [
                "https://api.harmony.one",
                "https://a.api.s0.t.hmny.io",
                "https://api.s0.t.hmny.io",
                "https://rpc.ankr.com/harmony",
                "https://harmony.api.onfinality.io/public",
                "https://1rpc.io/one",
                "https://hmyone-pokt.nodies.app",
                "https://endpoints.omniatech.io/v1/harmony/mainnet-0/public"
            ]
        },
        [BLOCKCHAIN_NAME.AVALANCHE]: {
            rpcList: [
                "https://api.avax.network/ext/bc/C/rpc",
                "https://avalanche.public-rpc.com",
                "https://rpc.ankr.com/avalanche",
                "https://blastapi.io/public-api/avalanche",
                "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
                "https://avalancheapi.terminet.io/ext/bc/C/rpc",
                "https://avalanche-c-chain-rpc.publicnode.com",
                "wss://avalanche-c-chain-rpc.publicnode.com",
                "https://1rpc.io/avax/c",
                "https://avalanche.blockpi.network/v1/rpc/public",
                "https://avax-pokt.nodies.app/ext/bc/C/rpc",
                "https://avalanche.api.onfinality.io/public/ext/bc/C/rpc",
                "https://endpoints.omniatech.io/v1/avax/mainnet/public",
                "https://avax.meowrpc.com",
                "https://api.zan.top/node/v1/avax/mainnet/public/ext/bc/C/rpc",
                "https://avalanche.drpc.org",
                "https://public.stackup.sh/api/v1/node/avalanche-mainnet",
                "https://api.tatum.io/v3/blockchain/node/avax-mainnet"
            ]
        },
        [BLOCKCHAIN_NAME.MOONRIVER]: {
            rpcList: [
                "wss://moonriver.api.onfinality.io/public-ws",
                "https://moonriver.api.onfinality.io/public",
                "https://moonriver.unitedbloc.com:2000",
                "wss://moonriver.unitedbloc.com:2001",
                "https://moonriver.public.blastapi.io",
                "https://moonriver-rpc.dwellir.com",
                "wss://moonriver-rpc.dwellir.com",
                "https://moonriver-rpc.publicnode.com",
                "wss://moonriver-rpc.publicnode.com"
            ]
        },
        [BLOCKCHAIN_NAME.FANTOM]: {
            rpcList: [
                "https://rpcapi.fantom.network",
                "https://endpoints.omniatech.io/v1/fantom/mainnet/public",
                "https://fantom-pokt.nodies.app",
                "https://rpc.ftm.tools/",
                "https://rpc.ankr.com/fantom",
                "https://rpc.fantom.network",
                "https://rpc2.fantom.network",
                "https://rpc3.fantom.network",
                "https://fantom-mainnet.public.blastapi.io",
                "https://1rpc.io/ftm",
                "https://fantom.blockpi.network/v1/rpc/public",
                "https://fantom-rpc.publicnode.com",
                "wss://fantom-rpc.publicnode.com",
                "https://fantom.api.onfinality.io/public",
                "https://rpc.fantom.gateway.fm",
                "https://fantom.drpc.org",
                "https://api.tatum.io/v3/blockchain/node/fantom-mainnet"
            ]
        },
        [BLOCKCHAIN_NAME.AURORA]: {
            rpcList:  [
                "https://mainnet.aurora.dev",
                "https://endpoints.omniatech.io/v1/aurora/mainnet/public",
                "https://1rpc.io/aurora",
                "https://aurora.drpc.org",
                "https://api.tatum.io/v3/blockchain/node/aurora-mainnet "
            ]
        },
        [BLOCKCHAIN_NAME.TELOS]: {
            rpcList: [
                "https://mainnet.telos.net/evm",
                "https://mainnet15.telos.net/evm",
                "https://rpc3.us.telos.net/evm",
                "https://evm.telos.detroitledger.tech/evm",
                "https://mainnet-us.telos.net/evm",
                "https://mainnet-eu.telos.net/evm",
                "https://mainnet-asia.telos.net/evm",
                "https://1rpc.io/telos/evm"
            ]
        },
        [BLOCKCHAIN_NAME.OPTIMISM]: {
            rpcList: [
                "https://mainnet.optimism.io/",
                "https://optimism-mainnet.public.blastapi.io",
                "https://rpc.ankr.com/optimism",
                "https://1rpc.io/op",
                "https://op-pokt.nodies.app",
                "https://opt-mainnet.g.alchemy.com/v2/demo",
                "https://optimism.blockpi.network/v1/rpc/public",
                "https://endpoints.omniatech.io/v1/op/mainnet/public",
                "https://optimism.api.onfinality.io/public",
                "https://rpc.optimism.gateway.fm",
                "https://optimism-rpc.publicnode.com",
                "wss://optimism-rpc.publicnode.com",
                "https://optimism.meowrpc.com",
                "https://api.zan.top/node/v1/opt/mainnet/public",
                "https://optimism.drpc.org",
                "https://optimism.gateway.tenderly.co",
                "https://gateway.tenderly.co/public/optimism",
                "https://api.stateless.solutions/optimism/v1/demo",
                "https://public.stackup.sh/api/v1/node/optimism-mainnet",
                "https://api.tatum.io/v3/blockchain/node/optimism-mainnet"
            ]
        },
        [BLOCKCHAIN_NAME.CRONOS]: {
            rpcList: [
                "https://evm.cronos.org",
                "https://cronos-rpc.elk.finance/",
                "https://cronos.blockpi.network/v1/rpc/public",
                "https://cronos-evm-rpc.publicnode.com",
                "wss://cronos-evm-rpc.publicnode.com",
                "https://1rpc.io/cro",
                "https://rpc.vvs.finance",
                "https://mmf-rpc.xstaking.sg"
            ]
        },
        [BLOCKCHAIN_NAME.OKE_X_CHAIN]: {
            rpcList: [
                "https://exchainrpc.okex.org",
                "https://oktc-mainnet.public.blastapi.io",
                "https://okt-chain.api.onfinality.io/public",
                "https://1rpc.io/oktc"
            ]
        },
        // [BLOCKCHAIN_NAME.XDC]: {
        //     rpcList: [
        //         "https://rpc.xdcrpc.com",
        //         "wss://rpc.xdcrpc.com/ws",
        //         "https://rpc1.xinfin.network",
        //         "https://erpc.xinfin.network",
        //         "https://erpc.xdcrpc.com",
        //         "wss://erpc.xdcrpc.com/ws",
        //         "https://rpc.xdc.org",
        //         "https://earpc.xinfin.network/",
        //         "https://erpc.xinfin.network/",
        //         "wss://ews.xinfin.network/ws",
        //         "https://rpc.ankr.com/xdc",
        //         "https://api.tatum.io/v3/blockchain/node/xdc-mainnet"
        //     ]
        // },
        [BLOCKCHAIN_NAME.FUSE]: {
            rpcList:  [
                "https://rpc.fuse.io",
                "https://fuse-pokt.nodies.app",
                "https://fuse-mainnet.chainstacklabs.com",
                "https://fuse.api.onfinality.io/public",
                "https://fuse.liquify.com"
            ]
        },
        [BLOCKCHAIN_NAME.MOONBEAM]: {
            rpcList:  [
                "https://rpc.api.moonbeam.network",
                "https://moonbeam.api.onfinality.io/public",
                "wss://moonbeam.api.onfinality.io/public-ws",
                "https://moonbeam.unitedbloc.com:3000",
                "wss://moonbeam.unitedbloc.com:3001",
                "https://moonbeam.public.blastapi.io",
                "https://rpc.ankr.com/moonbeam",
                "https://1rpc.io/glmr",
                "https://moonbeam-rpc.dwellir.com",
                "wss://moonbeam-rpc.dwellir.com",
                "https://endpoints.omniatech.io/v1/moonbeam/mainnet/public",
                "https://moonbeam-rpc.publicnode.com",
                "wss://moonbeam-rpc.publicnode.com"
            ]
        },
        [BLOCKCHAIN_NAME.CELO]: {
            rpcList: [
                "https://forno.celo.org",
                "https://rpc.ankr.com/celo",
                "https://1rpc.io/celo",
                "https://celo.api.onfinality.io/public",
                "https://api.tatum.io/v3/blockchain/node/celo-mainnet"
            ]
        },
        [BLOCKCHAIN_NAME.BOBA]: {
            rpcList: [
                "https://mainnet.boba.network/",
                "https://boba-ethereum.gateway.tenderly.co",
                "https://gateway.tenderly.co/public/boba-ethereum",
                "https://1rpc.io/boba/eth"
            ]
        },
        // [BLOCKCHAIN_NAME.BOBA_BSC]: {
        //     rpcList: []
        // },
        [BLOCKCHAIN_NAME.KAVA]: {
            rpcList:  [
                "https://evm.kava.io",
                "https://kava.api.onfinality.io/public",
                "https://kava-evm-rpc.publicnode.com",
                "https://kava-pokt.nodies.app",
                "wss://kava-evm-rpc.publicnode.com",
                "https://evm.kava.chainstacklabs.com",
                "wss://wevm.kava.chainstacklabs.com",
                "https://rpc.ankr.com/kava_evm",
                "https://evm.kava-rpc.com"
            ]
        },
        [BLOCKCHAIN_NAME.BITGERT]: {
            rpcList: [
                "https://rpc.icecreamswap.com",
                "https://nodes.vefinetwork.org/bitgert",
                "https://flux-rpc.brisescan.com",
                "https://flux-rpc1.brisescan.com",
                "https://flux-rpc2.brisescan.com",
                "https://rpc-1.chainrpc.com",
                "https://rpc-2.chainrpc.com",
                "https://node1.serverrpc.com",
                "https://node2.serverrpc.com"
            ]
        },
        [BLOCKCHAIN_NAME.OASIS]: {
            rpcList: [
                "https://emerald.oasis.dev/",
                "https://1rpc.io/oasis/emerald"
            ]
        },
        [BLOCKCHAIN_NAME.METIS]: {
            rpcList: [
                "https://andromeda.metis.io/?owner=1088",
                "https://metis-mainnet.public.blastapi.io",
                "https://metis.api.onfinality.io/public",
                "https://metis-pokt.nodies.app"
            ]
        },
        [BLOCKCHAIN_NAME.KLAYTN]: {
            rpcList: [
                "https://public-en-cypress.klaytn.net",
                "https://klaytn-mainnet-rpc.allthatnode.com:8551",
                "https://rpc.ankr.com/klaytn ",
                "https://klaytn.blockpi.network/v1/rpc/public",
                "https://klaytn.api.onfinality.io/public",
                "https://1rpc.io/klay",
                "https://klaytn-pokt.nodies.app",
                "https://klaytn.drpc.org",
                "https://api.tatum.io/v3/blockchain/node/klaytn-cypress"
            ]
        },
        [BLOCKCHAIN_NAME.VELAS]: {
            rpcList: [
                "https://evmexplorer.velas.com/rpc",
                "https://velas-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf"
            ]
        },
        [BLOCKCHAIN_NAME.SYSCOIN]: {
            rpcList: [
                "https://rpc.syscoin.org",
                "https://rpc.ankr.com/syscoin",
                "https://syscoin-evm.publicnode.com",
                "wss://syscoin-evm.publicnode.com"
            ]
        },
        // [BLOCKCHAIN_NAME.NEAR]: {
        //     rpcList: []
        // },
        // [BLOCKCHAIN_NAME.KAVA_COSMOS]: {
        //     rpcList: []
        // },
        [BLOCKCHAIN_NAME.ASTAR_EVM]: {
            rpcList: [
                "https://evm.astar.network/",
                "https://rpc.astar.network:8545",
                "https://astar.public.blastapi.io",
                "https://getblock.io/nodes/bsc/",
                "https://1rpc.io/astr",
                "https://astar-mainnet.g.alchemy.com/v2/demo",
                "https://astar.api.onfinality.io/public",
                "wss://astar.api.onfinality.io/public-ws",
                "https://astar-rpc.dwellir.com",
                "wss://astar-rpc.dwellir.com"
            ]
        },
        // [BLOCKCHAIN_NAME.ZK_SYNC]: {
        //     rpcList: []
        // },
        // [BLOCKCHAIN_NAME.PULSECHAIN]: {
        //     rpcList: []
        // },
        [BLOCKCHAIN_NAME.LINEA]: {
            rpcList: [
                "https://linea.blockpi.network/v1/rpc/public",
                "https://1rpc.io/linea",
                "https://linea.drpc.org",
                "https://linea.decubate.com"
            ]
        },
        [BLOCKCHAIN_NAME.BASE]: {
            rpcList: [
                "https://mainnet.base.org",
                "https://developer-access-mainnet.base.org",
                "https://base-mainnet.diamondswap.org/rpc",
                "https://base.blockpi.network/v1/rpc/public",
                "https://1rpc.io/base",
                "https://base-pokt.nodies.app",
                "https://base.meowrpc.com",
                "https://base-mainnet.public.blastapi.io",
                "https://base.gateway.tenderly.co",
                "https://gateway.tenderly.co/public/base",
                "https://rpc.notadegen.com/base",
                "https://base-rpc.publicnode.com",
                "wss://base-rpc.publicnode.com",
                "https://base.drpc.org",
                "https://endpoints.omniatech.io/v1/base/mainnet/public",
                "https://base.api.onfinality.io/public",
                "https://public.stackup.sh/api/v1/node/base-mainnet",
                "https://api.tatum.io/v3/blockchain/node/base-mainnet",
                "https://base.rpc.subquery.network/public",
                "https://gateway.subquery.network/rpc/base"
            ]
        },
        [BLOCKCHAIN_NAME.MANTLE]: {
            rpcList: [
                "https://mantle-rpc.publicnode.com",
                "wss://mantle-rpc.publicnode.com",
                "https://mantle-mainnet.public.blastapi.io",
                "https://mantle.drpc.org",
                "https://rpc.ankr.com/mantle",
                "https://1rpc.io/mantle"
            ]
        },
        // [BLOCKCHAIN_NAME.ZETACHAIN]: {
        //     rpcList: []
        // },
        // [BLOCKCHAIN_NAME.BLAST]: {
        //     rpcList: []
        // },
        // [BLOCKCHAIN_NAME.HORIZEN]: {
        //     rpcList: []
        // },
     
    }
    ,providerAddress: {
        [CHAIN_TYPE.EVM]: {
           crossChain: '0xC12Ca56D1851f0a32EdbC4d5aa46DB8539425418', // Address for cross chain fee
           onChain: '0xC12Ca56D1851f0a32EdbC4d5aa46DB8539425418' // Address for on chain fee
        }
  }
}
