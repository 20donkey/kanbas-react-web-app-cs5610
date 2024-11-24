import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const fetchEnrollments = async (userId: string) => {
  const response = await axios.get(
    `${REMOTE_SERVER}/api/users/${userId}/enrollments`
  );
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  await axios.post(`${REMOTE_SERVER}/api/users/${userId}/enrollments/${courseId}`);
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  await axios.delete(`${REMOTE_SERVER}/api/users/${userId}/enrollments/${courseId}`);
};
