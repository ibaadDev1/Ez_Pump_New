import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from '../config/color';
export const TextInputfeildcomponent = props => { 
    return(
    <TextInput
    style={props?.style}
    placeholder={props?.placeholder}
    placeholderTextColor='grey'
    value={props?.value}
  />
    );
}