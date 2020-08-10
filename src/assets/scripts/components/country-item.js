class CountryItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set country(country) {
        this._country = country;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 24px 15px;
            margin-top: 20px;
            display: flex;
          }
          
          .item {
            display: flex;
            flex-direction: column;
            text-align: center;
            flex-grow: 1;
            margin: 8px 16px;
          }
          
          .item h3, p {
            margin: 0;
          }
          
          .container-statistic-country {
            display: flex;
            width: 100%;
            margin-top: 24px;
          }
          
          .container-statistic-country div {
            flex-grow: 1;
            margin: 0 16px;
          }
          
        </style>
        <div class="item card">
            <h3>${this._country.provinceState === null ? this._country.countryRegion : this._country.provinceState}</h3>
            <p>${this._country.provinceState === null ? "" : this._country.combinedKey}</p>
            <div class="container-statistic-country">
                <div>
                    <p class="country-confirmed">${this._country.confirmed}</p>
                    <p>konfimasi</p>
                </div>
                <div>
                    <p class="country-recovered">${this._country.recovered}</p>
                    <p>sembuh</p>
                </div>
                <div>
                    <p class="country-deaths">${this._country.deaths}</p>
                    <p>meninggal</p>
                </div>
             </div>
        </div>`
    }
}

customElements.define("country-item", CountryItem);