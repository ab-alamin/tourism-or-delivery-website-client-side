import React from 'react';
import hotel1 from '../../../images/hotel/hotel-1.jpg'
import hotel2 from '../../../images/hotel/hotel-2.jpg'
import hotel3 from '../../../images/hotel/hotel-3.jpg'
import hotel4 from '../../../images/hotel/hotel-4.jpg'
import Hotel from '../Hotel/Hotel';

const hotels = [
    {
        img: hotel1,
        Details: 'Book a virtual room in this four-star London hotel, which features 303 rooms and suites! Captured with a Matterport Pro2.',

    },
    {
        img: hotel2,
        Details: 'Miami Beach Street Buildings and Hotels ',

    },
    {
        img: hotel3,
        Details: 'The most common type of accommodation in the hotel industry, a hotel is defined as an establishment that offers overnight accommodation, meals and other ...',

    },
    {
        img: hotel4,
        Details: ' architecture resort in miami',
    },
]

const Hotels = () => {
    return (
        <div id="hotels" classDetails="container">
            <h2 classDetails="text-primary mt-5"> Our Hotels</h2>
            <div classDetails="row">
                {
                    hotels.map(hotel =><Hotel
                    key={hotel.Details}
                    hotel={hotel}
                    ></Hotel> )
                }

            </div>
        </div>
    );
};

export default Hotels;