const { ChainId, Fetcher, WETH, Route } = require('@uniswap/sdk');
const ethers = require('ethers');

const chainId = ChainId.MAINNET;
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI address mainnet

const init = async () => {
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress);
    const weth = WETH[chainId];
    const pair = await Fetcher.fetchPairData(dai, weth); //Création d'une nouvelle paire sur le market
    const route = new Route([pair], weth);

    console.log(route.midPrice.toSignificant(6));
    console.log(route.midPrice.invert().toSignificant(6));
}

init();