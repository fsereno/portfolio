"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ListItems } from '../listItems';

export function Manage() {

  //const [ version, setVersion ] = useState(0);

  return (
    <ContentContainer>
      <Content title="Manage" centre={true} />
      <ListItems />
    </ContentContainer>
  )
}