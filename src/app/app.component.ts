import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from "../components/product/product.component";
import { CartComponent } from "../components/cart/cart.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductComponent, CartComponent,RouterLink,FormsModule]
})
export class AppComponent {
  title = 'cart-app';


}
