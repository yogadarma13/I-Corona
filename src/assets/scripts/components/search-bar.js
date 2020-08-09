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
            width: 70%;
            display: flex;
            margin: 0 auto;
          }
          
          .container-search input[type="text"] {
            padding: 20px;
            font-size: 17px;
            border: 1px solid grey;
            border-radius: 30px;
            float: left;
            width: 83%;
            background: #f1f1f1;
            margin-right: 2%;
          }
          
          .container-search button {
            width: 15%;
            padding: 20px;
            background: red;
            color: white;
            font-size: 17px;
            border: 1px solid grey;
            border-radius: 30px;
            border-left: none;
            cursor: pointer;
            outline: none;
          }
          
          .container-search input[type="text"]:focus {
            border: 1px solid rgb(243, 5, 5);
            border-radius: 30px;
            outline: none;
          }
          
          .container-search button:hover {
            background: #aa0202;
            outline: none;
          }          
        </style>
        <div class="container-search">
            <input id="search" type="text" autocomplete="off" placeholder="Cari negara" name="search">
            <button id="searchButton" type="submit">Cari</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);