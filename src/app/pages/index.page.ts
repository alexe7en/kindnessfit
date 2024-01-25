import { Component } from '@angular/core';
import { IntroComponent } from '../components/intro/intro.component';
import { DescriptionComponent } from '../sections/description/description.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<app-intro /><app-description />
    <div class="test"></div>`,
  styles: [
    `
      .test {
        height: 100vh;
        background: #222;
      }
    `,
  ],
  imports: [IntroComponent, DescriptionComponent],
})
export default class HomeComponent {}
