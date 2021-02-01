import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageInfoComponent } from './package/package-info/package-info.component';


const routes: Routes = [
  { path: '', component: PackageListComponent },
  { path: 'package/:name', component: PackageInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
