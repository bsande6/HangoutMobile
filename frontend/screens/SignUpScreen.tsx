import { StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps, RootStackScreenProps } from '../types';
import React, { useContext, useState } from "react";
import { Context, Provider } from '../components/globalContext';
import LoginScreen from './LoginScreen';

export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  const globalContext = useContext(Context)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function register(firstName, lastName, email, username, password, confirm_password, phoneNumber) {
    let res = await fetch(`${globalContext.domain}/api/auth/register/`, {
      method: 'POST',
      body: JSON.stringify({"firstname": firstName, "lastname": lastName, "username": username, "email": email, "password": password,
             "confirm_password": confirm_password, "phone_number": phoneNumber}),
      headers:  {'Content-Type': 'application/json',  'Accept': 'application/json',},    
    });
    try {
      if (res.ok) {
        alert("Success")
        navigation.navigate('Login')
        return res.json()
      }
      else {
        const body = await res.text()
        alert(body)
        return
      }     
    }
    catch (error) {
      console.error(error);
    }
    
  }

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
          onChangeText={(lastName) => setLastName(lastName)}
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
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
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
          onChangeText={(confirm_password) => setConfirmPassword(confirm_password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
      </View>

      <TouchableOpacity style={styles.signUpBtn} onPress={() => register(firstName, lastName, email, username, password, confirm_password, phoneNumber)}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

       
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Back to LogIn</Text>
      </TouchableOpacity>
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
    marginTop:20,
  },
  inputView: {
    backgroundColor: "#DCDCDC",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 6,
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
    marginTop: 10,
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
