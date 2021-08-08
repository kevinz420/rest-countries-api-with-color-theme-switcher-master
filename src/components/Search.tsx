import React, {useRef, useContext, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
import { ThemeContext } from '../App'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'

interface SearchProps {
    // TODO: make an interface of the JSON response instead of using 'any'
    setData: (value: any) => void;
}

export const Search: React.FC<SearchProps> = ({setData}) => {
    const input = useRef<HTMLInputElement>(null);
    const [displayRegion, setDisplay] = useState('Filter by Region')
    const theme = useContext(ThemeContext)

    useEffect(() => {
        fetchAll()
    }, [])

    async function fetchAll() {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            setData(response.data)
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    }

    async function fetchBySearch(input: string) {
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${input}`);
            setData(response.data)
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    }

    async function fetchByRegion(region: string) {
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
            setData(response.data)
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    }

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        if (input.current === null) return
        const inputVal = input.current.value
        fetchBySearch(inputVal)
    }

    function handleSelection(region: string){
        setDisplay(region)
        fetchByRegion(region)
    }

    return (
        <div className={`container ${theme}`}>
            <form className="search" onSubmit={handleSearch}>
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input ref={input} type="text" placeholder="Search for a country..."/>
            </form>

            <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    {displayRegion}
                </Dropdown.Toggle>

                <Dropdown.Menu id='menu'>
                    {['America', 'Africa', 'Asia', 'Europe', 'Oceania'].map((region) => (
                        <Dropdown.Item id="item" onClick={()=>handleSelection(region)}>{region}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}