import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { RobotLogsComponent } from './robot-logs/robot-logs.component';
import { RobotComponent } from './robot/robot.component';
import { StockSafetyIndicatorComponent } from './stock-safety-indicator/stock-safety-indicator.component';
import { AnalyticsHomeComponent } from "./analytics-home/analytics-home.component";
import { InventoryAnalyticsComponent } from "./analytics/inventory-analytics/inventory-analytics.component";
import { LocationAnalyticsComponent } from "./analytics/location-analytics/location-analytics.component";
import { MovementComponent } from "./analytics/movement/movement.component";
import { ProductComponent } from "./analytics/product/product.component";
import { RobotAnalyticsComponent } from "./analytics/robot-analytics/robot-analytics.component";
import { UserComponent } from "./analytics/user/user.component";
import { DummyComponent } from "./dummy/dummy.component";

import { LedgerDetailsComponent } from "./ledger-details/ledger-details.component";
import { LedgerHomeComponent } from "./ledger-home/ledger-home.component";
import { AddLocationComponent } from './location/add-location/add-location.component';
import { ProductInboundComponent } from './product-inbound/add-product-inbound/product-inbound.component';
import { LocationAnalyserComponent } from './location-analyser/location-analyser.component';
import { LocationSuggestionsComponent } from './product-relocation/location-suggestions/location-suggestions.component';
import { ManualEntryComponent } from './product-relocation/manual-entry/manual-entry.component';
import { RelocationFormComponent } from './product-relocation/relocation-form/relocation-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { firstpagenavComponent } from './firstpagenav/firstpagenav.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { RequestAccessComponent } from './request-access/request-access.component';
import{ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './login/auth-guard.service';
import { PendingRequestsGuardService } from './request-access/pending-requests-guard.service';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';
import { ProductRelocationComponent } from './product-relocation/product-relocation.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductOutboundComponent } from './product-outbound/product-outbound.component';

const routes: Routes = [

// { path: '', component: DashboardComponent },
  {path: '', component: firstpagenavComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {
    path: "",
    component: HeaderComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'inventory', component: DummyComponent},
    {path: 'ledgers/:ledgerId', component: LedgerDetailsComponent},
    {path: 'ledgers', component: LedgerHomeComponent},
    {path:'analytics',component: AnalyticsHomeComponent, children: [
        { path: 'products', component: ProductComponent},
        { path: 'users', component: UserComponent},
        { path: 'warehouse-movement', component: MovementComponent},
        { path: 'inventory-analytics', component: InventoryAnalyticsComponent},
        { path: 'robot-analytics', component: RobotAnalyticsComponent},
        { path: 'location-analytics', component: LocationAnalyticsComponent},
    ]},
      {path:'StockSafetyIndicator', component: StockSafetyIndicatorComponent},
      {path: 'ProductCart', component: ProductCartComponent},
      {path: 'Robot', component: RobotComponent},
      {path: 'Robot/RobotLogs/:id', component: RobotLogsComponent},
      { path: "product", component: AddProductComponent },
      { path: "location", component: AddLocationComponent },
      { path: "product-inbound", component: ProductInboundComponent },
      { path: "product-outbound", component: ProductOutboundComponent },
      { path: "display-locations", component: LocationAnalyserComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "edituser", component: EditUserComponent },
      { path: "changepassword", component: ChangePasswordComponent },
      { path: "requestaccess", canActivate : [PendingRequestsGuardService], component: RequestAccessComponent },
      {path: "product-update",component:UpdateProductComponent},
      {path:"product-delete",component:DeleteProductComponent},
      {path:"location-update",component:UpdateLocationComponent},
      {path:"location-delete",component:DeleteLocationComponent},
      {
        path: "product-relocation",
        redirectTo: "/product-relocation/relocation-form",
        pathMatch: "full",
      },
      {
        path: "product-relocation",
        component: ProductRelocationComponent,
        children: [
          {
            path: "location-suggestions",
            component: LocationSuggestionsComponent,
          },
          { path: "manual-entry", component: ManualEntryComponent },
          { path: "relocation-form", component: RelocationFormComponent },
        
      ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation : 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
