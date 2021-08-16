import React from 'react'
import {CountryCard} from '../CountryCard/CountryCard'
import './CardList.css'
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';
import {RestCountries} from '../../interfaces/types'

interface CardListProps {
    data: RestCountries[];
}

export const CardList: React.FC<CardListProps> = ({data}) => {

    const CountryCardRouter = withRouter(CountryCard)
    
    return (
        <div className="card-list">
            {data.map(entry => {
                return <CountryCardRouter key={uuidv4()} data={entry}/>
            })}
        </div>
    );
}