import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './features/user/userSlice'
import { contactReducer } from './features/data/contact'
import { rquirmentReducer } from './features/requirment/require'
import { workspaceReducer } from './features/data/workspace'

// ...

export const createStore = () => {
  return configureStore({
    reducer: {
      user : userReducer,
      contact : contactReducer,
      rquirment : rquirmentReducer,
      workspace : workspaceReducer,
    },
  })
}

export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']