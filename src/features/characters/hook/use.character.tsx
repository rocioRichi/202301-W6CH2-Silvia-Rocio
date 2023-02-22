import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { CharacterStructure } from "../../../models/characters";
import { GotApiRepo } from "../../../services/repository/got.api.repo";
import { loadCreator, updateCreator } from "../reducer/char.actions.creator";

export function useCards(repo: GotApiRepo) {
  const chars = useSelector((state: RootState) => state.chars);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadChars = async () => {
      try {
        const data = await repo.loadCharacters();
        dispatch(loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    loadChars();
  }, [dispatch, repo]);

  const updateChar = async (char: Partial<CharacterStructure>) => {
    try {
      const finalChar = await repo.update(char);
      dispatch(updateCreator(finalChar));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    chars,
    updateChar,
  };
}
