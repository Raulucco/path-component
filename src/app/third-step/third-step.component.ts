import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
