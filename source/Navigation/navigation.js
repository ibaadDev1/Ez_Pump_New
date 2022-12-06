import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { screens } from '../Screens';

const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
    return(
        <>
        <Stack.Navigator
        initialRouteName='loginscreen'
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
            name="loginscreen"
            component={screens.LoginScreen}
          />
          <Stack.Screen
          name='registerscreen'
          component={screens.RegisterScreen}
          />
          <Stack.Screen
          name='registerContinue'
          component={screens.ContinueScreen}
          />
                
            </Stack.Navigator>
        </>
    );
   

}