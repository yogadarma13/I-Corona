import './country-item.js';

class CountryList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set countries(countries) {
        this._countries = countries;
        this.render();
    }

    renderError() {
        this.shadowDOM.innerHTML = "";
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._countries.forEach(country => {
            const countryItemElement = document.createElement("country-item");
            countryItemElement.country = country;
            this.shadowDOM.appendChild(countryItemElement);
        });
    }
}

customElements.define("country-list", CountryList);