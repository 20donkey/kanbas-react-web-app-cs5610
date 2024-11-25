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
const MODULES_API = `${REMOTE_SERVER}/api/modules`;





// Update a specific module for a course
export const updateModule = async (module: any) => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
  };
  

// Delete a specific module for a course
export const deleteModule = async (moduleId: string) => {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
   };
   
