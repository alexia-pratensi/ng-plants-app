import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[plantBorderCard]'
})
export class BorderCardDirective {
  private initialColor:string = '#F5F5F5';
  private defaultColor: string = 'purple';
  private defaultHeight: number = 830;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('plantBorderCard') borderColor: string;



  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }


}
