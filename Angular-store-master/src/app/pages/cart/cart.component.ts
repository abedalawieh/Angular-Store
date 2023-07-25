import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/modules/cart.modules";
import { CartService } from "src/app/service/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: `cart.component.html`,
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "sinckers",
        price: 1509,
        quantity: 1,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ["product", "name", "price", "quantity", "total", "action"];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onSubQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
}
