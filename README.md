# PipesApp

### Technologies
### RouterModule (forRoot + forChild) + Router + routerLink

### PrimeNg

### STARTUP
####  doc reference:
[primeNG](https://v17.primeng.org/configuration)
#### 1. execute on terminal
```
npm install primeicons@17
npm install npm install primeicons
```
#### 2. put on styles.css
```
@import "primeng/resources/themes/lara-dark-indigo/theme.css";
@import "primeng/resources/primeng.css";
@import "primeicons/primeicons.css";
```
### 3. setup ripple
```
public ngOnInit(): void {
  this.primengConfig.ripple = true;
}
```
