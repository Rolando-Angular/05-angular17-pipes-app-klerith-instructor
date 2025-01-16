import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'rolando';
  public nameUpper: string = 'ROLANDO';
  public fullName: string = 'roLaNDo AndRe';
  public customDate: Date = new Date();

}
