import React from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import {
    widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonThemeComponent } from '../../Component/ButtonThemeComponent';
import { TextInputfeildcomponent } from '../../Component/TextInputfeildcomponent';
import {styles} from '../LoginScreen/styles';

  const LoginScreen = ({navigation,route}) => {
    return(
    <View style={styles.mainView}>
      <Image
      source={require('../../Images/logo.png')}
      // style={{width:wp('10'),height:hp('20')}}
      />
      <Text style={styles.headingView}>SIGN IN</Text>
     
              <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'Enter Email Address'}
              />
              <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'password'}
              />

              <ButtonThemeComponent
              text={'SIGN IN'}
              style={styles.continue}
              onpress={()=>navigation.navigate('registerscreen')}
              />
           
            <View style={styles.bottomView}>
              <Text style={styles.bottomtext}>Don't have an account?</Text>
              <Text style={styles.bottomtext}>Forgot password?</Text>
            </View>
    </View>
    );

  }
  export default LoginScreen;
