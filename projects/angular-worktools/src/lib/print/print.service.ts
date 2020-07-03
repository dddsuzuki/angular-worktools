import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef, ComponentRef, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { WtPrintComponent } from './print.component';

type PrintProcess = (componentRef: ComponentRef<WtPrintComponent>) => void;

@Injectable()
export class WtPrintService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) { }

  printTemplate(template: TemplateRef<unknown>): void {
    this.print((componentRef: ComponentRef<WtPrintComponent>) => {
      componentRef.instance.insertTemplate(template);
      componentRef.changeDetectorRef.detectChanges();
    });
  }

  printText(text: string): void {
    this.print((componentRef: ComponentRef<WtPrintComponent>) => {
      componentRef.instance.insertText(text);
      componentRef.changeDetectorRef.detectChanges();
    });
  }

  private print(process: PrintProcess): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WtPrintComponent);
    const componentRef = componentFactory.create(this.injector);

    this.applicationRef.attachView(componentRef.hostView);

    process(componentRef);

    const element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(element);

    window.print();

    this.applicationRef.detachView(componentRef.hostView);

    componentRef.destroy();
  }

}
