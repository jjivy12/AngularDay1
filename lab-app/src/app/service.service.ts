import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private personArr: Person[] = [
    new Person('Lisa'),
    new Person('Diana'),
    new Person('River'),
    new Person('Beatrix'),
    new Person('Daisy'),
  ];
  private name: string;

  getPerson(): Person[] {
    return this.personArr;
  }
}
