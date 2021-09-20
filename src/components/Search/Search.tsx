import React, {useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
import Dropdown from 'react-bootstrap/Dropdown'
import {fetchAll, fetchBySearch, fetchByRegion} from '../../api/CountryAPI'
import { v4 as uuidv4 } from 'uuid';
import { RestCountries } from '../../interfaces/types'

interface SearchProps {
    // TODO: make an interface of the JSON response instead of using 'any'
    setData: (value: RestCountries[]) => void;
}

export const Search: React.FC<SearchProps> = ({setData}) => {
    const input = useRef<HTMLInputElement>(null);
    const [displayRegion, setDisplay] = useState('Filter by Region')

    useEffect(() => {
        handleRender()
    }, [])

    async function handleRender() {
        const data = await fetchAll()
        data && setData(data)
    }

    async function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        if (input.current === null) return
        const inputVal = input.current.value
        const data = await fetchBySearch(inputVal)
        data && setData(data)
    }

    async function handleSelection(region: string){
        setDisplay(region)
        const data = await fetchByRegion(region)
        data && setData(data)
    }

    return (
        <div className={"container search-bar"}>
            <form className="search" onSubmit={handleSearch}>
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input ref={input} type="text" placeholder="Search for a country..."/>
            </form>

            <Dropdown>
                <Dropdown.Toggle id="dropdown" className="button">
                    {displayRegion}
                </Dropdown.Toggle>

                <Dropdown.Menu id='menu'>
                    {['Americas', 'Africa', 'Asia', 'Europe', 'Oceania'].map((region) => (
                        <Dropdown.Item id="item" key={uuidv4()} onClick={()=>handleSelection(region)}>{region}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}