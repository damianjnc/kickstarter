import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF7f2119268c8B50819D536ae5d71504C2daAD83B'
);

export default instance;
