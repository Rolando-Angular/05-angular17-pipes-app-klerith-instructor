# PipesApp

### Technologies
### RouterModule (forRoot + forChild) + Router + routerLink
### @angular/common/locales + registerLocaleData
### @Pipe + PipeTransform

### Pipes
* lowercase
* uppercase
* titlecase
* date
* number
* currency
* i18nSelect
* i18nPlural
* slice
* json
* keyvalue
* async

### PrimeNg

### STARTUP
####  doc reference:
[primeNG](https://v17.primeng.org/configuration)
#### 1. execute on terminal
```
npm install primeng
npm install primeicons
npm install primeflex
```
#### 2. put on styles.css
```
@import "primeng/resources/themes/lara-dark-indigo/theme.css";
@import "primeng/resources/primeng.css";
@import "primeicons/primeicons.css";
@import "primeflex/primeflex.min.css";
```
### 3. setup ripple
```
public ngOnInit(): void {
  this.primengConfig.ripple = true;
}
```

# My Page deployed thanks to GitHub Pages:
https://rolando-angular.github.io/angular-pipes-app-klerith-instructor/
