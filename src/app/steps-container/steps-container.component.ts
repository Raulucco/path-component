import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

import { StepDirective } from './step.directive';

@Component({
  selector: 'app-steps-container',
  templateUrl: './steps-container.component.html',
  styleUrls: ['./steps-container.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StepsContainerComponent implements OnInit {
  @Input() steps: any;
  @ViewChild(StepDirective) currentStep: StepDirective;

  private currentStepIndex = -1;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponents();
  }

  private loadComponents() {
    this.currentStepIndex = (this.currentStepIndex + 1) % this.steps.length;
    const currentStep = this.steps[this.currentStepIndex];

    const componentFactory = this.componentResolver.resolveComponentFactory(currentStep.component);
    const viewContainerRef = this.currentStep.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<{ data: any }>componentRef.instance).data = currentStep.data;
  }
}
