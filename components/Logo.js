import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Logo = (props) => {

  const {logo , name, id, color, onPress} = props

  return (
    <View>
        <TouchableOpacity 
        onPress={() => onPress(id)}
        style={[styles.wrapper,{backgroundColor : color}]}>
            <Image style={styles.logo} source={logo} />   
        </TouchableOpacity>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo : {
        width : 50,
        height : 50,
        borderRadius : 10,
    },
    wrapper : {
        height : 60,
        width : 60,
        borderRadius : 10, 
        justifyContent : 'center',
        alignItems : 'center',
    }
})