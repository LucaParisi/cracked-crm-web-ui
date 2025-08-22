import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {Auth} from '@apis';

@Component({
  selector: 'app-navigation-bar',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './navigation-bar.html'
})
export class NavigationBar {

  constructor( private readonly router: Router) {}

    // This list of routes is temporary just for design purpose
    pages = [
      { id: 1, name: "Home", route: "" },
      { id: 2, name: "Subscriptions", route: "subscriptions" },
      { id: 3, name: "About", route: "about" },
      { id: 4, name: "Contacts", route: "contacts" },
    ]

  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }

}
