import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../../../models/characters";
import { loadCreator, updateCreator } from "./char.actions.creator";

const initialState: CharacterStructure[] = [];

export const charReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCreator, (_state, { payload }) => payload);
  builder.addCase(updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );

  builder.addDefaultCase((state) => state);
});
