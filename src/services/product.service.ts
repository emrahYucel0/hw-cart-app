import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products`)
  }

  // addToChart(productId:number) {
  //   return this.httpClient.get(`https://fakestoreapi.com/products/addToChart`+productId)
  // }
}
