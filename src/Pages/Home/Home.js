import React from "react";
import CardHotelCategory from "../../Components/CardHotelCategory/CardHotelCategory";
import Header from "../../Components/Header/Header";
import "./Home.css"

class Home extends React.Component {
    render() {
        return (<>
            <Header />
            <div className="hotel-category container d-flex justify-content-between mt-4">
                <CardHotelCategory />
                <CardHotelCategory />

                <CardHotelCategory />

            </div>
        </>
        )
    }
}

export default Home;