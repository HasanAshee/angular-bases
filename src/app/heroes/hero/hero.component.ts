import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 16;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescrption(){
     return `${this.name} - ${this.age}`
  }

  changeHero():void{
   this.name = `Black Panther`
  }

  changeAge():void{
   this.age = 50
  }

  resetForm():void{
    this.name = `Spiderman`;
    this.age = 16
  }
}
