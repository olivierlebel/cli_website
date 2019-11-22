/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          <b>Console Log Inc. {1900 + new Date().getYear()}</b> , made with{" "}
          <Favorite className={classes.icon} style={{ color: "red" }}/> using{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
          >
            Gatsby
          </a>{" "}
          and{" "}
          <a
            href="https://material-ui.com/"
            target="_blank"
          >
            Material UI
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
