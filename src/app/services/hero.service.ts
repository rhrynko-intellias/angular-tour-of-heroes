import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES, Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
