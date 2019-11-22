import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaTwitter, FaGithub, FaLinkedin, FaApple, FaAndroid } from "react-icons/fa"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import cli from "assets/img/cli-icon.png"
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"
import rn from "assets/img/tech/rn.svg"
import flutter from "assets/img/tech/flutter.svg"


class ServicesPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props
		const imageClasses = classNames(
			classes.imgRaised,
			classes.imgRoundedCircle,
			classes.imgFluid
		)
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
				<Parallax small filter image={require("assets/img/service.png")} />
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
											<h3 className={classes.title}>Services</h3>
											<h6>
                        We offer mobile app development, website development and consultancy services.
											</h6>
											<Button justIcon link className={classes.margin5} href="https://github.com/Console-Log-Inc" target="_blank">
												<FaGithub/>
											</Button>
											<Button justIcon link className={classes.margin5} href="https://linkedin.com/company/Console-Log-Inc" target="_blank">
												<FaLinkedin/>
											</Button>
											<Button justIcon link className={classes.margin5} href="https://twitter.com/consoleloginc" target="_blank">
												<FaTwitter/>
											</Button>
										</div>
									</div>
								</GridItem>
							</GridContainer>
							<div className={classes.description}>
								<p>
                  At CLI, we focus on developing top quality web and mobile applications for all kind of businesses.
                  From brand new tech to maintaining legacy software, CLI is here to help your business.
								</p>
								<p>
                  We can help by <i>improving a struggling app</i>, <i>contributing to an active project</i> or <i>building a new app from the ground up</i>.
								</p>
								<br />
								<h2>
                  Mobile App Development
								</h2>
								<h3>
									<div>
                    React-Native
										<a
											href="https://facebook.github.io/react-native/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5 }}
										>
											<img src={rn} alt="..." style={{ height: 36, width: 36 }}/>
										</a>
									</div>
								</h3>
								<p>
                  Learn once, write anywhere. That's the mantra of Facebook with it's React-Native framework.
                  Create native apps for Android and iOS using React.
                  React-Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
								</p>
								<p>
                  This is our biggest speciality. You would be amaze how fluid, fast and easy to use our apps are.
                  A unique code base to build mobile apps for iPhone, iPad, Android smartphone and Android tablets
                  means a better unified user experience for your customers and decrease maintenance.
								</p>
								<h3>
									<div>
                    iOS Development
										<a
											href="https://developer.apple.com/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5, color: "black" }}
										>
											<FaApple />
										</a>
									</div>
								</h3>
								<p>
                  We have worked on multiple apps build with Swift and we would
                  be happy to build the best iOS experience there is for your clients.
								</p>
								<h3>
									<div>
                    Android Development
										<a
											href="https://developer.android.com/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5, color: "black" }}
										>
											<FaAndroid />
										</a>
									</div>
								</h3>
								<p>
                  We have worked on multiple apps build with Java and Kotlin and we would be happy
                  to build the best Android experience there is for your clients.
								</p>
								<h3>
									<div>
                    Flutter
										<a
											href="https://flutter.dev/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5 }}
										>
											<img src={flutter} alt="..." style={{ height: 24, width: 24 }}/>
										</a>
									</div>
								</h3>
								<p>
                  As React-Native and pure native enthousiast, we have to be excited about Flutter.
                  We do not have lot of experience with it for now, but it's something we are actually getting certified.
								</p>
								<br />
								<h2>
                  Website Development
								</h2>
								<h3>
									<div>
                    React
										<a
											href="https://reactjs.org/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5 }}
										>
											<img src={rn} alt="..." style={{ height: 36, width: 36 }}/>
										</a>
									</div>
								</h3>
								<p>
                  Launched back in 2013, this JavaScript library has quickly won popular affections.
                  Today it is maintained by Facebook, together with the developer community.
                  It is used by the leading companies, like Apple, PayPal, Netflix,
                  while over 32 thousand of websites are built using React JS framework.
								</p>
								<p>
                  At CLI, we had multiple successful experiences building React website, starting with the one you are at right now.
                  In fact, this website has been build using the Gatsby framework, a powerful tool to build
                  a static website generator that is built on React.
								</p>
								<br />
								<h2>
                  Consultancy Services
								</h2>
								<p>
                  At CLI, we can help your business by working hand by hand with your company and staff.
                  The help we can provide goes from mentoring your employees empower the skills we already
                  master to directly work on your already existing product, wether it's a legacy project our a top-notch one.
								</p>
								<p>
                  We are also offering our advice to our clients in various different forms such as reports and presentations.
                  We can help you addressing your specific goals, tackling some problems or help to manage software based projects.
								</p>
								<br /><br /><br />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default withStyles(aboutPageStyle)(ServicesPage)
