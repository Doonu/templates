import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  PersistConfig,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';

export type RootReducer = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootReducer> = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
            'acts/getPrintForm/fulfilled', // Игнорирование Blob action
          ],
        },
      }),
  });

export const store = setupStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
