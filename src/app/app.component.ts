import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public title: string = 'rOlaNdo bArdaLes';

  constructor(private primengConfig: PrimeNGConfig) { }

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
