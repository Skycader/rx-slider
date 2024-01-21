import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'render',
})
export class RenderPipe implements PipeTransform {
  transform(value: boolean | null, ...args: unknown[]): unknown {
    return value === false ? 'Слайдер работает' : 'Пауза';
  }
}
