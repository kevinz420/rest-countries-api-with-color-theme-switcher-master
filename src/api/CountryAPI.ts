import axios from 'axios'
import { RestCountries } from '../interfaces/types'

const API_ROOT = 'https://restcountries.eu';

async function fetchInfo(url: string){
    try {
        const response = await axios.get<RestCountries[]>(url);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function fetchAll() {
    const response = await fetchInfo(`${API_ROOT}/rest/v2/all`);
    return response
}

async function fetchBySearch(input: string) {
    const response = await fetchInfo(`${API_ROOT}/rest/v2/name/${input}`);
    return response
}

async function fetchByRegion(region: string) {
    const response = await fetchInfo(`${API_ROOT}/rest/v2/region/${region}`);
    return response
}

export {fetchAll, fetchBySearch, fetchByRegion}