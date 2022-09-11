import React, {useEffect, useLayoutEffect, useState, useContext} from 'react';
import { SafeAreaView, StyleSheet ,FlatList, TouchableOpacity, Pressable, Image, TextInput} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Context} from '../components/globalContext';
import { SearchBar } from 'react-native-elements';
import Contacts from 'react-native-contacts';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
// import filter from 'lodash.filter';

export default function AddFriends({ navigation }: RootStackScreenProps<'AddFriends'>) {
  interface UserData {
    username: string;
    email: string;
    firstname: string
    lastname: string
    phone_number: string
  }
  
  const globalContext = useContext(Context)
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<UserData[]>([]);
  const [masterData, setMasterData] = useState<UserData[]>([]);

  async function all_users() { 
    let res = await fetch(`${globalContext.domain}/get_all_users`, {
      headers:  {'Content-Type': 'application/json',  'Accept': 'application/json',},    
    })
    try {
      if (res.ok) {
        let resJson = await res.json();
        
        // resJson = JSON.parse(resJson);
        // const data = resJson as UserData[];
        let user: UserData
        let userData: Array<UserData> = []
        
        // const userData= jsonArray.map(res => (res.json() as FruitsType));
        var data;
        for (var object in resJson)  {
          console.log(object)
          user = resJson[object] as UserData
          console.log("data", user)
          userData.push({'username': resJson[object].username, 'firstname':resJson[object].firstname, 
                        'lastname':resJson[object].lastname, 'email':resJson[object].email, 
                        'phone_number':resJson[object].phone_number
                      })
           
        }
        setMasterData(userData);
        console.log("m", masterData)
        return resJson
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
  
  
  useEffect(() => {
    all_users();
  }, []);

  


  const filterSearch = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterData.filter(function (item) {
        const itemData = item.username
          ? item.username.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      // setFilteredData(masterData);
      // setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
  
// function render() {
  //   const { search } = this.state;
  // };
  // const ContactsList = () => {
  //   const [contacts, setContacts] = useState([]);
  //   useEffect(() => {
  //     Contacts.getAll().then(contacts => {
  //         // setContacts(contacts);
  //   });
  //   }, []);
  // }  


  //   const keyExtractor = (item, idx) => {
  //     return item?.recordID?.toString() || idx.toString();
  //   };
  //   const renderItem = ({item, index}) => {
  //     return <Contact contact={item} />;
  //   };
  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={search}
          onChangeText={searchText => filterSearch(searchText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              {/* <Image
                source={{ uri: item.picture.thumbnail }}
                style={styles.coverImage}
              /> */}
              <View style={styles.metaInfo}>
                <Text style={styles.title}>{`${item.firstname} ${
                  item.lastname
                }`}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
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
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  itemStyle: {
    padding: 10,
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
})

