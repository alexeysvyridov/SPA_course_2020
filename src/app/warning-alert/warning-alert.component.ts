import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  styles: [
  `p {
    padding: 20px;
    border: 1px solid red;
    background: red;
  }`
  ],
  template: `
    <p>This is warning alert component!!</p>
  `
})

export class WarningAlertComponent {

}
