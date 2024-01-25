import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { DescriptionMatchLineComponent } from './match-line.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, DescriptionMatchLineComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent implements AfterViewInit {
  @ViewChildren('animatedText') animatedText?: QueryList<
    ElementRef<HTMLDivElement>
  >;

  ngAfterViewInit(): void {
    this.initBgAnimation();
    this.initTextAnimation();
    this.initMatchAnimation();
  }

  private initBgAnimation() {
    gsap.to('.description__bg', {
      y: 200,
      scale: 1.7,
      scrollTrigger: {
        trigger: '.description',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.description__bg',
      },
    });
  }

  private initTextAnimation(): void {
    if (!this.animatedText) return;
    this.animatedText.forEach(({ nativeElement }, i) => {
      const text = new SplitType(nativeElement, { types: 'chars,words' });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: nativeElement,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }

  private initMatchAnimation(): void {
    gsap.from('.match', {
      scale: 0.5,
      scrollTrigger: {
        trigger: '.match-section',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 2,
        pin: '.description-section--pinned',
        pinSpacing: false,
      },
    });
  }
}
