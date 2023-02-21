import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import { loadCreator } from "./character.actions.creater";

const initialState: CharacterStructure[] = [];

export const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCreator, (_state: any, { payload }: any) => payload);

  builder.addDefaultCase((state) => state);
});
