import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtPrintService } from './print.service';
import { WtPrintComponent } from './print.component';

@NgModule({
  declarations: [
    WtPrintComponent,
  ],
  providers: [
    WtPrintService,
  ],
  imports: [
    CommonModule,
  ],
})
export class WtPrintModule { }
