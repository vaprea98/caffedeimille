import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  // Ottiene tutti i prodotti
  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }

  // Ottiene i prodotti di caffetteria
  getCaffetteriaProducts(): Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.caffetteria)
    );
  }

  // Ottiene i prodotti di pasticceria
  getPasticceriaProducts(): Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.pasticceria)
    );
  }

  // Ottiene i drink alcolici
  getDrinkProducts(): Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.drink)
    );
  }

  // Ottiene i soft drink
  getSoftDrinkProducts(): Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.softDrink)
    );
  }
// Ottini le birre
getBeerProducts():Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.beer)
    );
  }  
// Ottini i vini
  getWineProducts():Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.wine)
    );
  }

  // Ottieni distillati
  getDistillatiProducts():Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.distillati)
    );
  }

  // Ottieni Champagne
  getAmariProducts():Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.amari)
    );
  }

  // Ottieni Champagne
  getChampagneProducts():Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => data.drinkeria.champagne)
    );
  }

  // Ottiene tutti i prodotti di drinkeria (drink + soft drink)
  getAllDrinkeriaProducts(): Observable<ProductItem[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(data => [...data.drinkeria.drink, ...data.drinkeria.softDrink])
    );
  }
}