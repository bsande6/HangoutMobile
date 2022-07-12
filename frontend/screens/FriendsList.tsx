import { StyleSheet ,FlatList, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { useContext, useState, useEffect } from "react";
import { Context} from '../components/globalContext';

export default function FriendsList({ navigation }: RootTabScreenProps<'FriendsList'>) {
  const globalContext = useContext(Context)
  const [friendsList, setFriendsList] = useState<Array<string>>([]);
  
  async function friends() { 
    let res = await fetch(`${globalContext.domain}/get_friends_list/`, {
      headers:  {'Content-Type': 'application/json',  'Accept': 'application/json',},    
    })
    try {
      if (res.ok) {
        let resJson= await res.json();
        if (resJson.length > 0)
          resJson = typeof resJson === 'string' ? resJson : JSON.parse(resJson);
          setFriendsList(resJson); 
        return res.json()
      }
      else {
        const body = await res.text()
        console.log(body)
        return res
      }
    }
    catch (error) { 
      console.error(error)
    }
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  const [selectedId, setSelectedId] = useState(null);
  
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        title={`${item.firstName} ${item.LastName}`}
      />
    );
  };

  
  useEffect(() => {
    friends();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <FlatList data={friendsList} 
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()} />
        
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
