import userEvent from "@testing-library/user-event";

export const SET_USER = "SET_USER";
export const TOGGLE_MENU = "TOGGLE_MENU";

export const SetCurrentUser = user => ({
    type: SET_USER,
    payload: user,
});

export const toggleUserMENU = () => ({
    type: TOGGLE_MENU,
   
});
