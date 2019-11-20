import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Smartphone from "@material-ui/icons/Smartphone"
import Web from "@material-ui/icons/Web"
import BusinessCenter from "@material-ui/icons/BusinessCenter"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import InfoArea from "components/InfoArea/InfoArea.jsx"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"
import { Link } from "gatsby"

class ServiceSection extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Services</h2>
						<h5 className={classes.description}>
              At CLI, we focus on developing top quality web and mobile applications for all kind of businesses.
              We can help by improving a struggling app, contributing to an active project or building a new app
              from the ground up.
						</h5>
						<Link to="/services/">More about our services here.</Link>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Mobile App Development"
								description="React-Native: This is our biggest speciality. You would be amaze how fluid, fast and easy to use our apps are. A unique code base to build mobile apps for iPhone, iPad, Android smartphone and Android tablets means a better unified user experience for your customers and decrease maintenance."
								icon={Smartphone}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Website Development"
								description="At CLI, we had multiple successful experiences building React website, starting with the one you are at right now. In fact, this website has been build using the Gatsby framework, a powerful tool to build a static website generator that is built on React."
								icon={Web}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Consultancy Services"
								description="At CLI, we can help your business by working hand by hand with your company and staff. The help we can provide goes from mentoring your employees empower the skills we already master to directly work on your already existing product, wether it's a legacy project our a top-notch one."
								icon={BusinessCenter}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		)
	}
}

export default withStyles(productStyle)(ServiceSection)
