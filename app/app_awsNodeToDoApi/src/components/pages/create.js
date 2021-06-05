"use strict;"

import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { TaskItemForm } from '../taskItemForm';
import { ITEM, MANAGE } from '../../constants';
import { itemReducer } from '../../reducers/itemReducer';
import { ItemsContext } from '../../contexts';

export function Create() {

  const itemsContext = React.useContext(ItemsContext);

  const history = useHistory();

  const [ state, dispatch ] = useReducer(itemReducer, ITEM);

  const doneCallback = () => history.push(MANAGE);

  return (
    <ContentContainer>
      <Content title="Create an item" />
      <TaskItemForm state={state} dispatch={dispatch} submitHandler={itemsContext.createItem} doneCallback={doneCallback} />
    </ContentContainer>
  )
}