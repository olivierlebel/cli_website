import React from "react"
import classNames from "classnames"
import Slide from "@material-ui/core/Slide"
import Info from "@material-ui/icons/Info"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import Paper from "@material-ui/core/Paper"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import Badge from "components/Badge/Badge.jsx"
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"
import nbc from "assets/img/nbc.jpg"
import cli from "assets/img/cli-icon.png"
import tvas from "assets/img/tvas.jpg"
import tvan from "assets/img/tvan.jpg"
import cyclone from "assets/img/cyclone.png"


const TEXTS = {
	bnc:
		<div>
			<p>
				The National Bank of Canada is the sixth largest commercial bank in
				Canada. It is headquartered in Montreal, and has branches in most
				Canadian provinces and 2.4 million personal clients.[4] National
				Bank is the largest bank in Quebec, and the second largest financial
				institution in the province, after Desjardins credit union.
			</p>
			<strong>
				<div>
				Source: {" "}
					<a
						href="https://en.wikipedia.org/wiki/National_Bank_of_Canada"
						target="_blank"
						rel="noopener noreferrer"
					>
					Wikipedia
					</a>
				</div>
				<br />
				Visit{" "}
				<a
					href="https://nbc.ca"
					target="_blank"
					rel="noopener noreferrer"
				>
					NBC's website
				</a>
			</strong>
		</div>,
	
	tvas:
		<div>
			<p>
				TVA Sports is a Canadian French-language specialty channel owned by the
				Groupe TVA, a publicly traded subsidiary of Quebecor Media. The channel
				is a general-interest sports network, and the first major competitor to RDS,
				the only other French-language sports channel in the country. TVA Sports
				obtains much of its programming via sub-licensing and resource-sharing
				agreements with the English-language network Sportsnet and its owner Rogers
				Communications. As of the 2014-15 season, TVA Sports is the national
				French-language broadcaster of the National Hockey League and Major League
				Soccer in Canada (the latter including the league's expansion club, the Montreal
				Impact), and also carries coverage of the Canadian Hockey League, Toronto Blue
				Jays baseball, and other events.
			</p>
			<strong>
				<div>
					Source: {" "}
					<a
						href="https://en.wikipedia.org/wiki/TVA_Sports"
						target="_blank"
						rel="noopener noreferrer"
					>
						Wikipedia
					</a>
				</div>
				<br />
				Visit{" "}
				<a
					href="https://tvasports.ca"
					target="_blank"
					rel="noopener noreferrer"
				>
					TVA Sports' website
				</a>
			</strong>
		</div>,

	tvan:
		<div>
			<p>
				TVA Nouvelles is the news division of TVA, a French language television
				network in Canada. Programs produced by the division include nightly local
				and national newscasts branded as TVA Nouvelles, as well as the news magazine
				program JE. The division also owns and operates the 24-hour news channel
				Le Canal Nouvelles.
			</p>
			<strong>
				<div>
			Source: {" "}
					<a
						href="https://en.wikipedia.org/wiki/TVA_Nouvelles"
						target="_blank"
						rel="noopener noreferrer"
					>
					Wikipedia
					</a>
				</div>
				<br />
				Visit{" "}
				<a
					href="https://tvanouvelles.ca"
					target="_blank"
					rel="noopener noreferrer"
				>
					TVA Nouvelles' website
				</a>
			</strong>
		</div>,
}

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ProductsPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			classicModal: false,
			text: "",
		}
	}
	handleClickOpen(modal, text) {
		var x = []
		x[modal] = true
		this.state.text = TEXTS[text]
		this.setState(x)
	}
	handleClose(modal) {
		var x = []
		x[modal] = false
		this.setState(x)
	}

	render() {
		const { classes, ...rest } = this.props
		const imageClasses = classNames(
			classes.imgRaised,
			classes.imgRoundedCircle,
			classes.imgFluid
		)
		const appImageClasses = classNames(
			classes.imgRaised,
			classes.imgRounded,
			classes.imgFluid
		)

		const CustomDialog = ({ text }) => (
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
					<h4 className={classes.modalTitle}><b>Did you know?</b></h4>
				</DialogTitle>
				<DialogContent
					id="classic-modal-slide-description"
					className={classes.modalBody}
				>
					<p>
						{text}
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
                  We are constantly building new stuff. We have worked on multiple apps for top enterprises.
                  Here they are. Stay tuned for more!
								</p>
								<br />
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
									<Button color="white" round onClick={() => this.handleClickOpen("classicModal", "bnc")}>
										<Info className={classes.icons} />
										Did you know?
									</Button>
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
									<Button color="primary" round onClick={() => this.handleClickOpen("classicModal", "tvas")}>
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
									<Button color="white" round onClick={() => this.handleClickOpen("classicModal", "tvan")}>
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
				<CustomDialog text={this.state.text} />
				<Footer />
			</div>
		)
	}
}

export default withStyles(aboutPageStyle)(ProductsPage)
