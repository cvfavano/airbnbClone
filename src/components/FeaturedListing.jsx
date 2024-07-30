import React from 'react'

const listings = [
    {   
        id:1,
        tag: "sold out",
        img: "../src/assets/featured/1.png",
        reviewAverage: '5.0',
        reviewNumber: '6',
        country: 'USA',
        description: 'Life lessons with Katie Zaferes',
        price: '$136',
        priceBy: 'person'
    },
    {   
        id:2,tag: "online",
        img: "../src/assets/featured/2.png",
        reviewAverage: '5.0',
        reviewNumber: '30',
        country: 'USA',
        description: 'Learning wedding photography',
        price: '$125',
        priceBy: 'person'
    },
    {
        id: 3,
        tag: "",
        img: "../src/assets/featured/3.png",
        reviewAverage: '4.8',
        reviewNumber: '2',
        country: 'USA',
        description: 'Group Mountain Biking',
        price: '$50',
        priceBy: 'person'
    }
    ];
const featuredListing = listings.map(listing => (
    <li key={listing.id}>
        <img src ={listing.img} />
        <p className="tag">{listing.tag}</p>    
        <p><span className="star">&#9733;</span> <span className="reviewAverage">{listing.reviewAverage}</span> <span className="light-color"> (<span className="reviewTotal">{listing.reviewNumber}</span>) &#9679; <span className="country">{listing.country}</span></span></p>
        
        <p className="description">{listing.description}</p>
        <p><b>From <span className="price">{listing.price}</span></b> / <span className="priceBy">{listing.price}</span></p>                    
            
    </li>    
));

function FeaturedListing() {

    return (
        <div className="row featured-listing">
            <div className="container">
                <h1>Listing</h1>    
                <ul>
                    {featuredListing}
                </ul>    
            </div>
        </div>
    )
}

export default FeaturedListing