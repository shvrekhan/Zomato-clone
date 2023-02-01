import React from "react";
import CardHotelCategory from "../../Components/CardHotelCategory/CardHotelCategory";
import Collections from "../../Components/Collections/Collections";
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

            <div className="collections container">
                <h2 className="collection-heading">Collections</h2>
                <div className="d-flex justify-content-between collection-info-content">
                    <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</span>
                    <span className="right-info-collections">All collections in Bengaluru <i class="fa-solid fa-caret-right"></i></span>

                </div>
                <Collections />
            </div>

            <div className="popular-localities container mt-5">
                <p className="localities-heading">Popular localities in and around Bengaluru</p>

                <div class=" col-md-4 col-sm-6 col-xs-12 w-60 my-3 mx-2 border p-3">
                    <h4 class="lead cut-text">Marathalli</h4>
                    <span class="lead">444 places</span>
                </div>
            </div>

        </>
        )
    }
}

export default Home;