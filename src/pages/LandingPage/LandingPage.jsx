import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"
import ContactSection from "./Sections/ContactSection.jsx"
import ServiceSection from "./Sections/ServiceSection.jsx"
import ProductSection from "./Sections/ProductSection.jsx"
import WorkSection from "./Sections/WorkSection.jsx"
import { Link } from "gatsby"

const dashboardRoutes = []

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props
		return (
			<div>
				<Header
					color="transparent"
					routes={dashboardRoutes}
					brand="Console Log Inc."
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 400,
						color: "primary"
					}}
					{...rest}
				/>
				<Parallax filter image={require("assets/img/bg.gif")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<br /><br /><br /><br /><br /><br />
								<h1 className={classes.title}>Software Development Enterprise</h1>
								<h5>
                  Leverage our experience. We offer cutting edge digital solutions.
                  From brand new tech to maintaining legacy software, CLI is here to help you achieve your goals.
								</h5>
								<h5>
									<Link to="/fr/" style={{ color: "white", textDecorationLine: "underline", fontFamily: "Courier" }}>
                    Version française
									</Link>
								</h5>
								<br /><br /><br /><br /><br /><br /><br />
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<ServiceSection />
						<ProductSection />
						<WorkSection />
						<ContactSection />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default withStyles(landingPageStyle)(LandingPage)
