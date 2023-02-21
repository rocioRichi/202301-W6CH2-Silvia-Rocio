import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import { charactersActions } from "./character.action.types";

export const loadCreator = createAction<CharacterStructure[]>(
  charactersActions.load
);
