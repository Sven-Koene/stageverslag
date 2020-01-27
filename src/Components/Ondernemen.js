import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import goudageo from "../Images/goudageo.png";
import beaudermo from "../Images/beaudermo.png"
import backbeaudermo from "../Images/backbeaudermo.png"

class Ondernemen extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className="center">
                <div className="tabs">
                <h1 className="header">Ondernemen</h1>
                    <Tabs>
                        <TabLink to="STARR individueel" className="tab">STARR individueel</TabLink>
                        <TabLink to="STARR teamverband" className="tab">STARR teamverband</TabLink>
                        <TabLink to="Beaudermo website" className="tab">Beaudermo website</TabLink>
                        <TabLink to="Gouda Geo website" className="tab">Gouda-Geo website</TabLink>
                        <TabLink to="En Classe" className="tab">En Classe</TabLink>
                        <TabLink to="Verbeteringen rotterdamduurzaam" className="tab">Verbeteringen rotterdamduurzaam</TabLink>
                        <TabLink to="kansen" className="tab">Kansen onderzoek</TabLink>
                        <div className="text">
                            <TabContent for="STARR individueel">
                                <div className="content">
                                    <h3></h3>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <img></img>
                                </div>
                            </TabContent>
                            <TabContent for="STARR teamverband">
                                <div className="content">
                                    <h3></h3>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <img></img>
                                </div>
                            </TabContent>
                            <TabContent for="Beaudermo website">
                                <div className="content">
                                    <h3>Beaudermo website</h3>
                                    <p>Beaudermo is een huidspecialist die op zoek was naar een nieuwe website. Het contract wat IDN aan klanten doorstuurt is lang en verwarrend. Beaudermo had een template uitgekozen maar wist nu niet wat ze moest opleveren aan teksten en foto’s voor de website. De communicatie verliep stroef en het project werd op hold gezet. Ik ben met een andere stagiaire dit project verder gaan uitwerken. Binnen dit project had ik de rol van webdeveloper en samen de andere stagiaire deden we via de telefoon het klantencontact. We stelde samen vragen op over dingen die wij nodig had-den om de website af te maken. Zo zijn we in een aantal iteraties gaan werken. We zijn begonnen met foto’s. de foto’s die in het template stonden waren placeholders en moesten worden veer-vangen door eigen foto’s van de salon. Vooraf hebben we in een kleine brainstormsessie samen bedacht wat voor foto’s dit konden zijn. Onze voorbeelden waren: een foto van de salon, een aan-tal huidverbetermiddellen en foto van een specialist aan het werk. We kregen foto’s opgestuurd en ik heb deze op de website geplaatst. We hebben de link doorgestuurd en zijn zo verder gegaan met de teksten en andere wensen. De laatste vraag waar ik aan heb gewerkt is een blog pagina. Deze moest zowel in het Engels als in het Nederlands. Binnen Gantry is dit niet moeilijk te maken en had ik dit binnen een dag gemaakt.</p>
                                    <p>Van dit project heb ik  geleerd gerichte vragen te stellen aan de klant. Ik zit in het vakgebied en weet waar ik over praat maar dat betekent niet dat de klant dit ook weet. Dit is iets wat ik nog wel eens vergeet. Praten met de klant is iets waar ik me niet comfortabel bij voelde waardoor ik me vaak stil hield en de andere stagiaire aan het woord liet. Dit wil ik in het vervolg verbeteren door meer initiatief te nemen binnen de gesprekken met de klant.</p>
                                    <img src={beaudermo} alt="website beaudermo" className="contentImage"></img>
                                    <img src={backbeaudermo} alt="backend website beaudermo" className="contentImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="Gouda Geo website">
                                <div className="content">
                                    <h3>Gouda-Geo website</h3>
                                    <p>Gouda Geo is een andere klant van IDN die al lang op hold stond. Door ons succes met Beaudermo werd ons gevraagd om te kijken of onze techniek ook werkt op Gouda-geo. Gouda-geo is een bedrijf dat instrumenten verkoopt voor grondwerk en grondonderzoek. Het project was in eerste instantie op hold gezet omdat de communicatie slecht verlopen was en er geen content naar IDN werd doorgestuurd. Wij denken dat dit mede komt door het lange verwarrende contract dat wordt opgesteld aan het begin van een project. Ook voor Gouda-geo was er al een nieuw template gekozen die nog moest worden ingevuld. Wederom hebben we vragen opgesteld en zijn we gaan bellen. Op de website van Gouda-geo staan veel verschillende gereedschappen. Een van onze vragen was dus bijvoorbeeld, is er een inventarislijst zodat de lijst met gereedschappen kan worden geüpdatet. Andere vragen gingen over de layout. Bijvoorbeeld een contact pagina apart van de over ons pagina.</p>
                                    <p>Tijdens het bellen had ik mijn laptop voor me om de antwoorden te noteren. De andere stagiaire stelde de eerste vraag en hier kwam een lang antwoord op. Deze probeerde ik zo snel mogelijk te noteren maar ik was nog niet klaar waardoor er een stilte viel. Op dit moment is mijn rol veranderd naar notulist en heb ik eigenlijk vooral alle antwoorden zo goed mogelijk genoteerd. Het gesprek verliep niet soepel en we kregen maar weinig antwoorden waar we iets mee konden doen. Er was geen inventarislijst en de specificaties van de producten stonden niet op papier. Onze aanpassingen aan de website wilde hij niet. Het leek er voor mij op dat hij wel een andere website wil maar hij moet wel bijna hetzelfde zijn als de oude website. De meneer aan de telefoon gaf aan tijd nodig te hebben om alle specificaties op te zoeken en noteren en deze later door te sturen. Hierdoor is Gouda-geo wederom op hold gezet.</p>
                                    <p>Net als bij Beaudermo voel ik me niet comfortabel bij het klantencontact door de telefoon. Daarbij kwam dat de antwoorden lang waren en ik verviel in de rol van notulist. Ik moet zoeken naar een balans tussen het contact en het maken van notities om dit in het vervolg beter te kunnen doen.</p>
                                    <img src={goudageo} alt="leeg template gouda geo" className="singleImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="En Classe">
                                <div className="content">
                                <h3>Onderzoek En Classe</h3>
                                    <p>Een klant van IDN vroeg om een oplossing voor een webshop. Ze is fotograaf en maakt foto’s in het buitenland. Deze foto’s wil ze met een webshop verkopen aan haar klanten. Ze wil alleen niet dat je eerst op een foto moet klikken voor de omschrijving maar de omschrijving gewoon bij de foto direct zichtbaar op de pagina. IDN heeft al een aantal webshops gemaakt maar nog nooit met de beschrijving zoals de mevrouw van En Classe dat wilde. Aan mij dus de opdracht een onderzoek te doen naar de mogelijkheden. Voor het beste advies ben een aantal dingen gaan onderzoeken</p>
                                    <ul>
                                        <li>andere foto verkoop sites die misschien hebben waar ik naar zoek. </li>
                                        <li>Plugins voor Joomla of wordpress die het probleem oplossen.</li>
                                        <li>En betalingsopties.</li>
                                    </ul>
                                    <p>Een andere vraag van de klant was om te kijken naar betalingsopties. Ze wilde geen “ingewikkelde betalingen” zoals ze het noemde. Hiermee bedoelde ze iDeal of Paypal. Graag wilde ze zelf een betaalverzoekje sturen via whatsapp en dan zodra de betaling rond was de foto’s opsturen. 
