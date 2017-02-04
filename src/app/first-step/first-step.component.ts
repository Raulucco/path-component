import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
