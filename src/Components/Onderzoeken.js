import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Onderzoeken extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className="center">
                <div className="tabs">
                <h1 className="header">Onderzoeken</h1>
                <div className="content">
                    <p>Zoals ik vaker in dit verslag benoemd, vond ik de communicatie binnen IDN niet altijd op een fijne manier verlopen. Er werd veel gecommuniceerd via skype terwijl beide partijen naast of tegenover elkaar zaten. Omdat ik dit geen goede manier van communiceren vind, heb ik mijn onderzoek voor kritische literatuurstudie gericht op de interne communicatie en het gebruik van online communicatiemiddelen.</p>
                    <a href="https://docs.google.com/document/d/1BPNE6gw_gGA6jI2nBK6RXrhJV2ETAZ18joeQRCR3HdM/edit?usp=sharing" target="blank">Onderzoek naar interne communicatie</a>
                </div>
                </div>
            </Grid>
       )
    }
}


export default Onderzoeken;