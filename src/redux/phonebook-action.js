import { createAction } from "@reduxjs/toolkit";
//import shortid from "shortid";
//import types from "./phonebook-types";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const changeFilter = createAction("contacts/changeFilter");

//const addContact = createAction("contacts/Add_contact", (name, number) => ({
//  payload: {
//    id: shortid.generate(),
//    name,
//    number,
//  },
//}));
//const deleteContact = createAction("contacts/delete_contact");
//const changeFilter = createAction("contacts/change_filter");

//const contactsActions = { addContact, deleteContact, changeFilter };

// export default contactsActions;
