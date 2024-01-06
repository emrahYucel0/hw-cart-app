import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  cartList:any = [];
  productList = new BehaviorSubject<any>([])

  getProductList(){
    return this.productList.asObservable();
  }

  setProduct(product:any) {
    this.cartList.push(product);
    
  }

  addToCart(product:any){
    this.cartList.push(product);
    this.productList.next(this.cartList);
    this.getTotalAmount();
    //console.log(this.cartList)
  }

  getTotalAmount() {
    let total = 0;
    this.cartList.map((a:any)=>{
      total += a.total;
    })
  }
  // Remove cart data one by one
  removeCartList(product:any){
    this.cartList.map((a:any, i:any)=>{
      if(product.id==a.id) this.cartList.splice(i,1)
    })
  }
  // Remove all cart data
  removeAllCartList(){
    this.cartList = []
    this.productList.next(this.cartList)
  }
}
