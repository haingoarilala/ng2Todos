import { Directive, Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[alert]',
 
})
export class AlertDirective {

  constructor(
   private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef
  ) { 
   
  }
 @Input() set alert(condition: boolean){
   if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
 }
 
}
