import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('landingPageAngular17');

  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}
