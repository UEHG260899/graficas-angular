import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { GraficasDoblesComponent } from './pages/graficas-dobles/graficas-dobles.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {path : 'barra', component : BarrasComponent},
      {path : 'graficas-dobles', component : GraficasDoblesComponent},
      {path : 'dona', component : DonaComponent},
      {path : 'dona-http', component : DonaHttpComponent},
      {path : '**', redirectTo : 'barra'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
