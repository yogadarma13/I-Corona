class SearchBar extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#search").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>       
          .container-search {
            width: 100%;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
          }

          .container-search > h1 {
            margin: 0;
          }

          .container-search div {
            display: flex;
            width: 40%
          }
          
          .container-search input[type="text"] {
            padding: 8px 15px;
            font-size: 17px;
            border: 1px solid grey;
            border-radius: 8px;
            width: 83%;
            background: #f1f1f1;
            margin-right: 2%;
          }
          
          .container-search button {
            width: 15%;
            min-width: fit-content;
            padding: 8px 15px;
            background: #e73626;
            color: white;
            font-size: 17px;
            border: 1px solid grey;
            border-radius: 8px;
            border-left: none;
            cursor: pointer;
            outline: none;
          }
          
          .container-search input[type="text"]:focus {
            border: 1px solid #e73626;
            border-radius: 8px;
            outline: none;
          }
          
          .container-search button:hover {
            background: #aa0202;
            outline: none;
          }

          @media screen and (max-width: 800px) {
            .container-search {
              flex-direction: column;
              align-items: start;
            }

            .container-search h1 {
              font-size: 1.5em;
            }

            .container-search div {
              width: 100%;
              margin-top: 16px;
            }
          }
        
        </style>
        <div class="container-search">
            <h1>Statistik per negara</h1>
            <div>
              <input id="search" type="text" autocomplete="off" placeholder="Cari negara" required>
              <button id="searchButton">Cari</button>
            </div>
        </div>
        `;

    this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);