const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compliedFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'oval return step shed outdoor depart own inmate oval detect lady pupil',
    'https://rinkeby.infura.io/v3/17a2ab0671e44a179ea0f44c43ddfa8f'
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compliedFactory.interface))
        .deploy({ data: compliedFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();