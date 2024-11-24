import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({
  baseURL: process.env.REACT_APP_REMOTE_SERVER, // Ensure this points to your backend
  withCredentials: true, // Include cookies or session data
});
export const fetchWelcomeMessage = async () => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/lab5/welcome`);
  console.log("this is working?")
  return response.data;
};

const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axiosWithCredentials.get(TODOS_API);
  return response.data;
};
export const removeTodo = async (todo: any) => {
    const response = await axiosWithCredentials.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
  };
  export const createTodo = async () => {
    const response = await axiosWithCredentials.get(`${TODOS_API}/create`);
    return response.data;
  };
  export const postTodo = async (todo: any) => {
    const response = await axiosWithCredentials.post(`${TODOS_API}`, todo);
    return response.data;
  };
  export const deleteTodo = async (todo: any) => {
    const response = await axiosWithCredentials.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
  };
  export const updateTodo = async (todo: any) => {
    const response = await axiosWithCredentials.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
  };
  
  
  

