import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link } from "gatsby"
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa"
import Carousel from "react-slick"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"
import nbc from "assets/img/nbc.jpg"
import tvas from "assets/img/tvas.jpg"
import tvan from "assets/img/tvan.jpg"
import cyclone from "assets/img/cyclone.png"
import cli from "assets/img/cli-icon.png"

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props
		const imageClasses = classNames(
			classes.imgRaised,
			classes.imgRounded,
			classes.imgFluid
		)
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Products</h2>
						<h5 className={classes.description}>
              We are constantly building new stuff. We have worked on multiple apps for top enterprises.{" "}
						</h5>
						<Link to="/products/">More about our products here.</Link>
					</GridItem>
				</GridContainer>
				<GridContainer justify="center">
					<GridItem xs={10} sm={10} md={8} className={classes.marginAuto}>
						<Card plain>
							<Carousel {...settings}>
								<Card plain>
									<GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
										<img src={nbc} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
                    National Bank of Canada
										<br />
										<small className={classes.smallTitle}>Mobile App (React-Native)</small>
									</h4>
									<CardBody>
										<p className={classes.description}>
                      It's easy to manage your finances with the National Bank app.
                      The National Bank app meets your personal banking needs, as well as the specific requirements of your business.
										</p>
									</CardBody>
									<CardFooter className={classes.justifyCenter}>
										<Button
											justIcon
											link
											color="transparent"
											href="https://apps.apple.com/ca/app/application-bnc-mobile/id476651878?l=fr"
											target="_blank"
											className={classes.margin5}
										>
											<FaApple/>
										</Button>
										<Button
											justIcon
											link
											color="transparent"
											href="https://play.google.com/store/apps/details?id=ca.bnc.android&hl=fr_CA"
											target="_blank"
											className={classes.margin5}
										>
											<FaAndroid/>
										</Button>
									</CardFooter>
									<br /><br />
								</Card>
								<Card plain>
									<GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
										<img src={tvas} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
                    TVA Sports
										<br />
										<small className={classes.smallTitle}>Mobile App (React-Native)</small>
									</h4>
									<CardBody>
										<p className={classes.description}>
                    TVA Sports, THE source of sports information in Quebec,
                    is an app that you can use to stay informed about your
                    favorite sports, teams and leagues.
										</p>
									</CardBody>
									<CardFooter className={classes.justifyCenter}>
										<Button
											justIcon
											link
											color="transparent"
											href="https://apps.apple.com/ca/app/tva-sports/id909307725?l=fr"
											target="_blank"
											className={classes.margin5}
										>
											<FaApple/>
										</Button>
										<Button
											justIcon
											link
											color="transparent"
											href="https://play.google.com/store/apps/details?id=com.nurun.tva_sports&hl=fr_CA"
											target="_blank"
											className={classes.margin5}
										>
											<FaAndroid/>
										</Button>
									</CardFooter>
									<br /><br />
								</Card>
								<Card plain>
									<GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
										<img src={tvan} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
                    TVA Nouvelles
										<br />
										<small className={classes.smallTitle}>Mobile App (Swift & Kotlin/Java)</small>
									</h4>
									<CardBody>
										<p className={classes.description}>
                    Easy to use, fluid and intuitive, TVA Nouvelles mobile
                    application's represents the best way to follow Quebec and international news in real time.
										</p>
									</CardBody>
									<CardFooter className={classes.justifyCenter}>
										<Button
											justIcon
											link
											color="transparent"
											href="https://apps.apple.com/ca/app/tva-nouvelles/id437251500?l=fr"
											target="_blank"
											className={classes.margin5}
										>
											<FaApple/>
										</Button>
										<Button
											justIcon
											link
											color="transparent"
											href="https://play.google.com/store/apps/details?id=com.nurun.lcn&hl=fr_CA"
											target="_blank"
											className={classes.margin5}
										>
											<FaAndroid/>
										</Button>
									</CardFooter>
									<br /><br />
								</Card>
								<Card plain>
									<GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
										<img src={cyclone} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
                    The Cyclone Project
										<br />
										<small className={classes.smallTitle}>Mobile App (React-Native)</small>
									</h4>
									<CardBody>
										<p className={classes.description}>
                      Mobile app built using React-Native, Typescript and Expo.
										</p>
									</CardBody>
									<CardFooter className={classes.justifyCenter}>
										<Button
											justIcon
											color="transparent"
											className={classes.margin5}
										>
											<FaApple/>
										</Button>
										<Button
											justIcon
											color="transparent"
											className={classes.margin5}
										>
											<FaAndroid/>
										</Button>
									</CardFooter>
									<br /><br />
								</Card>
								<Card plain>
									<GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
										<img src={cli} alt="..." className={imageClasses} />
									</GridItem>
									<h4 className={classes.cardTitle}>
                    Console Log Inc.
										<br />
										<small className={classes.smallTitle}>Website (React + Gastby)</small>
									</h4>
									<CardBody>
										<p className={classes.description}>
                      The current website you are now. Built with React Gastby.
										</p>
									</CardBody>
									<CardFooter className={classes.justifyCenter}>
										<Button
											justIcon
											color="transparent"
											className={classes.margin5}
										>
											<a href="https://github.com/Console-Log-Inc" target="_blank" style={{ color: "black" }}>
												<FaGithub/>
											</a>
										</Button>
									</CardFooter>
									<br /><br />
								</Card>
							</Carousel>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(teamStyle)(ProductSection)
