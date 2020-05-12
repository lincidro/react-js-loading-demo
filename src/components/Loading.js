import React, {Fragment} from 'react';
import loading from '../images/loading.gif';

export const Loading = props => {
  return (
    <Fragment>
      <img src={loading} alt="loading" />
    </Fragment>
  );
}