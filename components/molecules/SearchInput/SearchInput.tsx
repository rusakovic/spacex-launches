import styled from 'constants/styled';
import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {SearchInputStyles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchInputProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  isSearchTextFilled: boolean;
  onClearSearchInputHandler: () => void;
  isDisabled: boolean;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  searchText,
  setSearchText,
  isSearchTextFilled,
  onClearSearchInputHandler,
  isDisabled,
}) => {
  return (
    <View style={SearchInputStyles.searchWrapper}>
      <View style={SearchInputStyles.searchInput}>
        <TextInput
          value={searchText}
          placeholder="search..."
          style={SearchInputStyles.searchField}
          onChangeText={setSearchText}
          keyboardType="numeric"
          editable={!isDisabled}
          selectTextOnFocus={!isDisabled}
        />
        {isSearchTextFilled ? (
          <Pressable
            style={SearchInputStyles.crossButtonWrapper}
            onPress={onClearSearchInputHandler}>
            <Ionicons
              name="md-close-circle-outline"
              size={20}
              color={styled.colors.grey30opacity}
            />
          </Pressable>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default SearchInput;
