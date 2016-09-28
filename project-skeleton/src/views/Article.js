import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-redux-router';

class Article extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textDefault}>This is Article</Text>
        <TouchableOpacity onPress={Actions.pop}>
          <Text style={styles.textDefault}>{'<-'} Back to Frontpage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222'
  },
  textDefault: {
    color: '#f1f1f1',
    fontWeight: 'bold'
  }
});

export default Article;
