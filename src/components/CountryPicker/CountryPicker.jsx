import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './Country.module.css'
import { fetchContries } from '../../api/index';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedContries, setfetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountries(await fetchContries())
        }

        fetchAPI();
    }, [setfetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue = "" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedContries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
