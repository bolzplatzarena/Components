import { Dictionary } from './dictionary.model';

export interface SelectOption<T> {
  label?: string;
  labelTranslateKey?: string;
  value: T;
}

export function translatableFrom<T>(types: Dictionary<unknown>, translateKey: string): SelectOption<T>[] {
  return Object
    .entries(types)
    .filter(([key]) => isNaN(Number(key)))
    .map(([key, value]) => ({
      labelTranslateKey: `${translateKey}.${key.toLowerCase()}`,
      value: value as T,
    }));
}
