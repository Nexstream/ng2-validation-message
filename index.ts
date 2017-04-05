import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorDirective } from './src/ng2-validator-messages.directive';

export * from './src/ng2-validator-messages.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidatorDirective
  ],
  exports: [
    ValidatorDirective
  ]
})
export class Ng2ValidatorMessages {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2ValidatorMessages,
    };
  }
}
