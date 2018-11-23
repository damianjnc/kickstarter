import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x51cAb5c1b8BC4A0bEf7379F2888c71b7c6A911bf'
);

export default instance;
