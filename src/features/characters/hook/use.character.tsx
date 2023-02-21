import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { CharacterApiRepo } from "../../../repo/character.api.repo";
import { loadCreator } from "../reducer/character.actions.creater";

export function useTasks(repo: CharacterApiRepo) {
  const tasks = useSelector((state: RootState) => state.character);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await repo.loadCharacter();
        dispatch(loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadCharacter();
  }, [dispatch, repo]);

  return {
    tasks,
  };
}

function loadCharacter() {
  throw new Error("Function not implemented.");
}
