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
                <div className="tabs">
                <h1 className="header">Intro</h1>
                <div className="content">
                    <p>Tijdens mijn zoektocht naar een stageplek dacht ik dat het makkelijk zou zijn een stageplek te vinden. Dit was echter niet zo, er waren een paar problemen. Ik wist niet welke richting ik op wilde. Hierdoor bleven er nog veel stagebedrijven over, waardoor ik niet wist waar ik moest beginnen. Ik wilde eerst mijn propedeuse halen en een portfolio website maken voordat ik ging zoeken. Door omstandigheden is de portfolio website nooit gemaakt en was ik veel tijd kwijt.</p>
                    <p>Vervolgens ben ik bij een aantal bedrijven in het Westland op gesprek geweest, maar deze kozen toch voor andere kandidaten. Voor mezelf ben ik duidelijk gaan maken wat ik in mijn stage wil. Hieruit kwamen eigenlijk maar twee dingen die ik graag wilde leren; front-enden en designs maken. Aan het einde van de zomervakantie had ik nog geen stage gevonden. Dit veroorzaakte stress.</p>
                    <p>Door de korte tijd die ik nog had om een stage te vinden, heb ik mijn eisen verlaagd. Mijn prioriteit was nu om een plek te vinden, zodat ik geen vertraging op zal lopen. De eerste week van school begon en het was me nog niet gelukt een stage te vinden. Martijn opperde het idee te solliciteren bij IDN. Hij had daar een bijbaantje en ging daar geen stage lopen dus misschien was er nog plek. Ik heb meteen gebeld en kon dezelfde middag nog op gesprek komen.</p>
                    <p>Eigenlijk was er geen plek voor meer stagiairs, maar ze wilden wel een uitzondering maken. Dit betekende wel dat ik minder stagevergoeding zou krijgen. Op dat moment dacht ik daar niet goed over na en was ik blij dat ik een stageplek had gevonden.</p>
                    <p>Binnen IDN heb ik de vrijheid gekregen uit te vinden waarin ik me meer wil specialiseren. Door een beetje van alles te doen, ben ik erachter gekomen wat ik leuk en minder leuk vond. Soms deed de feedback dan ook wel pijn. Bijvoorbeeld als ik ergens trots op was en het niet bleek te zijn wat er gevraagd werd. Een voorbeeld hiervan is bijvoorbeeld de eerste opdracht. Ik had simplicate nagebouwd en het zag er goed uit. Het was alleen niet zoals ze het binnen het bedrijf zouden doen en dus eigenlijk niet goed. Een ander voorbeeld is de feedback op mijn eindbeoordeling.</p>
                    <p>Tijdens mijn stage heb ik meer interesse gekregen in het leren van React en dit ben ik mijzelf ook gaan aanleren.</p>
                    <p>Een tip voor iedereen die op zoek moet naar een stage. Begin op tijd met zoeken. Hoe later je begint hoe minder keuze je hebt en hoe meer stress het oplevert. Ook kan het gebeuren dat je dan in een bedrijf terecht komt waar je stage raar kan verlopen en bijvoorbeeld, zoals bij mij, je stagebegeleider niet genoeg aanwezig is om je echt goed te begeleiden.</p>
                </div>
                </div>
            </Grid>
       )
    }
}


export default Intro;