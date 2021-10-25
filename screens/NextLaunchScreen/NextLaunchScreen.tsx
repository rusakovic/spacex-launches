import React from 'react';
import {CommonLaunchScreen} from 'screens';
import {useNextLaunches} from 'utils/fetchLaunches';

const NextLaunchScreen: React.FunctionComponent = () => {
  const {isFetching, data, error, isError} = useNextLaunches();
  console.log('🚀 ~ file: NextLaunchScreen.tsx ~ line 7 ~ data', data);

  return (
    <CommonLaunchScreen
      data={data}
      isFetching={isFetching}
      error={error}
      isError={isError}
    />
  );
};

export default NextLaunchScreen;
