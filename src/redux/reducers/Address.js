const initialState = {
    address: {
        YourName: "shiva",
        AddressLine1: "91 SpringBoard",
        AddressLine2: "Kormangala 7th ,Block",
        City: "Bengaluru",
        State: "Karnataka",
        Zip: 560103,
        Country: "India",
        Telephone: "9999999999",

    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
