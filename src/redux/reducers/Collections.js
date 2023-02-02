const initialState = {
    collections: [
        {
            id: 1,
            img: "https://b.zmtcdn.com/data/collections/1d1e838de3c921a6bdacb382a3d01c62_1667458986.jpg?output-format=webp",
            subhead: "Newly opened Restaurant"
        },
        {
            id: 2,
            img: "https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665640799.jpg?output-format=webp",
            subhead: "Serene Rooftop Places "
        },
        {
            id: 3,
            img: "https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665565737.jpg?output-format=webp",
            subhead: "10 Trending Restaurant"
        },
        {
            id: 4,
            img: "https://b.zmtcdn.com/data/collections/b90996d69bfe8d8c7e36d3a56893df74_1657000323.jpg?output-format=webp",
            subhead: "12 Romantic Dining Places"
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
