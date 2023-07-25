import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-product-header",
  templateUrl: `./product-header.component.html`,
  styles: [],
})
export class ProductHeaderComponent {
  @Output() columnCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount: number = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnUpdated(colsNum: number): void {
    this.columnCountChange.emit(colsNum);
  }
}
