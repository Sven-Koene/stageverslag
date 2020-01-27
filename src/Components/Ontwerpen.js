import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import infographics from "../Images/infographic.png";
import persona from "../Images/persona.png";
import tekenframes from "../Images/tekenframes.png";
import iteratie1 from "../Images/iteratie1.png";
import iteratie2 from "../Images/iteratie2.png";
import stageverslag from "../Images/stageverslag.png";
class Ontwerpen extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className="center">
                <h1 className="header">Ontwerpen</h1>

                <div className="tabs">
                    <Tabs>
                        <TabLink to="infographic" className="tab">Infographic</TabLink>
                        <TabLink to="Persona" className="tab">Persona</TabLink>
                        <TabLink to="Stichting tekenbeetziekten" className="tab">Stichting tekenbeetziekten</TabLink>
                        <TabLink to="tekenStories" className="tab">User stories Tekenbeetziekten</TabLink>
                        <TabLink to="stageverslag" className="tab">Stageverslag</TabLink>
                        <div className="text">
                            <TabContent for="infographic">
                                <div className="content">
                                    <h3>Infographic Fioretti Teylingen</h3>
                                    <p>Voor Stichting Fioretti Teylingen heb ik de opdracht gekregen hun jaarverslag op te frissen. Na wat onderzoek bleek dat verschillende bedrijven hiervoor een infographic gebruiken. Een infographic toont een grote hoeveelheid informatie met weinig tekst en veel visuals.</p>
                                    <p>Na het vragen van feedback bleek mijn eerste poging te kinderlijk omdat ik geen rekening had gehouden met de doelgroep: leraren en ouders van kinderen die studeren op een van de opleidingen van stichting fioretti teylingen.</p>
                                    <p>Mijn tweede versie was wel gericht op de doelgroep en deze heb ik ingeleverd voor feedback. Hieronder de resultaten. Omdat ik niet zeker was welke versie beter was heb ik een kleine AB test gedaan. Aan 3 stagiairs en 2 werknemers heb ik gevraagd welke van de 2 ze mooier vonden en beter vonden passen bij de stichting. Hieruit bleek dat optie 2 in het plaatje beter past. Redenen hiervoor zijn:</p>
                                    <ul>
                                        <li>Het past beter bij het logo van de stichting.</li>
                                        <li>De header valt beter binnen het geheel.</li>
                                        <li>Het is rustiger aan de ogen.</li>
                                    </ul>
                                    <p>Iets om voor de volgende keer rekening mee te houden is dat ik meteen onderzoek doe naar de doelgroep en hier rekening mee houd. Dit zorgt er dan voor dat ik niet net als bij de infographic eerst veel tijd verlies aan het werken voor een verkeerde doelgroep en vervolgens alles moet weggooien en opnieuw beginnen.</p>
                                    <img src={infographics} alt="infographics" className="contentImage"></img> 
                                </div>
                            </TabContent>
                            <TabContent for="Persona">
                                <div className="content">
                                    <h3>Persona</h3>
                                    <p>Voor mijn opdracht van Stichting tekenbeetziekten heb ik wel gelijk rekening gehouden met de doelgroep. Om deze te visualiseren en later terug te kunnen kijken heb ik een Persona gemaakt voor de nieuwe website van de stichting. Uit onderzoeken met Obi4wan en SEranking bleek dat de website het meest gebruikt werd door moeders van kinderen en huisdiereneigenaren. Vandaar de persona die gaat over Katarina de Zeeuw. Moeder van een dochter en eigenaar van 2 honden.</p>
                                    <p>Persona’s hebben mij al bij eerdere schoolprojecten geholpen een grip te krijgen en houden op de doelgroep. Voor mij is een persona dan ook een hele goeie manier om een product passend te houden voor de doelgroep. Bij twijfels in keuzes kan de persona worden geraadpleegd.</p>
                                    <p>Iets wat ik wel vaak zonder nadenken deed is foto’s van het internet pakken en gebruiken. Tijdens mijn stage heb ik veel geleerd over de regels omtrent privacy en het gebruik van iemand anders zijn werk. Hieronder dus ook teksten, foto’s en logo’s. Om ook daar rekening mee te houden heb ik alleen foto’s gebruikt in de persona die komen van Pixabay. Dit is een website waar je gratis foto’s van kan pakken en gebruiken.</p>
                                    <p>Tijdens het ontwerpproces heb ik veel aan de persona gehad. Bij een aantal keuzes twijfelde ik aan mijn keuzes in bijvoorbeeld iconen of foto’s. als ik dan naar de persona ging kijken kwam ik er vaak achter dat 1 van de keuzen minder goed bij de doelgroep past. Zo begon ik bijvoorbeeld met gekleurde iconen en heb ik deze veranderd naar de strakkere 1 kleurige iconen.</p>
                                    <img src={persona} alt="persona" className="singleImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="tekenStories">
                            <div className="content">
                                    <h3>User stories tekenbeet</h3>
                                    <p>Voor het ontwerp van de nieuwe website van stichting Tekenbeetziekten heb ik een aantal user stories opgesteld. Dit is uit eigen initiatief omdat IDN geen gebruik maakt van user stories. De re-den dat IDN geen gebruik maakt van userstories is niet geheel bekend. Ik denk dat dit komt omdat ze nog in een wat ouder systeem werken. De opdrachtgever geeft een lijst met eisen door en dit gaan ze implementeren. Dit is ook terug te zien in het update gedrag. Er wordt gewerkt met de mentaliteit: als een update niks toevoegt, waarom zou ik het dan updaten? Dit houd dan vaak ook in dat ze belangrijke beveiligingsupdates missen.</p>
                                    <p>De user stories zijn:</p>
                                    <ul>
                                        <li>Als gebruiker wil ik makkelijk kunnen vinden wat ik zoek op de website zodat ik snel weet wat ik wil weten.</li>
                                        <li>Als gebruiker wil ik een duidelijke navigatie met duidelijke kopjes zodat ik weet waar ik moet klikken om te vinden wat ik zoek</li>
                                        <li>Als gebruiker wil ik teksten onderbouwd met visuals zodat het makkelijker is de aandacht te houden.</li>
                                        <li>Als gebruiker wil ik tips over hoe om te gaan met teken zodat ik voorbereid op pad kan gaan.</li>
                                        <li>Als gebruiker wil ik kunnen vinden hoe ik een teek verwijder zodat ik bij een tekenbeet weet hoe ik moet handelen.</li>
                                        <li>Als  gebruiker wil ik weten wat de symptomen zijn van tekenbeetziekten zodat ik weet wanneer ik een arts moet raadplegen.</li>
                                    </ul>
                                </div>
                            </TabContent>
                            <TabContent for="Stichting tekenbeetziekten">
                            <div className="content">
                                    <h3>Stichting tekenbeetziekten</h3>
                                    <p>Mij is de opdracht gegeven om een nieuwe website te maken voor stichting Tekenbeetziekten. Momenteel is de website sterk verouderd en toe aan een update. De website had 2 grote navigatie balken met daarin nog grote dropdown menu’s. Veel van de pagina’s bevatte maar heel weinig content en konden makkelijk worden gecombineerd. Daarom heb ik met behulp van adobe XD een wireframe gemaakt met daarin de gecombineerde pagina’s. Hieronder het resultaat in een screenshot</p>
                                    <img src={tekenframes} alt="wireframes stichting tekenbeetziekten" className="singleImage"></img>
                                    <p>Na het maken van de wireframes ben ik begonnen aan een ontwerp voor de homepage. Dit ging niet meteen goed omdat ik te veel vast hield aan de originele pagina. Bij mijn eerste feedback moment kreeg ik dan ook een enorme lijst feedback waardoor eigenlijk het hele ontwerp is omgegooid. Ik ben niet helemaal opnieuw begonnen maar heb wel veel van het ontwerp geschrapt en volgens de feedback opnieuw opgebouwd. Het omgegooide ontwerp bevat meer visuals en minder tekst. Er is beter nagedacht over het kleurgebruik en heeft over het algemeen een betere sfeer.  De lijst met feedback is te vinden onder het kopje Betrokken in het tabje Feedback alle gekregen feedback heb ik in verschillende iteraties toegepast.</p>
                                    
                                    
                                    <p>Vervolgens na de feedbackrondes ben ik verder gaan werken aan de andere pagina’s te zien op de volgende google drive link: 
                                    <br></br>
                                    <a href="https://drive.google.com/drive/folders/10YJhDUs1yhFNrZ16-nOU0O80f5dWla3F?usp=sharing">Andere Tekenbeetziekten pagina's</a>
                                    </p>
                                    <img src={iteratie1} alt="iteratie 1" className="contentImage"></img>
                                    <img src={iteratie2} alt="iteratie 2" className="contentImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="stageverslag">
                            <div className="content">
                                    <h3>Stageverslag</h3>
                                    <p>Om mijn competenties aan te vullen heb ik besloten in plaats van een verslag te schrijven een website te bouwen als bewijs voor mijn stage competenties. Aangezien deze website gebouwd wordt tijdens stage uren mag ik hier dus ook competenties mee invullen.</p>
                                    <p>Wekelijks plan ik vrijdag middag in voor het werken aan mijn stageverslag / stagewebsite. Omdat mijn interesse het meest liggen bij het ontwerpen en front-enden besloot ik eerst een wireframe te maken. Na een klein onderzoek naar webdesign trends besloot ik te gaan voor een minimalistisch strak ontwerp. Weinig kleuren in het vaste ontwerp zorgt voor rust en wat mysterie. In de foto hieronder zie je wat ik ervan heb gemaakt. Het logo van IDN moet hierin nog worden vervangen door een persoonlijk logo.</p>
                                    <img src={stageverslag} alt="wireframes van dit stageverslag" className="singleImage"></img>
                                    <p>Omdat IDN niet echt met user stories werkt en ik dat fijn vind werken heb ik voor mijn eigen site user stories gemaakt. Met User stories kan je gerichter werken aan opdrachten en specifieke taken binnen het project.</p>
                                    <ul>
                                        <li>1.	Als lezer wil ik een duidelijke navigatie zodat ik niet naar de volgende pagina’s hoef te zoe-ken.</li>
                                        <li>2.	Als lezer wil ik niet te veel poespas zodat ik zie waar het om gaat en niet te veel extra in-formatie krijg die niet relevant is.</li>
                                        <li>3.	Als student wil ik een stagewebsite opleveren in plaats van een verslag zodat het verslag leesbaarder is en ik mijn ontwikkeling kan aantonen.</li>
                                        <li>4.	Als student wil ik mijn stagewebsite maken in React om mijn programmeer kennis te ver-breden.</li>
                                        <li>5.	Als beoordelaar wil ik al het bewijsmateriaal op de website zien zodat ik de stage van de student goed kan beoordelen.</li>
                                        <li>6.	Als developer wil ik een Site maken die bewijst dat een stageverslag niet per se op papier moet zodat ik ook laat zien dat ik me heb ontwikkeld</li>
                                    </ul>
                                    <p>Met deze user stories ben ik gericht gaan werken naar het eindresultaat. Helaas door een gebrek aan tijd en kennis is het niet helemaal geworden zoals op de wireframes te zien is.</p>
                                </div>
                            </TabContent>
                           </div>
                    </Tabs>
                </div>
            </Grid>
       )
    }
}


export default Ontwerpen;