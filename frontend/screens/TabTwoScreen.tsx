import { StyleSheet ,FlatList} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { useContext, useState } from "react";
import { Context} from '../components/globalContext';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'FriendsList'>) {
  const globalContext = useContext(Context)
  const [friendsList, setFriendsList] = useState<Array<string>>([]);
  
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

  async function friends() { 
    let res = await fetch(`${globalContext.domain}/get_friends_list/`, {
      headers:  {'Content-Type': 'application/json',  'Accept': 'application/json',},    
    })
    try {
      if (res.ok) {
        let resJson= await res.json();
        console.log(resJson)
        resJson = typeof resJson === 'string' ? resJson : JSON.parse(resJson);
        setFriendsList(resJson()); // 3
        return res.json()
      }
      else {
        const body = await res.text()
        console.log(body)
        throw res
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

  friends()
  var result = [];
  
  for(var i in friendsList)
    result.push([i, friendsList [i]]);

    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList data={friendsList} 
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()} />
        
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
});
