import {actions, ADD_TODO, REMOVE_ALL_COMPLETED_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_ALL_TODO, TOGGLE_TODO} from './todo.actions';
import {Todo} from './model/todo';

const todo1 = new Todo('Clean the kitchen');
const todo2 = new Todo('Read the newspaper');
todo2.completed = true;

const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: actions): Todo[] {

  switch (action.type) {

    case ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    case TOGGLE_TODO:
      return state.map(todoEdit => {
          if (todoEdit.id === action.id) {
            return {
              ...todoEdit,
              completed: !todoEdit.completed
            };
          } else {
            return todoEdit;
          }
        }
      );

    case TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completed: action.completed
        };
      });
    case EDIT_TODO:
      return state.map(todoEdit => {
          if (todoEdit.id === action.id) {
            return {
              ...todoEdit,
              text: action.text
            };
          } else {
            return todoEdit;
          }
        }
      );
    case REMOVE_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);
    case REMOVE_ALL_COMPLETED_TODO:
      return state.filter(todoEdit => !todoEdit.completed);
    default:
      return state;
  }

}
