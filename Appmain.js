import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './source/Navigation/navigation';
function Appmain({navigation}) {
return(

    <NavigationContainer>
          <StackNavigatior />
        </NavigationContainer>
);
}
export default Appmain;