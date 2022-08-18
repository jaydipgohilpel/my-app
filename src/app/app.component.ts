import { Component } from '@angular/core';
import { products } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-1-angular';
  products = products;  
    share() {
      window.alert('The product has been shared!');
    }
    

}
