import React,{useState} from 'react';
import {Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HorizantalDetailComp from '../../Component/HorizontalDetailComp';
import { TextInputfeildcomponent } from '../../Component/TextInputfeildcomponent';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles';
import { color } from '../../config/color';
import { ButtonThemeComponent } from '../../Component/ButtonThemeComponent';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
    widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ContinueScreen = ({route}) => {
    const [stateChange, setStateChange] = useState({
        userImage: [],
        isVisible: false,
      });
      const {
        userImage,
    } = stateChange;
      const updateState = data => setStateChange(prev => ({...prev, ...data}));
    const pickImagesFromGalary = () => {
        launchImageLibrary(
          {
            selectionLimit: 1,
            mediaType: 'photo',
            quality: 0.5,
            maxWidth: 300,
            maxHeight: 300,
          },
          res => {
            if (!res?.didCancel) {
              updateState({userImage: res?.assets});
            //   console.log(userImage[0]?.uri);
            //   updateImage(res?.assets);
           
            }
          },
        );
      };
    return(
        <ScrollView>
        <View style={styles.mainView}>
    <Image source={require('../../Images/logo.png')} />
      <Text style={styles.headingView}>REGISTRATION</Text>
      <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'Enter Username'}
              />
                <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'Enter Company Name'}
              />
                <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'Website Name'}
              />
                <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'confirm password'}
              />
              <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'password'}
              />
              <TouchableOpacity  style={styles.childcardname} onPress={()=> pickImagesFromGalary()}>
                <Text style={{
                paddingVertical:hp('2'), 
                fontSize: hp('2.2'),
                color:'black'}}>
                    {userImage.length > 0?
                    "Change Image"
                     :
                     "Select Image"
                      }
               </Text>
              </TouchableOpacity>
              <TextInputfeildcomponent
              style={styles.childcardname}
              placeholder={'Address'}
              />
              <View style={{width:wp('20'),height:hp('8'),marginTop:hp('2'),marginLeft:wp('8'),alignSelf:'flex-start',marginBottom:hp('2')}}>
                <Image
                 source={{
                    uri:
                      userImage.length > 0
                        ? userImage[0]?.uri
                        :null,
                  }}
                  resizeMode={'cover'}
                  style={{width:wp('20'),height:hp('8'),borderRadius:6}}
                />
              </View>
              <TextInputfeildcomponent
              style={styles.DescCard}
              placeholder={'Enter Description'}
              />
               <ButtonThemeComponent
              text={'FINISH'}
              style={styles.continue}
              onpress={()=>navigation.navigate('registerContinue')}
              />
    </View>
    </ScrollView>
    );

}
export default ContinueScreen;