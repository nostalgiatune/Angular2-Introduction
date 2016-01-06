import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    
    public getHeroes() {
        return Promise.resolve(HEROES);
    }
}