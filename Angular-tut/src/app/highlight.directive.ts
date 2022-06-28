import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaultColor = ''

  // we have to passed event name in argument of HostListner  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  // @HostListener('mouseover') onHover(){
  //   window.alert('mouse hover effect')
  // }

  // @HostListener('click') onClick(){
  //   alert('clicked')
  // }


  @HostBinding('style.fontWeight')
  // color = 'blue'
  fontWeight = 'bold'

  // @HostBinding('style.backgroundColor') bgColor: any
  // @HostListener('click') click(){
  //   this.bgColor = 'blue  '
  // }

  constructor(private el:ElementRef,private renderer:Renderer2) { 
    el.nativeElement.style.backgroundColor = ''
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('green');
  // }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
