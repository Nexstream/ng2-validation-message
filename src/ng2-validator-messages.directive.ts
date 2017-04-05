import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as $ from 'jquery';

@Directive({
  selector: '[validator]'
})
export class ValidatorDirective {

  private target: any;

  constructor(private el: ElementRef, private control: NgControl) {
    this.target = $(el.nativeElement);
  }

  @HostListener('focusout', ['$event.target'])
  onFocus() {

    let formGroup = this.target.closest('.form-group');

    if(!this.control.valid) {
      formGroup.find('.help-block').remove();

      formGroup.addClass('has-error');
      formGroup.append('<span class="form-text">Please enter a correct value</span>');
    }else {
      formGroup.removeClass('has-error');
      formGroup.find('.form-text').remove();
    }

  }

}
