import { Map } from 'immutable';
import * as types from '../actions/articles';
import _ from 'lodash';

export const initialState = {
  data: null
}

function setData(state, data){
  let formatedData = [];
  data.articles.map((article) => {
    let entry = {};
    if(!_.isEmpty(article.content) && !_.isEmpty(article.headline)){
      let headline = article.headline.trim();
      entry.id = !_.isEmpty(article.id.toString()) ? article.id : headline.substring(0, 4) + new Date().getTime();
      entry.image = !_.isEmpty(article.image) ? article.image : null;
      entry.content = article.content;
      entry.headline = headline;
      entry.excerpt = article.content.substring(0, 150) + '...';
      formatedData.push(entry);
    }
  });
  return state.set('data', formatedData);
}

export default function(state = Map(initialState), action){
  switch (action.type) {
    case types.SET_DATA:
      return setData(state, action.data);
  }
  return state;
}
