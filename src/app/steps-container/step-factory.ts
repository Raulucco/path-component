import { Type, Injectable } from '@angular/core';

@Injectable()
export class StepNormalizer {
  constructor(public component: Type<any>, public data: any) { }
}

export class StepFactory {
  create(component: any, data: any) {
    return new StepNormalizer(component, data);
  }
}
