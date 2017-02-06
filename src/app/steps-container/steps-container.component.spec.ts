/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StepsContainerComponent } from './steps-container.component';

describe('StepsContainerComponent', () => {
  let component: StepsContainerComponent;
  let fixture: ComponentFixture<StepsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    const appFixture = TestBed.createComponent(AppComponent);
    const app = appFixture.debugElement.componentInstance;
    app.ngOnInit();
    tick();

    fixture = TestBed.createComponent(StepsContainerComponent);
    component = fixture.componentInstance;
    component.steps = app.stepComponents;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
