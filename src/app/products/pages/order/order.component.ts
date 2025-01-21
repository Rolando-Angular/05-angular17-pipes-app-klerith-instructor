import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.BLUE,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.BLACK,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.RED,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.RED,
    },
    {
      name: 'Green lantern',
      canFly: true,
      color: Color.GREEN,
    }
  ]

  public toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}
