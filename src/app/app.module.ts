import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioPComponent } from './componentes/inicio-p/inicio-p.component';

import {RouterModule, Routes} from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactosPComponent } from './componentes/contactos-p/contactos-p.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProductosPComponent } from './componentes/productos-p/productos-p.component';
import { ProductoFibraPComponent } from './componentes/producto-fibra-p/producto-fibra-p.component';
import { ProductoConectividadPComponent } from './componentes/producto-conectividad-p/producto-conectividad-p.component';
import { ProductoInstIntPComponent } from './componentes/producto-inst-int-p/producto-inst-int-p.component';
import { ProductoInstExternasPComponent } from './componentes/producto-inst-externas-p/producto-inst-externas-p.component';
import { ProductoEquiposPComponent } from './componentes/producto-equipos-p/producto-equipos-p.component';
import { ProductoHerramientasPComponent } from './componentes/producto-herramientas-p/producto-herramientas-p.component';
import { ProductoLimpiezaPComponent } from './componentes/producto-limpieza-p/producto-limpieza-p.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'inicioP'
  },
  {
    path:'inicioP',
    component:InicioPComponent
  },
  {
    path:'contactosP',
    component:ContactosPComponent
  },
  {
    path:'serviciosP',
    component:ServiciosComponent
  },
  {
    path:'acercaDe',
    component:AcercaDeComponent
  },
  {
    path:'productosP',
    component:ProductosPComponent,
    children:[
      {
        path:'',
        pathMatch:'prefix',
        redirectTo:'productofibraP'
      },
      {
        path:'productofibraP',
        component:ProductoFibraPComponent
      },
      {
        path:'productoConectividadP',
        component:ProductoConectividadPComponent
      },
      {
        path:'productoInstIntP',
        component:ProductoInstIntPComponent
      },
      {
        path:'productoEquiposP',
        component:ProductoEquiposPComponent
      },
      {
        path:'productoHerramientasP',
        component:ProductoHerramientasPComponent
      },
      {
        path:'productoLimpiezaP',
        component:ProductoLimpiezaPComponent
      },
      {
        path:'productoInstExternasP',
        component:ProductoInstExternasPComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InicioPComponent,
    ContactosPComponent,
    ServiciosComponent,
    AcercaDeComponent,
    ProductosPComponent,
    ProductoInstExternasPComponent,
    ProductoEquiposPComponent,
    ProductoHerramientasPComponent,
    ProductoLimpiezaPComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
