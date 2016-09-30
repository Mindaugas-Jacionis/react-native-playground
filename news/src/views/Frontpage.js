import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-redux-router';
import actions from 'actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
    return{
      articles: state.articles.get('data')
    }
}
function mapDispatchToProps(dispatch){
  return{
    articles: bindActionCreators(actions.articles, dispatch)
  }
}

class Frontpage extends Component{
  componentWillMount(){
    this.props.articles.loadData();
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
