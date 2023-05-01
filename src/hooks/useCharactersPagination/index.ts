/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import agent from '../../api/api';
import {SWApiResponse} from '../../types/sw-api-reponse';
import {SWPerson} from '../../types/sw-person';
import Toast from 'react-native-toast-message';

export function useCharactersPagination(page: number) {
  const [swResponse, setSwResponse] = useState<SWApiResponse>();
  const [characters, setCharacters] = useState<SWPerson[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const response = await agent.Persons.list(page);
      setSwResponse(response);
      setCharacters(response.results);
    } catch (e: any) {
      Toast.show({
        type: 'customError',
        text1: 'Some error occurred while fetching data',
        visibilityTime: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [page]);

  return {characters, loading, swResponse};
}
