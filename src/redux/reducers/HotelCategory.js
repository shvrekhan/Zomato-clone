const initialState = {
    hotelCategory: [
        {
            id: 1,
            img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            heading: "Order Online",
            subHead: "Stay home and order to your doorstep",
            route: "online_order",
        },
        {
            id: 2,
            img: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            heading: "Dining",
            subHead: "View the city's favorite dining venues",
            route: "fine_dine"
        },
        {
            id: 3,
            img: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            heading: "Nightlife and Clubs",
            subHead: "Explore the city's top nightlife outlets",
            route: "night_life"
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
