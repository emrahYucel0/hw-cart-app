import { Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { CartComponent } from '../components/cart/cart.component';

export const routes: Routes = [
    {path:"",redirectTo:"products",pathMatch:"full"},
    {path:"products", component:ProductComponent},
    {path:"cart", component:CartComponent}
];
