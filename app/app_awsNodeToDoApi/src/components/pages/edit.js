"use strict;"

import React, { useEffect, useReducer } from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ItemForm } from '../itemForm';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../../contexts';
import { COPY, ITEM, MANAGE } from '../../constants';
import { itemReducer } from '../../reducers/itemReducer';
import { SpinnerContext } from '../../../../js/modules/react/spinnerComponent';

export function Edit() {

  const itemsContext = React.useContext(ItemsContext);
  const spinnerContext = React.useContext(SpinnerContext);

  const history = useHistory();

  const [ state, dispatch ] = useReducer(itemReducer, ITEM);

  const populateItem = (item) => {
    spinnerContext.hideSpinner();
    dispatch({ type: COPY, value: item })
  };

  const doneCallback = () => history.push(MANAGE);

  const failCallback = () => spinnerContext.hideSpinner();

  useEffect( () => {
      if (itemsContext.selectedId.current) {
          itemsContext.getItem(spinnerContext.showSpinner, populateItem, failCallback);
      } else {
          history.push(MANAGE);
      }
  },[]);

  return (
    <ContentContainer>
      <Content title="Edit item"/>
      <ItemForm state={state} dispatch={dispatch} submitHandler={itemsContext.updateItem} doneCallback={doneCallback} />
    </ContentContainer>
  )
}