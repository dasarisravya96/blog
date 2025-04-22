import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading = false;
  private minLoadingTime = 2000; // 2 seconds minimum loading time

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        // Add a delay before hiding the loading screen
        setTimeout(() => {
          this.isLoading = false;
        }, this.minLoadingTime);
      }
    });
  }

  ngOnInit(): void {}
}
