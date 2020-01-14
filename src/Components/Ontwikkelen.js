import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

class Ontwikkelen extends React.Component{
    render(){
       return(
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="center">
                <h1>Ontwikkelen</h1>
            </Grid>
       )
    }
}


export default Ontwikkelen;