import { CharacterStructure } from "../../models/characters";
import { GotApiRepo } from "./got.api.repo";

describe("Given the Got Api repo", () => {
  describe("When we instance a new repo", () => {
    let repo: GotApiRepo;
    beforeEach(() => {
      repo = new GotApiRepo();
    });

    const mockCharacter: Partial<CharacterStructure> = {
      name: "e",
      id: 2,
    };

    test("Then it shouldn't throw the error if its true", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{}] as unknown as CharacterStructure),
      });
      const result = await repo.loadCharacters();
      expect(result).toEqual([{}]);
    });

    test("Then it should throw the error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{}] as unknown as CharacterStructure),
      });
      const result = await repo.update(mockCharacter);
      expect(result).toEqual([{}]);
    });
  });
});
