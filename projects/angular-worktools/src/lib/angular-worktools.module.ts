import { NgModule } from '@angular/core';
import { WtDownloadModule } from './download/download.module';
import { WtPrintModule } from './print/print.module';

@NgModule({
  declarations: [],
  imports: [
    WtDownloadModule,
    WtPrintModule,
  ],
  exports: [
    WtDownloadModule,
    WtPrintModule,
  ],
})
export class WtModule { }
