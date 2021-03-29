import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {StaticValues} from '../../static/static-values';
import {ViewTypeService} from '../../services/view-type.service';
import { PricesCalculationService } from 'src/app/services/prices-calculation.service';
import {Utils} from '../../static/utils';
import { CustomModalComponent } from 'src/app/dialogs/custom-modal/custom-modal.component';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.scss']
})
export class StrategyListComponent implements AfterViewInit{
  public searchTerm = '';
  // Mutating the currentVaults in static values before using it so that we
  // are able to sort this array and not get a new one from the service.
  public vaultsList = [...StaticValues.currentVaults];
  public apyWindowState: Record<string, boolean> = {};
  public sortDirection = true;
  @ViewChild('tvlModal') private tvlModal: CustomModalComponent;
  constructor(
    public vt: ViewTypeService,
    public pricesCalculationService: PricesCalculationService) {}
  ngAfterViewInit(): void {
    this.sortVaultsList('tvl');
  }

  get vaults(): string[] {
    // If there is a search term, we filter, otherwise we return
    // the vaults list
    if (this.searchTerm) {
      return this.vaultsList.filter(vault => {
        return vault.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
      });
    }
    return this.vaultsList;
  }

  vaultPrettyName(name: string): string {
    return StaticValues.vaultPrettyName(name);
  }

  toggleAPYWindow(name: string): void {
    if (!(name in this.apyWindowState)) {
      this.apyWindowState[name] = true;
      return;
    }
    this.apyWindowState[name] = !this.apyWindowState[name];
  }

  sortVaultsList(sortBy?: string): void{
    const self = this;
    this.vaultsList.sort((a: any, b: any): number => {
      const left = self.sortDirection  ? a : b;
      const right = self.sortDirection ? b : a;
      // This is not ideal, but it's a decent way to handle
      // sorting given the current data :)
      switch (sortBy) {
        case 'name':
          if (left < right) {
            return -1;
          }
          return 1;
        case 'apy':
          return  Number(self.vaultFullApy(right)) - Number(self.vaultFullApy(left));
        case 'tvl':
          return self.vaultTvl(right) - self.vaultTvl(left);
        case 'farm_rewards':
          return self.vaultFarmRewards(right) - self.vaultFarmRewards(left);
        case 'total_earned':
          return self.vaultTotalEarning(right) - self.vaultTotalEarning(left);
        default:
          break;
      }
    });

    this.sortDirection = !this.sortDirection;
  }

  get vaultsListCrv(): string[] {
    return StaticValues.strategiesListCurve;
  }

  get vaultsListCrypto(): string[] {
    return StaticValues.strategiesListSingleCoins;
  }

  get vaultsListUniLpPools(): string[] {
    return StaticValues.strategiesListUniLpPools;
  }

  get vaultsListNonUniLpPools(): string[] {
    return StaticValues.strategiesListNonUniLpPools;
  }

  getImgSrc(name: string): string {
    return StaticValues.getImgSrcForVault(name);
  }
  vaultRewardApyPrettify(tvlName: string): string {
    return Utils.prettifyNumber(this.pricesCalculationService.vaultRewardWeeklyApy(tvlName));
  }

  vaultRewardAprPrettify(tvlName: string): string {
    return Utils.prettifyNumber(this.vaultRewardApr(tvlName));
  }

  vaultRewardApr(tvlName: string): number {
    return this.pricesCalculationService.vaultRewardApr(tvlName);
  }

  vaultFullApy(name: string): string {
    if (name === 'PS') {
      return this.vaultRewardApyPrettify(name);
    }
    if (Utils.isAutoStakeVault(name)) {
      return this.vaultRewardAprPrettify(name);
    }
    return Utils.prettifyNumber(this.vaultApy(name) + this.vaultRewardApy(name));
  }

  vaultApy(tvlName: string): number {
    return Utils.aprToApyEveryDayReinvest(this.vaultApr(tvlName));
  }

  vaultApr(tvlName: string): number {
    return Math.max(this.pricesCalculationService.incomeApr(tvlName), 0);
  }

  vaultRewardApy(tvlName: string): number {
    return Utils.aprToApyEveryDayReinvest(this.vaultRewardApr(tvlName));
  }

  vaultTvl(tvlName: string): number {
    return this.pricesCalculationService.tvls.get(tvlName) / 1000000;
  }

  vaultTotalEarning(tvlName: string): number {
    return (this.pricesCalculationService.lastHardWorks.get(tvlName)?.fullRewardUsdTotal * 0.7) || 0;
  }

  vaultFarmRewards(tvlName: string): number {
    return this.pricesCalculationService.vaultReward(tvlName);
  }

  openTvlDialog(): void{
    this.tvlModal.open();
  }
}
