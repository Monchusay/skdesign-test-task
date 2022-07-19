import React, { useEffect, useState } from "react";
import style from "./RequestField.module.css";
import Select from "react-select";
import cities from "./../../Data/cities.json";
import sources from "./../../Data/sources.json";
import { ReactComponent as ArrowDown } from "../../Data/Arrow.svg";
import preloader from "../../Data/preloader.svg";

const RequestField = (props) => {
  const [showedExtraFields, setShowedExtraFields] = useState(false);
  const [isNameValid, setIsNameValid] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(null);
  const [isProfileLinkValid, setIsProfileLinkValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isCityValid, setIsCityValid] = useState(null);
  const [cityValue, setCityValue] = useState();
  const [sourceValue, setSourceValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSettingName = (e) => {
    let sendingName = e.target.value;
    props.setName(sendingName);
    sendingName.length > 2 ? setIsNameValid(true) : setIsNameValid(false);
  };

  const onSubmitRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(JSON.stringify(props.requestForm));
      props.setName("");
      setIsNameValid(null);
      props.setPhoneNumber("");
      setIsPhoneValid(null);
      props.setEmail("");
      setIsEmailValid(null);
      props.setProfileLink("");
      setIsProfileLinkValid(null);
      setCityValue(null);
      setIsCityValid(null);
      props.setCompany("");
      props.setRecipient("");
      setSourceValue(null);
    }, 2000);
  };

  const inputMapping = {
    null: { width: 180 + "px" },
    true: { borderColor: "#0086A8", width: 180 + "px" },
    false: { borderColor: "#EB5E55", width: 180 + "px" },
  };

  const inputLabelMapping = {
    true: { color: "#0086A8" },
    false: { color: "#EB5E55" },
  };

  const selectorsMapping = {
    true: { borderColor: "#0086A8" },
    false: { borderColor: "#EB5E55" },
  };

  const onSettingPhone = (e) => {
    setIsPhoneValid(false);
    let sendingPhone = e.target.value.replace(/\D/g, "");
    let formattedSendingPhone = "";
    if (["7", "8", "9"].includes(sendingPhone[0])) {
      if (sendingPhone[0] === "9") sendingPhone = "7" + sendingPhone;
      let firstSymbols = sendingPhone[0] === "8" ? "8" : "+7";
      formattedSendingPhone = firstSymbols + " ";
      if (sendingPhone.length > 1) {
        formattedSendingPhone += "(" + sendingPhone.substring(1, 4);
      }
      if (sendingPhone.length >= 5) {
        formattedSendingPhone += ") " + sendingPhone.substring(4, 7);
      }
      if (sendingPhone.length >= 8) {
        formattedSendingPhone += "-" + sendingPhone.substring(7, 9);
      }
      if (sendingPhone.length >= 10) {
        formattedSendingPhone += "-" + sendingPhone.substring(9, 11);
      }
      if (sendingPhone.length === 11) {
        setIsPhoneValid(true);
      }
    } else {
      formattedSendingPhone = "+" + sendingPhone;
      formattedSendingPhone.length > 10 && setIsPhoneValid(true)
    }
    props.setPhoneNumber(formattedSendingPhone);
  };

  const onSettingEmail = (e) => {
    let sendingEmail = e.target.value;
    props.setEmail(sendingEmail);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    !re.test(String(sendingEmail).toLowerCase())
      ? setIsEmailValid(false)
      : setIsEmailValid(true);
  };

  const onSettingProfileLink = (e) => {
    let sendingLink = e.target.value;
    props.setProfileLink(sendingLink);
    sendingLink.length > 3
      ? setIsProfileLinkValid(true)
      : setIsProfileLinkValid(false);
  };

  const onSettingCity = (type) => {
    props.setCity(type.value);
    setCityValue(type);
    setIsCityValid(true);
  };
  const onSettingSource = (type) => {
    props.setSource(type.value);
    setSourceValue(type);
  };
  const onSettingCompany = (e) => {
    let sendingCompany = e.target.value;
    props.setCompany(sendingCompany);
  };
  const onSettingRecipient = (e) => {
    let sendingRecipient = e.target.value;
    props.setRecipient(sendingRecipient);
  };

  return (
    <div
      className={style.RequestField}
      style={
        showedExtraFields ? { height: 700 + "px" } : { height: 550 + "px" }
      }
    >
      <div
        className={style.BaseFields}
        style={showedExtraFields ? { transform: "translateY(-20px)" } : null}
      >
        <span
          className={style.BaseInputField}
          style={inputMapping[isNameValid]}
        >
          <p
            className={style.BaseInputFieldHeader}
            style={inputLabelMapping[isNameValid]}
          >
            Ваше Имя *
          </p>
          <input
            type="text"
            className={style.BaseInputFieldInput}
            placeholder="Иван"
            onChange={onSettingName}
            value={props.requestForm.requestName}
          />
          {isNameValid === false && (
            <p className={style.errorMessage}>Обязательное поле</p>
          )}
        </span>
        <span
          className={style.BaseInputField}
          style={inputMapping[isPhoneValid]}
        >
          <p
            className={style.BaseInputFieldHeader}
            style={inputLabelMapping[isPhoneValid]}
          >
            Номер телефона *
          </p>
          <input
            type="tel"
            value={props.requestForm.requestPhoneNumber}
            className={style.BaseInputFieldInput}
            placeholder="+7 (000) 000-00-00"
            onChange={onSettingPhone}
          />
          {isPhoneValid === false && (
            <p className={style.errorMessage}>Обязательное поле</p>
          )}
        </span>
        <span
          className={style.BaseInputField}
          style={inputMapping[isEmailValid]}
        >
          <p
            className={style.BaseInputFieldHeader}
            style={inputLabelMapping[isEmailValid]}
          >
            E-mail *
          </p>
          <input
            type="text"
            value={props.requestForm.requestEmail}
            className={style.BaseInputFieldInput}
            placeholder="example@skdesign.ru"
            onChange={onSettingEmail}
          />
          {isEmailValid === false && (
            <p className={style.errorMessage}>Обязательное поле</p>
          )}
        </span>
        <span
          className={style.BaseInputField}
          style={inputMapping[isProfileLinkValid]}
        >
          <p
            className={style.BaseInputFieldHeader}
            style={inputLabelMapping[isProfileLinkValid]}
          >
            Ссылка на профиль *
          </p>
          <input
            type="text"
            className={style.BaseInputFieldInput}
            placeholder="instagram.com/skde..."
            onChange={onSettingProfileLink}
            value={props.requestForm.requestProfileLink}
          />
          {isProfileLinkValid === false && (
            <p className={style.errorMessage}>Обязательное поле</p>
          )}
        </span>
        <span
          className={style.SelectField}
          style={selectorsMapping[isCityValid]}
        >
          <Select
            value={cityValue}
            className={style.City}
            classNamePrefix="selectors"
            options={cities.map((c) => ({ value: c.id, label: c.name }))}
            isSearchable={false}
            placeholder="Выберите город *"
            onChange={onSettingCity}
          />
        </span>
        <span
          className={style.BaseInputField}
          style={{ width: 375 + "px", borderColor: "#E3E3E3" }}
        >
          <p
            className={style.BaseInputFieldHeader}
            style={{ color: "#828282" }}
          >
            Название организации/студии
          </p>
          <input
            value={props.requestForm.requestCompany}
            onChange={onSettingCompany}
            className={style.BaseInputFieldInput}
            placeholder="SK Design"
          />
        </span>
        <span
          className={style.ShowExtraFieldsArea}
          onClick={() => setShowedExtraFields(!showedExtraFields)}
        >
          Показать дополнительные поля{" "}
          {showedExtraFields ? (
            <ArrowDown className={style.ArrowDown} />
          ) : (
            <ArrowDown className={style.ArrowUp} />
          )}
        </span>
      </div>
      {showedExtraFields && (
        <div className={style.ExtraFields}>
          <span
            className={style.BaseInputField}
            style={{ width: 375 + "px", borderColor: "#E3E3E3" }}
          >
            <p
              className={style.BaseInputFieldHeader}
              style={{ color: "#828282" }}
            >
              Получатель
            </p>
            <input
              onChange={onSettingRecipient}
              value={props.requestForm.requestRecipient}
              className={style.BaseInputFieldInput}
              placeholder="ФИО"
            />
          </span>
          <span className={style.SelectField}>
            <Select
              value={sourceValue}
              onChange={onSettingSource}
              className={style.City}
              classNamePrefix="selectors"
              options={sources.map((s) => ({ value: s, label: s }))}
              isSearchable={false}
              placeholder="Откуда узнали про нас?"
            />
          </span>
        </div>
      )}
      <span
        className={
          isNameValid &&
          isPhoneValid &&
          isProfileLinkValid &&
          isCityValid &&
          isEmailValid
            ? style.SendRequestButtonActive
            : style.SendRequestButtonDisabled
        }
        style={showedExtraFields ? { transform: "translateY(20px)" } : null}
        onClick={
          isNameValid &&
          isPhoneValid &&
          isProfileLinkValid &&
          isCityValid &&
          isEmailValid
            ? onSubmitRequest
            : null
        }
      >
        {isLoading ? (
          <img src={preloader} style={{ width: 30 + "px" }} />
        ) : (
          "Отправить заявку"
        )}
      </span>
    </div>
  );
};

export default RequestField;
