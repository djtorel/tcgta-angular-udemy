import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templRef);
    } else {
      this.vcRef.clear();
    }
  }

}
