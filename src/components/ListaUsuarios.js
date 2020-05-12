// ./PostList.jsx
import React,{Fragment} from 'react';
import {estadosAPI, ConsumirAPI} from './ConsumirAPI'
import {Loading} from './Loading'

export const ListaUsuarios = () => {
  const { state, error, data } = ConsumirAPI(
    'https://jsonplaceholder.typicode.com/users'
    );

  switch (state) {
    case estadosAPI.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case estadosAPI.SUCCESS:
      return (
        <Fragment>
          <p>Data:</p>
          <ul>
            {data.map((element) => (
              <li key={element.id}>
                {element.name}
              </li>
            ))}
          </ul>
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <p>Cargando..</p>
          <Loading/>
        </Fragment>
      )
  }
};