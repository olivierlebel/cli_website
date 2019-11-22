import React from "react"
import classNames from "classnames"
import PhoneInTalk from "@material-ui/icons/PhoneInTalk"
import Email from "@material-ui/icons/Email"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaTwitter, FaGithub, FaLinkedin, FaApple, FaAndroid } from "react-icons/fa"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import cli from "assets/img/cli-icon.png"
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"
import rn from "assets/img/tech/rn.svg"
import flutter from "assets/img/tech/flutter.svg"
import founder from "assets/img/olivier-lebel.jpg"


class FrPage extends React.Component {
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
											<h3 className={classes.title}>Français</h3>
											<h3>La version française du site n'est pas encore tout à fait prête!</h3>
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
								<h6>
                  La version française sera bientôt complétée. En attendant, voici un résumé du site web en français.
								</h6>
								<br /><br /><br />
							</div>
							<div className={classes.description}>
								<p>
                  Chez CLI, notre raison d'être est le développement d'application web et mobile pour entreprises de toutes sortes.
                  De la technologie dernier cri à la maintenance de logiciel legacy, CLI est là pour aider votre entreprise à briller.
								</p>
								<p>
                  Nous pouvons vous aider via <i>l'amélioration d'une application en difficulté</i>, <i>la contribution à un projet existant</i> ou <i>le développement d'applications clé en main</i>.
								</p>
								<br />
								<h2>
                  Développement Mobile
								</h2>
								<h3>
									<div>
                    React-Native
										<a
											href="https://facebook.github.io/react-native/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5 }}
										>
											<img src={rn} alt="..." style={{ height: 36, width: 36 }}/>
										</a>
									</div>
								</h3>
								<p>
                  L'apprendre une fois, l'écrire partout. C'est la devise de Facebook vis-à-vis son projet React-Native.
                  La création d'application mobile native pour Android et iOS en utilisant React.
                  React-Native met en oeuvre le meilleur du développement natif avec React, la meilleure librairie
									JavaScript pour construire des interfaces utilisateurs.
								</p>
								<p>
                  Il s'agit de notre plus forte spécialité. Vous seriez stupéfait de voir à quel point nos applications
									sont fluides, rapides et faciles à utiliser. Une seule instance de code à maintenir pour toutes vos
									applications, quelles soient consommées sur iPhone, iPad, téléphone Android and tablettes Android
                  ce qui signifie une expérience utilisateur unifiée pour vos clients et un coût plus bas en maintenance.
								</p>
								<h3>
									<div>
                    Développement iOS
										<a
											href="https://developer.apple.com/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5, color: "black" }}
										>
											<FaApple />
										</a>
									</div>
								</h3>
								<p>
                  Nous avons travaillé avec succès sur quelques applications en Swift et nous serions
                  heureux de vous assister dans la construction d'une application iOS native.
								</p>
								<h3>
									<div>
                    Développement Android
										<a
											href="https://developer.android.com/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5, color: "black" }}
										>
											<FaAndroid />
										</a>
									</div>
								</h3>
								<p>
                  Nous avons travaillé avec succès sur quelques applications en Java et Kotlin et nous serions
                  heureux de vous assister dans la construction d'une application iOS native.
								</p>
								<h3>
									<div>
                    Flutter
										<a
											href="https://flutter.dev/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5 }}
										>
											<img src={flutter} alt="..." style={{ height: 24, width: 24 }}/>
										</a>
									</div>
								</h3>
								<p>
                  En tant que fan de React-Native et du développement mobile, nous nous
									devons d'être excité par Flutter. Nous n'avons pas encore beaucoup d'expérience de développement
									encore, mais c'est quelque chose que nous travaillons actuellement.
								</p>
								<br />
								<h2>
                  Développement de Site Web
								</h2>
								<h3>
									<div>
                    React
										<a
											href="https://reactjs.org/"
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 5 }}
										>
											<img src={rn} alt="..." style={{ height: 36, width: 36 }}/>
										</a>
									</div>
								</h3>
								<p>
                  Lancé en 2013, cette libraire JavaScript est rapidement devenue l'une des plus populaires.
                  Toujours maintenue par Facebook avec l'aide de la communauté des développeurs, elle est
									utilisée par les meilleures compagnies technologiques telles que Apple, PayPal, Netflix
                  et plus de 32 000 sites web dans le monde.
								</p>
								<p>
                  Chez CLI, nous avons connaissons très bien le développement utilisant React.
                  C'est d'ailleurs le cas pour le site web que vous consultez actuellement.
                  Il est d'ailleurs construit utilisant Gatsby, un outil puissant permettant
                  de générer des sites web statiques développés en React.
								</p>
								<br />
								<h2>
                  Services de consultation
								</h2>
								<p>
                  Chez CLI, nous pouvons aider votre entreprise en travaillant main dans la main avec vous et vos employés.
                  L'aide que nous pouvons apporter peut autant se situer au niveau du mentorat auprès de vos employés sur certains sujets
                  ou encore en travaillant directement sur vos produits, peu importe qu'il s'agisse d'un projet legacy ou d'un projet tout neuf.
								</p>
								<p>
                  Nous offrons également nos conseils à nos clients sous diverses formes telles que des rapports d'analyses et de présentations.
                  Nous pouvons vous aider à rencontrer vos objectifs, résoudre des problèmes ou encore vous aider à la gestion de vos produits logiciels.
								</p>
								<br /><br /><br />
							</div>
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
											<img src={cli} alt="..." className={imageClasses} />
										</div>
										<div className={classes.name}>
											<h3 className={classes.title}>Console Log Inc.</h3>
											<h6>Entreprise de développement logiciel</h6>
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
                  Nous sommes une entreprise de développement logiciel qui offre des solutions à la fine
                  pointe de la technologie sous forme de solutions clé en main ou de services de consultation.
								</p>
								<p>
                  De nos jours, il n'y a pas une seule entreprise qui n'est pas affecté par le
                  changement sociétal et économique vis-à-vis la demande des utilisateurs pour obtenir des solutions numériques.
                  Depuis 2018, nous avons été une entreprise en génie logiciel fiable et visionnaire pour nos partenaires d'affaires.
								</p>
								<br />
								<h2>Contact</h2>
								<h6>Adresse courriel</h6>
								<a
									href="mailto:info@consoleloginc.com"
									target="_blank"
									style={{ color: "bleck" }}
								>
									info@consoleloginc.com
								</a>
								<h6>Numéro de téléphone</h6>
								<a
									href="tel:+15145184870"
									target="_blank"
									style={{ color: "bleck" }}
								>
									1+ (514) 518-4870
								</a>
								<h6>Localisation</h6>
                Blainville, Québec, Canada.
								<br /><br />
							</div>
							<GridContainer justify="center">
								<a
									href="https://calendly.com/consoleloginc"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "white" }}
								>
									<Button color="primary" round style={{ marginBottom: 20 }}>
										<PhoneInTalk className={classes.icons} />
                    Planifier un appel
									</Button>
								</a>
							</GridContainer>
							<GridContainer justify="center">
								<a
									href="mailto:info@consoleloginc.com"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "white" }}
								>
									<Button color="primary" round style={{ marginBottom: 20 }}>
										<Email className={classes.icons} />
                    Écrivez-nous
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
											<h6>Développeur & Fondateur</h6>
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
                  Mon nom est Olivier Lebel et je suis le fondateur et développeur principal chez Console Log Inc.
                  En 2018, j'ai décidé de lancer CLI, une entreprise de développement logiciel basé dans la région de Montréal.
								</p>
								<p>
                  Je suis une personne orientée résultat qui adore travailler avec des gens passionnés.
                  Je crois fermement que les gens peuvent développer leurs habiletés et leurs forces en
                  repoussant constamment leurs limites au quotidien.
								</p>
								<p>
                  Je porte actuellement mon intention dans le développement d'applications mobiles sur iOS et Android.
								</p>
								<p>
                  Ces jours-ci, mes projets personnels sont faits en React, React-Native et Flutter.
								</p>
								<p>
                  Au fil des années, j'ai travaillé avec:
								</p>
								<br />
								<h6>Languages</h6>
								<p>
									<li>JavaScript</li>
									<li>Java</li>
									<li>Swift</li>
									<li>Dart</li>
								</p>
								<br />
								<h6>Frameworks</h6>
								<p>
									<li>React-Native</li>
									<li>React</li>
									<li>Typescript</li>
									<li>Spring Boot</li>
									<li>Flutter</li>
								</p>
								<br />
								<h6>Plateformes et Outils</h6>
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

export default withStyles(aboutPageStyle)(FrPage)
