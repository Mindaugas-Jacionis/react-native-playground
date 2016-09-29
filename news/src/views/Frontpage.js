import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-redux-router';

class Frontpage extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.article}>
          <Text>This is Frontpage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Frontpage;
