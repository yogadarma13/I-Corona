function main() {
    const baseUrl = "https://covid.mathdro.id/api";

    const getGlobalSummary = async () => {
        try {
            const response = await fetch(baseUrl);
            const responseJson =  await response.json()

            showGlobalSummary(responseJson);
        } catch(error) {

        }
    }

    const showGlobalSummary = (response) => {
        const confirmedElement = document.getElementById("count-confirmed");
        confirmedElement.innerText = response.confirmed.value;

        const recoveredElement = document.getElementById("count-recovered");
        recoveredElement.innerText = response.recovered.value

        const deathsElement = document.getElementById("count-deaths");
        deathsElement.innerText = response.deaths.value
    }

    getGlobalSummary();
}

export default main;