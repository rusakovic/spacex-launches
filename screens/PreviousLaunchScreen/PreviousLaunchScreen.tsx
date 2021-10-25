import React from 'react';
import {CommonLaunchScreen} from 'screens';
import {usePreviousLaunches} from 'utils/fetchLaunches';

const PreviousLaunchScreen: React.FunctionComponent = () => {
  const {isFetching, data, error, isError} = usePreviousLaunches();

  return (
    <CommonLaunchScreen
      data={data}
      isFetching={isFetching}
      error={error}
      isError={isError}
    />
  );
};

export default PreviousLaunchScreen;
