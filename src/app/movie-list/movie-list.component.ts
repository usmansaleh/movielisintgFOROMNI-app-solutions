import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { movieList } from './../data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  searchText: string;
  data: any[] = movieList;
  constructor(protected router: Router,
    private utility: UtilityService) {
        this.refresh();
  }

  view(data) {
    this.utility.sendData.next(data);
    this.router.navigate(["detail"]);
  }

  refresh(): void {
		var urlParams = [];
		window.location.search.replace("?", "").split("&")
		.forEach(function (e, i) {
			var p = e.split("=");
			urlParams[p[0]] = p[1];
		});

		if (urlParams["loaded"]) { } else {
			let win = (window as any);
			win.location.search = '?loaded=1';
		}
	}

}
