"use strict;"

import React from 'react';
import { Content } from './content';
import { InboxClient } from './inboxClient';
import { GlobalContext } from '../globalContext';
import { DESELECT_THREAD } from '../globalConstants';

function Button() {

  const context = React.useContext(GlobalContext);

  return (
    <button onClick={() => context.dispatch({ type: DESELECT_THREAD })}></button>
  )

}
export function Inbox() {
  return (
    <>
      <Button />
      <Content title="Inbox" component={InboxClient} />
    </>
  )
}