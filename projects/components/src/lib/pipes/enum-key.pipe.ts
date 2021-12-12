import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary } from '../models/dictionary.model';
import { keyString } from '../utils/utils';

@Pipe({ name: 'enumKey' })
export class EnumKeyPipe implements PipeTransform {
  transform(value: unknown, type: Dictionary<unknown>): string {
    return keyString(type, value) ?? '';
  }
}
