import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';
import { IProduct } from '../../models/product.model';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  imports: [AsyncPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  private _route = inject(ActivatedRoute);
  private _apiService = inject(Api);

  public product$!: Observable<IProduct>;

  ngOnInit(): void {
    this.product$ = this._route.params.pipe(
      switchMap((params) => this._apiService.getProduct(params['id']))
    );
  }
}
