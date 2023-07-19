"use strict;"

import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { EDIT } from '../constants';
import { ItemsContext, ManageContext } from '../contexts';

export const ItemToDo = ({item}) => {

    const history = useHistory();

    const itemsContext = React.useContext(ItemsContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const manageContext = React.useContext(ManageContext);

    const [checked, setChecked] = useState(false);

    const onDoneClick = event => {
        event.preventDefault();
        spinnerContext.showSpinner();
        itemsContext.itemDone(item.id)
            .then(() => manageContext.doneCallback())
            .catch(() => manageContext.failCallback());
    }

    const onDeleteClick = event => {
        event.preventDefault();
        spinnerContext.showSpinner();
        itemsContext.deleteItem(item.id)
            .then(() => manageContext.doneCallback())
            .catch(() => manageContext.failCallback());
    }

    const onEditClick = event => {
        event.preventDefault();
        itemsContext.selectedId.current = item.id;
        history.push(EDIT);
    }

    return (
        <>
            {!item.done &&
                <>
                    <a href="#" className="lead flex-fill my-0"
                        onClick={onDoneClick}
                        onMouseEnter={() => setChecked(true)}
                        onTouchStart={() => setChecked(true)}
                        onTouchEnd={() => setChecked(false)}
                        onMouseLeave={() => setChecked(false)}>
                        <input className="mr-2" type="checkbox" checked={checked} onChange={onDoneClick} />
                        {item.description}
                    </a>
                    <div>
                        <a herf="#" className="edit-item bg-dark btn btn-sm px-2 mr-2 text-white border-0" size="sm" onClick={onEditClick}>
                            <i className="bi bi-pencil-square"></i>
                        </a>
                        <a href="#" className="delete-item bg-dark btn btn-sm px-2 mr-2 text-white border-0" size="sm" onClick={onDeleteClick}>
                            <i className="bi bi-x-square"></i>
                        </a>
                    </div>
                </>
            }
        </>
    );
}