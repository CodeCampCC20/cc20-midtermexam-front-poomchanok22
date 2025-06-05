import { create } from 'zustand';

const BASE_URL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com";

const useToDoStore = create((set) => ({
  todos: [],


  actionFetchToDoByUserId: async (userId) => {
    try {
      const res = await fetch(`${BASE_URL}/api/V1/todos/${userId}`);
      const data = await res.json();
      if (data.success) {
        set({ todos: data.todos }); 
        console.log(data)
      }
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  },

  actionAddTodo: async (newTodo) => {
    try {
      const res = await fetch(`${BASE_URL}/api/V1/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      const data = await res.json();
      if (data.success) {
        set((state) => ({
          todos: [...state.todos, data.todo],
        }));
      }
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  },

  
  actionToggleTodo: async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/api/V1/todos/${id}/22`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (data.success) {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      }
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  },
  
  actionDeleteTodo: async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/api/V1/todos/${id}/22`, {
        method: "DELETE",
      });

      
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  },
}));

export default useToDoStore;