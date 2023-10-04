import { Dictionary } from '../models/dictionary.model';
import { SelectOption } from '../models/select-option.model';

export function getKeyString<T>(types: Dictionary<unknown>, enumValue: T): string | undefined {
  return Object
    .entries(types)
    .filter(([key]) => isNaN(Number(key)))
    .find(([, value]) => value === enumValue)?.[0];
}

export function getTranslatableFrom<T>(types: Dictionary<unknown>, translateKey: string): SelectOption<T>[] {
  return Object
    .entries(types)
    .filter(([key]) => isNaN(Number(key)))
    .map(([key, value]) => ({
      labelTranslateKey: `${translateKey}.${key.toLowerCase()}`,
      value: value as T,
    }));
}
