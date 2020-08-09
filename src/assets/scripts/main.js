import './components/search-bar.js';

function main() {

    const searchElement = document.querySelector("search-bar");
    
    const baseUrl = "https://covid.mathdro.id/api";

    const getGlobalSummary = async () => {
        try {
            const response = await fetch(baseUrl);
            const responseJson =  await response.json()

            showGlobalSummary(responseJson);
        } catch(error) {

        }
    }

    const getSummaryByCountry = async (country) => {
        try {
            const response = await fetch(`${baseUrl}/countries/${country}/confirmed`);
            const responseJson = await response.json();
            
            console.log(responseJson);
        } catch (error) {

        }
    }

    const onButtonSearchClicked = () => {
        console.log("tes");
        getSummaryByCountry(searchElement.value);
    }

    const showGlobalSummary = (response) => {
        const confirmedElement = document.getElementById("total-confirmed");
        confirmedElement.innerText = response.confirmed.value;

        const recoveredElement = document.getElementById("total-recovered");
        recoveredElement.innerText = response.recovered.value

        const deathsElement = document.getElementById("total-deaths");
        deathsElement.innerText = response.deaths.value

        const dateElement = document.getElementById("date-summary");
        dateElement.innerText = dateConvert(response.lastUpdate)
    }

    const dateConvert = (responseDate) => {
        let date = String(new Date(responseDate));
        let splitDate = date.split(" ");

        return `Update terakhir: ${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
    }

    getGlobalSummary();
    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;