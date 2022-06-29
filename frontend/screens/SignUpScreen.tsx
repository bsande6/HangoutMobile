import { StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps, RootStackScreenProps } from '../types';
import React, { useState } from "react";

export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangout</Text>
      <Image style={styles.image} source = {require("../assets/images/logo.png")}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(FirstName) => setFirstName(FirstName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(LastName) => setLastName(LastName)}
        />
      </View>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

       
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Back to LogIn</Text>
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
