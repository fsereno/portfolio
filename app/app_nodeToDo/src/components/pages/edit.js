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
import { Button, Row } from 'react-bootstrap';

export function Edit() {

  const itemsContext = React.useContext(ItemsContext);
  const spinnerContext = React.useContext(SpinnerContext);

  const history = useHistory();
  const [state, dispatch] = useReducer(itemReducer, ITEM);
  const doneCallback = () => history.push(MANAGE);
  const failCallback = () => spinnerContext.hideSpinner();
  const onBackClick = () => history.goBack();

  useEffect(() => {
    if (itemsContext.selectedId.current) {
      spinnerContext.showSpinner();
      itemsContext.getItem()
        .then(response => {
          spinnerContext.hideSpinner();
          dispatch({ type: COPY, value: response.data.item });
        }).catch(() => failCallback());
    } else {
      history.push(MANAGE);
    }
  }, []);

  return (
    <ContentContainer>
      <Content title="Edit" centre={true} />
      <ItemForm state={state} dispatch={dispatch} submitHandler={itemsContext.updateItem} doneCallback={doneCallback} />
      <Row className="justify-content-center">
          <Button variant="dark" onClick={onBackClick}>Back</Button>
      </Row>
    </ContentContainer>
  );
}