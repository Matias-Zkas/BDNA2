import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNoticiaScreenComponent } from './pantallas/detalle-noticia-screen/detalle-noticia-screen.component';
import { InicioScreenComponent } from './pantallas/inicio-screen/inicio-screen.component';
import { NoticiasSemanaScrennComponent } from './pantallas/noticias-semana-screnn/noticias-semana-screnn.component';
import { VideosScreenComponent } from './pantallas/videos-screen/videos-screen.component';
import { NacionalesScreenComponent } from './pantallas/nacionales-screen/nacionales-screen.component';
import { InternacionalesScreenComponent } from './pantallas/internacionales-screen/internacionales-screen.component';
import { DeportesScreenComponent } from './pantallas/deportes-screen/deportes-screen.component';
import { TecnologiaScreenComponent } from './pantallas/tecnologia-screen/tecnologia-screen.component';
import { CovidScreenComponent } from './pantallas/covid-screen/covid-screen.component';
import { RegistroScreenComponent } from './pantallas/registro-screen/registro-screen.component';
import { ReclamosScreenComponent } from './pantallas/reclamos-screen/reclamos-screen.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full', },
  {path: 'inicio', component: InicioScreenComponent, },
  {path: 'noticias-semana', component: NoticiasSemanaScrennComponent, },
  {path: 'detalle-noticia/:id', component: DetalleNoticiaScreenComponent, },
  {path: 'videos', component: VideosScreenComponent, },
  {path: 'nacionales', component:  NacionalesScreenComponent, },
  {path: 'internacionales', component: InternacionalesScreenComponent, },
  {path: 'deportes', component: DeportesScreenComponent, },
  {path: 'tecnologia', component: TecnologiaScreenComponent, },
  {path: 'covid', component: CovidScreenComponent, },
  {path: 'registro', component: RegistroScreenComponent, },
  {path: 'reclamo', component: ReclamosScreenComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
