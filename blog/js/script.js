const content = [
    {
        title: "Blog number 1",
        body: "this is the intro text of the first blog.",
        img: "/blog/title-1/img/banner.jpg",
        url: "/blog/title-1/"
    },
    {
        title: "Blog number 1",
        body: "this is the intro text of the first blog.",
        img: "/blog/title-1/img/banner.jpg",
        url: "/blog/title-1/"
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
                    <p>
                        ${item.body}
                    </p>
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