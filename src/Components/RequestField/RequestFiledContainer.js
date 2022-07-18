import { connect } from "react-redux";
import RequestField from "./RequestField";
import {
  setCity, setCompany,
  setEmail,
  setName,
  setPhoneNumber,
  setProfileLink, setRecipient, setSource,
} from "../../Store/Slice";

let mapStateToProps = (state) => {
  return {
    requestForm: {
      requestPhoneNumber: state.RequestField.requestPhoneNumber,
      requestEmail: state.RequestField.requestEmail,
      requestName: state.RequestField.requestName,
      requestProfileLink: state.RequestField.requestProfileLink,
      requestCity: state.RequestField.requestCity,
      requestCompany: state.RequestField.requestCompany,
      requestRecipient: state.RequestField.requestRecipient,
      requestSource: state.RequestField.requestSource,
    }
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setName: (value) => {
      dispatch(setName(value));
    },
    setPhoneNumber: (value) => {
      dispatch(setPhoneNumber(value));
    },
    setEmail: (value) => {
      dispatch(setEmail(value));
    },
    setProfileLink: (value) => {
      dispatch(setProfileLink(value));
    },
    setCity: (value) => {
      dispatch(setCity(value));
    },
    setCompany: (value) => {
      dispatch(setCompany(value));
    },
    setRecipient: (value) => {
      dispatch(setRecipient(value));
    },
    setSource: (value) => {
      dispatch(setSource(value));
    },
  };
};

const RequestFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestField);

export default RequestFieldContainer;
