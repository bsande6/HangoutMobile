import { StyleSheet ,FlatList, Button, TouchableOpacity, Image} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { useContext, useState } from "react";
import { Context} from '../components/globalContext';
import ToggleSwitch from 'toggle-switch-react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function Profile({ navigation }: RootTabScreenProps<'Profile'>) {
  const globalContext = useContext(Context)

  const [isOnToggleSwitch, setIsOnToggleSwitch] = useState(false);
  const [avatar, setAvatar] = useState({filePath: '', fileData: '', fileUri: ''});
  

  function onToggle(isOn) {
    console.log("Changed to " + isOn);
  }

  let options = {
    storageOptions: {
      mediaType: 'photo',
      skipBackup: true,
      path: 'images',
    },
  };

  function callback(response) {
    console.log('Response', response)
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      console.log('response', JSON.stringify(response));
      setAvatar({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri
    });
  }

  return (
    <View style={styles.container}>
        <ToggleSwitch
          onColor="green"
          offColor="red"
          label="Status: Available"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="large"
          isOn={isOnToggleSwitch}
          onToggle={isOnToggleSwitch => {
            setIsOnToggleSwitch(isOnToggleSwitch);
            onToggle(isOnToggleSwitch);
          }}
        />
       <Image 
        style={styles.avatar}
        source={require("../assets/images/default_profile_picture.png")}
        />
        <TouchableOpacity style={styles.profileButton} onPress={() => launchImageLibrary(options, callback(response))}>
        <Text style={styles.text}>Change Profile Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logOutBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginTop: 20,
    marginBottom: 20
    // marginLeft: 160,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  logOutBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6495ED",
  },
  profileButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6495ED",
  },
  text:  {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
