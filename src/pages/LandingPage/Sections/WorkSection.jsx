import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Tooltip from "@material-ui/core/Tooltip"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx"
// images
import ac from "assets/img/tech/ac.svg"
import ad from "assets/img/tech/ad.svg"
import android from "assets/img/tech/android.svg"
import apollo from "assets/img/tech/apollo.svg"
import apple from "assets/img/tech/apple.svg"
import aws from "assets/img/tech/aws.svg"
import azure from "assets/img/tech/azure.svg"
import bb from "assets/img/tech/bb.svg"
import ci from "assets/img/tech/ci.svg"
import dart from "assets/img/tech/dart.svg"
import docker from "assets/img/tech/docker.svg"
import esl from "assets/img/tech/esl.svg"
import expo from "assets/img/tech/expo.png"
import fb from "assets/img/tech/fb.svg"
import flutter from "assets/img/tech/flutter.svg"
import gatsby from "assets/img/tech/gatsby.svg"
import gh from "assets/img/tech/gh.svg"
import go from "assets/img/tech/go.svg"
import gp from "assets/img/tech/gp.svg"
import gql from "assets/img/tech/gql.svg"
import ios from "assets/img/tech/ios.svg"
import java from "assets/img/tech/java.svg"
import jenkins from "assets/img/tech/jenkins.png"
import jest from "assets/img/tech/jest.svg"
import jira from "assets/img/tech/jira.svg"
import js from "assets/img/tech/js.svg"
import json from "assets/img/tech/json.svg"
import kafka from "assets/img/tech/kafka.svg"
import kotlin from "assets/img/tech/kotlin.svg"
import kibana from "assets/img/tech/kibana.svg"
import maven from "assets/img/tech/maven.svg"
import mongo from "assets/img/tech/mongo.svg"
import node from "assets/img/tech/node.svg"
import os from "assets/img/tech/os.svg"
import python from "assets/img/tech/python.svg"
import redux from "assets/img/tech/redux.svg"
import rest from "assets/img/tech/rest.svg"
import rn from "assets/img/tech/rn.svg"
import splunk from "assets/img/tech/splunk.svg"
import spring from "assets/img/tech/spring.svg"
import swift from "assets/img/tech/swift.svg"
import ts from "assets/img/tech/ts.svg"
import zeplin from "assets/img/tech/zeplin.svg"


class WorkSection extends React.Component {
	render() {
		const { classes } = this.props
		const icon = { margin: 20, width: "5%", height: "5%" }
		return (
			<div className={classes.description}>
				<GridContainer>
					<GridItem>
						<h2 className={classes.title}>Work with us</h2>
						<h4 className={classes.description}>
              There is many reasons to trust Console Log Inc's business.
              We will adapt to the technologies you use. Or propose the right tech for you or your customers need.
						</h4>
					</GridItem>
				</GridContainer>
				<GridContainer justify="center">
					<Tooltip title={"App Center"} placement="bottom-center">
						<img src={ac} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Android"} placement="bottom-center">
						<img src={android} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Apollo Client"} placement="bottom-center">
						<img src={apollo} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"App Store"} placement="bottom-center">
						<img src={apple} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Amazon Web Services"} placement="bottom-center">
						<img src={aws} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Bit Bucket"} placement="bottom-center">
						<img src={bb} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Circle CI"} placement="bottom-center">
						<img src={ci} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"ES Lint"} placement="bottom-center">
						<img src={esl} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Expo"} placement="bottom-center">
						<img src={expo} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Firebase"} placement="bottom-center">
						<img src={fb} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Gatsby"} placement="bottom-center">
						<img src={gatsby} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Git Hub"} placement="bottom-center">
						<img src={gh} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Golang"} placement="bottom-center">
						<img src={go} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Google Play"} placement="bottom-center">
						<img src={gp} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Graph QL"} placement="bottom-center">
						<img src={gql} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"iOS"} placement="bottom-center">
						<img src={ios} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Java"} placement="bottom-center">
						<img src={java} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"JavaScript"} placement="bottom-center">
						<img src={js} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Jenkins"} placement="bottom-center">
						<img src={jenkins} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Jest"} placement="bottom-center">
						<img src={jest} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Jira"} placement="bottom-center">
						<img src={jira} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"JSON"} placement="bottom-center">
						<img src={json} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Kotlin"} placement="bottom-center">
						<img src={kotlin} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Microsoft Azure"} placement="bottom-center">
						<img src={azure} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"MongoDB"} placement="bottom-center">
						<img src={mongo} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Openshift"} placement="bottom-center">
						<img src={os} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Python"} placement="bottom-center">
						<img src={python} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"React"} placement="bottom-center">
						<img src={rn} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Redux"} placement="bottom-center">
						<img src={redux} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Rest API"} placement="bottom-center">
						<img src={rest} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Splunk"} placement="bottom-center">
						<img src={splunk} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Spring"} placement="bottom-center">
						<img src={spring} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Swift"} placement="bottom-center">
						<img src={swift} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"TypeScript"} placement="bottom-center">
						<img src={ts} alt="..." style={icon} />
					</Tooltip>
					<Tooltip title={"Zeplin"} placement="bottom-center">
						<img src={zeplin} alt="..." style={icon} />
					</Tooltip>
				</GridContainer>
				<br /><br /><br /><br /><br />
			</div>
		)
	}
}

export default withStyles(workStyle)(WorkSection)
