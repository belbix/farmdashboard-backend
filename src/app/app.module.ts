import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';
import {UniTxComponent} from './flow-cards/uniswap/uni-tx/uni-tx.component';
import {MatCardModule} from '@angular/material/card';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FlowTabComponent} from './flow-cards/uniswap/flow-tab/flow-tab.component';
import {MatIconModule} from '@angular/material/icon';
import {HarvestTxComponent} from './flow-cards/harvest/harvest-tx/harvest-tx.component';
import {HarvestFlowTabComponent} from './flow-cards/harvest/harvest-flow-tab/harvest-flow-tab.component';
import {AngularEmojisModule} from 'angular-emojis';
import {HarvestFilterPipe} from './flow-cards/harvest/harvest-filter.pipe';
import {UniswapFilterPipe} from './flow-cards/uniswap/uniswap-filter.pipe';
import {DashboardLastValuesComponent} from './dashboard/dashboard-last-values/dashboard-last-values.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MainPageViewComponent} from './main/main-page-view/main-page-view.component';
import {MainFooterComponent} from './main/main-footer/main-footer.component';
import {CommonModule} from '@angular/common';
import {MainPageLightComponent} from './main/main-page-light/main-page-light.component';
import {CenterViewComponent} from './main/center-view/center-view.component';
import {UniTradeComponent} from './flow-cards/uniswap/uni-trade/uni-trade.component';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'ng-sidebar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {WeeklyProfitDialogComponent} from './dialogs/charts/weekly-profit-dialog/weekly-profit-dialog.component';
import {FarmBuybacksDialogComponent} from './dialogs/charts/farm-buybacks-dialog/farm-buybacks-dialog.component';
import {HistoryPageComponent} from './address-history/history-page/history-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TradeBoxComponent} from './address-history/trade-box/trade-box.component';
import {SavedGasFeesDialogComponent} from './dialogs/charts/saved-gas-fees-dialog/saved-gas-fees-dialog.component';
import {TotalUsersDialogComponent} from './dialogs/charts/total-users-dialog/total-users-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {HarvestHistoryDialogComponent} from './dialogs/history/harvest-history-dialog/harvest-history-dialog.component';
import {SimpleChartDialogComponent} from './dialogs/charts/simple-chart-dialog/simple-chart-dialog.component';
import {UniHistoryDialogComponent} from './dialogs/history/uni-history-dialog/uni-history-dialog.component';
import {HarvestTradeComponent} from './flow-cards/harvest/harvest-trade/harvest-trade.component';
import {LinkWindowComponent} from './flow-cards/uniswap/link-window/link-window.component';
import {HardWorkHistoryListDialogComponent} from './dialogs/history/hard-work-history-list-dialog/hard-work-history-list-dialog.component';
import {HardworkTradeComponent} from './flow-cards/hardwork/hardwork-trade/hardwork-trade.component';
import {HardworkFlowTabComponent} from './flow-cards/hardwork/hardwork-flow-tab/hardwork-flow-tab.component';
import {HardworkTxComponent} from './flow-cards/hardwork/hardwork-tx/hardwork-tx.component';
import {HardworkHeaderComponent} from './flow-cards/hardwork/hardwork-header/hardwork-header.component';
import {HardworkFilterPipe} from './flow-cards/hardwork/hardwork-filter.pipe';
import {MainSideMenuComponent} from './main/main-side-menu/main-side-menu.component';
import {SimpleModalComponent} from './dialogs/simple-modal/simple-modal.component';
import {FlowCardsViewComponent} from './flow-cards/flow-cards-view/flow-cards-view.component';
import {LastPricesListComponent} from './dashboard/last-prices-list/last-prices-list.component';
import {UserBalancesDialogComponent} from './dialogs/user-balances-dialog/user-balances-dialog.component';
import {Web3chartsComponent} from './web3charts/web3charts.component';
import {Web3chartComponent} from './web3charts/components/web3chart/web3chart.component';
import {DownloadHistoricDataDialogComponent} from './dialogs/download-historic-data-dialog/download-historic-data-dialog.component';
import {RewardsHistoryDialogComponent} from './dialogs/history/rewards-history-dialog/rewards-history-dialog.component';
import {VaultFilterPipe} from './dialogs/history/rewards-history-dialog/vault-filter.pipe';
import {GasDialogComponent} from './dialogs/charts/gas-dialog/gas-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TvlV2DialogComponent} from './dialogs/charts/tvl-v2-dialog/tvl-v2-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {CollapsibleAreaComponent} from './main/collapsable-area/collapsible-area.component';
import {MainTopNavigationComponent} from './main/main-top-navigation/main-top-navigation.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {interceptorProviders} from './interceptors';
import {ApplicationErrorDialog} from './main/main-page-light/application-error-dialog';
import {KatexModule} from 'ng-katex';
import {SnackBarModule} from './main/snack-bar/snack-bar.module';
import {PopoverModule} from './common/popover/popover.module';
import {PaginatorModule} from './common/paginator/paginator.module';
import {PipesModule} from './common/pipes/pipes.module';
import {PriceChartModule} from './chart/price-chart/price-chart.module';
import {VaultTvlDialogModule} from './dialogs/charts/vault-tvl-dialog/vault-tvl-dialog.module';
import {ChartGeneralModule} from './chart/chart-general/chart-general.module';
import {LoadingSpinnerModule} from './main/loading-spinner/loading-spinner.module';
import {IconsModule} from './static/components/icons/icons.module';
import {AddressModule} from './static/components/addresses/address.module';
import {StrategyListModule} from './dashboard/strategy-list/strategy-list.module';
import {TransactionModule} from './static/components/transactions/transaction.module';
import {CustomModalModule} from './dialogs/custom-modal/custom-modal.module';


