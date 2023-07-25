import { Component, Input, OnInit } from "@angular/core";
import { CartItem } from "src/app/modules/cart.modules";
import { Cart } from "src/app/modules/cart.modules";
import { CartService } from "src/app/service/cart.service";

@Component({
  selector: "app-header",
  templateUrl: `./header.component.html`,
  styles: [],
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    console.log(cart);

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onRemoveCart() {
    this.cartService.clearCart();
  }
}
