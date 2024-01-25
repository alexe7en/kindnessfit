import {
  AfterViewInit,
  Directive,
  Input,
  ViewContainerRef,
  inject,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({ selector: '[curvedLine]', standalone: true })
export class CurvedLineDirective implements AfterViewInit {
  private containerRef = inject(ViewContainerRef);

  @Input() triggerSectionClass?: string;

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  private initAnimation() {
    const lineRef = this.containerRef.element.nativeElement;
    const lineLength = lineRef.getTotalLength();
    gsap.set(lineRef, {
      strokeDasharray: lineLength,
      strokeDashoffset: lineLength,
    });
    gsap.to(lineRef, {
      strokeDashoffset: 0,
      duration: 1,
      scrollTrigger: {
        trigger: `.${this.triggerSectionClass}` || lineRef,
        start: 'top 20%',
        end: 'bottom 70%',
        toggleActions: 'play reverse play reverse',
      },
    });
  }
}
