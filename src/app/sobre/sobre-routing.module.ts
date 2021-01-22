import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreComponent } from './sobre/sobre.component';

const sobreRoutes: Routes = [
  {
    path: '',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(sobreRoutes)],
  exports: [RouterModule],
})
export class SobreRoutingModule {}
