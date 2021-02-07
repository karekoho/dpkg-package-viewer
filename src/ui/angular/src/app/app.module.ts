import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageInfoComponent } from './package/package-info/package-info.component';
import { PackageDependencyComponent } from './package/package-dependency/package-dependency.component';
import { PackageReverseDependencyComponent } from './package/package-reverse-dependency/package-reverse-dependency.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    PackageInfoComponent,
    PackageDependencyComponent,
    PackageReverseDependencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
