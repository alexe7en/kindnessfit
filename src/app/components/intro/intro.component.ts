import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CurvedLineDirective } from '../../directives/curved-line.directive';
import { CurvedTextComponent } from '../curved-text/curved-text.component';
import { ButtonComponent } from '../button/button.component';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  standalone: true,
  imports: [ButtonComponent],
})
export class IntroComponent implements AfterViewInit {
  @ViewChildren('section') sections?: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    // ScrollTrigger.create({
    //   trigger: '.wrap',
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   pin: '.pinned1',
    // });
    // this.initAnimations();
    console.log('sections', this.sections);
  }

  // private initAnimations(): void {
  //   this.sections?.forEach((section) => {
  //     console.log('section', section.nativeElement);
  //     ScrollTrigger.create({
  //       trigger: section.nativeElement,
  //       start: 'top 20%',
  //       end: 'bottom 70%',
  //       pin: section.nativeElement.querySelector('.pinned'),
  //     });
  //   });
  // }
}
