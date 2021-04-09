import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1={productId:1, productName:"kalem", categoryId:1, unitPrice:10, unitsInStock:500}
  product2={productId:2, productName:"defter", categoryId:1, unitPrice:14, unitsInStock:50}
  product3={productId:2, productName:"defter", categoryId:1, unitPrice:14, unitsInStock:50}
  product4={productId:2, productName:"defter", categoryId:1, unitPrice:14, unitsInStock:50}

  products=[this.product1, this.product2, this.product3, this.product4]
  constructor() { }

  ngOnInit(): void {
  }

}
