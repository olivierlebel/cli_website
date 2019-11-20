import React from "react";
import classNames from "classnames";
import Slide from "@material-ui/core/Slide";
import Info from "@material-ui/icons/Info";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Badge from "components/Badge/Badge.jsx";
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx";
import nbc from "assets/img/nbc.jpg";
import cli from "assets/img/cli-icon.png";
import tvas from "assets/img/tvas.jpg";
import tvan from "assets/img/tvan.jpg";
import cyclone from "assets/img/cyclone.png";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const appImageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand="Console Log Inc."
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/code.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.about}>
                    <div>
                      <img src={cli} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Products</h3>
                      <h6>On top of working with our clients, we are constantly working on new products.</h6>
                      <Button justIcon link className={classes.margin5}>
                        <FaGithub/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaLinkedin/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaTwitter/>
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  We are constantly building new stuff. We have worked on multiple apps for top enterprises.
                  Here they are. Stay tuned for more!
                </p>
                <Paper style={{ backgroundColor: "black", color: "white", padding: 25 }}>
                  <h2>
                    National Bank of Canada
                  </h2>
                  <Badge color="info">React-Native</Badge>
                  <Badge color="info">Angular</Badge>
                  <Badge color="info">Objective-C (iOS)</Badge>
                  <Badge color="info">Java (Android)</Badge>
                  <br /> <br />
                  <GridContainer justify="center">
                    <GridItem xs={8} sm={8} md={4}>
                      <img src={nbc} alt="..." className={appImageClasses} />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <p>
                    It's easy to manage your finances with the National Bank app.
                  </p>
                  <p>
                    Accept a transfer on the train, transfer money at the restaurant, pay employees from the cottage...
                    The National Bank app meets your personal banking needs, as well as the specific requirements of your business.
                    Manage your accounts separately - all from one app!
                  </p>
                  <Button color="white" round onClick={() => this.handleClickOpen("classicModal")} onClick={() => this.handleClickOpen("classicModal")}>
                    <Info className={classes.icons} />
                    Did you know?
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("classicModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <h4 className={classes.modalTitle}>Did you know?</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum decided to
                        leave for the far World of Grammar.
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("classicModal")}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Paper>
                <br /><br />
                <Paper style={{ padding: 25 }}>
                  <h2>
                    TVA Sports
                  </h2>
                  <Badge color="info">React-Native</Badge>
                  <Badge color="info">Objective-C (iOS)</Badge>
                  <Badge color="info">Java (Android)</Badge>
                  <br /> <br />
                  <GridContainer justify="center">
                    <GridItem xs={8} sm={8} md={4}>
                      <img src={tvas} alt="..." className={appImageClasses} />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <p>
                    TVA Sports, THE source of sports information in Quebec,
                    is an app that you can use to stay informed about your favorite sports, teams and leagues.
                  </p>
                  <p>
                    You are not at home to watch the game? No problem! You can now watch NHL games and
                    the Montreal Canadiens plus other content directly on your mobile or tablet.
                  </p>
                  <Button color="primary" round onClick={() => this.handleClickOpen("classicModal")}>
                    <Info className={classes.icons} />
                    Did you know?
                  </Button>
                </Paper>
                <br /><br />
                <Paper style={{ backgroundColor: "black", color: "white", padding: 25 }}>
                  <h2>
                    TVA Nouvelles
                  </h2>
                  <Badge color="info">Swift (iOS)</Badge>
                  <Badge color="info">Java, Kotlin (Android)</Badge>
                  <br /> <br />
                  <GridContainer justify="center">
                    <GridItem xs={8} sm={8} md={4}>
                      <img src={tvan} alt="..." className={appImageClasses} />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <p>
                    TVA Nouvelles is the most recent addition
                    to the most powerful digital offer in Quebec, in the field of information.
                  </p>
                  <p>
                    Easy to use, fluid and intuitive, TVA Nouvelles mobile application's
                    represents the best way to follow Quebec and international news in real time.
                  </p>
                  <p>
                    Whether you are in front of your TV, on your computer or on your mobile device,
                    you can now follow the latest live news as if you were there.
                  </p>
                  <Button color="white" round onClick={() => this.handleClickOpen("classicModal")}>
                    <Info className={classes.icons} />
                    Did you know?
                  </Button>
                </Paper>
                <br /><br />
                <Paper style={{ padding: 25 }}>
                  <h2>
                    Console Log Inc.
                  </h2>
                  <Badge color="info">React</Badge>
                  <Badge color="info">Gatsby</Badge>
                  <br /> <br />
                  <GridContainer justify="center">
                    <GridItem xs={8} sm={8} md={4}>
                      <img src={cli} alt="..." className={appImageClasses} />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <p>
                    The current website you are now. Built with React Gastby.
                  </p>
                </Paper>
                <br /><br />
                <Paper style={{ backgroundColor: "black", color: "white", padding: 25 }}>
                  <h2>
                    The Cyclone Project
                  </h2>
                  <Badge color="info">React-Native</Badge>
                  <Badge color="info">Typescript</Badge>
                  <br /> <br />
                  <GridContainer justify="center">
                    <GridItem xs={8} sm={8} md={4}>
                      <img src={cyclone} alt="..." className={appImageClasses} style={{ backgroundColor: "white" }} />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <p>
                    Mobile app built using React-Native, Typescript and Expo.
                  </p>
                </Paper>
                <br /><br /><br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(aboutPageStyle)(ProductsPage);
