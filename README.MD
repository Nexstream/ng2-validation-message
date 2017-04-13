# ng2-validation-message

## Installation

To install this library, run:

```bash
$ npm install ng2-validation-message --save
```

## Basic

### Import on root AppModule
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2ValidationMessage } from 'ng2-validation-message';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2ValidationMessage.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Import on the module you need
```typescript
...
import {Ng2ValidationMessage} from 'ng2-validation-message';

@NgModule({
  imports: [
    ...
    Ng2ValidationMessage,
  ],
  declarations: [
    Dashboard
  ],
  providers: []
})
export class DashboardModule {}
```

### Apply
Once your library is imported, you can use the `validationMessage` directive on input like following example:
```html
<form #form="ngForm" (ngSubmit)="submitForm(form.value)">
  <div class="form-group">
    <input type="text" class="form-control" name="name" ngModel minlength="5" validationMessage>
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
```

## Custom Message
To use custom message, you have to provide the message to "validationMessage" directive.
```html
<form #form="ngForm" (ngSubmit)="submitForm(form.value)">
  <div class="form-group">
    <input type="text" class="form-control" name="name" ngModel minlength="5" validationMessage="This is a custom message for this field">
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
```

## Set default error message
To set the default message for certain error, use `ValidationMessageService.setRuleMessage('required', 'New default message for required validator')` in your startup module.

```typescript
constructor(validationMessageService: ValidationMessageService) {
  this.validationMessageService.setRuleMessage('required', 'New default message');
}
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [crossRT](mailto:ray.low@appxtream.com)
