import { StyleSheet ,FlatList, Button, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { useContext, useState } from "react";
import { Context} from '../components/globalContext';


export default function FriendsList({ navigation }: RootTabScreenProps<'FriendsList'>) {
  const globalContext = useContext(Context)

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.addFriendsButton} onPress={() => navigation.navigate('AddFriends')}>
        <Text style={styles.addFriendsButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  addFriendsButton: {
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
  }
});
