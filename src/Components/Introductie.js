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
            </Grid>
       )
    }
}


export default Intro;