import {Directive, HostListener, Input, ElementRef, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';
import * as $ from 'jquery';

@Directive({
  selector: '[validationMessage]'
})
export class ValidationMessageDirective implements OnInit{

  @Input('validationMessage') customMessage: string;

  private target: any;
  private formGroup: any;

  constructor(private el: ElementRef, private formControl: NgControl) {
    this.target = $(el.nativeElement);
    this.formGroup = this.target.closest('.form-group');

    this.formControl.valueChanges.subscribe((newValue) => {
      this.checkValidation();
    });
  }

  ngOnInit() {
    console.log('customMessage', this.customMessage);
    console.log(this.formControl);
  }

  resetFormGroup() {
    this.formGroup.removeClass('has-error');
    this.formGroup.find('.help-block').remove();
  }

  getMessage(): string {
    if (this.customMessage)
      return this.customMessage;
    else
      return "Please enter a correct value";
  }

  checkValidation() {
    this.resetFormGroup();
    if (!this.formControl.valid) {
      this.formGroup.addClass('has-error');
      this.formGroup.append(`<span class="help-block">${this.getMessage()}</span>`);
    }
  }

}
