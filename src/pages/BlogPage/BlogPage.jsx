import React from "react"
import classNames from "classnames"
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
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"

class BlogPage extends React.Component {
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
				<Parallax small filter image={require("assets/img/dream.jpg")} />
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
											<h3 className={classes.title}>Blog</h3>
											<h6>This section is not ready yet!</h6>
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
                  Please comeback in a few weeks!
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

export default withStyles(aboutPageStyle)(BlogPage)
