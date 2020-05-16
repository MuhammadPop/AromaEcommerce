import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { SubmitCartToOrderComponent } from './components/submit-cart-to-order/submit-cart-to-order.component';
import { AboutComponent } from './components/about/about.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { LabtopsComponent } from './components/labtops/labtops.component';
import { ProductDetailsComponent} from './components/product-details/product-details.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { OrdersAdminComponent } from './components/orders-admin/orders-admin.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'prefix' },
  { path: 'register', component: RegisterComponent, pathMatch: 'prefix' },
  { path: 'home', component:ProductsContainerComponent, pathMatch: 'prefix' },
  { path: 'profile', component: ProfileComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'mobiles', component: MobilesComponent},
  { path: 'labtops', component: LabtopsComponent},
  { path: 'mobiles/:id', component: ProductDetailsComponent},
  { path: 'labtops/:id', component: ProductDetailsComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'mobile/:name/:id', component: ProductDetailsComponent},
  { path: 'labtop/:name/:id', component: ProductDetailsComponent},
  { path: 'product/:name/:id', component: ProductDetailsComponent},
  { path: 'product/:name', component: SearchProductComponent},
  { path: 'checkout', component: SubmitCartToOrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'editprod/:prodid/:categid', component: EditproductComponent },
  { path: 'addProd', component: AddproductComponent },
  { path: 'ordersall', component: OrdersAdminComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
