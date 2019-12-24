import { EMPLOYEES_LOADED, EMPLOYEE_ADDED ,DATA_FETCHING ,FETCHING_ERROR , LOGIN_SAVED ,LOGIN_ERROR} from "./constants";

export const initialState = {
  employees: [],
  Loaded: false,
  isLoading: false,
  error: null,
  isActive: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employees, Loaded: true, isLoading: false};
    }
    case EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      return {
        ...state,
        employees: [...state.employees, employee]
      };
    }
    case DATA_FETCHING: {
      const { employees } = action.payload;
      return { ...state, employees, isLoading: true, error: null };
    }
    case FETCHING_ERROR: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }

    case LOGIN_SAVED: {
      const { user } = action.payload;
      return { ...state, user, isActive: true };
    }
    default:
      return state;
  }
}

export default appReducer;
