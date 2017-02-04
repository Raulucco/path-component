import { Component, OnInit } from '@angular/core';
import { StepsContainerComponent } from './steps-container/steps-container.component';
import { StepFactory } from './steps-container/step-factory';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  stepComponents: Array<any> = [];

  constructor(private stepFactory: StepFactory) {

  }

  ngOnInit() {
    this.stepComponents = this.stepComponents
      .concat([
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent
      ])
      .map((component, idx) => this.stepFactory.create(component, {
        title: `Component ${idx}`
      }));
  }
}
