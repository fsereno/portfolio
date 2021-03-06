"use strict;"

export const POOL_DATA = {
    UserPoolId: 'eu-west-2_s4syVYS6n',
    ClientId: '60jvm1avgd6t55k4uc15dgu6iq'
};

export const ITEM = {
    username: "",
    description: "",
    done: false,
    targetDate: "",
    modifiedOn: 0
}

export const COLLAPSE_STATE_SHOW = {
    show: true,
    text: "Hide",
    class: "bi-dash-square"
};

export const COLLAPSE_STATE_HIDE = {
    show: false,
    text: "Show",
    class: "bi-plus-square"
};

export const HIDE = "hide";
export const SHOW = "show";
export const COPY = "copy";
export const DESCRIPTION = "description";

export const REGISTER = "/register";
export const LOGIN = "/login";
export const MANAGE = "/manage";
export const EDIT = "/edit";
export const LOGOUT = "/logout";
export const TOKEN = 'token';
export const USERNAME = 'username';
export const SUCCESS = "SUCCESS";
export const USER = "cognitoUser";
export const STANDARD_ERROR = "Sorry, there was an error. Please try again.";
export const COMPLETE_CHALLENGE_ERROR = "Please complete the challenge.";