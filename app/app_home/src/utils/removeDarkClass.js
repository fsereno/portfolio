"use strict;"

import { MAIN_CONTAINER_ID } from '../constants';

export const removeDarkClass = () => {
    let mainContainer = document.getElementById(MAIN_CONTAINER_ID);
    mainContainer.classList.remove("bg-dark");
}