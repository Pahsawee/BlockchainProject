import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0xA156d0f609c3BE2F866570290B1A439e38C9f07a'
);

export default instance;