import { Dictionary } from '../models/dictionary.model';

export function keyString<T>(types: Dictionary<unknown>, enumValue: T): string | undefined {
  return Object
    .entries(types)
    .filter(([key]) => isNaN(Number(key)))
    .find(([, value]) => value === enumValue)?.[0];
}
