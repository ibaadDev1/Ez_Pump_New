import {Platform, StyleSheet, Dimensions} from 'react-native';
import {
    widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from '../../config/color';
export const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    headingView:{
        color:'white',
        marginTop:hp('3'),
        fontSize:hp('3')
    },
    childcardname: {
        fontSize: hp('2'),
        width:wp('90'),
        color:'black',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: hp('3'),
        paddingLeft: wp('2'),
      },
      continue: {
        backgroundColor: color.textPrimarycolor,
        height: hp('6'),
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: wp('90'),
        alignSelf: 'center',
      },
      bottomtext:{
        color:color.textPrimarycolor,
        marginTop:hp('3'),
        fontSize:hp('2')
      },
      bottomView:{
      width:wp('90'),
      flexDirection:'row',
      justifyContent:'space-between'
      }
})