import calcPercents from '@/utils/calcPercents';

describe('utils/calcPercents', () => {
  it('Should return string with formatted percents', () => {
    const amount = 0.87;

    const percents = calcPercents(amount);

    expect(percents).toBe('87%');
  });

  it('Should return string with formatted 0%', () => {
    const amount = '0.87';

    const percents = calcPercents(amount);

    expect(percents).toBe('0%');
  });

  it('Should return string with formatted 0%', () => {
    const amount = 'String';

    const percents = calcPercents(amount);

    expect(percents).toBe('0%');
  });

  it('Should return string with formatted 0%', () => {
    const amount = undefined;

    const percents = calcPercents(amount);

    expect(percents).toBe('0%');
  });

  it('Should return string with formatted 0%', () => {
    const amount = null;

    const percents = calcPercents(amount);

    expect(percents).toBe('0%');
  });

  it('Should return string with formatted 0%', () => {
    const amount = NaN;

    const percents = calcPercents(amount);

    expect(percents).toBe('0%');
  });
});
