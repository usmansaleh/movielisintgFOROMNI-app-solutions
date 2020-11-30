import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from '../utility.service';
import { Location } from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  data: any;
  show = false;
  unSubcribe: Subscription;

  constructor(private route: Router, private cdr: ChangeDetectorRef, private utility: UtilityService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    let that = this;
    that.unSubcribe = that.utility.sendData.subscribe(res => {
      if (res) {
        console.log(res);
        that.show = true;
        that.data = res;
        that.cdr.detectChanges();
      }
    });
  }

  back() {
    this.route.navigate(['']);
  }

  ngOnDestroy() {
    this.unSubcribe.unsubscribe();
    this.utility.sendData.next(null);
    this.utility.sendData.complete();
  }
}
