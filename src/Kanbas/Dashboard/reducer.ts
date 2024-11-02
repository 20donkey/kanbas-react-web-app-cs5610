
// reducers.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: string;
  title: string;
}

interface UserState {
  role: 'Student' | 'Faculty';
  enrolledCourses: string[]; // Array of course IDs the user is enrolled in
  showAllCourses: boolean; // Toggle between all and enrolled courses
}

interface DashboardState {
  courses: Course[];
  user: UserState;
}

const initialState: DashboardState = {
  courses: [], // Populate from an API or database initially
  user: {
    role: 'Student', // or 'Faculty', can be set based on the logged-in user
    enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses') || '[]'),
    showAllCourses: false,
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<Course[]>) {
      state.courses = action.payload;
    },
    toggleEnrollment(state, action: PayloadAction<string>) {
      const courseId = action.payload;
      if (state.user.enrolledCourses.includes(courseId)) {
        // Unenroll the student
        state.user.enrolledCourses = state.user.enrolledCourses.filter(id => id !== courseId);
      } else {
        // Enroll the student
        state.user.enrolledCourses.push(courseId);
      }
      localStorage.setItem('enrolledCourses', JSON.stringify(state.user.enrolledCourses));
    },
    toggleEnrollmentView(state) {
      state.user.showAllCourses = !state.user.showAllCourses;
    },
  },
});

export const { setCourses, toggleEnrollment, toggleEnrollmentView } = dashboardSlice.actions;
export default dashboardSlice.reducer;
