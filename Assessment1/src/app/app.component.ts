import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">   <!--Qno1.5-->
  <h1>
    Welcome to {{ title }}!
  </h1>
  <h2>
    Educating For Better Tommorow  <!--Qno.1.4-->
  </h2>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';    // Qno.1.3
}
