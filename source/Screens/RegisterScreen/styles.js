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
        backgroundColor:'black',
        alignItems:'center',
    },
    headingView:{
        color:'white',
        marginTop:hp('1.5'),
        marginBottom:hp('3'),
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
      DescCard: {
        fontSize: hp('2'),
        width:wp('90'),
        height:hp('30'),
        color:'black',
        backgroundColor: 'white',
        borderRadius: 10,
        textAlignVertical:'top',
        paddingLeft: wp('2'),
      },
      conditiontext:{
        flexDirection:'row',
        alignItems:'center'
        ,marginTop:hp('2')
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
      pump:{
        width:wp('45') ,
        justifyContent:'center',
        alignItems:'center',
        height:hp('6'),
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        borderColor:color.textPrimarycolor,
        borderTopWidth:2,
        borderRightWidth:2,
        borderBottomWidth:2
      },
      company:{
        width:wp('45'),
        justifyContent:'center',
        alignItems:'center',
        height:hp('6'),
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        borderColor:color.textPrimarycolor,
        borderTopWidth:2,
        borderLeftWidth:2,
        borderBottomWidth:2
      }
});