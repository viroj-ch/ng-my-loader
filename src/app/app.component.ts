import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { LoaderService } from './shared/loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading: boolean = true;

  constructor(
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          this.loaderService.show(); 
          break; 
        }
        case event instanceof NavigationEnd: {
           setTimeout(()=>{ 
            this.loading = false
            loaderService.hide() 
            }, 1000);
          break;
        }
        case event instanceof NavigationCancel: {
          this.loading = false;
          this.loaderService.hide();
          break;
        }
        case event instanceof NavigationError: { 
          this.loading = false;
          this.loaderService.hide(); 
          break; 
        }
        default: { break; }
      }
    });
  }


}
