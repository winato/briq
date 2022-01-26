import removeDash from '@/utils/removeDash';

describe('utils/removeDash', () => {
  it('Should return string without dashes', () => {
    const string = 'hello-world';

    const withoutDashes = removeDash(string);

    expect(withoutDashes).toBe('hello world');
  });

  it('Should return empty string', () => {
    const string = 998;

    const withoutDashes = removeDash(string);

    expect(withoutDashes).toBe('');
  });

  it('Should return empty string', () => {
    const string = null;

    const withoutDashes = removeDash(string);

    expect(withoutDashes).toBe('');
  });

  it('Should return empty string', () => {
    const string = undefined;

    const withoutDashes = removeDash(string);

    expect(withoutDashes).toBe('');
  });

  it('Should return empty string', () => {
    const string = '';

    const withoutDashes = removeDash(string);

    expect(withoutDashes).toBe('');
  });
});
