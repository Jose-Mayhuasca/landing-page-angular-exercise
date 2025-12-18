import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productList$!: Observable<IProduct[]>;
  private _apiService = inject(Api);
  private _router = inject(Router);

  ngOnInit(): void {
    this.productList$ = this._apiService.getProducts();
  }

  navigate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
