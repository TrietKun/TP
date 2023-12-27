import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Video from 'react-native-video'

// import components
import Logo from '../components/Logo'
import Post from '../components/Post'
// import data
import logos from '../data/List_game'
import coverLOL from '../data/List_cover_LOL'
import listPost from '../data/ListPost'

const Home = () => {

  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState('HI User');

  const choose = (id) => {
    setSelectedId(id);
    setSelectedName(logos[id - 1].name);
  };

  return (
    <View 
    style={styles.container}>
      <View style={styles.menu}>
        {logos.map((item, index) => (
          <Logo
            key={index}
            logo={item.logo}
            id={item.id}
            color={selectedId === item.id ? 'red' : 'pink'}
            onPress={choose} />
        ))}
      </View>
      <View style={styles.scrollContainer}>
            <ScrollView
              scrollEventThrottle={90}
              contentContainerStyle={styles.wrapperPost}
            >
            <View style={styles.mainLogo}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 30,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}
                >{selectedName}</Text>
              </View>

              <View style={styles.coverImageConatiner}>
                <Swiper
                  autoplay={true}
                  autoplayTimeout={1.5}
                  showsButtons={true}>
                  {coverLOL.map((item, index) => (
                    <View key={index}>
                      <Image style={styles.imageCover} source={item.image} />
                    </View>
                  ))}
                </Swiper>
              </View>

              {
                listPost.map((item, index) => (
                  <Post
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    content={item.content} />
                ))
              }
            </ScrollView>
      </View>
     <View>
       
     </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  menu: {
    width: '95%',
    height: 70,
    backgroundColor: 'white',
    top: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,

    shadowColor: "#7122FA",
    shadowOffset: {
      width: 5,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.00,

    elevation: 24,
  },
  mainLogo: {
    width: 300,
    height: 80,
    borderRadius: 75,
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 3,
    textAlign: 'center',
  },
  coverImageConatiner: {
    width: '98%',
    height: 200,
    alignItems: 'center',
    marginTop: 10,
  },
  imageCover: {
    width: '100%',
    height: '100%',
  },
  wrapperPost: {
    width: '100%',
    // backgroundColor: 'green',
    alignItems: 'center', 

  },
  scrollContainer : {
    paddingTop: 10,
    backgroundColor: 'white',
    marginTop : 60,
    borderWidth : 3,
    borderRadius : 20,
  }
});
