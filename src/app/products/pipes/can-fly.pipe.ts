import { Pipe, PipeTransform } from "@angular/core";

type Fly = 'vuela' | 'no vuela';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): Fly {
    return value ? 'vuela' : 'no vuela';
  }

}
