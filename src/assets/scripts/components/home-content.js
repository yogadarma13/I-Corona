import IlustrationImage from '../../images/ilustration_image.png';

class HomeContent extends HTMLElement {
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
        .home {
            max-width: 80%;
            height: 100%;
            display: flex;
            margin: 0 auto;
            align-items: center;
          }

        .home-image {
            width: 40%;
          }
          
          .text-home {
            display: flex;
            flex-direction: column;
            color: white;
            margin-left: 50px;
          }
          
          .text-home h1 {
            font-size: 3em;
            font-weight: bold;
            margin: 0;
          }

          @media screen and (max-width: 800px) {
            .home {
                max-width: 85%;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            
              .home-image {
                width: 40%;
              }
            
              .text-home {
                text-align: center;
                margin: 24px 0;
              }
          }
        </style>
        <article class="home">
            <img class="home-image" src=${IlustrationImage} alt="Cegah Corona" />
            <div class="text-home">
                <h1>
                    I-CORONA
                </h1>
                <p>
                    I-Corona (Info Corona) adalah aplikasi web yang menyediakan informasi mengenai statistik jumlah kasus COVID-19.
                    Statistik tersebut meliputi jumlah kasus yang terkonfirmasi, sembuh dan meninggal secara global.</br></br>
                    Selain itu aplikasi web ini dapat memberikan statistik jumlah kasus COVID-19 berdasarkan Negara 
                    dan detail statistik kota - kota pada negara tersebut.
                </p>
            </div>
        </article>`;
    }
}

customElements.define("home-content", HomeContent);