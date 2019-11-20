import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PhoneInTalk from "@material-ui/icons/PhoneInTalk"
import Email from "@material-ui/icons/Email"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx"
import { Link } from "gatsby"

class ContactSection extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.description}>
				<GridContainer justify="center">
					<GridItem>
						<h2 className={classes.title}>Contact</h2>
						<h4 className={classes.description}>
              We can help you build what you have in mind.
              Your competitive edge is here: contact us!
              We will get back to you in a couple of hours.
						</h4>
						<Link to="/about/">More about us here.</Link>
					</GridItem>
				</GridContainer>
				<br />
				<GridContainer justify="center">
					<GridItem>
						<Button color="primary" round style={{ marginBottom: 20 }}>
							<PhoneInTalk className={classes.icons} />
							<a
								href="https://calendly.com/consoleloginc"
								target="_blank"
								style={{ color: "white" }}
							>
                Schedule a call
							</a>
						</Button>
					</GridItem>
				</GridContainer>
				<GridContainer justify="center">
					<GridItem>
						<Button color="primary" round style={{ marginBottom: 20 }}>
							<Email className={classes.icons} />
							<a
								href="mailto:info@consoleloginc.com"
								target="_blank"
								style={{ color: "white" }}
							>
                Send us an email
							</a>
						</Button>
					</GridItem>
				</GridContainer>
				<br />
			</div>
		)
	}
}

export default withStyles(workStyle)(ContactSection)
