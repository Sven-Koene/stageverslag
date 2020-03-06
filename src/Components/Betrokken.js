import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import socialmedia from "../Images/socialmedia.png"; 


class Betrokken extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className="center">
               

                <div className="tabs">
                <h1 className="header">Betrokken</h1>
                    <Tabs>
                        <TabLink to="feedback" className="tab">Feedback</TabLink>
                        <TabLink to="logboek" className="tab">Logboek</TabLink>
                        <TabLink to="kansen" className="tab">Kansenonderzoek</TabLink>
                        <TabLink to="RotterdamDuurzaam" className="tab">RotterdamDuurzaam</TabLink>
                        <TabLink to="SEO" className="tab">SEO & Obi4Wan</TabLink>

                        <div className="text">
                        <TabContent for="feedback">
                            <div className="content">
                                    <h3>Feedback</h3>
                                    <p>Tijdens alle projecten die ik heb mogen doen heb ik zoveel mogelijk gevraagd om feedback. Merendeels aan de werknemers die daar het meest van wisten, maar vaak ook van andere stagiairs. Deze feedback heb ik vervolgens zo veel en goed mogelijk verwerkt in waar ik mee bezig was. In volgende opdrachten heb ik hier zoveel mogelijk rekening mee gehouden. Als voorbeeld heb ik feedback genoteerd die ik heb gekregen voor het ontwerp van stichting Tekenbeetziekten.</p>
                                    <ul>
                                        <p>Feedback van Nicolas (Lead ontwerper).</p>
                                        <li>Ik zou aanhouden als naam van het bestand: stichting-tekenbeetziekte-homepage-desktop-v2-SK-11-10-2019.jpg</li>
                                        <li>Gebruik een unicode font.</li>
                                        <li>Ik vind dat er nog een iteratie mag komen op font gebruik het huidige op hun website vind ik zelf nog mooier / spannender dus koptekst en alineatekst mag wat mij betreft nog wat anders voor komen.</li>
                                        <li>Blader eens door Google Fonts en laat je inspireren.</li>
                                        <li>Kijk ook eens bij de templates van Rockettheme voor inspiratie hoe je typografie naar een hoger niveau kunt tillen.</li>
                                        <li>De gelaagdheid vind ik goed.</li>
                                        <li>Leuke speling met de teken in de overgangen, misschien is 1 x voldoende.</li>
                                        <li>Steunkleur groen vind ik te basaal, mag een turquoise groen worden (iets meer blauw erin, rustiger tegenover het rood).</li>
                                        <li>Bulletpoints voor de footer menu items toevoegen?</li>
                                        <li>Kijk even naar de standaard letter spacing, die lijkt te ruim (niet auto).</li>
                                        <li>Als ik kijk naar font gebruik varieer je ook sterk w.b. hoofdlettergebruik (standaard), all caps en alles klein (zie footer:copyright) dat zou ik gelijk trekken. Of alle titels all caps, of alles standaard maar laat je daarvoor ook leiden door wat het mooiste oogt bij het nieuw te kiezen font.</li>
                                    </ul>
                                    <ul>
                                        <p>Feedback Lotte (stagiaire UX design):</p>
                                        <li>Uitlijnen klopt niet. Zoek op hoe de uitlijning toegevoegd kan worden.</li>
                                        <li>Iconen gebruiken voor een betere leesbaarheid.</li>
                                        <li>Een aantal dingen moeten worden aangepast qua formaat.</li>
                                    </ul>
                                    <ul>
                                        <p>Feedback van Nicolas (Lead ontwerper) in een drukke tijd dus er was minder tijd voor uitgebreidere feedback.</p>
                                        <li>Uitlijning (werk je met hulplijnen in photoshop?).</li>
                                        <li>Ademruimtes.</li>
                                        <li>Je / u gebruik door elkaar.</li>
                                        <li>Hoofdletters / geen hoofdletters.</li>
                                        <li>Social media knoppen: kleiner plaatje meer kleur.</li>
                                        <li>Icoon in de donateur knoppen.</li>
                                        <li>Drie berichten tekst links alignen link en tekst.</li>
                                        <li>Opacity witter bij de zes tegels.</li>
                                        <li>Lees meer knoppen groter en gelijk trekken. Doneren groter.</li>
                                        <li>Witruimte bij nieuws wat minder.</li>
                                        <li>Meld je beet bug icon.</li>
                                        <li>ANBI logo vervangen.</li>
                                        <li>Sponsor en footer gelijke hoogte geven.</li>
                                        <li>Nieuwsbrief akkoord privacy voorwaarden.</li>
                                        <li>Jouw email.</li>
                                        <li>Meld je aan knop vink icon.</li>
                                        <li>Wave in de header toevoegen op andere plekken.</li>
                                    </ul>
                                    <p>Voor elke opdracht heb ik feedback gehad. Soms meer, soms minder zoals hierboven te zien. Daarnaast heb ik ook vaak gehad, dat ik het zelf niet eens was met dingen die ik deed of moest doen. Een voorbeeld hiervan is communiceren via skype wat ik onprettig vind, of het doorsturen van inloggegevens van websites over skype. In dit soort situaties dacht ik vaak dit had beter of veiliger gekund. Tijdens het maken van de infographic had ik ook een moment die ik beter had kunnen doen, namelijk het vergeten van de doelgroep. Dit pakte ik dan vervolgens gelijk goed door in volgende opdrachten zoals bij stichting Tekenbeetziekten waar ik de persona voor heb gemaakt.</p>
                                </div>
                            </TabContent>
                            <TabContent for="logboek">
                            <div className="content">
                                    <h3>Logboek</h3>
                                    <p>Vanaf dag één op stage ben ik een logboek bij gaan houden, zodat ik alles wat ik heb gedaan terug kan lezen. In dit logboek heb ik ook geprobeerd veel te reflecteren op mijn eigen werk. Aan het begin ging ik te diep in op onnodige details en deed ik dit dagelijks. Dit zorgde ervoor dat ik na vijf weken al zo veel tekst had dat ik het zelf niet overzichtelijk meer vond. Dit heb ik vervolgens op een vrijdag omgezet naar een logboek per week en heb ik de onnodige details eruit gehaald.</p>
                                    <p>Tijdens het omzet proces kwam ik er ook achter dat ik soms niet reflecteerde op mijn werk, maar alleen omschreef wat ik heb gedaan. Doordat ik nog goed wist wat ik allemaal gedaan had, heb ik daarom de reflectie alsnog toegevoegd en ben ik in het vervolg extra gaan letten op het reflecteren.</p>
                                    <p>Doordat ik terug kon lezen wat ik heb gedaan en mijn reflectie daarbij, is het schrijven van het stageverslag ook een stuk makkelijker geworden. Een onzeker gevoel wat ik heb gehad, bij het maken van bijvoorbeeld de infographic, zou ik nu niet meer voor me kunnen halen, maar omdat ik het eerder al heb genoteerd kon dat nu dus wel.</p>
                                    <p>Logboeken zijn een goede tool om informatie te onthouden en later terug te kunnen zoeken. Voor een toekomstig project over een langere tijd of bijvoorbeeld mijn afstudeerstage ga ik dit dan ook zeker weer gebruiken. Helaas is mijn logboek in de laatste weken verwaarloost. Dit wil ik voorkomen door eens per week bijvoorbeeld een half uur of een uur in te plannen om deze bij te werken.</p>
                                    <a href="https://docs.google.com/document/d/16ubEdL09g9ZGfEiuXcg09LL-W9fmBbWzKjLRNA8KxC8/edit?usp=sharing" target="blank">Logboek</a>
                                    <img></img>
                                </div>
                            </TabContent>
                            <TabContent for="kansen">
                            <div className="content">
                                <h3>Kansenonderzoek</h3>
                                    <p>In Rotterdam zijn er veel stichtingen met veel verschillende doelen. Veel van deze stichtingen hebben een website en vaak is deze sterk verouderd omdat er weinig budget is of omdat er geen tijd is om de website te updaten.</p>
                                    <p>Samen met een andere stagiair ben ik gaan zoeken naar dit soort stichtingen, die wel een website upgrade kunnen gebruiken. Samen hebben we een lijst gemaakt met 100 stichtingen en voor iedere stichting ook de redenen waarom de site geüpdatet moet worden en hoe. Deze lijst hebben we voorgelegd aan de stichtingen met daarbij de keuze om het door ons te laten doen voor een verlaagd tarief, of er iets anders mee te doen. Voor het klantencontact zijn we een samenwerking aangegaan met het sales team. Er zijn eerst mails gestuurd om te kijken of hier antwoord op kwam. Als de mails onbeantwoord bleven is er gebeld om het te vragen.</p>
                                    <p>Het doel van dit kansen onderzoek was de stichtingen meer bekendheid geven en daarmee misschien meer donaties en vrijwilligers genereren. Natuurlijk was een bijzaak ook nieuwe klanten genereren voor IDN.</p>
                                    <p>We hoopten uit de lijst met 100 stichtingen ongeveer 10 nieuwe projecten te halen. Uiteindelijk zijn dit er 3 geworden en 1 misschien. Het grootste probleem is dat er vaak geen budget is om het uit te besteden en IDN niet bereid was het voor minder te doen dan het al verlaagde Stichtingen tarief. Met dit onderzoek hoopte ik meer klanten te genereren om daarmee ook een deel van de Betrokken competentie te behalen. Maar 3 stichtingen een betere bekentenis geven vond ik niet genoeg. Daarom ben ik weer samen met de andere stagiair gaan werken aan RotterdamDuurzaam.nl.</p>
                                    <a href="https://docs.google.com/document/d/1lVUaKE76eiw4tKP2LpCm0hbbC118HK1QWVO2Ja2PQ78/edit?usp=sharing" target="blank">Kansenonderzoek</a>
                                    <img></img>
                                </div>
                            </TabContent>
                            <TabContent for="RotterdamDuurzaam">
                            <div className="content">
                                    <h3>RotterdamDuurzaam</h3>
                                    <p>RotterdamDuurrzaam is een initiatief vanuit IDN. Het is opgericht met het doel om duurzame initiatieven in Rotterdam met elkaar te verbinden en de Rotterdammers te helpen met het maken van duurzame keuzes. Door een tekort aan sponsors en tijd is het project een jaar op stil gezet. Wij als stagiaires, zijn goedkopere werknemers, hierom hebben we de kans gekregen het project op te pakken. Om het project in de lucht te houden is de bedoeling dat de duurzame initiatieven pakketten kunnen kopen met daarin bijvoorbeeld social media posts vanuit RotterdamDuurzaam voor extra reclame of grotere kans om bovenaan de lijst initiatieven op de website te komen. Verder leeft het project op sponsoringen. Momenteel zijn de enige sponsors van RotterdamDuurzaam: IDN en AllInOneSoftware. AllInOneSoftware is een bedrijfstak van IDN.</p>
                                    <p>Op de website is een lange lijst te vinden met duurzame initiatieven in Rotterdam. Op de pagina’s van de initiatieven is de contactinformatie van de initiatieven te vinden en een link naar de websites van de initiatieven.</p>
                                    <p>Het idee van de website is om mensen te interesseren in duurzame initiatieven en duurzaamheid te stimuleren. Door inactieve social media en een lege kalender zag de website er inactief uit. Met Obi4wan en Google Analytics was te zien dat er steeds minder gebruikers naar de website kwamen en de social media minder aandacht kreeg.</p>
                                    <p>Het is een goed initiatief, daarom hebben we besloten het project op te pakken. We zijn begonnen met het zoeken naar nieuwe duurzame initiatieven voor op de website. Dit leverde wel iets op, maar nog niet veel bezoekers. Stap twee was om te kijken of we meer gebruikers kunnen genereren door via social media reclame te maken. Voor alle nieuw gevonden initiatieven hebben we social media berichten geschreven en visuals gemaakt. Deze zijn we dagelijks gaan posten. Al na een week kregen we berichten van andere duurzame initiatieven die ook graag zijn initiatief op de website wilde zetten. Dit toont aan dat we weldegelijk Rotterdammers bereiken die interesse hebben in duurzame initiatieven.</p>
                                    <p>Helaas was de evenementenkalender op de website nog wel leeg. Eerst ben ik zelf de initiatieven af gegaan die al op RotterdamDuurzaam.nl stonden maar hier kwam weinig uit. Ook omdat de goedkeuring tot posten te lang duurden, waren de evenementen die ik wel had gevonden vaak al verouderd. Om de kalender toch een beetje te vullen heb ik het idee geopperd om bijvoorbeeld kerst in de kalender te zetten met daarbij bijvoorbeeld een lijstje met vijf manieren om een duurzame kerst te vieren. Dit werd goedgekeurd en is op de evenementenkalender gezet.</p>
                                    <p>Verder was er het idee om een soort nieuwsbrief te sturen naar de initiatieven met de vraag of zij nog leuke evenementen hadden die in de kalender konden worden gezet. Na een dag kregen we antwoord van Floating Farm, Een duurzaam initiatief die zuivel producten produceert op een drijvende boerderij in Rotterdam. Zij organiseerden een kerstmarkt op de boerderij en wilden graag op de social media en in de kalender van RotterdamDuurzaam worden genoemd.</p>
                                    <p>In de onderstaande foto staan een aantal van de posts die wij hebben gemaakt voor RotterdamDuurzaam voor de nieuwe initiatieven.</p>
                                    <img src={socialmedia} alt="infographics" className="singleImage"></img>
                                </div>
                            </TabContent>
                            <TabContent for="SEO">
                            <div className="content">
                                    <h3>SEO (SERanking)</h3>
                                    <p>SEO (Search Engine Optimisation) is steeds belangrijker. Het vergroten van de vindbaarheid op Google zorgt ervoor dat meer mensen de website bezoeken. Tijdens mijn stage heb ik kennis mogen maken met SEO. Met behulp van SEranking kreeg ik een beeld van de goede en slechte punten van websites. Als voorbeeld de website van IDN zelf. Zij scoorde een 47 van de 100. Dit houdt in dat er veel dingen zijn die kunnen worden verbeterd om de vindbaarheid te verhogen. Een voorbeeld hiervan was: er waren vijf links die leiden naar 404 pagina’s of 87 pagina’s zonder h1 tag. Een aantal van mijn opdrachten waren bedoeld om SEO van websites te verbeteren. Denk hierbij aan de website voor Fioretti Teylingen, waar geen metadata in artikelen was toegevoegd en het verwijderen van onnodige inline styling. Ook heb ik bij het ontwerp van stichting Tekenbeetziekten nagedacht over de SEO. De huidige website score kon veel beter. Na onderzoek bleek dat google bepaalde belangrijke woorden op de website niet zag en daardoor een lage SEO score gaf. Tijdens het ontwerpen heb ik die woorden zoals bijvoorbeeld tekenbeet in de teksten verwerkt zodat google hier nu wel resultaten voor kan bieden.</p>
                                    <p>Van het stukje SEO heb ik een beeld gekregen over hoe belangrijk vindbaarheid van een website is. Eerder heb ik hier nooit bewust rekening mee gehouden. Tools zoals SEranking geven je een duidelijk beeld over wat je kan verbeteren en voor vervolgprojecten zou ik me graag meer willen verdiepen in SEO.</p>
                                    <img></img>
                                    <h3>Obi4Wan</h3>
                                    <p>Met Obi4wan krijg je zicht op hoe goed je vindbaarheid en activiteit op social media is. Met verschillende grafieken zie je waar de concurrentie over post en kan de eigen content hierop afgestemd worden. Obi4wan heb ik veel gebruikt voor Rotterdamduurzaam. Voor Rotterdamduurzaam wilden we meer gebruikers genereren door actiever te zijn op social media. Daar helpt een goed beeld van de concurrentie goed bij. Zelf zag ik de meerwaarde van Obi4wan niet altijd in, omdat er zoveel informatie te zien is dat het onduidelijk wordt. Verder heb ik gemerkt dat social media niet mijn ding is. Ik merkte dat ik het werk voor social media niet leuk vond en er te veel tijd aan kwijt was.</p>
                                </div>
                            </TabContent>
                        </div>
                    </Tabs>
                </div>
            </Grid>
       )
    }
}


export default Betrokken;