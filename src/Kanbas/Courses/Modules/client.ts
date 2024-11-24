// import axios from "axios";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const MODULES_API = `${REMOTE_SERVER}/api/modules`;
// export const deleteModule = async (moduleId: string) => {
//  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
//  return response.data;
// };
// export const updateModule = async (module: any) => {
//     const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
//     return data;
//   };
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Fetch all modules for a specific course
export const fetchModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

// Create a module for a specific course
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

// Update a specific module for a course
export const updateModule = async (courseId: string, module: any) => {
  const response = await axios.put(`${COURSES_API}/${courseId}/modules/${module._id}`, module);
  return response.data;
};

// Delete a specific module for a course
export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
  return response.data;
};
