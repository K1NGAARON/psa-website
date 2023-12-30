function changeReviews() {
    const reviews = [
        {
            name: "Client name 1",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi perferendis minima nisi enim temporibus voluptatibus voluptas eligendi magni natus?",
        },
        {
            name: "Client name x",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi perferendis minima nisi enim temporibus voluptatibus voluptas eligendi magni natus?",
        },
        {
            name: "Client name 3",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi perferendis minima nisi enim temporibus voluptatibus voluptas eligendi magni natus?",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);