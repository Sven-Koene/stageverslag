import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import original from "../Images/original.png";
import myVersion from "../Images/myVersion.png";
import bultersmekke from "../Images/Bultersmekke.jfif"
import VvE010 from "../Images/VvE010.png"
import tijdlijn from "../Images/tijdlijn.png"
class Ontwikkelen extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className="center">
               

                <div className="tabs">
                <h1 className="header">Ontwikkelen</h1>
                    <Tabs>
                        <TabLink to="Simplicate" className="tab">Simplicate</TabLink>
                        <TabLink to="Bultersmekke" className="tab">Bultersmekke </TabLink>
                        <TabLink to="VvE010" className="tab">VvE010</TabLink>
                        <TabLink to="Job" className="tab">Job Dura Fonds</TabLink>
                        <TabLink to="enClasse" className="tab">En Classe</TabLink>
                        <TabLink to="stageverslag" className="tab">Stageverslag Website</TabLink>
                        <TabLink to="responsive" className="tab">Responsiveness test</TabLink>
                        <TabLink to="tekenbeet" className="tab">Stichting Tekenbeetziekten</TabLink>
                        <div className="text">
                            <TabContent for="Simplicate">
                                <div className="content">
                                    <h3>Simplicate nabouwen</h3>
                                    <p>Aan het begin van mijn stage kreeg ik de opdracht om de website van Simplicate na te bouwen met de frameworks van het bedrijf. Simplicate is een concurrerend bedrijf die ook CRM (customer relationship management) systemen aanbiedt. Op deze manier zou ik me beter kunnen navigeren binnen het CMS en op niveau komen van de andere developers zodat ik mee kan werken op de manier die zij ook gewend zijn. Een belangrijk ding wat me toen gevraagd is, is om dingen op te schrijven waarvan ik dacht dat het beter kon of onhandig was.    </p>
                                    <p>In eerste instantie begon ik met veel enthousiasme aan dit schaduwproject. Doordat ik met veel vragen bij Yoeri en Luuk (Developers) terecht kon en verder ruimte had zelf te experimenteren, ging het nabouwen vrij vlot en soepel. Wel voelde het na een tijdje als een nutteloos project, omdat het niet voor een echte klant is. Hierdoor raakte ik mijn concentratie vaak kwijt. door duidelijke dagplanningen te maken kwam ik beter door deze momenten heen.</p>
                                    <p>Ze maken binnen het bedrijf gebruik van Gantry 5 binnen de CMS systemen Joomla en WordPress, maar vooral Joomla. Binnen Gantry is het mogelijk veel eerder geschreven code te hergebruiken door er een particle van te maken. Deze particles worden vervolgens opgeslagen en kan je later door middel van slepen op de juiste plaats op een website zetten. Vervolgens hoef je alleen nog de HTML code toe te voegen en de SCSS aan te passen.</p>
                                    <p>Een aantal dingen die ik onhandig vind aan dit systeem:</p>
                                    <ul>
                                        <li>Binnen de particles heb je een invulveld om bijvoorbeeld je HTML code in te vullen. Dit is geen editor en vertelt je dus ook niet of er fouten in zitten.</li>
                                        <li>Het scherm voor de code is klein waardoor je geen overzicht kan houden over wat je intypt. Een oplossing is om alles in een editor te maken en vervolgens te kopiëren en plakken in het venster. Dit vereist wel extra stappen, tijd en dus ook geld. Daarnaast ben je wel met stukken code aan het spelen, maar het voelt niet als programmeren. Hierdoor twijfelde ik af en toe wel aan het systeem.</li>
                                    </ul>
                                    <p>Dit was ook het moment dat ik besloot zelf React te willen leren en hiermee een website te maken voor mijn stage verslag. Tussen opdrachten door heb ik wireframes en ontwerpen gemaakt voor mijn website. Over deze ontwerpen is meer te lezen onder het kopje ontwerpen. Een andere reden voor mijn eigen React website is dat ik bang was niet genoeg te kunnen ontwikkelen in het programmeren. Met de React website kan ik toch laten zien dat ik ook op gebied van code goed ben ontwikkeld.</p>
                                    <p>In eerste instantie was ik overweldigd door de Simplicate opdracht en dacht ik dat het niet ging lukken om dit positief af te ronden Naar mijn verbazing ging het proces vrij soepel en is het best goed gelukt. Dit kwam vooral doordat het werken met alle modules en particles vrij makkelijk verliep. Na een aantal keer te moeten zoeken naar modules en particles komt er gewenning en zijn ze makkelijk te vinden. Door een aantal keer te kijken wat de modules en partikels dan doen als je ze aanpast begrijp je ook hoe je ze het best kan gebruiken.</p>
                                    <p>Van dit project heb ik wel geleerd hoe er binnen IDN wordt geproduceerd en gecommuniceerd. Interne communicatie gaat hier veelal via skype. Dit vind ik vaak onprettig aangezien het ook gebeurt als mensen naast elkaar zitten. Om deze reden heb ik besloten mijn onderzoek te doen naar interne communicatie.</p>
                                    <p>De eerste dagen had ik moeite met het 8 uur per dag werken achter mijn laptop. Rond 2 uur kreeg ik vaak een dip en was de concentratie volledig weg. Dit bleek niet gek te zijn aangezien klasgenoten er ook last van bleken te hebben. Dit loste ik dan ook vaak op door met deze klasgenoten een korte conversatie te hebben over WhatsAppen daarna weer vol concentratie te gaan werken.</p>
                                    <img src={myVersion} alt="mijn versie" className="contentImage"></img>
                                    <img src={original} alt="origineel" className="contentImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="Bultersmekke">
                                <div className="content">
                                    <h3>Bultersmekke</h3>
                                    <p>Na het eerste experiment met het framework heb ik met een aantal andere stagiaires een masterclass Joomla en Gantry gehad. Hier hebben wij feedback gekregen op ons eigen werk zodat we dit in volgende projecten beter kunnen doen. Na de workshop kregen we nogmaals de opdracht een website na te bouwen. Deze keer rekening houdend met wat er allemaal is verteld in de workshop.</p>
                                    <p>Deze keer ging het om de website van Bultersmekke. Bultersmekke is een klant van IDN. Ze begeleiden volwassenen, jongeren en kinderen om eigen honden in de thuisomgeving onder intensieve begeleiding van een instructeur zelf te trainen en op te leiden tot een officieel erkende assistentiehond die daardoor toegang heeft tot bijna alle publieke ruimten.</p>
                                    <p>Voor het nabouwen van Simplicate kregen we een week. Om verbetering te tonen in zowel kwaliteit als in snelheid hebben we voor de Bultersmekke website 2 dagen gekregen. Wat hiermee werd getest was of we inderdaad ontwikkelde binnen de gebruikte frameworks en werkwijze van het bedrijf. Het uiteindelijke doel zou zijn dat we op hetzelfde tempo als de developers of in ieder geval in de buurt van dat tempo zouden kunnen meewerken aan projecten. Om ook ons inzicht in benodigde tijden te testen, is hierna ook bij alle opdrachten gevraagd hoelang we dachten ervoor nodig te hebben.</p>
                                    <p>De twee dagen voor het nabouwen van Bultersmekke waren meer dan genoeg, omdat we onze weg in het framework nu wel konden vinden. Met de opgedane kennis konden we nu meewerken aan de echte websites.</p>
                                    <p>Bij de opdrachten van Bultersmekke en Simplicate had ik het niet altijd naar mijn zin. Dit kwam doordat het niet voor een echte klant was maar alleen inwerk projecten waren. Ik wist dat er met het werk verder niks meer ging gebeuren, waardoor het best nutteloos voelde.</p>
                                    <img src={bultersmekke} alt="bultersmekke bouwen" className="singleImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="VvE010">
                                <div className="content">
                                    <h3>VvE010</h3>
                                    <p>VvE010 had een winactie waar mensen een BBQ pakket konden winnen. Dit was mijn eerste project voor een echte klant. Maak een landingspagina voor VvE010. Ik durfde eigenlijk niets te doen, omdat het gelijk online te zien was. Dit veroorzaakte zenuwen. Daarnaast was dit de eerste keer dat ik moest werken met de RSForms plug-in in gantry. Daarnaast moest ik de link verborgen maken in het CMS wat ik ook nog niet eerder had gedaan. Gelukkig was er genoeg ruimte en begeleiding tijdens dit proces. Aan het begin heb ik na elke handeling begeleiding gevraagd, omdat ik niet zeker was van mijn kennis en kunde. Ik kreeg te horen dat ik wel iets zekerder van mezelf mocht zijn, want wat ik deed was gewoon goed. Zodoende ben ik dus verder gegaan en ben ik wat minder vragen gaan stellen.</p>
                                    <p>Uiteindelijk ben ik vier uur bezig geweest met dit project. Het formulier had nog bugs, omdat deze in plaats van een keer, vier keer op de pagina te zien was. Dit heb ik nagevraagd en bleek een bug te zijn binnen RSForms die makkelijk op te lossen was. De volgende dag is de actie open gezet voor publiek. Toen de actie afgelopen was bleken er vijf deelnemers te zijn geweest.</p>
                                    <p>Voor een volgende keer weet ik dat ik iets zekerder kan zijn voor de dingen die ik doe en dat er ruimte is voor fouten. Dit soort projecten staan verborgen online waardoor het niet erg is als het niet in één keer goed gaat, omdat gebruikers het niet kunnen zien. Vragen blijf ik stellen tot ik helemaal zeker ben van mijn zaak. Ik vond het heel fijn dat zo’n project werd toevertrouwd aan een stagiair. Dit toont aan dat het bedrijf vertrouwen heeft in de stagiairs.</p>
                                    <img src={VvE010} alt="VvE010 winactie" className="singleImage"></img>
                                </div>
                            </TabContent>

                            <TabContent for="Job">
                                <div className="content">
                                    <h3>Tijdlijn Job Dura Fonds</h3>
                                    <p>Voor Job Dura Fonds kreeg ik een opdracht vergelijkbaar met de landingspagina van VvE010. Op de website hadden ze een lange lijst met sponsors en de datum waarop die sponsors hebben gedoneerd. Dit was een lange pagina zonder enige visuele feedback. Als verbetering hiervoor was bedacht dat het in een tijdlijn gezet kan worden. Aan mij de taak deze tijdlijn te maken.</p>
                                    <p>Voor de tijdlijn vond ik in de plug-in library een tijdlijn plug-in die verschillende soorten tijdlijnen kan maken. Zowel horizontaal als verticaal. Job Dura Fonds koos voor de verticale versie.</p>
                                    <p>Wederom liep ik tegen een aantal problemen aan maar aangezien ik vorige keer iets te veel vragen stelde, besloot ik nu meer initiatief te tonen en zelf eerst iets meer te proberen. Ook wist ik nu dat niemand het kon zien en ik dus fouten mocht maken. Allereerst begon ik gewoon met het aanmaken van de jaartallen en de content daarin te zetten. De plugin maakt er automatisch een placeholder plaatje bij. Na dit gedaan te hebben kwam ik erachter dat de plugin niet goed was geïnstalleerd waardoor nu meerdere pagina’s die wel zichtbaar waren voor publiek de tijdlijn ook lieten zien. Dit heb ik gelijk nagevraagd bij de developers die dit samen met mij hebben opgelost. Het bleek dat er een optie nog aan stond die uit gezet had moeten worden.</p>
                                    <p>Het volgende probleem was dat er geen plaatjes waren meegeleverd met de opdracht. Als tijdelijke oplossing heb ik hiervoor de plaatjes gebruikt die al op de website te vinden waren. Een aantal van deze plaatjes moesten nog wel geëdit worden zodat ze ook allemaal dezelfde formaten hadden. Helaas heb ik geen plaatjes opgestuurd gekregen binnen mijn stageperiode om de tijdlijn af te maken.</p>
                                    <img src={tijdlijn} alt="tijdlijn"></img>
                                </div>
                            </TabContent>
                            <TabContent for="enClasse">
                            <div className="content">
                                <h3>Onderzoek En Classe</h3>
                                    <p>Een klant van IDN vroeg om een oplossing voor een webshop. Ze is fotograaf en maakt foto’s in het buitenland. Deze foto’s wilde ze met een webshop verkopen aan haar klanten. Ze wilde niet dat je eerst op een foto moet klikken voor de omschrijving maar de omschrijving gewoon bij de foto direct zichtbaar op de pagina. IDN heeft al een aantal webshops gemaakt maar nog nooit met de beschrijving zoals de mevrouw van En Classe dat wilde. Aan mij dus de opdracht een onderzoek te doen naar de mogelijkheden. Voor het beste advies ben ik een aantal dingen gaan onderzoeken:</p>
                                    <ul>
                                        <li>Andere foto verkoop sites die misschien hebben waar ik naar zoek.</li>
                                        <li>Plugins voor Joomla of WordPress die het probleem oplossen.</li>
                                        <li>Betaalmogelijkheden.</li>
                                    </ul>
                                    <p>Een andere vraag van de klant was om te kijken naar betalingsopties. Ze wilde geen “ingewikkelde betalingen”, zoals ze het noemde. Hiermee bedoelde ze iDeal of Paypal. Graag wilde ze zelf een betaalverzoek sturen via WhatsApp en dan zodra de betaling rond was de foto’s opsturen. Ik ben gaan zoeken naar oplossingen hiervoor, maar kwam er al snel achter dat dit niet praktisch was. Het advies wat ik heb gegeven is om toch gewoon gebruik te maken van iDeal, omdat er dan ook minder fout kan gaan met de bestelling.</p>
                                </div>
                            </TabContent>
                            <TabContent for="stageverslag">
                                <div className="content">
                                    <h3>Stageverslag website</h3>
                                    <p>Binnen mijn stagebedrijf wordt veel gebruik gemaakt van Gantry5 binnen Joomla of WordPress. De particles en modules moeten nog wel worden voorzien van HTML en SCSS code maar verder hoef je niet veel te programmeren. Hierdoor was ik niet altijd positief over het gebruik van Gantry5 en Joomla. Een positief punt is dat code snel en makkelijk kan worden hergebruikt in plaats van er weer een paar uur aan te moeten programmeren maar een nadeel is dat het zo erg lastig wordt een unieke website te maken. Als je naar verschillende IDN websites kijkt zie je veel vergelijkbare componenten.</p>
                                    <p>Ik ben gaan kijken naar andere mogelijkheden en kwam uit op React. React is momenteel heel populair en veel klasgenoten hebben hier al een portfolio in gemaakt, dus ik wist al een klein beetje hoe het in elkaar stak. Elke week heb ik de vrijdagmiddag ingepland om aan mijn stageverslag te werken.. Een deel van deze tijd heb ik gebruikt om mezelf React aan te leren. Mijn eerste React site is voor het stageverslag dat je nu leest. Een vervolgstap is het bouwen van een portfolio in React die ik kan gebruiken om te gebruiken voor het vinden van mijn afstudeerstage.</p>
                                </div>
                            </TabContent>
                            <TabContent for="responsive">
                                <div className="content">
                                    <h3>Responsiveness test</h3>
                                    <p>Tijdens mijn stage was er veel werk voor Stichting Fioretti Teylingen. Dit is een scholengemeenschap die voor de verschillende scholen nieuwe websites wilde hebben. Binnen dit project heb ik een aantal opdrachten gekregen. Dit waren opdrachten variërend van het toevoegen van links, knoppen en formulieren tot het verwijderen en aanpassen van CSS. Een groot deel van de sites stond al toen mijn stage begon waardoor ik helaas niet het gehele proces heb meegemaakt.</p>
                                    <p>Voor de websites van Fioretti Teylingen heb ik een responsiveness testplan gemaakt. Het plan houd rekening met formaten van PC, tablet, en telefoon. Daarnaast wordt er ook gekeken naar gebruikte browsers en browserversies. Daarnaast is er een template die kan worden gebruikt voor het noteren van de fouten die worden gevonden tijdens het testen.</p>
                                    <p>Na het maken van dit testplan ben ik samen met een andere stagiair de tests gaan doorlopen. Er zaten nog veel bugs in die wij vaak zelf konden oplossen, maar ook genoeg waar we hulp voor moesten inschakelen. De volgende link verwijst naar het document met daarin het testplan met uitslagen.</p>
                                    <a href="https://docs.google.com/document/d/1gJ5hIyeQ4PkDPvaQ7ZXwhdcJ_7TqFsd6OnuRpenw8is/edit" target="blank">Testplan</a>
                                    <p>De test in de bijlage begint met een onderzoek naar welke browsers er het meest worden gebruikt op PC, tablet, en telefoon. Zo kunnen de testen gericht worden uitgevoerd in de juiste browsers. Vervolgens staat er een uitleg over de test en hoe de test template in elkaar zit. De template is onderverdeeld in de verschillende devices met een sub-titel voor de verschillende pagina’s van de geteste websites. Als laatst staat het template en de testresultaten in de bijlage. Een groot probleem bleek de ondersteuning voor Internet Explorer. De websites zagen er vaak goed uit in chrome en firefox maar alles ging kapot in internet explorer omdat bepaalde functies binnen gantry niet werken binnen internet explorer.</p>
                                    <p>Doordat het maken van het testplan en het testen zo goed ging, zijn wij naarmate de stage vorderde vaak gevraagd een website te testen. Dit ging dan om responsiveness, maar ook het vinden van bugs. Elke test leidde tot nieuwe iteraties en verbeterde websites.</p>
                                    <p>Door het maken van dit testplan en het uitvoeren van de test ben ik me meer bewust geworden van hoe moeilijk het kan zijn een website responsive te maken. Ook verschilt het soms per laptop of de fout ook echt fout is. Ik heb geleerd te testen in verschillende browser versies. Een aantal keer heb ik een website getest waar ik geen fouten in kon vinden. Ik merkte dat ik dit frustrerend vond omdat het dan voelde alsof ik de test tijd had verspild, terwijl het wel heel belangrijk is om tests te blijven uitvoeren. Naarmate de tijd vorderde heb ik hier ook minder last van gehad. Binnen de bijlage is het nog niet altijd duidelijk te zien waar op de pagina iets fout is. Voor een volgende keer ga ik kijken of ik het template iets anders kan maken zodat dit duidelijker wordt. Nu kwam het wel eens voor dat de developer, die de fouten ging oplossen die ik zelf niet kon oplossen, met vragen naar me toe kwam omdat het niet duidelijk was.</p>
                                </div>
                            </TabContent>
                            <TabContent for="tekenbeet">
                            <div className="content">
                                <h3>Stichting Tekenbeetziekten</h3>
                                <p>Voor het ontwerp van de nieuwe website voor stichting Tekenbeetziekten ben ik ook met iteraties bezig geweest. Als eerste iteratie heb ik een wireframe gemaakt en ben deze vervolgens steeds een beetje gaan uitbreiden tot een echt ontwerp. Kijk voor een uitgebreidere omschrijving bij het kopje ontwerpen onder het tabje Tekenbeetziekten.</p>
                            </div>
                            </TabContent>
                        </div>
                    </Tabs>
                </div>
            </Grid>
        )
    }
}


export default Ontwikkelen;