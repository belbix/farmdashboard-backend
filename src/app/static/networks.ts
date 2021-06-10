import {Network} from '../models/network';
import {APP_CONFIG} from '../../app.config';
import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Networks {

  private makeEthNetwork = (rpcUrl: string): Network => ({
    blockExplorerUrl: 'https://etherscan',
    chainId: 1,
    ethparserName: 'eth',
    name: 'Ethereum Mainnet',
    currencySymbol: 'ETH',
    rpcUrl: 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=YourApiKeyToken'
  });

  private static NETWORK_ETH: Network ={
    blockExplorerUrl: 'https://etherscan.io',
    chainId: 1,
    ethparserName: 'eth',
    currencySymbol: 'ETH',
    name: 'Ethereum Mainnet',
    etherscanUrl: 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=YourApiKeyToken',
  };
  private static NETWORK_BSC: Network = {
    blockExplorerUrl: 'https://www.bscscan.com',
    chainId: 56,
    ethparserName: 'bsc',
    currencySymbol: 'BNB',
    name: 'Binance Smart Chain',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
  };
  public NETWORKS: Map<string, Network> = new Map<string, Network>([
    ['bsc', Networks.NETWORK_BSC],
    ['eth', Networks.NETWORK_ETH]
  ]);

  constructor(@Inject(APP_CONFIG)config) {
    this.NETWORKS.set('eth', this.makeEthNetwork(config.ethRpcUrl));
  }

}