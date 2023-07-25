import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/modules/prodcut.modules";
import { CartService } from "src/app/service/cart.service";
import { StoreService } from "src/app/service/store.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: `./home.component.html`,
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = "desc";
  count = "12";
  productSubcription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.storeService.getAllProducts(this.count, this.sort).subscribe((_products) => {
      this.products = _products;
    });
  }

  onColumsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(prodcut: Product): void {
    this.cartService.addToCart({
      product: prodcut.image,
      name: prodcut.title,
      price: prodcut.price,
      quantity: 1,
      id: prodcut.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productSubcription) {
      this.productSubcription.unsubscribe();
    }
  }
}
