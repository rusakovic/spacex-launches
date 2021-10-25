import {filter, includes, isEmpty} from 'lodash';
import {useState, useMemo} from 'react';
import {LaunchType} from 'types/launch';

export const useSearchInputData = (data: LaunchType[] | undefined) => {
  const [searchText, setSearchText] = useState('');
  const isSearchTextFilled = !!searchText.length;
  const onClearSearchInputHandler = () => {
    setSearchText('');
  };

  const lowerCasedSearchText = searchText.toLowerCase();

  const filterLaunchesByName = () =>
    isSearchTextFilled && data
      ? filter(data, item =>
          includes(
            item.name.replace(' ', '').toLowerCase(),
            lowerCasedSearchText,
          ),
        )
      : data;

  const filteredLaunches = useMemo(filterLaunchesByName, [
    lowerCasedSearchText,
    isSearchTextFilled,
    data,
  ]);

  const isFilteredLaunchesEmpty = isEmpty(filteredLaunches);

  return {
    searchText,
    setSearchText,
    filteredLaunches,
    onClearSearchInputHandler,
    isSearchTextFilled,
    isFilteredLaunchesEmpty,
  };
};
