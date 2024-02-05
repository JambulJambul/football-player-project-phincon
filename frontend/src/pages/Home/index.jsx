import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { fetchPokemon, register } from './actions';
import encryptPayload from '@utils/encryptionHelper';

import { selectPokemon } from './selectors';

const Home = () => {
  return (
    <>
      <div>
        TEST ANJAY
      </div>
    </>
  );
};

Home.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps)(Home);
