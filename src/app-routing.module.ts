import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {AboutComponent} from "./components/about/about.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
const appRoutes:Routes=[
  {path:"home",component: HomeComponent},
  {path:"products",component: ProductsComponent},
  {path:"about",component: AboutComponent},
  {path:"add",component: ProductAddComponent},
  {path:"edit/:id",component: ProductEditComponent},
  {path:"",redirectTo:"/home" ,pathMatch:"full"}
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export  class AppRoutingModule{

}
