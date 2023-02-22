import { CharacterStructure } from "../../../models/characters";
import {
  CharacterApiRepoStructure,
  GotApiRepo,
} from "../../../services/repository/got.api.repo";
import { loadCreator, updateCreator } from "./char.actions.creator";
import { charReducer } from "./char.reducer";

describe("Given the Characters reducer ", () => {
  describe("When we mock the characters ", () => {
    const mockCharacter: CharacterStructure[] = [
      {
        id: 4,
        category: "king",
      },
      {
        id: 2,
        category: "king",
      },
    ];

    const payload: CharacterStructure = {
      id: 2,
      category: "squire",
    };

    test("Then reducer should equal the mock", () => {
      let result = charReducer(mockCharacter, updateCreator(payload));
      expect(result).toEqual([mockCharacter[0]], payload);
    });

    describe("When we use loadCreator", () => {
      test(" Then it should load an array of chars", () => {
        let result = charReducer(mockCharacter, loadCreator(mockCharacter));
        expect(result).toEqual(mockCharacter);
      });
    });
  });
});
