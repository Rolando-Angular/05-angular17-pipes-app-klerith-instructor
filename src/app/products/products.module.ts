import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from "./pipes/can-fly.pipe";
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from "./pipes/togglecase.pipe";

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderComponent,
    UncommonPageComponent,

    // Pipes
    CanFlyPipe,
    SortByPipe,
    ToggleCasePipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ],
  exports: [],
})
export class ProductsModule {

}
