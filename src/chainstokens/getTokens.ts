import ethereum from "./ethereum.json";
import binancesmartchain from "./binance-smart-chain.json";
import polygon from "./polygon.json";
import polygonzkevm from "./polygon-zkevm.json";
import harmony from "./harmony.json"; 
import avalanche from "./avalanche.json";
import moonriver from "./moonriver.json";
import fantom from "./fantom.json";
import arbitrum from "./arbitrum.json";
import aurora from "./aurora.json";
import telosevm from "./telos-evm.json";
import optimisticethereum from "./optimistic-ethereum.json";
import cronos from "./cronos.json";
import okexchain from "./okex-chain.json";
import xdai from "./xdai.json";
import fuse from "./fuse.json";
import moonbeam from "./moonbeam.json";
import celo from "./celo.json";
import boba from "./boba.json";
import bobabsc from "./boba-bsc.json";
import ethereumpow from "./ethereum-pow.json";
import tron from "./tron.json";
import kava from "./kava.json";
import bitgert from "./bitgert.json";
import oasis from "./oasis.json";
import metis from "./metis.json";
import defikingdoms from "./defikingdoms.json";
import klaytn from "./klaytn.json";
import velas from "./velas.json";
import syscoin from "./syscoin.json";
import near from "./near.json";
import solana from "./solana.json";
import bitcoin from "./bitcoin.json";
import kavacosmos from "./kava-cosmos.json";
import astarevm from "./astar-evm.json";
import zksync from "./zksync.json";
import pulsechain from "./pulsechain.json";
import linea from "./linea.json";
import base from "./base.json";
import mantle from "./mantle.json";
import zetachain from "./zetachain.json";
import blast from "./blast.json";
import kroma from "./kroma.json";
import horizeneon from "./horizen-eon.json";
import merlin from "./merlin.json";
import rootstock from "./rootstock.json";

const TokenObject = {
    harmony,
    polygonzkevm,
    polygon,
    binancesmartchain,
    ethereum,
    avalanche,
    moonriver,
    fantom,
    arbitrum,
    aurora,
    telosevm,
    // optimisticethereum,
    cronos,
    okexchain,
    xdai,
    fuse,
    moonbeam,
    celo,
    boba,
    bobabsc,
    // ethereumpow,
    // tron,
    // kava,
    bitgert,
    oasis,
    metis,
    // defikingdoms,
    klaytn,
    velas,
    syscoin,
    // near,
    // solana,
    // bitcoin,
    // kavacosmos,
    astarevm,
    zksync,
    pulsechain,
    linea,
    base,
    mantle,
    zetachain,
    blast,
    kroma,
    horizeneon,
    merlin,
    rootstock,
};

export const getTokenList = (params: String) => {
    return TokenObject[`${params}`]?.results
}


const chains = {
    harmony: {
        chainId: 1666600000,
    },
    polygonzkevm: {
        chainId: 1101,
    },
    polygon: {
        chainId: 137,
    },
    binancesmartchain: {
        chainId: 56,
    },
    ethereum: {
        chainId: 1,
    },
    avalanche: {
        chainId: 43114,
    },
    moonriver: {
        chainId: 1285,
    },
    fantom: {
        chainId: 250,
    },
    arbitrum: {
        chainId: 42161,
    },
    aurora: {
        chainId: 1313161554,
    },
    telosevm: {
        chainId: 40,
    },
    // optimisticethereum: {
    //     chainId: 152709604825713,
    // },//kkcr
    cronos: {
        chainId: 25,
    },
    okexchain: {
        chainId: 66,
    },
    xdai: {
        chainId: 200,
    },
    fuse: {
        chainId: 122,
    },
    moonbeam: {
        chainId: 1284,
    },
    celo: {
        chainId: 42220,
    },
    boba: {
        chainId: 288,
    },
    bobabsc: {
        chainId: 56288,
    },
    // ethereumpow: {
    //     chainId: 0,
    // },//
    // tron: {
    //     chainId: 195,
    // },//
    kava: {
        chainId: 2222,
    },
    bitgert: {
        chainId: 32520,
    },
    oasis: {
        chainId: 26863,
    },
    metis: {
        chainId: 1088,
    },
    // defikingdoms: {
    //     chainId: 666,
    // },//
    klaytn: {
        chainId: 8217,
    },
    velas: {
        chainId: 106,
    },
    syscoin: {
        chainId: 57,
    },
    // near: {
    //     chainId: 1313161555,
    // },//
    // solana: {
    //     chainId: 101,
    // },//
    // bitcoin: {
    //     chainId: 0,
    // },//
    // kavacosmos: {
    //     chainId: 1317,
    // },//
    astarevm: {
        chainId: 592,
    },
    zksync: {
        chainId: 324,
    },
    pulsechain: {
        chainId: 369,
    },
    linea: {
        chainId: 59144,
    },
    base: {
        chainId: 8453,
    },
    mantle: {
        chainId: 5000,
    },
    zetachain: {
        chainId: 7000,
    },
    blast: {
        chainId: 238,
    },
    kroma: {
        chainId: 255,
    },
    horizeneon: {
        chainId: 7332,
    },
    merlin: {
        chainId: 4200,
    },
    rootstock: {
        chainId: 30,
    },
};



export const getTokenId = (params: String) => {
    return chains[`${params}`]?.chainId
}