import { createSlice } from "@reduxjs/toolkit";

const RequestFieldSlice = createSlice({
  name: "RequestFieldSlice",
  initialState: {
    requestName: "",
    requestPhoneNumber: "",
    requestEmail: "",
    requestProfileLink: "",
    requestCity: "",
    requestCompany: "",
    requestRecipient: "",
    requestSource: "",
  },
  reducers: {
    setName(state, action) {
      return {
        ...state,
        requestName: action.payload,
      };
    },
    setPhoneNumber(state, action) {
      return {
        ...state,
        requestPhoneNumber: action.payload,
      };
    },
    setEmail(state, action) {
      return {
        ...state,
        requestEmail: action.payload,
      };
    },
    setProfileLink(state, action) {
      return {
        ...state,
        requestProfileLink: action.payload,
      };
    },
    setCity(state, action) {
      return {
        ...state,
        requestCity: action.payload,
      };
    },
    setCompany(state, action) {
      return {
        ...state,
        requestCompany: action.payload,
      };
    },
    setRecipient(state, action) {
      return {
        ...state,
        requestRecipient: action.payload,
      };
    },
    setSource(state, action) {
      return {
        ...state,
        requestSource: action.payload,
      };
    },
  },
});

export default RequestFieldSlice.reducer;
export const { setName, setCity, setEmail, setPhoneNumber, setProfileLink, setCompany, setRecipient, setSource} =
  RequestFieldSlice.actions;
