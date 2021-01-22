import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina1RoutingModule } from './pagina1-routing.module';
import { Pagina1Component } from './pagina1/pagina1.component';

@NgModule({
  declarations: [Pagina1Component],

  imports: [CommonModule, Pagina1RoutingModule],
})
export class Pagina1Module {}
