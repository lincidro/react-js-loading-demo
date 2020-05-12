import {useState, useEffect} from 'react';

export const estadosAPI = {
  LOADING: 'Cargando',
  SUCCESS: 'Éxito',
  ERROR: 'Error',
};

export const ConsumirAPI = url => {
  const [data, setData] = useState({
    state: estadosAPI.LOADING,
    error: '',
    data: [],
  });

  const setPartData = (partialData) => setData(
      { 
        ...data, 
        ...partialData 
      }
    );

  useEffect(() => {
    console.log('useEffect')
    setPartData({
      state: estadosAPI.LOADING,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: estadosAPI.SUCCESS,
          data
        });
      })
      .catch(() => {
       setPartData({
          state: estadosAPI.ERROR,
          error: 'Fetch failed'
        });
      });
  }, []);

  return data;
};