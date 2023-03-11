import React, {createContext, useEffect, useState} from 'react';
import {getApi} from '../../api/api';

export const cardConText = createContext();
export const dispatchCardText = createContext();

const Context = ({children}) => {
  const [data, setData] = useState();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getData = () => {
      getApi()
        .then(result => {
          setData(result.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getData();
  }, []);

  const state = {data, details};
  const dispatch = {setData, setDetails};

  return (
    <cardConText.Provider value={state}>
      <dispatchCardText.Provider value={dispatch}>
        {children}
      </dispatchCardText.Provider>
    </cardConText.Provider>
  );
};

export default Context;
