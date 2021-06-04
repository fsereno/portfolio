"use strict;"

import React, {useRef, useState, useReducer} from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ListItems } from '../listItems';
import { SpinnerContext } from '../../../../js/modules/react/spinnerComponent';
import { ITEM, STANDARD_ERROR } from '../../constants';
import { itemReducer } from '../../reducers/itemReducer';
import { ItemFormInLine } from '../ItemFormInLine';
import { ItemsContext } from '../../contexts';

export function Manage() {

  const spinnerContext = React.useContext(SpinnerContext);
  const itemsContext = React.useContext(ItemsContext);

  const ver = useRef(0);

  const [ version, setVersion ] = useState(ver.current);

  const [ showError, setShowError ] = useState(false);

  const [ state, dispatch ] = useReducer(itemReducer, ITEM);

  const incrementVersion = () => {
    ver.current = ver.current + 1;
    setVersion(ver.current);
  }

  const doneCallback = () => {
    spinnerContext.hideSpinner();
    incrementVersion();
    setShowError(false);
  }

  const failCallback = () => {
    spinnerContext.hideSpinner();
    setShowError(true);
  }

  return (
    <ContentContainer>
      <Content title="Manage" centre={true} />
      <ItemFormInLine state={state} dispatch={dispatch} submitHandler={itemsContext.createItem} doneCallback={doneCallback} />
      <ListItems
        showSpinner={spinnerContext.showSpinner}
        hideSpinner={spinnerContext.hideSpinner}
        version={version}
        doneCallback={doneCallback}
        failCallback={failCallback}
      />
      {showError &&
        <ContentContainer>
            <h5 className="text-danger items">{STANDARD_ERROR}</h5>
        </ContentContainer>
      }
    </ContentContainer>
  )
}