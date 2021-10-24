import axios from 'axios';
import {useQuery} from 'react-query';

export const usePreviousLaunches = () => {
  return useQuery('previousLaunches', async () => {
    const {data} = await axios.get(
      'https://api.spacexdata.com/v4/launches/past',
    );

    return data;
  });
};
