import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';


class Home extends React.Component{
    render(){
        return(
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="center">
                <h1>Stageverslag</h1>
                <h2>Sven Koene</h2>
                <h3>0957425</h3>
            </Grid>
        )
    }
}


export default Home;