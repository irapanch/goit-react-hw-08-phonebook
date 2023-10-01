import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authReduser } from './auth/sliceAuth';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReduser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
