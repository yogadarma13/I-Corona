import './components/search-bar.js';
import './components/country-summary.js';
import './components/country-list.js';

function main() {

    const searchElement = document.querySelector("search-bar");
    const countrySummaryElement = document.querySelector("country-summary");
    const countryListElement = document.querySelector("country-list");
    
    const baseUrl = "https://covid.mathdro.id/api";

    const getGlobalSummary = async () => {
        try {
            const response = await fetch(baseUrl);
            const responseJson =  await response.json()

            showGlobalSummary(responseJson);
        } catch(error) {

        }
    }

    const getDetailByCountry = async country => {
        try {
            const response = await fetch(`${baseUrl}/countries/${country}/confirmed`);
            const responseJson = await response.json();
            
            showCountryList(responseJson);
        } catch (error) {

        }
    }

    const getSummaryByCountry = async country => {
        try {
            const response = await fetch(`${baseUrl}/countries/${country}`);
            const responseJson = await response.json();
            
            showCountrySummary(country, responseJson);
        } catch (error) {

        }
    }

    const onButtonSearchClicked = () => {
        getSummaryByCountry(searchElement.value);
        getDetailByCountry(searchElement.value);
    }

    const showGlobalSummary = response => {
        const confirmedElement = document.getElementById("total-confirmed");
        confirmedElement.innerText = response.confirmed.value;

        const recoveredElement = document.getElementById("total-recovered");
        recoveredElement.innerText = response.recovered.value

        const deathsElement = document.getElementById("total-deaths");
        deathsElement.innerText = response.deaths.value

        const dateElement = document.getElementById("date-summary");
        dateElement.innerText = dateConvert(response.lastUpdate)
    }

    const showCountrySummary = (country, summary) => {
        countrySummaryElement.summary(country, summary);
    }

    const showCountryList = countries => {
        countryListElement.countries = countries;
    }

    const dateConvert = responseDate => {
        let date = String(new Date(responseDate));
        let splitDate = date.split(" ");

        return `Update terakhir: ${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
    }

    getGlobalSummary();
    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;