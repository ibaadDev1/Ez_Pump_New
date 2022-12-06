import React,{useState} from 'react';
import { Image, Pressable, Text, View } from "react-native";
import HorizantalDetailComp from '../../Component/HorizontalDetailComp';
import { TextInputfeildcomponent } from '../../Component/TextInputfeildcomponent';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles';
import { color } from '../../config/color';
import { ButtonThemeComponent } from '../../Component/ButtonThemeComponent';
import {
    widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RegisterScreen = ({navigation,route}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [CompanyVisible,setCompanyVisible]= useState(true);
    const [PumpVisible,setPumpVisible]=useState(false);
    return(
        <View style={styles.mainView}>
             <Image
      source={require('../../Images/logo.png')}
      />
      <Text style={styles.headingView}>REGISTRATION</Text>
      <HorizantalDetailComp
          dot={true}
          leftText={`   Select the register type`}
        />
        <View style={{flexDirection:'row',margin:10}}>
            <Pressable 
            style={[
                styles.company,
                {backgroundColor:CompanyVisible?color.textPrimarycolor:'black'}]} 
            onPress={()=>{
                setCompanyVisible(true),
                setPumpVisible(false)}}>
                <Text style={{color:'white'}}>Company</Text>
            </Pressable>
            <Pressable 
            style={[styles.pump,{backgroundColor:PumpVisible?color.textPrimarycolor:'black'}]}
            onPress={()=>{
            setCompanyVisible(false),
            setPumpVisible(true)}}>
            <Text style={{color:'white'}}>Pump Enrollment</Text>
            </Pressable>

        </View>

          <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'email address'}
              />
                <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'phone number'}
              />
                <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'password'}
              />
                <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'confirm password'}
              />
              <View style={styles.conditiontext}>
              <CheckBox
                 disabled={false}
                 value={toggleCheckBox}
                 onValueChange={(newValue) => setToggleCheckBox(newValue)}
                 onCheckColor={'white'}
                 onFillColor={color.textPrimarycolor}
                 tintColor={color.textPrimarycolor}
                tintColors={{true:color.textPrimarycolor,false:color.textPrimarycolor}}
                />
                <Text style={{color:color.textPrimarycolor}}>Agree to terms and conditions</Text>
              </View>
              <ButtonThemeComponent
              text={'CONTINUE'}
              style={styles.continue}
              onpress={()=>navigation.navigate('registerContinue')}
              />
        </View>
    );
}
export default RegisterScreen;