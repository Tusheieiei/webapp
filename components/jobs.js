class Jobs extends HTMLElement {
    constructor() {
        super();
        console.log("Job element created");
    }

    connectedCallback() {
        this.firstname = this.getAttribute("firstname") || "Нэр";
        this.lastName = this.getAttribute("lastname") || "Овог"; // Use lowercase attribute names
        this.rating = this.getAttribute("itemrating") || "★★★☆☆";
        this.jobDescription = this.getAttribute("jobdescription") || "Үйлчилгээний товч танилцуулга...";
        this.pricePerHour = this.getAttribute("priceperhour") || "Тодорхойгүй";

        this.render();
        this.attachEventListeners();
    }
    addService() {
        const headerComponent = document.querySelector('header-component');
        const ordersComponent = headerComponent?.getOrdersComponent();

        if (ordersComponent) {
            const service = `${this.firstname} ${this.lastName} - ${this.jobDescription}`;
            ordersComponent.addService(service);
        } else {
            console.warn('Orders component not found.');
        }
    }

    attachEventListeners() {
        const button = this.querySelector("button");
        if (button) {
            console.log("Button found, attaching event listener.");
            button.addEventListener("click", this.addService.bind(this));
        } else {
            console.warn("Button not found in the Jobs component.");
        }
    }
    render() {
        this.innerHTML = `
        <article class="services">
            <div class="picture">
                <img src="https://picsum.photos/200/200" alt="Үйлчилгээний ажилтан" />
            </div>
            <div class="profile">
                <h3>${this.firstname} ${this.lastName}</h3>
                <span>Үнэлгээ: ${this.rating}</span>
                <p>${this.jobDescription}</p>
            </div>
            <div class="PriceToTime">
                <p>Үнэ: 1цаг / ${this.pricePerHour}₮</p>
                <a>
                    <button class="orderbutton">Сонгох</button>
                </a>
            </div>
        </article>
        `;
    }

    static get observedAttributes() {
        return ["firstname", "lastname", "itemrating", "jobdescription", "priceperhour"];
    }
}

window.customElements.define("my-jobs", Jobs);
