import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import dashboardReducer from "./Dashboard/reducer"

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignments: assignmentsReducer,
    dashboard: dashboardReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;