import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { Fly } from '../interfaces/hero.type';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    heroes = [...heroes]
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => this.sortHeroe(a.name, b.name));
      case 'canFly':
        return heroes.sort((a, b) => {
          const canFlyA: Fly = this.mapToFlyType(a.canFly);
          const canFlyB: Fly = this.mapToFlyType(b.canFly);
          return this.sortHeroe(canFlyA, canFlyB);
        });
      case 'color':
        return heroes.sort((a, b) => this.sortHeroe(a.color, b.color));
      default:
        return heroes;
    }
  }

  private mapToFlyType(canFly: boolean): Fly {
    return canFly ? 'vuela' : 'no vuela';
  }

  private sortHeroe(field1: string | number, field2: string | number): number {
    if (field1 > field2) {
      return 1;
    } else if (field1 < field2) {
      return -1;
    } else {
      return 0;
    }
  }

}
