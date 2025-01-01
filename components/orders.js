class Orders extends HTMLElement {
    constructor() {
        super();
        this.order = new Map();
    }

    connectedCallback() {
        this.loadOrders();  
        this.render();
    }


    addService(service) {
        console.log(`Adding service: ${service}`);
        if (this.order.has(service)) {
            alert(`Та энэхүү ${service} үйлчилгээг аль хэдийн сонгосон байна.`)
        } else {
            this.order.set(service, 1);
        }
        this.saveOrders(); 
        this.render();
    }

    saveOrders() {
        const ordersArray = Array.from(this.order.entries());
        localStorage.setItem('orders', JSON.stringify(ordersArray));
    }

    loadOrders() {
        const savedOrders = localStorage.getItem('orders');
        if (savedOrders) {
            const ordersArray = JSON.parse(savedOrders);
            this.order = new Map(ordersArray);
        }
    }

    render() {
        this.innerHTML = "";
        if (this.order.size === 0) {
            this.innerHTML = "<p>Захиалага хоосон байна</p>"; 
        } else {
            this.order.forEach((count, service) => {
                this.innerHTML += `
                <article class="orderStyle">
                    <h3>${service}</h3>
                </article>
                `;
            });
        }
    }
}

window.customElements.define("my-orders", Orders);
