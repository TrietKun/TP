import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Video from 'react-native-video'

const Post = (props) => {

const {title, description, image, content} = props;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
     {/* Nếu là video thì render video nếu là ản thì render ảnh */}
     {/* if (image.includes('mp4')) {
        <Video
          source={image}
          style={styles.image}
          resizeMode="cover"
          repeat={true}
          muted={true}
          volume={0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      } else {
        <Image style={styles.image} source={image} />
      } */}
      <Text>{description}</Text>
      <Text>{content}</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'white',
    width : 350,
    height : 200,
    marginVertical : 10,
    borderRadius : 10,
    paddingVertical : 10,
    borderWidth : 1,
  }
})