import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RestCountries } from '../types';
import { v4 as uuidv4 } from 'uuid';
import './DetailsPage.css'

interface DetailsPageProps extends RouteComponentProps<{code: 'string'}> {}

export const DetailsPage: React.FC<DetailsPageProps> = ({match, history}) => {
    const [data, setData] = useState<RestCountries>(
      {
        name: '',
        topLevelDomain: [],
        alpha2Code: '',
        alpha3Code: '',
        callingCodes: [],
        capital: '',
        altSpellings: [],
        region: '',
        subregion: '',
        population: 0,
        latlng: [0],
        demonym: '',
        area: 0,
        gini: 0,
        timezones: [],
        borders: [],
        nativeName: '',
        numericCode: '',
        currencies: [
          {
            code: '',
            name: '',
            symbol: '',
          }
        ],
        languages: [
          {
            iso639_1: '',
            iso639_2: '',
            name: '',
            nativeName: '',
          }
        ],
        translations: {
          de: '',
          es: '',
          fr: '',
          ja: '',
          it: '',
          br: '',
          pt: '',
        },
        flag: '',
        regionalBlocs: [
          {
            acronym: '',
            name: '',
            otherAcronyms: [],
            otherNames: [],
          },
          {
            acronym: '',
            name: '',
            otherAcronyms: [],
            otherNames: [],
          }
        ],
        cioc: '',
      }
    )

    useEffect(() => {
      fetchByCode(match.params.code)
    }, [match.params.code])

    async function fetchByCode(code: 'string') {
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
            console.log(response.data);
            setData(response.data)
          } catch (error) {
            console.error(error);
          }
    }

    const newPop = data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
      <div className="container details-page">
        <button className="back-button button" onClick={() => history.push("/")}>
          <FontAwesomeIcon icon={faArrowLeft}/>
          <h3>Back</h3>
        </button>
        <div className="info">
          <img src={data.flag} alt=""/>
          <div>
            <h2>{data.name}</h2>
            <div className="details">
              <ul>
                <li>
                    <h4>Native Name:&nbsp;</h4>
                    <p>{data.nativeName}</p>
                </li>
                <li>
                    <h4>Population:&nbsp;</h4>
                    <p>{newPop}</p>
                </li>
                <li>
                    <h4>Region:&nbsp;</h4>
                    <p>{data.region}</p>
                </li>
                <li>
                    <h4>Sub Region:&nbsp;</h4>
                    <p>{data.subregion}</p>
                </li>
                <li>
                    <h4>Capital:&nbsp;</h4>
                    <p>{data.capital}</p>
                </li>
              </ul>
              <ul>
                <li>
                    <h4>Top Level Domain:&nbsp;</h4>
                    <p>{data.topLevelDomain[0]}</p>
                </li>
                <li>
                    <h4>Currencies:&nbsp;</h4>
                    <p>{data.currencies.map(currency => currency.name).join(', ')}</p>
                </li>
                <li>
                    <h4>Languages:&nbsp;</h4>
                    <p>{data.languages.map(language => language.name).join(', ')}</p>
                </li>
              </ul>
            </div>
            <div className="borders">
              <h4>Border Countries:&nbsp;</h4>
              {data.borders.map(country => {
                return <button className="borders-button button" key={uuidv4()} onClick={() => history.push(`/${country}`)}>
                  <p>{country}</p>
                </button>
              })}
            </div>
          </div>
        </div>
      </div>
    );
}
