import { EMPLOYEES_LOADED, EMPLOYEE_ADDED } from "./constants";

export const initialState = {
  employees: [],
  Loaded: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employees, Loaded: true };
    }
    case EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      return {
        ...state,
        employees: [...state.employees, employee]
      };
    }
    default:
      return state;
  }
}

export default appReducer;
