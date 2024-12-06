/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import languagesAndCodes from "./languagesAndCodes.json";
import { makeStyles, Button } from "@material-ui/core";
import Select from "../../../images/select.svg";
import translate from "translate";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

translate.key = "AIzaSyA-LWuIlquldSBDqQWlgr3nJE8h3AMTDCE";

const useStyles = makeStyles((theme) => ({
  dropDownButton: {
    paddingInline: "0",
    fontSize: "18px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    height: "21px",
    backgroundColor: "inherit",
    border: "none",
    color: "#fff",
    justifyContent: "start",
    textTransform: "none",

    "&:focus": {
      outline: "none",
    },
  },

  menu: {
    "& .MuiPaper-root": {
      left: "unset !important",
      right: "17px",
      width: "735px",
      maxWidth: "calc(90vw - 18px)",
      padding: "35px",
      [theme.breakpoints.down("xs")]: {
        left: "0",
        right: "unset !important",
        width: "70%",
        padding: "10px",
      },
      "& ul": {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
        },
        flexWrap: "wrap",
        justifyContent: "center",
        "& li": {
          border: "1px solid rgba(5, 56, 112, 0.2)",
          boxSizing: "border-box",
          "&:hover": {
            background: "#053870",
            color: "#fff",
          },
        },
      },
    },
  },
}));

export default function TranslateMe({ scroll }) {
  const { dropDownButton, menu } = useStyles();
  const [selectedLanguage, setLanguage] = useState(0);

  const handleChang = (index) => {
    scroll();
    setLanguage(index);
    localStorage.setItem("languageIndex", index);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const getSelectedLanguageIndex = JSON.parse(
      localStorage.getItem("languageIndex")
    );
    if (!getSelectedLanguageIndex)
      return localStorage.setItem("languageIndex", selectedLanguage);
    return setLanguage(getSelectedLanguageIndex);
  }, [setLanguage, selectedLanguage]);

  return (
    <div>
      <Button
        className={dropDownButton}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {selectedLanguage === 0
          ? "Select Language"
          : languagesAndCodes.languages[selectedLanguage].lang}
        <img alt="down arrow" src={Select} />
      </Button>
      <Menu
        className={menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languagesAndCodes.languages.map(({ lang }, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose();
              handleChang(index);
            }}
          >
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

TranslateMe.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export async function translateMyText(text = "") {
  const { languages } = languagesAndCodes;
  const langIndex = localStorage.getItem("languageIndex");
  const lang = languages[langIndex];
  const result = await translate(text, lang.code);
  return result;
}

export function WithTransLate({ text, isFunction }) {
  const [translatedText, setTranslatedText] = useState(text);
  translateMyText(text)
    .then((res) => {
      setTranslatedText(res);
    })
    .catch((err) => console.log(err));

  return isFunction ? translatedText : <>{translatedText}</>;
}

WithTransLate.propTypes = {
  text: PropTypes.string.isRequired,
  isFunction: PropTypes.bool,
};
