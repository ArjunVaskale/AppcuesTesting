import React, { Component } from 'react';
import {Text, View, Pressable , Alert, Platform, Linking} from 'react-native';
// import NewAppcues from '@appcues/react-native';
import * as Appcues from '@appcues/react-native';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import uuid from 'react-native-uuid';

const HelloWorldApp = () => {

  Linking.addEventListener('url', async ({ url }) => {
    const appcuesDidHandleURL = await Appcues.didHandleURL(url);
  
    if (!appcuesDidHandleURL) {
      // Handle a non-Appcues URL
    }
  });


  const initAppcues = async () =>{
    console.log("UUID==>", uuid.v4() );


    const userID = uuid.v4();

    console.log()

    // Appcues.identify(userId, { /* user properties */ });

    try {
      if(Platform.OS === 'android'){
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );
      }
      await Appcues.setup('220411', '5667fcac-db14-4faf-936b-10eaac337c14');
      // await messaging().requestPermission();
      // const token = await messaging().getToken();

      // Appcues.registerDeviceToken(token)
     
      // console.log('TOKEN===>', token);

      // For push token registration 
      // Appcues.identify(userID, { deviceId: token }); 
      // // For showing content 
      
      // Appcues.identify('d1b1b2c4-d461-4c3d-aaa2-f4b48879c24e', {  deviceProperties: { pushToken: token }});
      Appcues.identify('d1b1b2c4-d461-4c3d-aaa2-f4b48879c24e', {  deviceProperties: { pushToken: 'd25BZ8rmS66ni9wh1zO2j3:APA91bFgVu4q9ZLDwQ3Ca_HGUDLZ9A9BTfoy6R4aR2HL1LyzNIyfs38vcjyEfYdKGrhZ7S96G3DpzDa_kvjaHHEESRTpsgTQogmekUH-auijPqllSrVVQH8' }});

      // Appcues.show("launchpad-id");

      // const unsubscribe = messaging().onMessage(async remoteMessage => {
      //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // });
  
      // if (token) {
      //   Appcues.registerDeviceToken(token);
      //     console.log('Device token registered with Appcues:', token);
      // }
  } catch (error) {
      console.error('Error registering device token:', error);
  }
    
  }

  React.useEffect(()=>{
    console.log("APPCUES====>\n",Appcues);
    initAppcues()
  },[])
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, World!</Text>
      {/* @ts-ignore */}
      {/* <Pressable onPress={() => {Appcues.showLaunchpad()}} > */}
      {/* <Pressable onPress={() => {Appcues.registerPushToken()}}> */}

      
      <Pressable onPress={() => {
        // Appcues.track("Button Clicked");
        // Appcues.screen('Home Screen');
        // console.log('Clicked Evnets...');
        // Appcues.debug(); 

        // Appcues.loadLaunchpad();
        // Appcues.showLaunchpad();

        if(Platform.OS === 'ios'){
          Appcues.screen('HomeScreenIOS')
          Appcues.track('openLaunchpadButtonIOS', {
            // Optional event properties
            button_name: 'Submit',
            page_name: 'Form',
        });
        }else{
          Appcues.screen('HomeScreenAndroid')
          Appcues.track('openLaunchpadButtonAndroid', {
            // Optional event properties
            button_name: 'Submit',
            page_name: 'Form',
        });
        }



      console.log("Clicked Button....");
       }}>

      {/* <Pressable onPress={() => {alert(Appcues.VERSION)}}> */}

        <View style={{backgroundColor : 'teal' , padding : 10 , margin : 10 }} >
          <Text style={{color : 'white'}}>Open Launchpad</Text>
        </View>
      </Pressable>


      <Pressable onPress={() => {
        Appcues.debug(); 
       }}>
        <View style={{backgroundColor : 'rgb(88,70,245)' , padding : 10 , margin : 10 }} >
          <Text style={{color : 'white'}}>Open Debuger</Text>
        </View>
      </Pressable>

    </View>
  );
};
export default HelloWorldApp;





// https://mobilebuilder.appcues.com?type=push_preview&accountId=220411&appId=5667fcac-db14-4faf-936b-10eaac337c14&pushId=98d1a797-5897-4a0f-b7be-ec38072110d0


