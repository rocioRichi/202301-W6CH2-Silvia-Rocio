import { CharacterStructure } from "../features/characters/models/character";
import { CharacterApiRepo } from "./character.api.repo";

const mockCharacters: CharacterStructure[] = [
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

describe("first", () => {
  let repo: CharacterApiRepo;
  beforeEach(() => {
    repo = new CharacterApiRepo();
  });
  test("should first", () => {
    repo.loadCharacter();
    const result = repo.loadCharacter();

    expect(result).toBe({});
  });
});

// describe("Load Character", () => {
//   beforeEach(() => {

//     }),
//   }),
//   test("then  should be able to call its method", async () => {
//        global.fetch = jest.fn().mockResolvedValue({
//          ok = true,
//          json: jest
//          .fn()
//          .mockResolvedValue([{}]) as known as CharacterStructure),
//        });
// }),
