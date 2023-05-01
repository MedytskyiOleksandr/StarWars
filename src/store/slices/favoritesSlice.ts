import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SWPerson} from '../../types/sw-person';

interface State {
  favoriteCharacters: SWPerson[];
  genderCount: {
    male: number;
    female: number;
    other: number;
  };
}

const initialState = {
  favoriteCharacters: [],
  genderCount: {
    male: 0,
    female: 0,
    other: 0,
  },
} as State;

export const favoriteCharactersSlice = createSlice({
  name: 'favoritesCharacters',
  initialState: initialState,
  reducers: {
    like: (state, action: PayloadAction<SWPerson>) => {
      const character = action.payload;
      state.favoriteCharacters = [...state.favoriteCharacters, character];

      const gender = character.gender;

      if (gender === 'male') {
        state.genderCount.male++;
      } else if (gender === 'female') {
        state.genderCount.female++;
      } else {
        state.genderCount.other++;
      }

      return state;
    },
    unlike: (state, action: PayloadAction<SWPerson>) => {
      const character = action.payload;
      state.favoriteCharacters = state.favoriteCharacters.filter(
        favoriteCharacter => favoriteCharacter.name !== character.name,
      );

      const gender = character.gender;

      if (gender === 'male') {
        state.genderCount.male--;
      } else if (gender === 'female') {
        state.genderCount.female--;
      } else {
        state.genderCount.other--;
      }

      return state;
    },
    resetAll: () => initialState,
  },
});

export const {like, unlike, resetAll} = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;
