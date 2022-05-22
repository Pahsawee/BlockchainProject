import Web3 from 'web3';

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    web3 = new Weeb3(window.ethereum);
} else {
    const provider = new Web3.provider.HttpProvider(
        "https://rinkeby.infura.io/v3/17a2ab0671e44a179ea0f44c43ddfa8f"
    );
    web3 = new Web3(provider);
}

export default web3;
