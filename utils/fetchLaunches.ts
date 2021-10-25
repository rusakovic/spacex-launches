import axios from 'axios';
import {useQuery} from 'react-query';
import {LaunchType} from 'types/launch';

const fetchLaunches = (apiUrl: string): Promise<LaunchType[]> =>
  axios.get<LaunchType[]>(apiUrl).then(response => response.data);

export const usePreviousLaunches = () => {
  return useQuery('previousLaunches', () =>
    fetchLaunches('https://api.spacexdata.com/v4/launches/past'),
  );
};
