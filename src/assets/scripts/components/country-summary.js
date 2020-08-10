import "./country-item.js";

class CountrySummary extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    summary(country, summary) {
        this._country = country;
        this._summary = summary;
        this.render();
    };

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .container-country-summary {
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            margin-top: 80px;
          }
          
          .total-country-summary {
            display: flex;
            width: 100%;
            align-content: center;
            justify-content: center;
          }
          
          .total-country-summary div {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
          }
          
          .total-country-summary h2, h3 {
            margin: 0;
          }
        </style>
        <div class="container-country-summary">
                <h1>${this._country.toUpperCase()}</h1>
                <div class="total-country-summary">
                    <div>
                        <h2 id="total-confirmed">${this._summary.confirmed.value}</h2>
                        <h3>Terkonfimasi</h2>
                    </div>

                    <div>
                        <h2 id="total-recovered">${this._summary.recovered.value}</h2>
                        <h3>Sembuh</h2>
                    </div>

                    <div>
                        <h2 id="total-deaths">${this._summary.deaths.value}</h2>
                        <h3>Meninggal</h2>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("country-summary", CountrySummary);