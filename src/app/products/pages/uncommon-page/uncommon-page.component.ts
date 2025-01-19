import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

type Gender = 'male' | 'female';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Fernando';
  public gender: Gender = 'male';
  public invitationMap: { [key: string]: string } = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap: { [key: string]: string } = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes',
  }

  // keyValue Pipe
  public person: { [key: string]: string | number } = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }


  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(tap(value => console.log(value)))
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
      this.person["name"] = 'otro nombre';
    }, 3000);
  });

  constructor() { }

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  public deleteClient(): void {
    this.clients.shift();
  }

}
