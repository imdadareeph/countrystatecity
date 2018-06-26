import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
  ,
  {
    path: 'test',
    component: AppComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
