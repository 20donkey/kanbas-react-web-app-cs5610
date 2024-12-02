// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   modules: [],
// };
// const modulesSlice = createSlice({
//   name: "modules",
//   initialState,
//   reducers: {
//     setModules: (state, action) => {
//       state.modules = action.payload;
//     },

//     // addModule: (state, { payload: module }) => {
//     //   const newModule: any = {
//     //     _id: new Date().getTime().toString(),
//     //     lessons: [],
//     //     name: module.name,
//     //     course: module.course,
//     //   };
//     //   state.modules = [...state.modules, newModule] as any;
//     // },
//     addModule: (state, { payload: module }) => {
//       // Ensure the new module is added with its MongoDB-generated `moduleId`
//       const newModule = {
//         moduleId: module.moduleId || module._id, // Use `moduleId` or fallback to `_id`
//         lessons: module.lessons || [],         // Default to an empty lessons array
//         name: module.name,
//         course: module.course,
//       };
//       state.modules = [...state.modules, newModule];
//     },
    
//     deleteModule: (state, { payload: moduleId }) => {
//       state.modules = state.modules.filter(
//         (m: any) => m._id !== moduleId);
//     },
//     updateModule: (state, { payload: module }) => {
//       state.modules = state.modules.map((m: any) =>
//         m._id === module._id ? module : m
//       ) as any;
//     },
//     editModule: (state, { payload: moduleId }) => {
//       state.modules = state.modules.map((m: any) =>
//         m._id === moduleId ? { ...m, editing: true } : m
//       ) as any;
//     },
//   },
// });
// export const { addModule, deleteModule, updateModule, editModule, setModules } =
//   modulesSlice.actions;
// export default modulesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define TypeScript Interfaces
interface Module {
  moduleId: String; // MongoDB-generated ID or custom ID
  lessons: any[];   // Replace `any` with a specific lesson type if available
  name: String;
  course: String;
  editing?: boolean; // Optional flag for editing mode
}

interface ModulesState {
  modules: Module[];
}

// Initial State
const initialState: ModulesState = {
  modules: [],
};

// Redux Slice
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },

    addModule: (state, { payload: module }: PayloadAction<Module>) => {
      const newModule: Module = {
        moduleId: module.moduleId, // Use `moduleId` or fallback to `_id`
        lessons: module.lessons || [],
        name: module.name,
        course: module.course,
        editing: false, // Default editing state
      };
      state.modules = [...state.modules, newModule];
    },

    deleteModule: (state, { payload: moduleId }: PayloadAction<String>) => {
      state.modules = state.modules.filter((m) => m.moduleId !== moduleId);
    },

    updateModule: (state, { payload: module }: PayloadAction<Module>) => {
      state.modules = state.modules.map((m) =>
        m.moduleId === module.moduleId ? module : m
      );
    },

    editModule: (state, { payload: moduleId }: PayloadAction<String>) => {
      state.modules = state.modules.map((m) =>
        m.moduleId === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

// Export Actions and Reducer
export const {
  addModule,
  deleteModule,
  updateModule,
  editModule,
  setModules,
} = modulesSlice.actions;

export default modulesSlice.reducer;
