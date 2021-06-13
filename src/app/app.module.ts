import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {MatIconModule} from '@angular/material/icon';
import {AngularEmojisModule} from 'angular-emojis';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MainPageViewComponent} from './main/main-page-view/main-page-view.component';
import {MainFooterComponent} from './main/main-footer/main-footer.component';
import {CommonModule} from '@angular/common';
import {MainPageLightComponent} from './main/main-page-light/main-page-light.component';
import {CenterViewComponent} from './main/center-view/center-view.component';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'ng-sidebar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HistoryPageComponent} from './address-history/history-page/history-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TradeBoxComponent} from './address-history/trade-box/trade-box.component';
import {MatInputModule} from '@angular/material/input';
import {SimpleChartDialogComponent} from './dialogs/charts/simple-chart-dialog/simple-chart-dialog.component';
import {MainSideMenuComponent} from './main/main-side-menu/main-side-menu.component';
import {LastPricesListComponent} from './dashboard/last-prices-list/last-prices-list.component';
import {UserBalancesDialogComponent} from './dialogs/user-balances-dialog/user-balances-dialog.component';
import {Web3chartsComponent} from './web3charts/web3charts.component';
import {Web3chartComponent} from './web3charts/components/web3chart/web3chart.component';
import {DownloadHistoricDataDialogComponent} from './dialogs/download-historic-data-dialog/download-historic-data-dialog.component';
import {RewardsHistoryDialogComponent} from './dialogs/history/rewards-history-dialog/rewards-history-dialog.component';
import {VaultFilterPipe} from './dialogs/history/rewards-history-dialog/vault-filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {FlowCardsViewModule} from './flow-cards/flow-cards-view/flow-cards-view.module';
import {DashboardLastValuesModule} from './dashboard/dashboard-last-values/dashboard-last-values.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageViewComponent,
    MainFooterComponent,
    MainPageLightComponent,
    CenterViewComponent,
    HistoryPageComponent,
    TradeBoxComponent,
    RewardsHistoryDialogComponent,
    SimpleChartDialogComponent,
    MainSideMenuComponent,
    LastPricesListComponent,
    UserBalancesDialogComponent,
    DownloadHistoricDataDialogComponent,
    VaultFilterPipe,
    Web3chartsComponent,
    Web3chartComponent,
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
    FlowCardsViewModule,
    DashboardLastValuesModule,
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
