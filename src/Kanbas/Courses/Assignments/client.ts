import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };
  

export const fetchAssignments = async (courseId: any) => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
  return response.data;
};

export const fetchAssignment = async (assignmentId: any) => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
  console.log("fetching this assignment: ", assignmentId)
  return response.data;
};



export const createAssignment = async (courseId: any, assignment: any) => {
  const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`, assignment);
  console.log("POST Request:", `${REMOTE_SERVER}/api/courses/${courseId}/assignments`, assignment);
  return response.data;
};

export const updateAssignment = async (assignmentId: any, updatedAssignment: any) => {
  console.log("getting query for update assignment: ",assignmentId, updatedAssignment )
  await axiosWithCredentials.put(`${REMOTE_SERVER}/api/assignments/${assignmentId}`, updatedAssignment);
};

export const deleteAssignment = async (assignmentId: any) => {
  await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
};
