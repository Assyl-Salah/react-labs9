import { EMPLOYEES_LOADED } from "./constants";

// eslint-disable-next-line import/prefer-default-export
export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}