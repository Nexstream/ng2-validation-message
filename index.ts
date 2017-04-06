import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageDirective } from './src/ng2-validation-message.directive';

export * from './src/ng2-validation-message.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidationMessageDirective
  ],
  exports: [
    ValidationMessageDirective
  ],
})
export class Ng2ValidationMessage {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2ValidationMessage,
    };
  }
}
