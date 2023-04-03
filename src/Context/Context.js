import React, {createContext, useEffect, useState} from 'react';
import {getApi} from '../../api/api';

export const cardConText = createContext();
export const dispatchCardText = createContext();

const Context = ({children}) => {
  const [data, setData] = useState();
  const [details, setDetails] = useState();
  const [character, setCharacter] = useState('');

  useEffect(() => {
    const getData = () => {
      getApi(character)
        .then(result => {
          setData(result.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getData();
  }, [character]);

  const state = {data, details};
  const dispatch = {setData, setDetails, setCharacter};

  return (
    <cardConText.Provider value={state}>
      <dispatchCardText.Provider value={dispatch}>
        {children}
      </dispatchCardText.Provider>
    </cardConText.Provider>
  );
};

export default Context;
