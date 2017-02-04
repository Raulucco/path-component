import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
