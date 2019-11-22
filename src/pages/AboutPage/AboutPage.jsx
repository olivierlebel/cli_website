import React from "react"
import classNames from "classnames"
import PhoneInTalk from "@material-ui/icons/PhoneInTalk"
import Email from "@material-ui/icons/Email"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import cli from "assets/img/cli-icon.png"
import founder from "assets/img/olivier-lebel.jpg"
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"

class AboutPage extends React.Component {
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
				<Parallax small filter image={require("assets/img/cli-banner.png")} />
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
											<h3 className={classes.title}>Console Log Inc.</h3>
											<h6>Software Development Enterprise</h6>
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
                  We are a software development company that provides cutting edge digital solutions in the form of turnkey solutions and consultancy services.
								</p>
								<p>
                  Today, there isn’t a single business that remains unaffected by the societal and economic shift towards a customer experience facilitated by technology.
                  Since 2018 we have been a visionary and a reliable software engineering partner for well known brands.
								</p>
								<p>
                  Go to our Products Page to see what we have built so far.
								</p>
								<p>
                  Go to our Services Page to see what kind of services we offer.
								</p>
								<br />
								<h2>Contact</h2>
								<h6>Email Adress</h6>
								<u>info@consoleloginc.com</u>
								<h6>Phone Number</h6>
								<u>1+ (514) 518-4870</u>
								<h6>Location</h6>
                Blainville, Québec, Canada.
								<br /><br />
							</div>
							<GridContainer justify="center">
								<a
									href="https://calendly.com/consoleloginc"
									target="_blank"
									style={{ color: "white" }}
								>
									<Button color="primary" round style={{ marginBottom: 20 }}>
										<PhoneInTalk className={classes.icons} />
										Schedule a call
									</Button>
								</a>
							</GridContainer>
							<GridContainer justify="center">
								<a
									href="mailto:info@consoleloginc.com"
									target="_blank"
									style={{ color: "white" }}
								>
									<Button color="primary" round style={{ marginBottom: 20 }}>
										<Email className={classes.icons} />
                    Send us an email
									</Button>
								</a>
							</GridContainer>
						</div>
					</div>
				</div>
				<div style={{ height: 175 }} />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div>
						<div className={classes.container}>
							<GridContainer justify="center">
								<GridItem xs={12} sm={12} md={6}>
									<div className={classes.about}>
										<div>
											<img src={founder} alt="..." className={imageClasses} />
										</div>
										<div className={classes.name}>
											<h3 className={classes.title}>Olivier Lebel</h3>
											<h6>Developer & Founder</h6>
											<Button justIcon link className={classes.margin5} href="https://github.com/olivierlebel" target="_blank">
												<FaGithub/>
											</Button>
											<Button justIcon link className={classes.margin5} href="https://linkedin.com/in/olivier-lebel" target="_blank">
												<FaLinkedin/>
											</Button>
										</div>
									</div>
								</GridItem>
							</GridContainer>
							<div className={classes.description}>
								<p>
                  My name's Olivier Lebel and I am the founder and main developer at Console Log Inc.
                  In 2018, I decided to launch CLI, a Montreal based software development company.
								</p>
								<p>
                  I'm a result driven person that thrives when working with passionate people.
                  I believe that people can develop skills and strengths by pushing themselves to improve and grow with each life experience.
								</p>
								<p>
                  I am currently focusing on mobile applications development on iOS and Android.
								</p>
								<p>
                  These days, my personal projects are built with React, React-Native & Flutter.
								</p>
								<p>
                  Over the years, I have worked with:
								</p>
								<h6>Languages</h6>
								<p>
									<li>JavaScript</li>
									<li>Java</li>
									<li>Swift</li>
									<li>Dart</li>
								</p>
								<h6>Frameworks</h6>
								<p>
									<li>React-Native</li>
									<li>React</li>
									<li>Typescript</li>
									<li>Spring Boot</li>
									<li>Flutter</li>
								</p>
								<h6>Platforms & Tools</h6>
								<p>
									<li>Firebase</li>
									<li>Amazon Web Services</li>
									<li>Microsoft Azure DevOps</li>
									<li>Jenkins</li>
									<li>GraphQL</li>
									<li>Redux</li>
									<li>Maven</li>
									<li>Kafka</li>
									<li>Openshift</li>
									<li>Kibana</li>
									<li>Splunk</li>
									<li>Docker</li>
									<li>App Dynamics</li>
								</p>
								<br /><br />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default withStyles(aboutPageStyle)(AboutPage)
