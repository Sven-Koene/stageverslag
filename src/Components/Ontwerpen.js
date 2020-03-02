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
               

                <div className="tabs">
                <h1 className="header">Ontwerpen</h1>
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
                                    <p>Voor Stichting Fioretti Teylingen heb ik de opdracht gekregen hun jaarverslag visueel te maken. Na wat onderzoek bleek dat verschillende bedrijven hiervoor een infographic gebruiken. Een infographic toont een grote hoeveelheid informatie met weinig tekst en veel visuals.</p>
                                    <p>Na het vragen van feedback bleek dat mijn eerste poging te kinderlijk was, omdat ik geen rekening had gehouden met de doelgroep; leraren en ouders van kinderen die studeren op een van de opleidingen van stichting Fioretti Teylingen.</p>
                                    <p>Mijn tweede versie was wel gericht op de doelgroep en deze heb ik ingeleverd voor feedback. Hierboven de resultaten. Om te testen welke van de twee versies beter was, heb ik een kleine AB test gedaan. Aan drie stagiairs en twee werknemers heb ik gevraagd welke van de twee ze mooier vonden en beter vonden passen bij de stichting. Hieruit bleek dat optie twee in het plaatje beter past. Redenen hiervoor zijn:</p>
                                    <ul>
                                        <li>Het past beter bij het logo van de stichting.</li>
                                        <li>De header valt beter binnen het geheel.</li>
                                        <li>Het is rustiger aan de ogen.</li>
                                    </ul>
                                    <p>Iets om voor de volgende keer rekening mee te houden, is dat ik meteen onderzoek doe naar de doelgroep en hier rekening mee houd. Dit zorgt er dan voor dat ik niet net als bij de infographic eerst veel tijd verlies aan het werken voor een verkeerde doelgroep en vervolgens alles moet weggooien en opnieuw moet beginnen.</p>
                                    <img src={infographics} alt="infographics" className="contentImage"></img> 
                                </div>
                            </TabContent>
                            <TabContent for="Persona">
                                <div className="content">
                                    <h3>Persona</h3>
                                    <p>Voor mijn opdracht van Stichting Tekenbeetziekten heb ik wel gelijk rekening gehouden met de doelgroep. Om deze te visualiseren en later terug te kunnen kijken heb ik een persona gemaakt voor de nieuwe website van de stichting. Uit onderzoeken met Obi4wan en SEranking bleek dat de website het meest gebruikt werd door moeders van kinderen en huisdiereigenaren. Vandaar gaat de persona over Katarina de Zeeuw. Moeder van een dochter en eigenaar van 2 honden.</p>
                                    <p>Persona’s hebben mij al bij eerdere schoolprojecten geholpen een grip te krijgen en houden op de doelgroep. Voor mij is een persona dan ook een goede manier om je product passend te houden voor de doelgroep. Bij keuzes waar je aan twijfelt, kan je je persona gebruiken als leidraad.</p>
                                    <p>Iets wat ik wel vaak zonder nadenken deed is foto’s van het internet pakken en gebruiken. Tijdens mijn stage heb ik veel geleerd over de regels omtrent privacy en het gebruik van iemand anders zijn werk. Hieronder dus ook teksten, foto’s, en logo’s. Om ook daar rekening mee te houden heb ik alleen foto’s gebruikt in de persona die komen van Pixabay. Dit is een website waar je gratis foto’s van kan gebruiken.</p>
                                    <p>Tijdens het ontwerpproces heb ik veel aan de persona gehad. Bij een aantal keuzes twijfelde ik, bijvoorbeeld bij iconen of foto’s. Als ik dan naar de persona keek, kwam ik er vaak achter dat één van de keuzes minder goed bij de doelgroep paste. Zo begon ik bijvoorbeeld met gekleurde iconen en heb ik deze veranderd naar de strakkere éénkleurige iconen.</p>
                                    <img src={persona} alt="persona" className="singleImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="tekenStories">
                            <div className="content">
                                    <h3>User stories tekenbeet</h3>
                                    <p>Voor het ontwerp van de nieuwe website van stichting Tekenbeetziekten heb ik een aantal user stories opgesteld. Dit is uit eigen initiatief omdat IDN geen gebruik maakt van user stories. De reden dat IDN geen gebruik maakt van userstories is niet geheel bekend. Ik denk dat dit komt omdat ze nog in een wat ouder systeem werken. De opdrachtgever geeft een lijst met eisen door en dit gaan ze implementeren. Dit is ook terug te zien in het update gedrag. Er wordt gewerkt met de mentaliteit: als een update niks toevoegt, waarom zou ik het dan updaten? Dit houd dan vaak ook in dat ze belangrijke beveiligingsupdates missen.</p>
                                    <p>De user stories zijn:</p>
                                    <ul>
                                        <li>Als gebruiker wil ik makkelijk kunnen vinden wat ik zoek op de website, zodat ik snel weet wat ik wil weten.</li>
                                        <li>Als gebruiker wil ik een duidelijke navigatie met duidelijke kopjes, zodat ik weet waar ik moet klikken om te vinden wat ik zoek</li>
                                        <li>Als gebruiker wil ik teksten onderbouwd met visuals, zodat het makkelijker is de aandacht te houden.</li>
                                        <li>Als gebruiker wil ik tips over hoe om te gaan met teken, zodat ik voorbereid op pad kan gaan.</li>
                                        <li>Als gebruiker wil ik kunnen vinden hoe ik een teek verwijder, zodat ik bij een tekenbeet weet hoe ik moet handelen.</li>
                                        <li>Als gebruiker wil ik weten wat de symptomen zijn van Tekenbeetziekten, zodat ik weet wanneer ik een arts moet raadplegen.</li>
                                    </ul>
                                </div>
                            </TabContent>
                            <TabContent for="Stichting tekenbeetziekten">
                            <div className="content">
                                    <h3>Stichting tekenbeetziekten</h3>
                                    <p>Ik heb de opdracht gekregen om een nieuwe website te maken voor stichting Tekenbeetziekten. Momenteel is de website verouderd en toe aan een update. De website had twee enorm grote navigatiebalken met daarin nog grote dropdown menu’s. Veel van de pagina’s bevatte maar heel weinig content en konden makkelijk worden gecombineerd. Daarom heb ik met behulp van Adobe XD een wireframe gemaakt met daarin de gecombineerde pagina’s. Hieronder het resultaat in een screenshot.</p>
                                    <img src={tekenframes} alt="wireframes stichting tekenbeetziekten" className="singleImage"></img>
                                    <p>Na het maken van de wireframes ben ik begonnen aan een ontwerp voor de homepage. Dit ging niet meteen goed omdat ik te veel vast hield aan de originele pagina. Bij mijn eerste feedback moment kreeg ik dan ook een enorme lijst feedback waardoor eigenlijk het hele ontwerp is omgegooid. Het vernieuwde ontwerp bevat meer visuals en minder tekst. Er is beter nagedacht over het kleurgebruik en de site heeft over het algemeen een betere sfeer.</p>     
                                    <p>Vervolgens na de feedbackrondes ben ik verder gaan werken aan de andere pagina’s te zien op de volgende google drive link: 
                                    <br></br>
                                    <a href="https://drive.google.com/drive/folders/10YJhDUs1yhFNrZ16-nOU0O80f5dWla3F?usp=sharing" target="blank">Andere Tekenbeetziekten pagina's</a>
                                    </p>
                                    <img src={iteratie1} alt="iteratie 1" className="contentImage"></img>
                                    <img src={iteratie2} alt="iteratie 2" className="contentImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="stageverslag">
                            <div className="content">
                                    <h3>Stageverslag</h3>
                                    <p>Om mijn competenties aan te vullen heb ik besloten in plaats van een verslag te schrijven, een website te bouwen als bewijs voor mijn stage competenties. Aangezien deze website gebouwd zal worden tijdens stage uren mag ik hier dus ook competenties mee invullen.</p>
                                    <p>Mijn interesse ligt het meest bij Front-end ontwerpen, daarom besloot ik eerst een wireframe te maken. Na een klein onderzoek naar webdesign trends besloot ik te gaan voor een minimalistisch strak ontwerp. Weinig kleuren in het vaste ontwerp zorgt voor rust en wat mysterie. In de foto hieronder zie je wat ik ervan heb gemaakt. Het logo van IDN moet hierin nog worden vervangen door een persoonlijk logo.</p>
                                    <img src={stageverslag} alt="wireframes van dit stageverslag" className="singleImage"></img>
                                    <p>Omdat IDN niet echt met user stories werkt en ik dat fijn vind werken heb ik voor mijn eigen site user stories gemaakt. Met user stories kan je gerichter werken aan opdrachten en specifieke taken binnen het project.</p>
                                    <ul>
                                        <li>1.	Als lezer wil ik een duidelijke navigatie, zodat ik niet naar de volgende pagina’s hoef te zoeken.</li>
                                        <li>2.	Als lezer wil ik geen irrelevante informatie op de website tegenkomen, zodat ik zie waar het om gaat en geen onnodige informatie krijg.</li>
                                        <li>3.	Als student wil ik een stagewebsite opleveren in plaats van een verslag, zodat het verslag leesbaarder is en ik mijn ontwikkeling kan aantonen.</li>
                                        <li>4.	Als student wil ik mijn stagewebsite maken in React om mijn programmeer kennis te verbreden.</li>
                                        <li>5.	Als docent wil ik al het bewijsmateriaal op de website zien, zodat ik de stage van de student goed kan beoordelen.</li>
                                        <li>6.	Als developer wil ik een site maken die bewijst dat een stageverslag niet per se op papier moet, zodat ik ook laat zien dat ik me heb ontwikkeld</li>
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