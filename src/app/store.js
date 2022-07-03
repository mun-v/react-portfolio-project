import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { coursesReducer } from '../features/courses/coursesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { instructorsReducer } from '../features/instructors/instructorsSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
      courses: coursesReducer,
      comments: commentsReducer,
      instructors: instructorsReducer,
      promotions: promotionsReducer,
      user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
