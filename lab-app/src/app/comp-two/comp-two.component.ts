import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Person } from '../person';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
})
export class CompTwoComponent implements OnInit {
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    // not sure about ngOnInit to get person from service?
  }

  get people(): Person[] {
    return this.service.getPerson();
  }
}
