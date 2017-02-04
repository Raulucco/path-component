import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStepContent]',
})
export class StepDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
