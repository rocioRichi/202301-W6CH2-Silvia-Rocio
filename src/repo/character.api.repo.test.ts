import { CharacterStructure } from "../features/characters/models/character";
import { CharacterApiRepo } from "./character.api.repo";

const mockCharacactersacters: CharacterStructure[] = [
  {
    name: "rey",
    family: "string",
    age: 3,
    isAlive: true,
    message: "string",
    category: "king",
    kingdomYears: 4,
    weapon: "sword",
    skill: 4,
  },
  {
    name: "luchador",
    family: "string",
    age: 4,
    isAlive: true,
    message: "string",
    category: "king",
    kingdomYears: 4,
    weapon: "sword",
    skill: 5,
    submission: 6,
  },
];

describe("Given a class a", () => {
  describe("When create an object class a", () => {
    const repo = new CharacterApiRepo();
  });
});
test("if not response throw an error", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,

    json: jest.fn(),
  });
  const result = await CharacterApiRepo.loadCharacter();
  expect(result).toEqual([]);
  console.log(CharacterApiRepo.loadCharacter());
});
