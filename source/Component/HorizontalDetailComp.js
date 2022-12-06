import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HorizantalDetailComp = props => {
  return (
    <View style={styles.topView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: wp('5'),
          alignItems: 'center',
        }}>
        {props.dot?
        <Text
        style={{color: 'white', fontSize: hp('1.2')}}>
        {'\u2B24'}
      </Text>:null}

        <Text style={styles.text}>{props?.leftText}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          paddingRight: wp('5'),
        }}>
          {/* {props.icon? 
           <ButtonThemeComp 
           iconvisible={true}
           iconcolor={color.white}
           onPress={props.onPress}
           style={{width:wp('40'), backgroundColor: MentorColor.MentorThemeFirst,borderRadius:22,height:hp('4.5')}}
           text={'View all classes'}/>
            <TextComp style={styles.text} text= />
        : */}
    
        <Text style={styles.text}>{props?.rightText}</Text>
        {/* } */}
       {/* {props.line?
        <HorizontalDividerComp
        style={{
          marginTop: hp('0.5'),
          marginHorizontal: wp('0'),
          color: MentorColor.MentorLightTheme,
        }}
        color={MentorColor.MentorThemeFirst}
        width={'33'}
      />:null} */}
      </View>
    </View>
  );
};

export default HorizantalDetailComp;

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'flex-start'
  },
  text: {
    fontSize: hp('1.9'),
    color: 'white',
    fontWeight: 'bold',
  },
});
