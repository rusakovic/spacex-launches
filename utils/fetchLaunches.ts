import axios from 'axios';
import {useQuery} from 'react-query';
import {LaunchType} from 'types/launch';

const fetchLaunches = (apiUrl: string): Promise<LaunchType[]> =>
  axios.get<LaunchType[]>(apiUrl).then(response => response.data);

export const usePreviousLaunches = () => {
  return useQuery('previousLaunches', () =>
    fetchLaunches('https://api.spacexdata.com/v5/launches/past'),
  );
};

export const useNextLaunches = () => {
  return useQuery('nextLaunches', () =>
    fetchLaunches('https://api.spacexdata.com/v5/launches/upcoming'),
  );
};
