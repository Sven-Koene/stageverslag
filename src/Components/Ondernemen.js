import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Ondernemen extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="center">
                <h1>Ondernemen</h1>
            </Grid>
       )
    }
}


export default Ondernemen;