import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';


class Intro extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className="center">
                <h1 className="header">Intro</h1>
                <div className="content">
                    <p>Tijdens mijn zoektocht naar een stageplek dacht ik dat het heel makkelijk zou zijn een stageplek te vinden. Er waren alleen een paar probleempjes. Ik wist nog niet zo goed welke richting ik op wilde waardoor het aantal bedrijven zo groot was dat ik niet wist waar ik moest beginnen. Ik wilde per se eerst mijn propedeuse halen voordat ik ging zoeken wat het zoeken al uitstelde. En een hele tijd wilde ik te graag een portfolio website maken voor het zoeken van stage. Door omstandigheden is de portfolio website nooit gemaakt en was ik nog meer tijd kwijt.</p>
                    <p>Vervolgens ben ik bij een aantal bedrijven in het Westland op gesprek geweest maar deze kozen toch voor andere kandidaten. Voor mezelf ben ik duidelijk gaan maken wat ik in mijn stage wil. Hieruit kwamen eigenlijk maar 2 dingen die ik graag wilde leren. Front-enden en Designs maken. Aan het einde van de zomervakantie had ik nog geen stage gevonden. Dit veroorzaakte stress.</p>
                    <p>Door de korte tijd die nog over was waren mijn eisen minder geworden en vond ik eigenlijk alles prima zolang ik mijn stage maar kon doen. De eerste week van school begon en het was me nog niet gelukt een stage te vinden. Toen kwam Martijn met het idee te solliciteren bij IDN. Hij had daar een bijbaantje en ging daar geen stage lopen dus misschien was er nog plek. Ik heb meteen gebeld en kon dezelfde middag nog op gesprek komen.</p>
                    <p>Eigenlijk was er geen plek voor meer stagiairs maar ze wilden wel een uitzondering maken. Dit be-tekende wel dat ik minder stagevergoeding zou krijgen. Toen dacht ik daar niet zo over na en was ik alleen al blij dat ik een stage had gevonden.</p>
                    <p>Binnen IDN heb ik de vrijheid gekregen uit te vinden waarin ik me meer wil specialiseren. Door een beetje van alles te doen ben ik erachter gekomen wat ik wel en minder leuk vond. Soms deed de feedback dan ook wel pijn als ik ergens trots op was en het totaal niet bleek te zijn wat er gevraagd werd. Een voorbeeld hiervan is bijvoorbeeld bij de eerste opdracht. Ik had simplicate nagebouwd en het zag er goed uit, maar het was totaal niet zoals ze het binnen het bedrijf zouden doen en dus eigenlijk niet goed. Een ander voorbeeld is de feedback op mijn eindbeoordeling.</p>
                    <p>Tijdens mijn stage heb ik ook meer interesse gekregen in het leren van React en dit ben ik mijzelf ook gaan aanleren.</p>
                    <p>Een tip voor iedereen die opzoek moet naar een stage. Begin op tijd met zoeken. Hoe later je be-gint hoe minder keuze je hebt en hoe meer stres het oplevert. Ook kan het gebeuren dat je dan in een bedrijf terecht komt waar je stage raar kan verlopen en bijvoorbeeld zoals bij mij je stagebege-leider niet genoeg aanwezig is om je echt goed te begeleiden.</p>
                </div>
            </Grid>
       )
    }
}


export default Intro;