@NgModule({
  declarations: [
    AppComponent,
    UniTxComponent,
    FlowTabComponent,
    HarvestTxComponent,
    HarvestFlowTabComponent,
    HarvestFilterPipe,
    UniswapFilterPipe,
    DashboardLastValuesComponent,
    MainPageViewComponent,
    MainFooterComponent,
    MainPageLightComponent,
    CenterViewComponent,
    UniTradeComponent,
    WeeklyProfitDialogComponent,
    FarmBuybacksDialogComponent,
    HistoryPageComponent,
    TradeBoxComponent,
    SavedGasFeesDialogComponent,
    TotalUsersDialogComponent,
    UniHistoryDialogComponent,
    RewardsHistoryDialogComponent,
    HarvestHistoryDialogComponent,
    SimpleChartDialogComponent,
    HarvestTradeComponent,
    LinkWindowComponent,
    HardWorkHistoryListDialogComponent,
    HardworkTradeComponent,
    HardworkFlowTabComponent,
    HardworkTxComponent,
    HardworkHeaderComponent,
    HardworkFilterPipe,
    MainSideMenuComponent,
    SimpleModalComponent,
    FlowCardsViewComponent,
    LastPricesListComponent,
    UserBalancesDialogComponent,
    DownloadHistoricDataDialogComponent,
    VaultFilterPipe,
    Web3chartsComponent,
    Web3chartComponent,
    GasDialogComponent,
    TvlV2DialogComponent,
    CollapsibleAreaComponent,
    MainTopNavigationComponent,
    ApplicationErrorDialog,
  ],
  imports: [
    AppRoutingModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    CommonModule,
    BrowserModule,

    // added while AppModule refactoring
    SnackBarModule,
    PopoverModule,
    PaginatorModule,
    LoadingSpinnerModule,
    PipesModule,
    PriceChartModule,
    ChartGeneralModule,
    IconsModule,
    AddressModule,
    CustomModalModule,
    VaultTvlDialogModule,
    TransactionModule,
    StrategyListModule,
    //

    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: 'placeholder values - these are set at runtime using log.updateConfig()',
      level: 0,
      serverLogLevel: NgxLoggerLevel.OFF,
      disableConsoleLogging: false
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    PerfectScrollbarModule,
    MatIconModule,
    AngularEmojisModule,
    SidebarModule.forRoot(),
    NgbModule,
    MatProgressBarModule,
    KatexModule,
  ],
  providers: [
    interceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
