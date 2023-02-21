import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";

const initialState: CharacterStructure[] = [];

export const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state: any, { payload }: any) => payload);
  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );
  builder.addDefaultCase((state) => state);
});
