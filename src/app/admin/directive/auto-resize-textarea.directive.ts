import { Directive, ElementRef, HostListener, AfterContentInit  } from '@angular/core';

@Directive({
  selector: '[autoResizeTextarea]'
})
export class AutoResizeTextareaDirective implements AfterContentInit {
  event: KeyboardEvent;
  constructor(private el: ElementRef) { }

  ngAfterContentInit() {
    this.setHeightToScrollHeight();
  }

  @HostListener('keyup') onKeyup() {
    if (event.code === 'Enter') {
      event.preventDefault();
    }
    this.setHeightToScrollHeight();
  }

  setHeight(height) {
    this.el.nativeElement.style.height = height + 'px';
  }

  setHeightToScrollHeight() {
    this.setHeight(0);
    const height = this.el.nativeElement.scrollHeight;
    this.setHeight(height);

  }
}
