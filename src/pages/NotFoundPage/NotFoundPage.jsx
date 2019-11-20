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
											<h1 className={classes.title}>NOT FOUND</h1>
											<h2>404</h2>
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
								<h4>
                  You probably got lost! Or we just couldn't find what you were looking for.
								</h4>
								<h4>
									This page may have been removed or relocated.
								</h4>
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
