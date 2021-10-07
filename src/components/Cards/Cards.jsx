import React from 'react'
import { Grid } from '@material-ui/core'


import styles from './Cards.module.css'
import CardComponent from './Card/Card';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading..';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <CardComponent 
                    className={styles.infected} 
                    cardTitle="Infected" 
                    value={confirmed.value} 
                    lastUpdate={lastUpdate} 
                    cardSubTitle="Number of Active cases of Covid-19" 
                />
                <CardComponent 
                    className={styles.recovered} 
                    cardTitle="Recovered" 
                    value={recovered.value} 
                    lastUpdate={lastUpdate} 
                    cardSubTitle="Number of recoveries cases from Covid-19" 
                />
                <CardComponent 
                    className={styles.deaths} 
                    cardTitle="Deaths" 
                    value={deaths.value} 
                    lastUpdate={lastUpdate} 
                    cardSubTitle="Number of Deaths Covid-19" 
                />
            </Grid>
        </div>
    )
}

export default Cards
