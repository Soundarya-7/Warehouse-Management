import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockSafetyIndicatorComponent } from './stock-safety-indicator.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    StockSafetyIndicatorComponent
  ]
})
export class StockSafetyIndicatorModule { 
   
}
