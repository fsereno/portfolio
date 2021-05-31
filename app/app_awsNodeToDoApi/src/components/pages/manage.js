"use strict;"

import React, {useRef, useState} from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ListItems } from '../listItems';
import { SpinnerContext } from '../../../../js/modules/react/spinnerComponent';
import { STANDARD_ERROR } from '../../constants';

export function Manage() {

  const spinnerContext = React.useContext(SpinnerContext);

  const ver = useRef(0);

  const [ version, setVersion ] = useState(ver.current);

  const [ showError, setShowError ] = useState(false);

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