Ik ben gaan zoeken naar oplossingen hiervoor maar kwam er al snel achter dat dit niet praktisch was. Het advies wat ik heb gegeven is om toch gewoon gebruik te maken van iDeal omdat er dan ook minder fout kan gaan met de bestelling.
                                    </p>
                                </div>
                            </TabContent>
                            <TabContent for="Verbeteringen rotterdamduurzaam">
                                <div className="content">
                                    <h3>Verbeteringen RotterdamDuurzaam</h3>
                                    <p>Mijn eerste aanraking met Rotterdamduurzaam.nl was om te kijken wat ik van de site vond en hier verbeteringen voor te zoeken. Toen wist ik nog niet dat dit een project van IDN was. Ik ben de site gaan onderzoeken en ben met een aantal verbeterpunten gekomen. Naast deze verbeterpunten vond ik ook een aantal dingen aan de website storend. Deze heb ik genoteerd in een docs document en later met mijn begeleider doorgenomen.</p>
                                    <p>Op de website staat een lijst met duurzame initiatieven. Een categorie hiervan is horeca. Als je op zo’n horeca gelegenheid klikt kom je op een pagina met alleen maar tekst over het bedrijf. Mijn eerste voorstel was om een aantal foto’s toe te voegen om een sfeerbeeld te creëren voor de bezoeker zodat ze een idee hebben waar ze naar kijken. Later leek het mij een leuk idee hier dan een 360 graden foto van te maken om een soort kijkje in het restaurant te geven.
