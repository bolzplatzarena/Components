import { getKeyString, getTranslatableFrom } from './utils';

enum NumericType {
  Fighter,
  Spy,
}

enum StringType {
  Fighter = 'FIGHTER',
  Spy = 'SPY',
}

describe('enum utils', () => {
  it('finds the key of numeric and string enums', () => {
    expect(getKeyString(NumericType, NumericType.Spy)).toBe('Spy');
    expect(getKeyString(StringType, StringType.Fighter)).toBe('Fighter');
    expect(getKeyString(NumericType, 42)).toBeUndefined();
  });

  it('builds select options without the reverse mapping of numeric enums', () => {
    expect(getTranslatableFrom(NumericType, 'hero.types')).toEqual([
      { labelTranslateKey: 'hero.types.fighter', value: NumericType.Fighter },
      { labelTranslateKey: 'hero.types.spy', value: NumericType.Spy },
    ]);
  });
});
