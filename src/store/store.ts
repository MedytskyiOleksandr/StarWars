import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {favoriteCharactersSlice} from './slices/favoritesSlice';

export const rootReducer = combineReducers({
  favoriteCharacters: favoriteCharactersSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({...favoriteCharactersSlice.actions}, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
