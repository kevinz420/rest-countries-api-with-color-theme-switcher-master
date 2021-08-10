import React from 'react'
import { Search } from './Search'
import {CardList} from './CardList'
import { RestCountries } from '../types';

interface HomeProps {
    data: RestCountries[];
    setData: (value: RestCountries[]) => void;
}

export const Home: React.FC<HomeProps> = ({setData, data}) => {
        return (
            <>
                <Search setData={setData}/>
                <CardList data={data}/>
            </>
        );
}