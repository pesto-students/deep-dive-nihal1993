import { accessorProperties } from "./accessorProperties";


describe("accessorProperties", () => {
  test("should return binary  of number if  decimal", () => {
    const obj = accessorProperties();
    obj.number = 5;
    expect(obj.number).toBe(101);
  });
  test("should return normal value if  set to non-decimal", () => {
    const obj = accessorProperties();
    obj.number = "iamastring";
    expect(obj.number).toBe("iamastring");
  });
});