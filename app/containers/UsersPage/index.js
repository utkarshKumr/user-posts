import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeUsersList } from './selectors';
import { fetchUsers } from './actions';
import reducer from './reducer';
import saga from './saga';

import './style.css';
const key = 'users';

const Users = ({ onfetchUsers, users }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log(users, 'users data');
  useEffect(() => {
    onfetchUsers();
  }, []);

  return (
    <div className="users-container">
      {
        <table>
          <tr>
            <td>Name</td>
            <td>Company</td>
            <td>Blog Posts</td>
          </tr>
          {users.map(({ id, name, company, phone }) => (
            <tr>
              <td>{name}</td>
              <td>{company.name}</td>
              <td>{phone}</td>
            </tr>
          ))}
        </table>
      }
    </div>
  );
};

Users.propTypes = {
  onfetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
};

Users.defaultProps = {
  users: [],
};

const mapStateToProps = createStructuredSelector({
  users: makeUsersList(),
});

const mapDispatchToProps = dispatch => {
  return {
    onfetchUsers: () => dispatch(fetchUsers()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(Users);
