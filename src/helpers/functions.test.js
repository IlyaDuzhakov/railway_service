jest.mock("uuid", () => ({
  v4: () => "test-id",
}));

import { formatCity } from "./functions";

describe("formatCity", () => {
  test("formats simple city name", () => {
    expect(formatCity("москва")).toBe("Москва");
  });

  test("formats city with hyphen", () => {
    expect(formatCity("ростов-на-дону")).toBe("Ростов-На-Дону");
  });

  test("returns empty string", () => {
    expect(formatCity("")).toBe("");
  });
});