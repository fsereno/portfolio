"use strict;"

import React, { useReducer } from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ItemForm } from '../itemForm';
import { ITEM } from '../../constants';
import { itemReducer } from '../../reducers/itemReducer';

export function Create() {

  const [ state, dispatch ] = useReducer(itemReducer, ITEM);

  return (
    <ContentContainer>
      <Content title="Create an item" />
      <ItemForm state={state} handler={dispatch} />
    </ContentContainer>
  )
}