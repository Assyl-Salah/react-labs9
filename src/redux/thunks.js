import { dataFetched, FetchError, employeesLoaded, loginsave } from "./actions";

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
export const fetchuser = uname => {
  return dispatch => {
    return fetch("http://localhost:3004/users")
      .then(data => data.json())
      .then(users => {
        const user = users.find(user => user.username === uname);
        if (user !== undefined) {
          dispatch(loginsave(user));
        }
      });
  };
};
