import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLogin, selectIsAdmin } from '@containers/Client/selectors';

const Client = ({ login, isAdmin, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate('/login');
    }
  }, [login, navigate]);

  return children;
};

Client.propTypes = {
  login: PropTypes.bool,
  isAdmin: PropTypes.bool,
  children: PropTypes.element,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
  isAdmin: selectIsAdmin
});

export default connect(mapStateToProps)(Client);
