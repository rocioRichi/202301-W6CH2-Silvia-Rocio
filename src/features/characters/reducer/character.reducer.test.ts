import { CharacterStructure } from "../models/character";
import { loadCreator, updateCreator } from "./character.actions.creater";
import { characterReducer } from "./character.reducer";

const mockCharacacters: CharacterStructure[] = [
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

const mockPayload: CharacterStructure = {
  name: "Pepito",
  family: "string",
  age: 4,
  isAlive: true,
  message: "string",
  category: "king",
  kingdomYears: 4,
  weapon: "sword",
  skill: 5,
  submission: 6,
};

describe("Given a Reducer function", () => {
  describe("When  load an object", () => {
    test("Then it should loadback that object", () => {
      let result = characterReducer(
        mockCharacacters,
        loadCreator(mockCharacacters)
      );
      expect(result).toEqual(mockCharacacters);
    });
  });
});
