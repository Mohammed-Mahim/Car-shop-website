import React, { useEffect, useState } from 'react';

const Review = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://limitless-hollows-16307.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="gallery__container container my-5">
            <div left>
                <div className="titles">
                    <span className="text-danger">User Review</span>
                    <h2 className="mx-2">User's Review for Our <br />  Car</h2>
                </div>
            </div>
            <div {...settings}>
            {reviews.map(review =>
                <div key={review._id}>
                    <div className="shadow-sm p-3 mx-3 rounded">
                        <h6>{review.name}</h6>
                        <div
                            count={5}
                            value={review.rating}
                            isHalf={true}
                            edit={false}
                            size={30}

                            activeColor="#ffcb24"
                        />
                        <p>Rating: {review.rating}</p>
                        <p className="text-muted">{review.comment}</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};
export default Review;