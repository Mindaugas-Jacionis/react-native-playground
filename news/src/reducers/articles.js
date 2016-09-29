import { Map } from 'immutable';
import * as types from '../actions/articles';
import _ from 'lodash';

export const initialState{
  data: null
}

function setData(state, data){
  let formatedData = [];
  data.map((article) => {
    let entry = {};
    if(!_.isEmpty(article.content) && !_.isEmpty(article.headline)){
      let headline = article.headline.trim();
      entry.id = !_.isEmpty(article.id) ?
        article.id : headline.substring(0, 4) + new Date().getTime() + headline.substring(headline.lastIndexOf - 4);
      entry.image = !_.isEmpty(article.image) ? article.image : null;
      entry.content = article.content;
      entry.headline = headline;
      entry.excerpt = article.content.substring(0, 150) + '...';
    }
  });
}
