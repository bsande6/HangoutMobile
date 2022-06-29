import { StyleSheet, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps, RootStackScreenProps } from '../types';
import React, { useState } from "react";

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangout</Text>
      <Image style={styles.image} source = {require("../assets/images/logo.png")}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Root')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>

     
      {/* <EditScreenInfo path="/screens/LoginScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
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
    marginTop: 40,
  },
  inputView: {
    backgroundColor: "#DCDCDC",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6495ED",
  },

  signUpBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#EDEDED",
  },

  loginText:  {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
