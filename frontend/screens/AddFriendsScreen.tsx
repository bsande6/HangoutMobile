import React, {useEffect, useLayoutEffect, useState, useContext} from 'react';
import { SafeAreaView, StyleSheet ,FlatList, TouchableOpacity, Pressable, Image, TextInput, ActivityIndicator} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Context} from '../components/globalContext';
import { SearchBar } from 'react-native-elements';
import Contacts from 'react-native-contacts';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
// import filter from 'lodash.filter';

export default function AddFriends({ navigation }: RootStackScreenProps<'AddFriends'>) {
  interface UserData {
    username: string;
    email: string;
    firstname: string
    lastname: string
    phone_number: string
    avatar: string
  }
  
  const globalContext = useContext(Context)
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<UserData[]>([]);
  const [masterData, setMasterData] = useState<UserData[]>([]);
  const [error, setError] = useState(null);


  async function all_users() { 
    let res = await fetch(`${globalContext.domain}/get_all_users`, {
      headers:  {'Content-Type': 'application/json',  'Accept': 'application/json',},    
    })
    try {
      if (res.ok) {
        let resJson = await res.json();
        console.log(resJson)
        setMasterData(resJson.map((data:UserData) => ({
          'username': data.user.username,
          'email': data.user.email,
          'firstname': data.user.firstname,
          'lastname': data.user.lastname,
          'phone_number': data.user.phone_number,
          'avatar': data.avatar
        })))
        setIsLoading(false);
        return resJson
      }
      else {
        const body = await res.text()
        console.log(body)
        setIsLoading(false);
        throw res
      }
    }
    catch (error) {
      setIsLoading(false);
      setError(error)
    }
  }

  useEffect(() => {
    setIsLoading(true);
    all_users();
  }, []);

  console.log(masterData)

  const filterSearch = (text:string) => {
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

  const data = [
    { id: '1', title: 'First item', username: 'name', firstname: 'first', lastname: 'last' },
    { id: '2', title: 'Second item', username: 'name2', firstname: 't', lastname: 'last'  },
    { id: '3', title: 'Third item', username: 'name3', firstname: 'third', lastname: 'last'},
    { id: '4', title: 'Fourth item',username: 'name4', firstname: 'firt', lastname: 'last'  }
  ];

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
          placeholder="Search by Username"
          style={{ backgroundColor: '#fff', paddingHorizontal: 50 }}
        />
      </View>
    );
  }

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


  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={masterData}
          keyExtractor={item => item.username}
          renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={require("../assets/images/default_profile_picture.png")}
              style={styles.coverImage}
            />
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
  metaInfo: {
    marginLeft: 10
  },
})

