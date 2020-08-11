class GlobalSummary extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set summary(summary) {
        this._summary = summary;
        this.render();
    };

    dateConvert(responseDate) {
        let date = String(new Date(responseDate));
        let splitDate = date.split(" ");

        return `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .global-summary {
            margin: 0 auto;
            max-width: 80%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .global-summary > h1 {
            font-size: 3em;
          }
          
          .total-global-summary {
            width: 100%;
            display: flex;
            margin-top: 100px;
          }
          
          .total-global-summary div {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
          }
          
          .total-global-summary h1 {
            margin: 0;
            font-size: 3em;
            color: #e73626;
          }

          @media screen and (max-width: 800px) {

            .global-summary h1 {
                font-size: 2em;
              }

            .total-global-summary {
              flex-direction: column;
              margin-top: 8px;
            }
          
            .total-global-summary div {
              margin-top: 16px;
            }
          
            .total-global-summary h1 {
              font-size: 2em;
            }
          }
        </style>
        <article class="global-summary">
            <h1>Statistik Kasus COVID-19</h1>
            <div class="total-global-summary">
                <div>
                    <h1 id="total-confirmed">${this._summary === "" ? "-" : this._summary.confirmed.value}</h1>
                    <h3>Terkonfimasi</h2>
                </div>

                <div>
                    <h1 id="total-recovered">${this._summary === "" ? "-" : this._summary.recovered.value}</h1>
                    <h3>Sembuh</h2>
                </div>

                <div>
                    <h1 id="total-deaths">${this._summary === "" ? "-" : this._summary.deaths.value}</h1>
                    <h3>Meninggal</h2>
                </div>
            </div>
            <p id="date-summary">Update terakhir: ${this._summary === "" ? "-" : this.dateConvert(this._summary.lastUpdate)}</p>
        </article>`;
    }
}

customElements.define("global-summary", GlobalSummary);