Alle verbeteringen heb ik genoteerd in het volgende document:
</p>
                                    <a href="https://docs.google.com/document/d/1Mh8FXGf3S7MC2_xkQQvpUY18SzJKh6T6Nuhik2X9QU4/edit?usp=sharing" target="blank">Verbeteringen document RotterdamDuurzaam</a>
                                    <p>Deze verbeteringen ben ik voor zover mogelijk zelf gaan implimenteren. Helaas was het niet mogelijk voor mij de grote veranderingen toe te voegen omdat de website al wat outdated was en er eerst geinvesteerd moet worden in updates.</p>
                                </div>
                            </TabContent>
                            <TabContent for="kansen">
                                <div className="content">
                                <h3>Kansenonderzoek</h3>
                                    <p>In Rotterdam zijn er heel veel stichtingen met veel verschillende doelen. Veel van deze stichtingen hebben een website en vaak is deze sterk verouderd omdat er weinig budget is of omdat er geen tijd is om de website te updaten.</p>
                                    <p>Samen met 1 andere stagiair ben ik gaan zoeken naar Dit soort stichtingen die wel een website up-grade kunnen gebruiken. Samen hebben we een lijst gemaakt met 100 stichtingen en voor iedere stichting ook de redenen waarom de site geüpdatet moet worden en hoe. Deze lijst hebben we voorgelegd aan de stichtingen met daarbij de keuze om het door ons te laten doen voor een ver-laagd tarief of er iets anders mee te doen. Voor het klantencontact zijn we een samenwerking aan-gegaan met het sales team. Er zijn eerst mails gestuurd om te kijken of hier antwoord op kwam. Als de mails onbeantwoord bleven is er gebeld om het te vragen.</p>
                                    <p>Het doel van dit kansen onderzoek was de stichtingen meer bekendheid geven en daarmee mis-schien meer donaties en vrijwilligers genereren. Natuurlijk was een bijzaak ook nieuwe klanten genereren voor IDN.</p>
                                    <p>We hoopten uit de lijst met 100 stichtingen ongeveer 10 nieuwe projecten te halen. Uiteindelijk zijn dit er 3 geworden en 1 misschien. Het grootste probleem is dat er vaak geen budget is om het uit te besteden en IDN niet bereid was het voor minder te doen dan het al verlaagde Stichtingen tarief. Met dit onderzoek hoopte ik meer klanten te genereren om daarmee ook een deel van de Betrokken competentie te behalen. Maar 3 stichtingen een betere bekentenis geven vond ik niet genoeg. Daarom ben ik weer samen met de andere stagiair gaan werken aan RotterdamDuurzaam.nl</p>
                                    <a href="https://docs.google.com/document/d/1lVUaKE76eiw4tKP2LpCm0hbbC118HK1QWVO2Ja2PQ78/edit?usp=sharing" target="blank">Kansenonderzoek</a>
                                    <img></img>
                                </div>
                            </TabContent>
                        </div>
                    </Tabs>
                </div>
            </Grid>

            
       )
    }
}




export default Ondernemen;