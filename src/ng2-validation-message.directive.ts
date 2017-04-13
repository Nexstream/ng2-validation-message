import {Directive, HostListener, Input, ElementRef, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';
import * as $ from 'jquery';
import {ValidationMessageService} from './ng2-validation-message.service';

@Directive({
  selector: '[validationMessage]',
})
export class ValidationMessageDirective implements OnInit {

  @Input('validationMessage') customMessage: string;

  private target: any;
  private formGroup: any;

  constructor(private el: ElementRef, private formControl: NgControl, private validationMessageService: ValidationMessageService) {
    this.target = $(el.nativeElement);
    this.formGroup = this.target.closest('.form-group');

    this.formControl.valueChanges.subscribe((newValue) => {
      this.checkValidation();
    });
  }

  ngOnInit() {
  }

  resetFormGroup() {
    this.formGroup.removeClass('has-error');
    this.formGroup.find('.help-block').remove();
  }

  getMessage(error?: string): string {
    if (this.customMessage)
      return this.customMessage;
    else if (error)
      return this.validationMessageService.getMessageByError(error);
    else
      return "Please enter a correct value";
  }

  getError(errors: any): string {
    for (var key in errors) {
      if (errors.hasOwnProperty(key))
        return key;
    }
    return '';
  }

  checkValidation() {
    this.resetFormGroup();
    if ((this.formControl.dirty || this.formControl.touched) && !this.formControl.valid) {

      let error = this.getError(this.formControl.errors);
      let message = this.getMessage(error);

      this.formGroup.addClass('has-error');
      this.formGroup.append(`<span class="help-block">${message}</span>`);
    }
  }

}
