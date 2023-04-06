import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from '../graficas/pages/barras/barras.component';
import { BarrasDobleComponent } from '../graficas/pages/barras-doble/barras-doble.component';
import { DonaComponent } from '../graficas/pages/dona/dona.component';
import { DonaHttpComponent } from '../graficas/pages/dona-http/dona-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barra', component: BarrasComponent },
      { path: 'barra-doble', component: BarrasDobleComponent },
      { path: 'dona', component: DonaComponent },
      { path: 'dona-http', component: DonaHttpComponent },
      { path: '**', redirectTo: 'barra' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
