import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productList: IProduct[] = [];
  private _apiService = inject(Api);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
      console.log(data);
    });
  }

  navigate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
