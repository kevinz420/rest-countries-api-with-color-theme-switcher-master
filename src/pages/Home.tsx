import React from 'react'
import { Search } from '../components/Search/Search'
import {CardList} from '../components/CardList/CardList'
import { RestCountries } from '../interfaces/types';

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