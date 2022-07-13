import calculator from "./calculator";

describe("Given a sum function", () => {
  describe("When it's called audit receives 4 and 2", () => {
    test("Then it should return 6", () => {
      const primerNumero = 4;
      const segundoNumero = 2;
      const expectedTotal = 6.0;

      const expectedReturn = calculator(primerNumero, segundoNumero);
      expect(expectedTotal).toBe(+expectedReturn[0]);
    });
  });
});
