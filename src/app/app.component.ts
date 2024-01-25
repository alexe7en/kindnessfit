import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import Lenis from '@studio-freight/lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: ` <app-navigation /> <router-outlet></router-outlet> `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const lenis = new Lenis({ duration: 0.8 });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}
