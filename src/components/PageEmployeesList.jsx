import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchemployees } from "../redux/thunks";
// import { employeesLoaded } from "../redux/actions";

// eslint-disable-next-line max-len
const EmployeeLine = ({ employee }) => (
  <div>
    {employee.name} ({employee.age} yrs old): {employee.company}
  </div>
);

class PageEmployeesList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    // this.state = {
    //     isLoading: false
    //  };
  }

  componentDidMount() {
    if (!this.props.Loaded) {
      /* this.setState({ isLoading: true });
      fetch("http://localhost:3004/employees")
        .then(data => data.json())
        // Without Redux
        // .then((employees) => this.setState({ employees, isLoading: false }));
        // With Redux
        .then(employees => {
          this.props.employeesLoaded(employees);
          this.setState({ isLoading: false });
        }); */
      this.props.fetchemployees();
    }
  }

  render() {
    // const { isLoading } = this.state;
    //   const { employees } = this.props;
    const { employees, isLoading, user, isActive } = this.props;
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        {isActive && (
          <div align="right">
            <h4>{user.full_name}</h4>
          </div>
        )}
        <h1>Employees List:</h1>
        {employees &&
          employees.map(employee => (
            <EmployeeLine key={employee._id} employee={employee} />
          ))}
        <Link to="/new">
          {/* eslint-disable-next-line react/button-has-type */}
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /* , ownProps */) => {
  return {
    employees: state.employees,
    Loaded: state.Loaded,
    isLoading: state.isLoading,
    user: state.user,
    isActive: state.isActive
  };
};

const mapDispatchToProps = dispatch => ({
  // employeesLoaded: employees => dispatch(employeesLoaded(employees))
  fetchemployees: () => dispatch(fetchemployees())
});

// eslint-disable-next-line max-len
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageEmployeesList));
