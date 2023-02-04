const initialState = {
    hotels: [
        {
            id: "1044513",
            title: "Mavalli Tiffin Room (MTR)",
            category: ["South Indian", "Dosa"],
            rating: "4.4",
            items: [
                {
                    id: "111200000",
                    title: "Masala Dosa",
                    rating: "4.5",
                    price: "107",
                    imgUrl:
                        "https://b.zmtcdn.com/data/pictures/chains/3/50663/1be39fbd83581c1847cc489b94f1faff.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                    description:
                        "Crispy masala dosa with the meshed potato and coconut chuteny.",
                },
                {
                    id: "11146",
                    title: "Rawa idli",
                    rating: "4.4",
                    price: "55",
                    imgUrl:
                        "https://b.zmtcdn.com/data/pictures/chains/3/50663/28879f1bd73088a04037a9be99c904a1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                    description:
                        "Soft idli made with rawa served with the tender coconut and mint chutney.",
                },
            ],
            price: "150",
            imgUrl:
                "https://b.zmtcdn.com/data/reviews_photos/5e4/8361ff114c8eb8dd41e0f862492085e4_1654352333.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            time: "38 min",
            location: "J.p nagar, South Bangalore",
        },
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
        },
        {
            id: "100026",
            title: "Royal Fast Food Center",
            category: ["Biriyani"],
            rating: "3.0",
            items: [
                {
                    id: "11135",
                    title: "Mutton Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/7d8/39133ab66366767803f4477c35b097d8.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Salts signature, slow-cooked layered aromatic Basmati rice with meat, sealed in a pastry",
                },
                {
                    id: "11145",
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
                "https://b.zmtcdn.com/data/pictures/0/20411750/bf640a7132b03019f24aefeb4f0a51a9_o2_featured_v2.jpg",
            time: "25 min",
            location: "Bolare, South Bangalore",
        },
        {
            id: "100015",
            title: "Dal-icious",
            category: ["North Indian", "Biriyani"],
            rating: "3.4",
            items: [
                {
                    id: "11128",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
                {
                    id: "11147",
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
            id: "100006",
            title: "Biriyani Khazana",
            category: ["Biriyani", "Shake"],
            rating: "3.6",
            items: [
                {
                    id: "11122",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
            ],
            price: "250",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/2/18740032/c60f8ad5b75d238838173202586bf917_o2_featured_v2.jpg",
            time: "42 min",
            location: "Bellandur, South Bangalore",
        },
        {
            id: "3245667",
            title: "Empire Restaurant",
            category: ["Paratha"],
            rating: "3.4",
            items: [
                {
                    id: "2321231",
                    title: "Plain Paratha with Dhal",
                    rating: "3.2",
                    price: "108",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/2e4/e242abd070343674a5bd00d1f222c2e4.jpg",
                    description: "Plain Paratha+Dal+Paneer Sabji+Salad+Raita",
                },
                {
                    id: "423645",
                    title: "Aloo onion paratha",
                    rating: "4.0",
                    price: "45",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/c5e/1ff5350cfb9aa78553745ea6c3194c5e.jpg?fit=around|130:130&crop=130:130;*,*",
                    description: "3 Plain Paratha+Chicken Curry+Salad+Raita",
                },
            ],
            price: "150",
            imgUrl:
                "https://b.zmtcdn.com/data/dish_photos/8d0/32b43a61fd112e6cc8520d73896c58d0.jpg",
            time: "30 min",
            location: "Banaswadi, South Bangalore",
        },
        {
            id: "9488238",
            title: "Polar Bear",
            category: ["Ice cream"],
            rating: "4.0",
            items: [
                {
                    id: "454323",
                    title: "Dry fruit",
                    rating: "3.5",
                    price: "175",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/b61/31b5c3cbe84f5c7ad6371441c7528b61.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "The 'Not to be Shared' version of our Classic DBC. A smaller version",
                },
                {
                    id: "2324345",
                    title: "Dry Fruit Speech",
                    rating: "4.0",
                    price: "200",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/11b/4520a81893914715df60e645cdeb211b.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Creamy vanilla ice cream loaded with dry fruits like figs, raisins, almonds, dates",
                },
            ],
            price: "100",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/chains/2/50812/21c544e626cbf40a91c8b236014b2682_o2_featured_v2.jpg",
            time: "18 min",
            location: "J P Nagar, South Bangalore",
        },
        {
            id: "100001",
            title: "Sahukar Biriyani-Royal",
            category: ["Biriyani"],
            rating: "4.1",
            items: [
                {
                    id: "11112",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
                {
                    id: "11114",
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
                "https://b.zmtcdn.com/data/pictures/4/19579074/c7369c6fa169196fd23b2ee197c5be9e_o2_featured_v2.jpg",
            time: "23 min",
            location: "Banaswadi, South Bangalore",
        },
        {
            id: "345555",
            title: "King Punjabi",
            category: ["Paratha", "North Indian"],
            rating: "3.9",
            items: [
                {
                    id: "234231",
                    title: "Plain Paratha with Dhal",
                    rating: "3.2",
                    price: "108",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f52/6ae7a6bb2405746b6e6473aa409adf52.jpg?fit=around|130:130&crop=130:130;*,*",
                    description: "Plain Paratha+Dal+Paneer Sabji+Salad+Raita",
                },
                {
                    id: "423245",
                    title: "Aloo onion paratha",
                    rating: "4.0",
                    price: "45",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/c5e/1ff5350cfb9aa78553745ea6c3194c5e.jpg?fit=around|130:130&crop=130:130;*,*",
                    description: "3 Plain Paratha+Chicken Curry+Salad+Raita",
                },
            ],
            price: "150",
            imgUrl:
                "https://b.zmtcdn.com/data/dish_photos/f52/6ae7a6bb2405746b6e6473aa409adf52.jpg",
            time: "31 mins",
            location: "Banaswadi, South Bangalore",
        },
        {
            id: "100011",
            title: "Hot Dum Biriyani",
            category: ["Biriyani", "North Indian"],
            rating: "2.8",
            items: [
                {
                    id: "11125",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
            ],
            price: "300",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/4/19956314/1a49b55dc1f6734bf1fb5885aaafe183_o2_featured_v2.jpg",
            time: "42 min",
            location: "Bellandur, South Bangalore",
        },
        {
            id: "100008",
            title: "Desi Biriyani Cafe",
            category: ["Biriyani"],
            rating: "3.1",
            items: [
                {
                    id: "11133",
                    title: "Mutton Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/7d8/39133ab66366767803f4477c35b097d8.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Salts signature, slow-cooked layered aromatic Basmati rice with meat, sealed in a pastry",
                },
                {
                    id: "11143",
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
                "https://b.zmtcdn.com/data/pictures/6/20042786/bed945951c81d831087e2953ccf6ba06_o2_featured_v2.jpg",
            time: "44 min",
            location: "Bolare, South Bangalore",
        },
        {
            id: "100016",
            title: "Onesta",
            category: ["Pizza", "Pasta", "Sandwich", "Deserts"],
            rating: "3.6",
            items: [
                {
                    id: "1233423",
                    title: "Classic Margherita Pizza",
                    rating: "3.5",
                    price: "149",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/5f9/d899da1f55fb23d62a3160d2d66a05f9.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "The classic Margherita pizza topped with a Mediterranean flavoured tomato sauce ",
                },
                {
                    id: "123123",
                    title: "Farmhouse Pizza",
                    rating: "2.5",
                    price: "219",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/ba7/f9c97b9e031a3d82c3035e871d54eba7.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "The classic veggie favourite loaded with fresh vegetables, tomato sauce to deliver",
                },
            ],
            price: "200",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/chains/0/59840/81a13f2fb07ceb539a66bd2a0fa19cc5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            time: "29 mins",
            location: "Bolare, South Bangalore",
        },
        {
            id: "100003",
            title: "Biriyani @99 only",
            category: ["Biriyani"],
            rating: "0",
            items: [
                {
                    id: "11121",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
                {
                    id: "11141",
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
                "https://b.zmtcdn.com/data/pictures/8/20482958/baddd1d8ca3b839223be038a7a0e8f69_o2_featured_v2.jpg",
            time: "32 min",
            location: "Bolare, South Bangalore",
        },
        {
            id: "100005",
            title: "Halli Jonne Biriyani",
            category: ["Biriyani", "North Indian"],
            rating: "4.2",
            items: [
                {
                    id: "11131",
                    title: "Mutton Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/7d8/39133ab66366767803f4477c35b097d8.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Salts signature, slow-cooked layered aromatic Basmati rice with meat, sealed in a pastry",
                },
                {
                    id: "11142",
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
                "https://b.zmtcdn.com/data/pictures/1/18290051/43d57da6a2a3ecd149edc573390e14f3_o2_featured_v2.png",
            time: "30 min",
            location: "Banaswadi, South Bangalore",
        },
        {
            id: "100009",
            title: "Malabar Dum Biriyani",
            category: ["Biriyani"],
            rating: "2.0",
            items: [
                {
                    id: "11124",
                    title: "Dum ki Biriyani",
                    rating: "3.4",
                    price: "565",
                    imgUrl:
                        "https://b.zmtcdn.com/data/dish_photos/f42/90810b2004b0f91a6302eaa2774a3f42.jpg?fit=around|130:130&crop=130:130;*,*",
                    description:
                        "Dum cooked, Aromatic Basmati Rice with boneless chicken, flavoured with crispy onions",
                },
            ],
            price: "300",
            imgUrl:
                "https://b.zmtcdn.com/data/pictures/7/20052007/bf640a7132b03019f24aefeb4f0a51a9_o2_featured_v2.jpg",
            time: "42 min",
            location: "Bolare, South Bangalore",
        },


    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

