import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actionTypes";

const initialState = {
  tasksByDay: {}
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [action.payload.day]: [
            ...(state.tasksByDay[action.payload.day] || []),
            { id: Date.now(), text: action.payload.task },
          ],
        },
      };
    case EDIT_TASK:
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [action.payload.day]: state.tasksByDay[action.payload.day].map((task) =>
            task.id === action.payload.taskId
              ? { ...task, text: action.payload.updatedTask }
              : task
          ),
        },
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [action.payload.day]: state.tasksByDay[action.payload.day].filter(
            (task) => task.id !== action.payload.taskId
          ),
        },
      };
    default:
      return state;
  }
};

export default tasksReducer;