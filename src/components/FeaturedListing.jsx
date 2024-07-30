import React from 'react'

const listings = {
    1: {tag: "sold out",
        img: "../src/assets/featured/1.png",
        reviewAverage: '5.0',
        reviewNumber: '6',
        country: 'USA',
        description: 'Life lessons with Katie Zaferes',
        price: '$136',
        priceBy: 'person'
    },
    2:  {tag: "sold out",
            img: "../src/assets/featured/2.png",
            reviewAverage: '5.0',
            reviewNumber: '30',
            country: 'USA',
            description: 'Learning wedding photography',
            price: '$125',
            priceBy: 'person'
        },
    3:
        {tag: "sold out",
                img: "../src/assets/featured/3.png",
                reviewAverage: '4.8',
                reviewNumber: '2',
                country: 'USA',
                description: 'Group Mountain Biking',
                price: '$50',
                priceBy: 'person'
            },

}

function FeaturedListing() {

    return (
        <div className="row featured-listing">
            <div className="container">
            <h1>Listing</h1>    

            <ul>
                <li>
                    <img src ="../src/assets/featured/1.png"/>
                <p className="tag">sold out</p>    
                <p> <span>="reviewAverage"</span> 5.0 (<span className="reviewTotal">6</span>)<span className="country">USA</span></p>
                
                <p className="description">Life lessons with Zatie Zaferes</p>
                <p>From <span className="price">$136</span> /<span className="priceBy">person</span></p>                    
                    
                </li>    
            </ul>    
            </div>
        </div>
    )
}

export default FeaturedListing