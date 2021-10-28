import {LaunchesNotFound, SearchInput} from 'components/molecules';
import React from 'react';
import {CommonLaunchScreen} from 'screens';
import {useNextLaunches} from 'utils/fetchLaunches';
import {useSearchInputData} from 'utils/hooks/useSearchInputData';

const NextLaunchScreen: React.FunctionComponent = () => {
  const {isFetching, data, error, isError} = useNextLaunches();

  const {
    filteredLaunches,
    onClearSearchInputHandler,
    searchText,
    setSearchText,
    isSearchTextFilled,
    isFilteredLaunchesEmpty,
  } = useSearchInputData(data);

  return (
    <>
      <SearchInput
        setSearchText={setSearchText}
        searchText={searchText}
        isSearchTextFilled={isSearchTextFilled}
        onClearSearchInputHandler={onClearSearchInputHandler}
        isDisabled={isError}
      />
      {isFilteredLaunchesEmpty && !isFetching ? (
        <LaunchesNotFound />
      ) : (
        <CommonLaunchScreen
          data={filteredLaunches}
          isFetching={isFetching}
          error={error}
          isError={isError}
        />
      )}
    </>
  );
};

export default NextLaunchScreen;
