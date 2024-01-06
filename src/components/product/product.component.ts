import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productList:Product[] = [];
  notification: string | null = null;

  


  constructor(private productService:ProductService,
    private cartService:CartService){}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.getAll().subscribe(res=>{
      this.productList=res;
      // this.productList.forEach((i:any)=>{
      //   Object.assign(i,{quantity:1, total:i.price})
      // })
    })
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
    //console.log("eklendi")
    this.notification = 'Ürün sepete eklendi';
    this.showNotification();

  }

  showNotification() {
    // Bildirimi 1 saniye sonra temizle
    setTimeout(() => {
      this.notification = null;
    }, 1000);
  }


}
