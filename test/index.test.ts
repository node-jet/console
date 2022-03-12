import { cli } from '../src/index';

describe('cli function', () => {
  test('returns exit code 0', () => {
    expect(cli()).toBe(0);
  });
});
