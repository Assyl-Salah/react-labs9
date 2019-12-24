import {
  EMPLOYEES_LOADED,
  EMPLOYEE_ADDED,
  DATA_FETCHING,
  FETCHING_ERROR,
  LOGIN_SAVED
} from "./constants";

// eslint-disable-next-line import/prefer-default-export
export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};
export const addEmployee = employee => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
};
export const dataFetched = () => {
  return {
    type: DATA_FETCHING,
    payload: {}
  };
};

export const FetchError = error => {
  return {
    type: FETCHING_ERROR,
    payload: {
      error
    }
  };
}
export const loginsave = user => {
  return {
    type: LOGIN_SAVED,
    payload: {
      user
    }
  };
}
