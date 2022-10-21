import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer/Reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import{combineReducers} from 'redux'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer =combineReducers({ToDo:reducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: 
      persistedReducer
 
})
export const persistor = persistStore(store)
