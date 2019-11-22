import React from "react"
import { Link } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Button from "components/CustomButtons/Button.jsx"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
	const { classes } = props
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Link to="/services/" style={{ color: "white" }} activeStyle={{ textDecorationLine: "underline" }}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
            services
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/products/" style={{ color: "white" }} activeStyle={{ textDecorationLine: "underline" }}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
            products
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/blog/" style={{ color: "white" }} activeStyle={{ textDecorationLine: "underline" }}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
            blog
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/about/" style={{ color: "white" }} activeStyle={{ textDecorationLine: "underline" }}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
            about
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					title="Follow us on GitHub"
					placement={typeof window !== "undefined" && window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.github.com/console-log-inc"
						target="_blank"
						className={classes.navLink}
					>
						<FaGithub/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					title="Follow us on LinkedIn"
					placement={typeof window !== "undefined" && window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.linkedin.com/company/console-log-inc/"
						target="_blank"
						className={classes.navLink}
					>
						<FaLinkedin/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					title="Follow us on Twitter"
					placement={typeof window !== "undefined" && window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://twitter.com/consoleloginc"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<FaTwitter/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/fr/" style={{ color: "white" }} activeStyle={{ textDecorationLine: "underline" }}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
            fr
					</Button>
				</Link>
			</ListItem>
		</List>
	)
}

export default withStyles(headerLinksStyle)(HeaderLinks)
