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
  private completeStepIndexes: Array<number> = [];

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.setNextIndex();
    this.loadComponents();
  }

  continue() {
    this.completeCurrentStep();

    if (!this.isLastStepDisplayed) {
      this.setNextIndex();
      this.loadComponents();
    }
  }

  back() {
    this.removeStepFromSuccessState()
    this.setPreviousIndex();
    this.loadComponents();
  }

  jumpToStep(stepIndex: number) {
    this.currentStepIndex = stepIndex;
    this.loadComponents();
  }

  removeStepFromSuccessState() {
    this.completeStepIndexes = this.completeStepIndexes.filter(idx => idx !== this.currentStepIndex);
  }

  isStepCompleted(idx: number): boolean {
    return this.completeStepIndexes.indexOf(idx) > -1;
  }

  get currentStepIsCompleted(): boolean {
    return this.isStepCompleted(this.currentStepIndex);
  }

  get isFirstStepDisplayed(): boolean {
    return this.currentStepIndex === 0;
  }

  get isLastStepDisplayed(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  get activeStepIndex(): number {
    return this.currentStepIndex;
  }

  private setNextIndex() {
    this.currentStepIndex = (this.currentStepIndex + 1) % this.steps.length;
  }

  private setPreviousIndex() {
    this.currentStepIndex = (this.currentStepIndex - 1) % this.steps.length;
  }

  private loadComponents() {
    const currentStep = this.steps[this.currentStepIndex];
    const componentFactory = this.componentResolver.resolveComponentFactory(currentStep.component);
    const viewContainerRef = this.currentStep.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<{ data: any }>componentRef.instance).data = currentStep.data;
  }

  private completeCurrentStep() {
    if (!this.currentStepIsCompleted) {
      this.completeStepIndexes.push(this.currentStepIndex);
    }
  }
}
