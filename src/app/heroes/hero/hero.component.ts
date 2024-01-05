import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iron-Man';
  public age: number = 45;

  get capitlizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName() {
    this.name = 'Spider-Man'

  }
  changeAge() {
    this.age = 23
  }
  formReset(){
    this.name = 'iron-Man';
    this.age = 45;
  }
}
