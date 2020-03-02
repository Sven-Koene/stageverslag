import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';

class Bedrijf extends React.Component{
    render(){
       return(


<Grid
container
direction="column"
justify="flex-start"
alignItems="center"
className="center">


<div className="tabs">
    <h1 className="header">Het bedrijf</h1>
        <Tabs>
            <TabLink to="IDN" className="tab">internetdienstennederland</TabLink>
            <TabLink to="bedrijfsbezoek" className="tab">Bedrijfsbezoeken </TabLink>
            <TabLink to="reflectie" className="tab">Samenvatting en reflectie</TabLink>
            <TabLink to="terugkomdagen" className="tab">Terugkomdagen</TabLink>

            <div className="text">
                <TabContent for="IDN">
                    <div className="content">
                                     <h3>Werkzaamheden</h3>
                                     <p>Internetdiensten Nederland(“in het vervolg” IDN) is een bedrijf dat zich bezighoudt met alle werkzaamheden rondom internet. Als “full service internetbureau” is IDN in staat om (bijna) alle internet gerelateerde diensten voor de klant te verzorgen. Denk hierbij aan werkzaamheden als:</p>
                                     <ul>
                                        <li>SEO (search engine optimalisation) hiervoor worden programma’s gebruikt als SEranking.</li>
                                        <li>SEA (search engine advertising) bijvoorbeeld met Google Ads en Google Analytics.</li>
                                         <li>Webdesign.</li>
                                         <li>Open source CRM (Customer relationship management) hierin worden vaak ticket systemen gemaakt zodat de klant problemen kan melden die vervolgens op kantoor kunnen worden opgelost.</li>
                                         <li>Open source CMS (Content management system) zoals Joomla en Wordpress in combinatie met Gantry 5.</li>
                                         <li>DTP (desktop publishing) Het opmaken en bewerken van documenten voordat ze worden gepubliceerd.</li>
                                         <li>Social media, Als de klant het wil kunnen we de sociale media bijhouden.</li>
                                         <li>Marketing.</li>
                                         <li>Applicaties, Zowel telefoon apps als Webapps.</li>
                                         <li>Software koppelingen.</li>
                                         <li>Maatwerk.</li>
                                     </ul>
                                     <br></br>
                                     <h3>Het team</h3>
                                     <p>IDN is een klein kantoor met een kernteam van twee developers, een designer en marketing en de manager. Verder zijn er ongeveer tien parttimers waarvan een deel student. Momenteel zijn er zes stagiairs, drie informatica, een design, een marketing en een full stack development stagiair.</p>
                                     <br></br>
                                     <h3>Werkzaamheden als stagiair</h3>
                                     <p>Als stagiair bij IDN krijg je veel vrijheid om te werken aan je projecten. Er wordt voldoende meegedacht bij het invullen van je stage competenties en deze worden goed ingevuld met de projecten die je mag doen. Een groot nadeel van deze vrijheid is dat je, als je niet oppast, te weinig begeleiding krijgt. Je werkt zowel individueel als in teamverband.</p>
                                     <p>Aan het begin van mijn stage heb ik aangegeven dat ik nog niet goed wist welke kant ik op wil, maar wel meer neigde naar front-end. Als onderdeel van mijn stage heb ik ook bij alle onderdelen binnen het bedrijf wat mee mogen werken. Ik ben begonnen met back-end werk in combinatie met een CMS. Daarna heb ik mij mogen ontwikkelen binnen UX design. IDN verwachtte van mij, dat ik alles vastlegde en grondig onderzoek deed. Op deze manier voorkomen ze dat je je keuzes later niet kan onderbouwen.</p>
                                     <p>Ondanks het kleine kernteam kan je wel altijd met je vragen langskomen of vragen om feedback op je werk. Je wordt niet gezien als stagiair maar als werknemer. Zo krijg je niet alleen vervelende klusjes maar echte opdrachten. Natuurlijk zijn er altijd wel vervelende klusjes die moeten gebeuren.</p>
                                     <br></br>
                                     <h3>Colofon</h3>
                                     <p>
                                     Adres<br></br>
                                    Internetdiensten Nederland<br></br>
                                    Bovendijk 132<br></br>
                                    3045 PC Rotterdam<br></br>
                                    <br></br>
                                    E-mail<br></br>
                                    info@internetdienstennederland.nl<br></br>
                                    <br></br>
                                    Telefoonnummer<br></br>
                                    +31 (0)85 - 4444 134<br></br>
                                     </p>
                                 </div>
                            </TabContent>
                            <TabContent for="bedrijfsbezoek">
                                <div className="content">
                                    <h2>Bedrijfsbezoeken</h2>
                                    <p>Om een indruk te krijgen van andere stagebedrijven zijn we met een groepje van zeven studenten langs gegaan bij een aantal stage bedrijven. De bedoeling hiervan is om te kijken hoe de stage er bij de andere aan toe gaat. Er was ruimte om vragen te stellen over het bedrijf en de projecten.</p>
                                    <h3>DotControl</h3>
                                    <p>Het eerste bedrijf dat we bezochten was DotControl. Door de bedrijfssafari in het eerste en tweede jaar was ik hier al twee keer geweest, dus wist ik al een beetje hoe het bedrijf eruit zag en wat ze deden. Martijn en Nienke lopen hier stage en ik hoorde veel positieve verhalen het bedrijf.</p>
                                    <p>Bij binnenkomst sta je in een grote bedrijfshal. Een beetje donker en een heel industriële sfeer. Met een aantal wanden is de grote hal opgedeeld in een aantal secties waar verschillende delen van het bedrijf zitten.</p>
                                    <p>Tijdens het gesprek met de stagebegeleider van Dotcontrol begon het te regenen. Doordat een deel van het dak van plastic platen is gemaakt maakte dit een enorme herrie. Door de grootte van het bedrijf en de herrie veroorzaakt door de werknemers, het weer en de meeuwen die het dak aanvallen was ik niet heel enthousiast over een stage bij Dotcontrol.</p>
                                    <h3>Rodesk</h3>
                                    <p>Het tweede bedrijf waar we langs gingen was Rodesk. Voor mij was dit een compleet nieuw bedrijf. Lotte liep hier stage en specialiseert zich hier vooral in het maken van animaties. Het bedrijf is relatief klein. Bij binnenkomst kom je binnen in een modern ingerichte sfeervolle ruimte met veel licht en een uitzicht over het Rotterdamse water.</p>
                                    <p>Bij binnenkomst hebben we een klein gesprek gehouden met de begeleider wat een goede indruk gaf van het bedrijf. Daarna zijn we in een vergaderruimte gaan zitten waar Lotte haar werk heeft laten zien en meer heeft verteld over haar stage. De animaties zagen er mooi uit en dit heeft mij zeker inspiratie gegeven voor dingen die ik ook graag zou willen kunnen.</p>
                                    <h3>Redkiwi</h3>
                                    <p>Volgende bedrijf op de lijst was Redkiwi. Hier loopt Janessa stage op de afdeling DevOps. Wederom een heel groot open office. Eerst hebben we een uitleg gekregen van de stagebegeleider, die me een beetje deed denken aan programmeer leraar Bob. Na de uitleg van de begeleider hebben we nog een rondleiding gekregen van Janessa en heeft ze laten zien wat voor werk ze onder andere uitvoert op stage. Ik had persoonlijk nog nooit eerder van de term DevOps gehoord dus wist niet wat ik me hier bij voor moest stellen.</p>
                                    <p>Redkiwi is een vrij groot bedrijf. Dit schrikt mij meestal af omdat ik liever kleine bedrijven heb. Toch leek de sfeer binnen het bedrijf goed en zou ik hier best stage willen lopen. Na het bezoek kregen we nog een tasje met wat redkiwi spullen mee.</p>
                                    <h3>Connect Holland</h3>
                                    <p>Het laatste bedrijf wat we bezochten was Connect Holland. Dit is waar Jordy stage loopt. De rondleiding verliep wat vreemd. Buiten dat het bij het bedrijf bekend was dat we langs kwamen was er niks voorbereid waardoor alles een beetje stroef verliep.</p>
                                    <p>We zijn door Jordy over de verschillende afdelingen rondgeleid. Het bedrijf is heel groot en verspreid over verschillende verdiepingen. Elke afdeling heeft zijn eigen naam waardoor ik een beetje kwijt was waar het allemaal over ging. Na de rondleiding heeft Jordy zijn werk nog laten zien en was er ruimte voor wat vragen. Einde van de dag was iedereen een beetje moe dus veel vragen waren er niet meer.</p>
                                    <p>Mijn eerste indruk van Connect Holland is door de rommeligheid niet heel goed. Het bedrijf is groot en verwarrend en door het rommelige bezoek was er weinig duidelijkheid. Wel was het weer een goede indruk van een ander soort bedrijf.</p>
                                </div>
                            </TabContent>
                            <TabContent for="reflectie">
                                <div className="content">
                                    <h2>Samenvatting en reflectie</h2>
                                    <p>Het zoeken van mijn stage is niet soepel verlopen. Ik had me voorgenomen eerst mijn propedeuse te halen, daarna een portfolio te maken en dan pas te beginnen met zoeken. Dit was niet handig aangezien ik mijn propedeuse pas in de derde periode haalde en toen nog moest beginnen met mijn portfolio. Voor de portfolio website wilde ik react gebruiken waar ik nog helemaal geen ervaring mee had. Doordat react nog zo nieuw voor me was en ik niet wist waar ik moest beginnen heb ik dit ook te lang uitgesteld. Toen de zomervakantie begon en ik nog steeds geen stage had, heb ik toch maar besloten de portfolio te laten vallen en ben ik motivatiebrieven gaan rondsturen. Zoals te verwachten kreeg ik dus ook heel vaak het antwoord, sorry wij zitten al vol. Uitstellen en prioriteiten stellen zijn leerdoelen waar ik aan moet werken. Voor het zoeken van mijn volgende stage ga ik een betere planning maken, zodat dit niet nog een keer gebeurt. Aan het eind van de zomervakantie had ik nog niks gevonden en de hoop op een stage al een beetje opgegeven. Martijn stelde voor om bij IDN te solliciteren, omdat die waarschijnlijk nog wel plek zouden hebben en dit heb ik gedaan. Het gesprek bij IDN verliep niet vlekkeloos. Ik had geen duidelijke leerdoelen en wist nog niet welke kant ik op wilde binnen het vakgebied. Uiteindelijk heb ik bij IDN een stageplek gekregen waarin ik kon uitzoeken wat ik graag wilde. Van het gesprek heb ik op de harde manier geleerd dat een goede voorbereiding belangrijk is en dit zal ik in komende gesprekken ook toepassen. Dit wil ik doen door van tevoren een lijstje te maken met de belangrijke punten waar ik het over wil hebben.</p>
                                    <p>Mijn stage heeft ups en downs gehad. Aan het begin van mijn stage voelde de werkzaamheden nutteloos, omdat het namaak opdrachten waren. Deze opdrachten waren bedoeld om mij in te werken in de werkwijze van het bedrijf. Achteraf ben ik blij te zijn begonnen met een opdracht die niet al voor een klant was, omdat de risico’s dan laag zijn en je er wel van leert wat je moet leren. Door deze opdracht begreep ik wel wat er in vervolg opdrachten van me werd verwacht en hoe het bedrijf te werk gaat.</p>
                                    <p>Na de inwerk opdrachten kreeg ik de opdracht een infographic te maken. Ik vond dit een leuke opdracht en dacht dat dit goed onder ontwerpen zou passen. Op school dachten ze hier anders over en is mij aangeraden meer initiatief te nemen in de opdrachten die ik hierna kreeg en om competentiegericht te gaan werken. Na de infographic opdracht heb ik dan ook gevraagd om opdrachten die gericht waren op de competenties. Als antwoord kreeg ik hierop: ‘We hebben nog tijd zat om aan je competenties te werken.” Wederom kreeg ik een opdracht die niet binnen de competenties viel en deze heb ik afgewezen en gevraagd om toch een competentiegerichte opdracht. Hierdoor heb ik in het vervolg meer grip gehad op mijn competenties en opdrachten en heb ik ervoor gezorgd dat ik al mijn competenties beter heb kunnen invullen. Een groot leerpunt hierin is, dat ik niet meer zo over me heen laat lopen, wat ik voorheen wel deed.</p>
                                    <p>Halverwege de stage verliep de stage goed. Ik kreeg goede opdrachten en voerde deze uit, vervolgens kreeg ik feedback op mijn werk en ben ik de feedback gaan toepassen. Ik heb een beter beeld gekregen over welke werkzaamheden ik leuk vind. Namelijk, front-end en design maar ik heb hier nog weinig ervaring mee. Ik heb gewerkt aan de website van Beaudermo en Gouda-geo, ik heb mijn kennis binnen photoshop sterk ontwikkeld en daarmee UX en UI kennis opgedaan en daarnaast nog veel andere projecten uitgevoerd. Ik begon te merken dat ik de 40 uur op kantoor per werk beter kon verdragen. Wel ben ik van mening dat 40 uur per week op kantoor zitten niet mijn ding is en dat ik meer naar de klant toe zou willen voor gesprekken en testen. Nu is mijn klantencontact altijd door de telefoon gegaan.</p>
                                    <p>Ik had uitgerekend dat ik met de kerst klaar zou zijn met mijn stage. Het bedrijf hield kerstvakantie waardoor ik dus een aantal dagen zou missen. Op de terugkomdag heb ik dit aangegeven en gevraagd of ik die laatste dagen dan aan mijn verslag mocht werken. Hier kreeg ik goedkeuring voor en heb ik op mijn stagebedrijf aangegeven dat ik voor de kerstvakantie klaar ben. Wederom mondeling en is er niks zwart op wit gezet. Mijn stagebegeleider was het niet eens met deze einddatum maar heeft dit nooit duidelijk gemeld. De kerstvakantie kwam dichterbij en omdat ik die paar dagen aan mijn stageverslag ging werken voelde ik me schuldig als ik dan ook nog tijdens mijn stage uren aan mijn verslag zou werken. Dit heb ik dus helemaal niet meer gedaan. Ook kreeg ik steeds vaker de vraag wanneer ik nou klaar zou zijn met mijn stage waarop ik steeds antwoordde met vrijdag voor de kerstvakantie. Er werd gevraagd om mijn urenverantwoording. Ik wist dat school deze niet bij houdt en mijn stagebedrijf heeft nooit gevraagd of ik dit wilde bijhouden waardoor ik maar een globale urenregistratie had voor mijzelf waar nog uren in misten. Deze heb ik opgestuurd. Mijn begeleider heeft ernaar gekeken en was het er niet mee eens. Volgens mijn begeleider miste ik nog 100 uur, omdat mijn ingevulde tijden niet klopte, ik een aantal vrijdagen thuis heb gewerkt en ik aan mijn stageverslag had gewerkt. Ik heb uitgelegd dat ik thuis gewoon heb gewerkt aan mijn opdrachten en hier eerst toestemming voor heb gevraagd en gekregen en dat ik eigenlijk een halve dag per week in had moeten plannen voor mijn stageverslag en dat vaak niet heb gedaan.    </p>
                                    <p>De kerstvakantie begon en ik dacht klaar te zijn met mijn stage. Mijn stagebegeleider was nog in discussie met mijn schoolbegeleider over de afronding van de stage. Na de kerstvakantie ben ik op school gekomen om het verhaal te vertellen aan Myrthe, zodat zij ook beide kanten van het verhaal kent. De uitkomst van het gesprek was dat ik nog een afspraak zou maken voor een beoordelingsgesprek. Ik heb een mail gestuurd met daarin het verzoek voor een gesprek maar kreeg hier geen antwoord op. Na een week heb ik via skype een bericht gestuurd met dezelfde vraag. Hier kreeg ik wel antwoord op.</p>
                                    <p><i>“Ha Sven, het is een wat slappe teleurstellende afronding wat mij betreft en wil mijn tijd in anderen steken. Ik stuur je de beoordeling per mail en wens je dan maar succes.”</i></p>
                                    <p>Toen ik dit las was mijn eerste gedachte: ‘wat kinderachtig’. Ik heb mijn best gedaan er een goede afsluiting van te maken en dan krijg ik deze reactie. Ik was teleurgesteld en geïrriteerd, omdat het bericht suggereert dat ik geen goede afronding wil. Ik denk dat het mis is gegaan in de communicatie. Omdat ik me vanaf het begin van mijn stage al niet comfortabel voelde met de manier van communiceren binnen het bedrijf, heb ik mijn onderzoek gericht op interne communicatie.</p>
                                    <p>Mijn beoordeling is opgestuurd en geëindigd met een onvoldoende. In de mail waarin de beoordeling werd verstuurd stond het volgende:</p>
                                    <p><i>“Objectief gezien heb je jouw stage niet afgerond conform de eisen van de HRO (zie eis van minimaal 640 uur op het beoordelingsformulier) en kunnen we je dan officieel geen voldoende geven.”</i></p>
                                    <p><i>"Zie de bijlage voor onze beoordeling waarbij de slordige en eigenzinnige afronding een rol heeft gespeeld."</i></p>
                                    <p>Allereerst de uren. De discussie over de niet behaalde uren heb ik niet kunnen winnen. Mijn stagebegeleider vindt werken aan je stageverslag niet vallen binnen de stage uren en geloofde niet dat ik de vrijdagen thuis ook echt had gewerkt. Daarnaast was hij het niet eens met de werktijden die ik had ingevuld op mijn urenverantwoording. Als feedback op de gemiste uren stond er: Niet gehaald, circa 100 uur te weinig. Ik ben mijn loonstroken na gaan kijken en op mijn laatste loonstrook stond dat ik ben betaald voor totaal 520 werkuren. Mijn eerste maand stage heb ik geen vergoeding gekregen. Mijn eerste maand heb ik drie weken van 40 uur stage gelopen. Dit komt uit op een totaal van 120 uur in de eerste maand plus 520 in de drie volgende maanden is 640 uur totaal. In het tweede deel van de e-mail krijg ik het idee dat de beoordeling niet is ingevuld op mijn werkzaamheden maar op de “slordige en eigenzinnige afronding”.</p>
                                    <br></br>
                                    <h3>Feedback beoordelingsformulier</h3>
                                    <p><b>Ontwikkelen</b></p>
                                    <p><b>Technische kennis en analyse: </b>Sven was na een paar maanden op gang komen in staat om een interessant webdesign te ontwikkelen in Joomla/Wordpress en Gantry. Als er tijd genoeg is moet dit goed gaan.    </p>
                                    <p><b>Implementeren, testen en opleveren:  </b>Deels gezien,Sven had een flinke aanlooptijd en begeleiding nodig om ontwikkelvaardigheden te ontwikkelen. Hier en daar in gesprekken wel naar voren gekomen. Kan nog verbeterd worden met meer structuur en proactiever.</p>
                                    <p><b>Eigen reflectie: </b>In de feedback wordt gezegd dat ik een paar maanden nodig had om op gang te komen. Mijn stage duurde echter maar 4 maanden. In het vervolg moet ik beter communiceren over wat ik heb gedaan zodat ik de begeleiders ook laat zien dat het niet een paar maanden zijn maar een paar weken of dagen.</p>
                                    <p><b>Ontwerpen</b></p>
                                    <p><b>Conceptualiseren: </b>Enigszins gezien, moet wel aangereikt worden.</p>
                                    <p><b>Ontwerpen en prototypen: </b>Enigszins gezien, moet wel aangereikt worden.</p>
                                    <p><b>Eigen reflectie: </b>Aan deze feedback heb ik niks. Aan het begin heb ik ontwerp opdrachten gekregen en aangegeven dat ik het soms moeilijk vind ontwerpen te maken. Ik denk dat het deel: “moet wel aangereikt worden” hierop gericht is. In een gesprek zou ik dit graag uitgebreider uitgelegd hebben gekregen. Ondanks dat ik het ontwerpen soms moeilijk vond, heb ik me hier wel sterk in ontwikkeld.</p>
                                    <p><b>Ondernemen</b></p>
                                    <p><b>Ondernemende houding en vaardigheren:</b> Weinig ondernemende houding, Sven laat het gebeuren en loopt regelmatig achter de feiten aan. Weet als laatste waar zijn stage aan moet voldoen, houdt zich te vaak wat van de onwetende.</p>
                                    <p><b>Projectmatig werken en communiceren:</b> Gezien, met name bij Rotterdamduurzaam project. Wel altijd in dezelfde rol van assisterend teamlid met een wat terughoudende houding.</p>
                                    <p><b>Eigen reflectie: </b>Regelmatig heb ik te horen gekregen dat ik het maar laat gebeuren. Als ik dan vroeg wat hiermee bedoeld werd, ging het erover dat ik niet genoeg initiatief toonde over het beëindigen van mijn stage. Het deel onwetendheid komt denk ik voort uit het gesprek dat ik heb gehad over het einde van mijn stage. Mijn stagebegeleider was het er niet mee eens hoe het verliep en vond dat ik het anders moest doen. Ik was me er niet bewust van hoe hij het wilde hebben aangezien dit mij nooit is verteld. Wat wordt bedoeld met: “weet als laatste waar zijn stage aan moet voldoen”, weet ik niet. Ik denk dat dit gaat over de uren. Qua competenties ben ik al vanaf het begin competentiegerichtere opdrachten aan het vragen.</p>
                                    <p>Binnen het Rotterdamduurzaam project kwam ik vaak met ideeën voor verdere ontwikkelingen. Deze ideeën heb ik gedeeld binnen de groep. Voor dit project hebben we een aantal presentaties gehouden met de vorderingen van het project. Deze heb ik niet zelf gepresenteerd. Ik denk dat hier het onderdeel assisterend teamlid en terughoudende houding vandaan komt. Om dit in het vervolg te verbeteren zou ik meer naar buiten kunnen communiceren in plaats van het binnen de projectgroep te houden.</p>
                                    <p><b>Betrokken</b></p>
                                    <p><b>Lerend vermogen: </b>Soms gezien, moet wel begeleidingsenergie ingestoken worden, komt niet vanzelf. Sven toont weinig ambitie.</p>
                                    <p><b>Maatschappelijke verantwoordelijkheid: </b>Niet gezien, zelfs niet bij Rotterdamduurzaam. Sven uit zich hier niet over anders en geeft aan dat het hem niet zo bezig houdt.</p>
                                    <p><b>Eigen reflectie: </b> Dat dit niet tot zijn uiting is gekomen zou kunnen komen, omdat ik vaak begeleiding heb gekregen van anderen binnen het bedrijf. Mijn stagebegeleider kwam bijna elke dag pas rond 12 uur binnen en is een aantal keer ook eerder vertrokken. Hierdoor ben ik vaak om opdrachten en feedback gaan vragen bij andere werknemers.</p>
                                    <p>Het maakt mij boos dat in de feedback wordt gezegd dat ik zelf heb aangegeven dat ik me niet bezighoud met maatschappelijke verantwoordelijkheid. Dit is niet waar. Ik ben met mijn projecten vaak bezig geweest met de maatschappelijke verantwoording. Mede omdat ik het een moeilijke competentie vond om in te vullen.</p>
                                    <p><b>Sterke punten</b></p>
                                    <p>Sven is behulpzaam en assisteert goed mee in een afgebakende takenset. Sven kan zich breed ontwikkelen, van basistechniek tot aan content maken.</p>
                                    <p><b>Verbeterpunten</b></p>
                                    <p>Sven kan werken aan heldere communicatie, hij blijft vaak wat in het midden en lacht wat weg waardoor het moeilijker is te zien wat hij kan en denkt. Wellicht kan hij meer dan hij laat zien. Sven moet wel op gang geholpen worden, een proactieve adviserende houding zou passen bij een HBO student. Technisch vakmanschap is wat bijgespijkerd tijdens zijn stage, dat nog goed doorzetten zou zijn bijdrage sterker maken. Meer zelfstandigheid, moest wel eens op gang gehouden worden. Betere en transparantere urenregistratie en oplossingsgericht overleg op basis van argumenten als daar iets mis in lijkt te gaan.</p>
                                    <p><b>Eigen reflectie: </b>Het klopt dat ik moeilijke situaties wel wat weg lach. Dit is een ding waar ik al langere tijd aan werk en steeds minder wordt. Ik heb het idee dat ik binnen deze stage juist heel veel zelfstandiger ben geworden dus hierop zou ik graag uitleg hebben gevraagd. De urenregistratie is inderdaad niet goed bijgehouden, omdat dit vanuit mijzelf is gekomen en niet is aangegeven door het bedrijf.</p>
                                </div>
                            </TabContent>
                            <TabContent for="terugkomdagen">
                                <div className="content">
                                    <p></p>
                                </div>
                            </TabContent>
                        </div>
                    </Tabs>
                </div>
            </Grid>
        )
    }
}


export default Bedrijf;