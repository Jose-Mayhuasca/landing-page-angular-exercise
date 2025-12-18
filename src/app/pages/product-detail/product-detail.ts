import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  private _route = inject(ActivatedRoute);
  private _apiService = inject(Api);
  loading: boolean = false;

  public product?: IProduct;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        console.log(data);
        this.product = data;
        this.loading = true;
      });
    });
  }
}
