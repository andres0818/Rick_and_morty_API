import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {getApi} from '../../api/api';
import {Dimensions} from 'react-native';

export const cardConText = createContext();
export const dispatchCardText = createContext();

const Context = ({children}) => {
  const [data, setData] = useState();
  const [details, setDetails] = useState();
  const [character, setCharacter] = useState('');

  const dimensionsRef = useRef(Dimensions.get('window'));

  const [numColumns, setNumColumns] = useState(
    dimensionsRef.current.width > 760 ? 2 : 1,
  );

  useLayoutEffect(() => {
    const onLayout = () => {
      dimensionsRef.current = Dimensions.get('window');
      setNumColumns(dimensionsRef.current.width > 760 ? 2 : 1);
    };

    Dimensions.addEventListener('change', onLayout);

    return () => Dimensions.removeEventListener('change', onLayout);
  }, []);

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

  const state = {data, details, numColumns};
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
