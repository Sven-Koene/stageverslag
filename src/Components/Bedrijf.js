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
            <h1 className="header">Bedrijf</h1>

            <div className="tabs">
                <div className="content">
                    <h3>Werkzaamheden</h3>
                    <p>Internetdiensten Nederland(“in het vervolg” IDN) is een bedrijf dat zich bezig houd met alle werk-zaamheden rondom internet. Als “full service internetbureau” is IDN instaat om (bijna) alle inter-net-gerelateerde diensten voor de klant te verzorgen.
Denk hierbij aan werkzaamheden als:
                    </p>
                    <ul>
                        <li>SEO (search engine optimalisation) hiervoor worden programma’s gebruikt als SEranking.</li>
                        <li>SEA (search engine advertising) bijvoorbeeld met Google Ads en Google Analytics.</li>
                        <li>Webdesign.</li>
                        <li>Open source CRM (Customer relationship management) hierin worden vaak ticket sys-temen gemaakt zodat de klant problemen kan melden die vervolgens op kantoor kunnen worden opgelost.</li>
                        <li>Open source CMS (Content management system) zoals Joomla en Wordpress in combinatie met Gantry 5</li>
                        <li>DTP (desktop publishing) Het opmaken en bewerken van documenten voordat ze worden gepubliceerd.</li>
                        <li>Social media, Als de klant het wil kunnen we de sociale media bijhouden.</li>
                        <li>Marketing.</li>
                        <li>Applicaties, Zowel telefoon apps als Webapps</li>
                        <li>Software koppelingen </li>
                        <li>Maatwerk.</li>
                    </ul>
                    <br></br>
                    <h3>Het team</h3>
                    <p>IDN heeft is een klein kantoor met een kern team van 2 developers, 1 designer en marketing en de manager. Verder zijn er ongeveer 10 parttimers waarvan een deel student. Momenteel zijn er 6 stagiairs, 3 informatica, 1 design, 1 marketing en 1 full stack development stagiair.</p>
                    <br></br>
                    <h3>Werkzaamheden als stagiair</h3>
                    <p>Als stagiair bij IDN krijg je veel vrijheid om te werken aan je projecten, er wordt veel meegedacht met je stage competenties en deze worden goed ingevuld met de projecten die je mag doen. Een groot nadeel van deze vrijheid is dat je als je niet op past te weinig begeleiding krijgt. Je werkt zowel alleen als in teamverband.</p>
                    <p>Aan het begin van mijn stage heb ik aangegeven dat ik nog niet goed wist welke kant ik op wil maar wel meer neigde naar front-end. Als onderdeel van mijn stage heb ik nu ook dat ik van alle onder-delen binnen het bedrijf wat mee mag werken. Zo ben ik begonnen met wat Back-end CMS werk maar ben ik vervolgens UX design gaan doen. Ook wil het bedrijf dat je alles wat je doet noteert en dat je niet zomaar wat doet maar er ook echt onderzoek naar doet zodat je je keuzes kan onder-bouwen.</p>
                    <p>Ondanks het kleine kern team kan je wel altijd met je vragen langs komen of vragen om feedback op je werk. Je wordt niet gezien als stagiair maar als werknemer. Zo krijg je niet alleen alle verve-lende klusjes maar echt opdrachten. Natuurlijk zijn er altijd wel vervelende klusjes die moeten gebeuren.</p>
                    <br></br>
                    <h3>Colofon</h3>
                </div>
            </div>
        </Grid>
        )
    }
}


export default Bedrijf;