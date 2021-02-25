import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { InfoMoviesComponent } from './components/info-movies/info-movies.component';


const routes: Routes = [
  {
    path: 'info-movies', component: InfoMoviesComponent},
   {path: '',component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
