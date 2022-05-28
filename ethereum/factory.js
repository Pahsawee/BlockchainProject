import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x12890cC0E951bdb5fA344A1A35C71feD324f9273'
);

export default instance;