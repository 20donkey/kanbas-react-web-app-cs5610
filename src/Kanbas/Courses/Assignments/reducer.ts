// // reducer.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import assignmentsData from '../../Database/assignments.json';

// interface Assignment {
//   _id: string;
//   title: string;
//   course: string;
//   dueDate: string;
//   points: number;
// }

// export interface AssignmentsState {
//   assignments: Assignment[];
//   filteredAssignments: Assignment[];
// }

// const initialState: AssignmentsState = {
//   assignments: [],
//   filteredAssignments: [],
// };

// const assignmentsSlice = createSlice({
//   name: 'assignments',
//   initialState,
//   reducers: {
//     setAssignments(state, action: PayloadAction<Assignment[]>) {
//       console.log("setAssignments called with data:", action.payload);
//       state.assignments = action.payload;
//       state.filteredAssignments = action.payload;
//     },
//     filterAssignmentsByCourse(state, action: PayloadAction<string>) {
//       console.log("Filtering assignments by course:", action.payload);
//       state.filteredAssignments = state.assignments.filter(
//         (assignment) => assignment.course === action.payload
//       );
//       console.log("Filtered assignments:", state.filteredAssignments);
//     },
//     updateAssignment(state, action: PayloadAction<Assignment>) {
//         console.log("Updating assignment:", action.payload);
//       const index = state.assignments.findIndex(
//         (assignment) => assignment._id === action.payload._id
//       ); 
//       if (index !== -1) {
//         state.assignments[index] = { ...state.assignments[index], ...action.payload };
//         state.filteredAssignments = state.assignments.filter(
//           (assignment) => assignment.course === action.payload.course
//         );
//       }
//     },
//     addAssignment(state, action: PayloadAction<Assignment>) {
//         console.log("Adding new assignment:", action.payload);
//       state.assignments.push(action.payload);
//       state.filteredAssignments.push(action.payload);
//     },
//   },
// });

// export const { setAssignments, filterAssignmentsByCourse, updateAssignment, addAssignment } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

// reducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import assignmentsData from '../../Database/assignments.json';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  dueDate: string;
  points: number;
}

export interface AssignmentsState {
  assignments: Assignment[];
  filteredAssignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: assignmentsData,
  filteredAssignments: assignmentsData,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setAssignments(state, action: PayloadAction<Assignment[]>) {
      console.log("setAssignments called with data:", action.payload);
      state.assignments = action.payload;
      state.filteredAssignments = action.payload;
    },
    filterAssignmentsByCourse(state, action: PayloadAction<string>) {
      console.log("Filtering assignments by course:", action.payload);
      state.filteredAssignments = state.assignments.filter(
        (assignment) => assignment.course === action.payload
      );
      console.log("Filtered assignments:", state.filteredAssignments);
    },
    updateAssignment(state, action: PayloadAction<Assignment>) {
      console.log("Updating assignment:", action.payload);
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = action.payload;
        state.filteredAssignments = state.assignments.filter(
          (assignment) => assignment.course === action.payload.course
        );
        console.log("Updated assignments:", state.assignments);
      }
    },
    addAssignment(state, action: PayloadAction<Assignment>) {
      console.log("Adding new assignment:", action.payload);
      state.assignments.push(action.payload);
      state.filteredAssignments = state.assignments.filter(
        (assignment) => assignment.course === action.payload.course
      );
      console.log("Assignments after adding:", state.assignments);
    },

    removeAssignment(state, action: PayloadAction<string>) {
        state.assignments = state.assignments.filter((a) => a._id !== action.payload);
        state.filteredAssignments = state.filteredAssignments.filter((a) => a._id !== action.payload);
      },
  },
});

export const { setAssignments, filterAssignmentsByCourse, updateAssignment, addAssignment, removeAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
