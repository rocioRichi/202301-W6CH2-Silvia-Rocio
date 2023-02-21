import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import { charactersActions } from "./character.action.types";

export const loadCreator = createAction<CharacterStructure[]>(
  charactersActions.load
);

export const addCreator = createAction<CharacterStructure>(
  charactersActions.add
);

export const updateCreator = createAction<CharacterStructure>(
  charactersActions.update
);

export const deleteCreator = createAction<CharacterStructure["id"]>(
  charactersActions.delete
);
