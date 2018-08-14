import {AfterViewInit, Directive, Input, OnDestroy, Renderer2} from '@angular/core';


@Directive({
  selector: '[appCardReveal]'
})
export class CardRevealDirective implements AfterViewInit, OnDestroy {

  // card reveal div
  @Input() appCardReveal: HTMLDivElement;

  // closing element
  @Input() closingElement: HTMLElement;

  // opening element
  @Input() openingElement: HTMLElement;

  // listener
  private openingListener: () => void;
  private closingListener: () => void;

  constructor(private renderer: Renderer2) {}

  /**
   *  open card reveal
   */
  openCardReveal(): void {

    this.renderer.setStyle(this.appCardReveal, 'visibility', 'visible');
    this.renderer.setStyle(this.appCardReveal, 'z-index', '3');
    this.renderer.setStyle(this.appCardReveal, 'opacity', '1');
    this.renderer.setStyle(this.appCardReveal, 'transform', 'translateY(-100%)');
  }

  /**
   *  close card reveal
   */
  closeCardReveal(): void {

    this.renderer.setStyle(this.appCardReveal, 'opacity', '0');
    this.renderer.setStyle(this.appCardReveal, 'visibility', 'hidden');
    this.renderer.setStyle(this.appCardReveal, 'z-index', '-1');
    this.renderer.setStyle(this.appCardReveal, 'transform', 'translateY(0px)');
}

  ngAfterViewInit() {
    // do not render card reveal as default
    this.closeCardReveal();

    // set necessary css
    this.renderer.setStyle(this.appCardReveal,
      'transition',
      'visibility 0.75s ease-in-out, z-index 0.75s ease-in-out, opacity 0.75s ease-in-out, transform 0.75s ease-in-out');
    this.renderer.setStyle(this.appCardReveal, 'display', 'block');

    // set click listener
    this.openingListener = this.renderer.listen(this.openingElement, 'click', () => {
      this.openCardReveal();
    });
    this.closingListener = this.renderer.listen(this.closingElement, 'click', () => {
      this.closeCardReveal();
    });
  }

  ngOnDestroy() {

    // unsubscribe listeners
    if (this.openingListener) {
      this.openingListener();
    }
    if (this.closingListener) {
      this.closingListener();
    }
  }
}
