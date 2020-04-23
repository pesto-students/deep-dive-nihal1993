import { reverse, equal } from './betterStringLib';

describe('reverse', () => {
  it('should reverse string with characters beyond ascii values', () => {
    expect(reverse("ohl 𝌆 cat")).toBe("tac 𝌆 lho");

  });
});

describe('equal', () => {
  it('should return true ', () => {
    expect(equal("mañana", "mañana")).toBe(true);
  });
  
});
