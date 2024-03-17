const content = [
    {
        title: "Cheltenham Festival Fever: Exclusive Insights and Winning Tips Await!",
        body: "this is the intro text of the first blog.",
        img: "/blog/cheltenham-festival-fever/img/banner.jpg",
        url: "/blog/cheltenham-festival-fever/"
    },
    {
        title: "Cheltenham Festival 2024: Pro Sports Advice Recap",
        body: "this is some body",
        // img: "/blog/cheltenham-festival-2024-recap/",
        img: "/blog/cheltenham-festival-fever/img/banner.jpg",
        url: "/blog/cheltenham-festival-2024-recap/"
    },
];

function createCards(e) {
    const target = document.querySelector('#content-wrapper');
    const cards = content.reverse().map(item => {

        return `
            <div class="item card">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>
                        ${item.title}
                    </h3>
                    <a href="${item.url}" class="">
                        Read more
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

$(document).ready(function() {
    createCards();
});