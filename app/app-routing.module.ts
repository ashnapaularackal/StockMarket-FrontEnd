import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { UpdateComponent } from './update/update.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
const routes: Routes = [
  {path:'login',component:UsermanagementComponent},
{path:'stockmarket',component:StockmarketComponent},
{path:'update/:id',component:UpdateComponent},
{path:'updatestock/:id',component:UpdatestockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
