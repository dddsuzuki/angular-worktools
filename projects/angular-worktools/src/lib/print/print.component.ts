import { Component, OnInit, ViewEncapsulation, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'wt-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WtPrintComponent implements OnInit {

  text: string;

  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  @ViewChild('template', { read: TemplateRef, static: true }) template: TemplateRef<unknown>;

  ngOnInit(): void {
  }

  insertText(text: string): void {
    this.text = text;
    this.container.createEmbeddedView(this.template);
  }

  insertTemplate(template: TemplateRef<unknown>): void {
    this.container.createEmbeddedView(template);
  }

}
