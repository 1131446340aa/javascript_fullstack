/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, Children } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator,Alert,AsyncStorage } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "+51464a1651g1+61",
      age: "18"
    }
  }

  change = () => {
    this.setState({
      name: "hou"
    })
    Alert.alert('警告',"确认删除?",[
      {text:"确认"},
      {text:"取消"}
    ])
  }
  render() {
    return (
      <View >
        <Text onPress={this.change}>
          {this.state.name}

        </Text>
        <View style={{alignItems:"center"}}>
          <Text>adasfsss</Text>
        </View>
        <ActivityIndicator color="pink" style={{ height: 80 }}></ActivityIndicator>

        <Childrens name="love"></Childrens>
      </View>
    )
  }
}

class Childrens extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      // <View>
      //   <Text style={{ textAlign: "center" }}>
      //     {this.props.name}
      //   </Text>
      //   <TextInput secureTextEntry={false} placeholder="213123" style={[styles.input]}></TextInput>


      // </View>
      <ScrollView style={{ height: "100%" }}>
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "red"
    
  }
})

export default App;
