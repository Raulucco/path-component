import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StepsContainerComponent } from './steps-container/steps-container.component';
import { StepFactory } from './steps-container/step-factory';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { StepDirective } from './steps-container/step.directive';

@NgModule({
  declarations: [
    AppComponent,
    StepsContainerComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    StepDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent
  ],
  providers: [StepFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
