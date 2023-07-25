import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {
  categories = ["shoes", "sports", "food"];
  @Output() showCategory = new EventEmitter<string>();

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
