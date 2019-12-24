import { dataFetched, FetchError, employeesLoaded } from "./actions";

// eslint-disable-next-line import/prefer-default-export
export const fetchemployees = () => {
  return dispatch => {
    dispatch(dataFetched());
    return fetch("http://localhost:3004/employees")
      .then(data => data.json())
      .then(
        employees => dispatch(employeesLoaded(employees)),
        error => dispatch(FetchError(error))
      );
  };
};
