import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'text[appCurvedText]',
  standalone: true,
  template: `<svg:textPath #textRef class="text" [attr.href]="'#' + curveId">
    {{ text }}
  </svg:textPath>`,
  styles: [
    `
      .text {
        font-size: 30px;
      }
    `,
  ],
})
export class CurvedTextComponent implements AfterViewInit {
  @ViewChild('textRef') textRef?: ElementRef<SVGTextPathElement>;
  @Input() repeatNumber = 15;
  @Input() triggerSectionClass?: string;
  @Input() curveId?: string;

  private _text = '';
  @Input() set text(text: string) {
    let repeatedText = '';
    for (let i = 0; i < this.repeatNumber; i++) {
      repeatedText += ` ${text}`;
    }
    this._text = repeatedText;
  }
  get text(): string {
    return this._text;
  }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  private initAnimation(): void {
    const textRef = this.textRef?.nativeElement;
    if (textRef && this.triggerSectionClass) {
      gsap.set(textRef, {
        attr: { startOffset: '0' },
        opacity: 0,
      });
      gsap.to(textRef, {
        attr: { startOffset: '-50%' },
        scrollTrigger: {
          trigger: `.${this.triggerSectionClass}`,
          start: 'top 20%',
          end: 'bottom 70%',
          scrub: true,
        },
      });
      gsap.to(textRef, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${this.triggerSectionClass}`,
          start: 'top 20%',
          end: 'bottom 70%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }
  }
}
