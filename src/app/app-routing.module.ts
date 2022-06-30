import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'users',
    title: 'Users',
    loadChildren: () => import('users/Module').then(m => m.UserModule)
  },
  {
    path:'products',
    title:'Products',
    loadChildren: () => import('products/Module').then(m => m.ProductsModule)
  },
  {
    path:'**',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
