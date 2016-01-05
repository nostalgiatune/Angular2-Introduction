import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

var HEROES: Hero[] = [
    {id: 11, name: "CuntDestroyer"},
    {id: 12, name: "Mr. Justice"},
    {id: 13, name: "Losersson"},
    {id: 14, name: "Nightman"}  
];

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes" [class.selected]="hero==selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>{{selectedHero.name}}
        <div><input [(ngModel)]="selectedHero.name" placeholder="name" /></div> 
      </div>
    </div>
    `,
    styles: [`
    .selected {
        background-color: #CFD8DC !important;
        color: white;
    }
    .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
    }
    .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
    }
    .heroes li.selected:hover {
        color: white;
    }
    .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
    }
    .heroes .text {
        position: relative;
        top: -3px;
    }
    .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
    }
    `]
})
export class AppComponent {
    
    public heroes: Hero[] = HEROES;
    public title: string = "Tour of Heroes";
    public selectedHero: Hero;
    
    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}