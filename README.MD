# ng2-validator-messages

## Installation

To install this library, run:

```bash
$ npm install ng2-validator-messages --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-validator-messages
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2ValidatorMessages } from 'ng2-validator-messages';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2ValidatorMessages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use the `validator` directive on input like following example:
```html
<form #form="ngForm" (ngSubmit)="submitForm(form.value)">
  <div class="form-group">
    <input type="text" class="form-control" name="name" ngModel minlength="5" validator>
  </div>
  <div *ngIf="!form.valid">Invalid</div>
  <button class="btn btn-primary">Submit</button>
</form>
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
