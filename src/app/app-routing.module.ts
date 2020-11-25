import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  	{
		path : '',
		pathMatch : 'full',
		component : MovieListComponent
	},
	{
		path : 'detail',
		pathMatch : 'full',
		component : MovieDetailComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
