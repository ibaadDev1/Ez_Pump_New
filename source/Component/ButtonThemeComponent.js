import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const ButtonThemeComponent = props => {
    return(
        <TouchableOpacity
        style={props.style}
        onPress={() => props.onpress()}>
        <Text style={{color: 'white', fontSize: hp('2.3')}}>
          {props?.text}
        </Text>
      </TouchableOpacity>
    );

}