"use strict;"

import React, { useEffect, useReducer } from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ItemForm } from '../itemForm';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../../contexts';
import { COPY, ITEM, MANAGE } from '../../constants';
import { itemReducer } from '../../reducers/itemReducer';

export function Edit() {

  const itemsContext = React.useContext(ItemsContext);

  const history = useHistory();

  const [ state, dispatch ] = useReducer(itemReducer, ITEM);

  const populateItem = (item) => {
      console.log(item);
      dispatch({ type: COPY, value: item });
  }

  const doneCallback = (response) => {
    console.log(response);
    history.push(MANAGE);
  }

  useEffect( () => {
      if (itemsContext.selectedId.current) {
          itemsContext.getItem(populateItem);
      } else {
          history.push(MANAGE);
      }
  },[]);

  return (
    <ContentContainer>
      <Content title="Edit item" />
      <ItemForm state={state} dispatch={dispatch} submitHandler={itemsContext.updateItem} doneCallback={doneCallback} />
    </ContentContainer>
  )
}