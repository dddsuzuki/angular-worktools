import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { WtPrintService } from 'angular-worktools';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  @ViewChild('template', { read: TemplateRef, static: true }) ref: TemplateRef<unknown>;

  text = 'demo\ndemo\ndemo\n';

  constructor(
    private printService: WtPrintService,
  ) { }

  ngOnInit(): void {
  }

  printText(): void {
    this.printService.printText(this.text);
  }

  printTemplate(): void {
    this.printService.printTemplate(this.ref);
  }
}
