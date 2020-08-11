import Logo from '../../images/logo_white.png';

class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .navbar-container {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 80%;
            min-width: 80%;
          }
          
          .navbar-title {
            display: flex;
            align-items: center;
          }
          
          .navbar-title img {
            width: 40px;
            height: 40px;
          }
          
          .navbar-title h1 {
            color: white;
            margin-left: 16px;
          }
          
          nav li {
            display: inline;
            list-style-type: none;
            margin-right: 20px;
          }
          
          nav a {
            font-size: 18px;
            font-weight: 400;
            text-decoration: none;
            color: white;
          }
          
          nav a:hover {
            text-decoration: underline;
          }

          @media screen and (max-width: 800px) {
            .navbar-title h1 {
                font-size: 1.5em;
              }

              nav a {
                font-size: 0.9em;
              }
          }

          @media screen and (max-width: 670px) {
            .navbar-title h1 {
                font-size: 1.2em;
              }

              nav a {
                font-size: 0.9em;
              }
          }
        </style>
        <div class="navbar-container">
            <div class="navbar-title">
                <img src=${Logo} alt="i-corona" />
                <h1>
                    I-CORONA
                </h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Beranda</a></li>
                    <li><a href="#global-summary">Statistik Global</a></li>
                    <li><a href="#search">Pencarian</a></li>
                </ul>
            </nav>
        </div>`;
    }
}

customElements.define("app-bar", AppBar);