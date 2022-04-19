const template = document.createElement('template');
template.innerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        section {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            height: 100vh;
            width: 100%;
            align-items: center;
            justify-content: center;
            background: #4070f4;
        }

        section .dots span {
            position: absolute;
            height: 10px;
            width: 10px;
            background: #fff;
            border-radius: 50%;
            transform: rotate(calc(var(--i) * (360deg / 15))) translateY(35px);
            animation: animate 1.5s linear infinite;
            animation-delay: calc(var(--i) * 0.1s);
            opacity: 0;
        }

        @keyframes animate {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }
    </style>
    <section>
        <div class="dots">
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:13;"></span>
            <span style="--i:14;"></span>
            <span style="--i:15;"></span>
        </div>
    </section>
`;

class ScreenLoader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  };
};

window.customElements.define('screen-loader', ScreenLoader);