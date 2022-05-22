import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x5353cfb19c272d9c503b77d7E9ea06d57bb10791'
);

export default instance;