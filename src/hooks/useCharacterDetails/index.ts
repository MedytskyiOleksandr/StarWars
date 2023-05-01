import {useCallback, useEffect, useState} from 'react';
import agent from '../../api/api';
import {SWPerson} from '../../types/sw-person';
import Toast from 'react-native-toast-message';

export function useCharacterDetails(url: string) {
  const [character, setCharacter] = useState<SWPerson>();
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    try {
      const response = await agent.Persons.details(url);
      setCharacter(response);
    } catch (error) {
      Toast.show({
        type: 'customError',
        text1: 'Some error occurred while fetching data',
        visibilityTime: 4000,
      });
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {character, loading};
}
