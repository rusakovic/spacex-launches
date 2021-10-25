import {filter, includes, isEmpty} from 'lodash';
import {useState, useMemo} from 'react';
import {LaunchType} from 'types/launch';

export const useSearchInputData = (data: LaunchType[] | undefined) => {
  const [searchText, setSearchText] = useState('');
  const isSearchTextFilled = !!searchText.length;
  const onClearSearchInputHandler = () => {
    setSearchText('');
  };

  const filterLaunchesByName = () =>
    isSearchTextFilled && data
      ? filter(data, item =>
          includes(item.name.replace(' ', '').toLowerCase(), searchText),
        )
      : data;

  const filteredLaunches = useMemo(filterLaunchesByName, [
    searchText,
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
