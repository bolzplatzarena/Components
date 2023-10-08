import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary } from '../models/dictionary.model';
import { getKeyString } from '../utils/utils';

@Pipe({
    name: 'enumKey',
    standalone: true
})
export class EnumKeyPipe implements PipeTransform {
  transform(value: unknown, type: Dictionary<unknown>): string {
    return getKeyString(type, value) ?? '';
  }
}
