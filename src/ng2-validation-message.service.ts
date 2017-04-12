import { Injectable } from '@angular/core';

@Injectable()
export class ValidationMessageService {

  private rules: any = {
    required: 'This field is required.',
    minlength: 'This value is too short.',
    maxlength: 'This value is too long.',
  }

  constructor() {
  }

  getMessageByError(error: string): string{
    if (this.rules[error])
      return this.rules[error];
    return '';
  }

  setRuleMessages(rules: {}) {
    this.rules = rules;
  }

  setRuleMessage(error: string, message: string ) {
    this.rules[error] = message;
  }

}
