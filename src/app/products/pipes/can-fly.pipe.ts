import { Pipe, PipeTransform } from "@angular/core";
import { Fly } from "../interfaces/hero.type";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): Fly {
    return value ? 'vuela' : 'no vuela';
  }

}
