import './components/global-summary.js';
import './components/search-bar.js';
import './components/country-summary.js';
import './components/country-list.js';
import NotFound from '../images/not_found.png';

function main() {

    const globalSummaryElement = document.querySelector("global-summary");
    const searchElement = document.querySelector("search-bar");
    const countrySummaryElement = document.querySelector("country-summary");
    const countryListElement = document.querySelector("country-list");
    const containerSearchElement = document.getElementById("search");

    const baseUrl = "https://covid.mathdro.id/api";

    const getGlobalSummary = async () => {
        showGlobalSummary("");
        try {
            const response = await fetch(baseUrl);
            const responseJson = await response.json()

            showGlobalSummary(responseJson);
        } catch (error) {
            showGlobalSummary("");
        }
    }

    const getDetailByCountry = async country => {
        try {
            const responseSummary = await fetch(`${baseUrl}/countries/${country}`);
            const responseSummaryJson = await responseSummary.json();

            const responseDetail = await fetch(`${baseUrl}/countries/${country}/confirmed`);
            const responseDetailJson = await responseDetail.json();

            containerSearchElement.style.backgroundImage = "none";
            containerSearchElement.style.height = "fit-content";

            showCountrySummary(country, responseSummaryJson);
            showCountryList(responseDetailJson);

        } catch (error) {
            removeCountry();
            containerSearchElement.style.backgroundImage = `url(${NotFound})`;
            containerSearchElement.style.height = "100vh";
        }
    }

    const onButtonSearchClicked = () => {
        if (searchElement.value != "") {
            getDetailByCountry(searchElement.value);
        }
    }

    const showGlobalSummary = summary => {
        globalSummaryElement.summary = summary;

    }

    const showCountrySummary = (country, summary) => {
        countrySummaryElement.summary(country, summary);
    }

    const showCountryList = countries => {
        countryListElement.countries = countries;
    }

    const removeCountry = () => {
        countrySummaryElement.renderError();
        countryListElement.renderError();
    }

    getGlobalSummary();
    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;