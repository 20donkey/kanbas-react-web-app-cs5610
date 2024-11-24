import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const fetchAssignments = async (courseId: any) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
  return response.data;
};

export const fetchAssignment = async (assignmentId: any) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (courseId: any, assignment: any) => {
  const response = await axios.post(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`, assignment);
  console.log("POST Request:", `${REMOTE_SERVER}/api/courses/${courseId}/assignments`, assignment);
  return response.data;
};

export const updateAssignment = async (assignmentId: any, updatedAssignment: any) => {
  await axios.put(`${REMOTE_SERVER}/api/assignments/${assignmentId}`, updatedAssignment);
};

export const deleteAssignment = async (assignmentId: any) => {
  await axios.delete(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
};
