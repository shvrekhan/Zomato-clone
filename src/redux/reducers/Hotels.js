const initialState = {
    hotels: [
        {
            id: "100013",
            title: "Dal-icious",
            category: ["North Indian", "Biriyani"],
            rating: "3.4",
            items: [
                {
                    id: "11127",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
                {
                    id: "11146",
                    title: "Egg Biriyani",
                    rating: "3.4",
                    price: "395",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/0a7/d9155100beef6fe2d56582e093f120a7.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Medley of finest Basmati rice layered with boiled eggs and delicate blend",
                },
            ],
            price: "250",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/5/19347905/2794866a042b1712625754e70b545c9b_o2_featured_v2.jpg?output-format=webp",
            time: "38 min",
            location: "Banaswadi, South Bangalore",
        },
        {
            id: "9488218",
            title: "CakeZone",
            category: ["Ice cream"],
            rating: "3.5",
            items: [
                {
                    id: "2314545",
                    title: "Dry Fruit Speech",
                    rating: "4.0",
                    price: "200",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/11b/4520a81893914715df60e645cdeb211b.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Creamy vanilla ice cream loaded with dry fruits like figs, raisins, almonds, dates",
                },
            ],
            price: "170",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/chains/7/18379377/f1cfd9dd51c3e79a0b9c78bb45d010d6_o2_featured_v2.jpg",
            time: "28 min",
            location: "Bolare, South Bangalore",
        },
        {
            id: "100007",
            title: "Donne Biriyani House",
            category: ["Biriyani", "North Indian"],
            items: [
                {
                    id: "11123",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
                {
                    id: "11132",
                    title: "Mutton Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/7d8/39133ab66366767803f4477c35b097d8.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Salts signature, slow-cooked layered aromatic Basmati rice with meat, sealed in a pastry",
                },
            ],
            rating: "3.3",
            price: "250",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/7/20237607/36c79c28b7f1eae5d0d2385f72d74960_o2_featured_v2.jpg",
            time: "44 min",
            location: "J P Nagar, South Bangalore",
        },
        {
            id: "100002",
            title: "Ambur Dum Biriyani",
            category: ["Biriyani", "Beverages"],
            rating: "3.6",
            items: [
                {
                    id: "11113",
                    title: "Mutton Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/7d8/39133ab66366767803f4477c35b097d8.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Salts signature, slow-cooked layered aromatic Basmati rice with meat, sealed in a pastry",
                },
            ],
            price: "250",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/8/19230628/13d86c366093c50d72ba7d59260dfa86_o2_featured_v2.jpg",
            time: "38 min",
            location: "Bolare, South Bangalore",
        },
        {
            id: "100010",
            title: "Biriyani House",
            category: ["Biriyani", "North Indian"],
            rating: "3.3",
            items: [
                {
                    id: "11134",
                    title: "Mutton Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/7d8/39133ab66366767803f4477c35b097d8.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Salts signature, slow-cooked layered aromatic Basmati rice with meat, sealed in a pastry",
                },
                {
                    id: "11144",
                    title: "Egg Biriyani",
                    rating: "3.4",
                    price: "395",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/0a7/d9155100beef6fe2d56582e093f120a7.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Medley of finest Basmati rice layered with boiled eggs and delicate blend",
                },
            ],
            price: "300",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/5/19406045/dee7386158ecec224048ecc471edc2f8_o2_featured_v2.jpeg",
            time: "39 min",
            location: "Bolare, South Bangalore",
        }

    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

