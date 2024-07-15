import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Bart Simpson' },
      { id: 13, name: 'Lisa Simpson' },
      { id: 14, name: 'Homer Simpson' },
      { id: 15, name: 'Marge Simpson' },
      { id: 16, name: 'Krusty, the Clown' },
      { id: 17, name: 'Barney Gumble' },
      { id: 18, name: 'Ned Flanders' },
      { id: 19, name: 'Apu' },
      { id: 20, name: 'Maggie, the Simpson Baby' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
