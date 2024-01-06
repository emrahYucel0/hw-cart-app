import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  ngOnInit(): void {
    this.getList();
  }

  products:any = [];
  allProdutcs:any = 0;
 

  constructor(private cartService:CartService,private changeDetectorRef: ChangeDetectorRef){}

  getList(){
    this.cartService.getProductList().subscribe(res=>{
      this.products = res;
      this.allProdutcs = this.cartService.getTotalAmount();
    })
  }

  getTotalAmount(){
    this.cartService.getTotalAmount()
  }

  setProduct(product:any){
    this.cartService.setProduct(product)
  }

  removeProduct(product:any){
    this.cartService.removeCartList(product)
  }

  removeAllProduct(){
    this.cartService.removeAllCartList();
  }

  calculateTotal(product: any) {
    product.priceTotal = (product.quantity || 0) * product.price;
  }

  increaseQuantity(product: any) {
    product.quantity = (product.quantity || 0) + 1;
    this.calculateTotal(product);
  }

  decreaseQuantity(product:any) {
    if (product.quantity && product.quantity > 0) {
      product.quantity -= 1;
      this.calculateTotal(product);

    }
  }
}
