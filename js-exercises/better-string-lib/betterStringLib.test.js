import { reverse, equal } from './betterStringLib';


const str1 = 'man\u0303ana';
const str2 = 'ma\xF1ana';


describe('equal', () => {
  it('should return true ', () => {
    expect(equal(str1, str2)).toBe(true);
  });
  
});