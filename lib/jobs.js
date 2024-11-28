export default class Jobs {
    constructor(data) {
        this.firstname = data.firstname || 'Нэр';
        this.lastName = data.lastName || 'Овог';
        this.rating = data.itemrating || '★★★☆☆';
        this.jobDescription = data.jobDescription || 'Үйлчилгээний товч танилцуулга...';
        this.pricePerHour = data.pricePerHour || 'Тодорхойгүй'; // Default to "Unknown" if missing
    }

    render() {
        return ` 
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
                <a href="workerProfile.html">
                    <button>Сонгох</button>
                </a>
            </div>
        </article>
        `;
    }
}
