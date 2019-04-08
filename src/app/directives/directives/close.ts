import { Directive, ElementRef, Output, EventEmitter, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[close]'
})
export class closeDirective {
    @Input() close: string;
    constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
    }
    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: HTMLElement) {
        if (this._elementRef.nativeElement.classList.contains(this.close)) {
            this.renderer.removeClass(this._elementRef.nativeElement, this.close)
            return;
        }
        this.renderer.addClass(this._elementRef.nativeElement, this.close);
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.renderer.removeClass(this._elementRef.nativeElement, this.close);
            this.clickOutside.emit(null);
        }
    }
}