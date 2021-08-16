import React from 'react'
import './CountryCard.css'
import { RouteComponentProps } from 'react-router-dom'
import { RestCountries } from '../../interfaces/types'

interface CountryCardProps extends RouteComponentProps {
    data: RestCountries
}

export const CountryCard: React.FC<CountryCardProps> = ({data, history}) => {
    const newPop = data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className={"card"} onClick={() => history.push(`/${data.alpha3Code}`)}>
            <img src={data.flag} alt=""/>
            <div className="card-body">
                <h2>{data.name}</h2>
                <ul className='card-details'>
                    <li>
                        <h4>Population:&nbsp;</h4>
                        <p>{newPop}</p>
                    </li>
                    <li>
                        <h4>Region:&nbsp;</h4>
                        <p>{data.region}</p>
                    </li>
                    <li>
                        <h4>Capital:&nbsp;</h4>
                        <p>{data.capital}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}