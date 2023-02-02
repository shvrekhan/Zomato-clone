import React from "react";
import { connect, Connect } from "react-redux";
import { Link } from "react-router-dom";
import CardHotelCategory from "../../Components/CardHotelCategory/CardHotelCategory";
import Collections from "../../Components/Collections/Collections";
import Header from "../../Components/Header/Header";
import "./Home.css"

class Home extends React.Component {
    render() {
        return (<>
            {console.log(this.props.Collections)}
            <Header />
            <div className="hotel-category container d-flex flex-wrap justify-content-between mt-4">
                {this.props.list.map((current) => {
                    return (<Link to={current.route}>
                        < CardHotelCategory
                            key={current.id}
                            img={current.img}
                            heading={current.heading}
                            subHead={current.subHead}
                        />
                    </Link>
                    )

                })}

            </div>

            <div className="collections container d-flex flex-column">
                <h2 className="collection-heading">Collections</h2>
                <div className="d-flex justify-content-between collection-info-content">
                    <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</span>
                    <span className="right-info-collections">All collections in Bengaluru <i class="fa-solid fa-caret-right"></i></span>

                </div>
                <div className="d-flex flex-wrap">
                    {this.props.Collections.map((current) => {

                        return (<Collections
                            key={current.id} />)
                    })}</div>
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

const mapStoreToProps = (stateInStore) => {
    // console.log(stateInStore);
    return {
        list: stateInStore.hotelCategory.hotelCategory,
        Collections: stateInStore.collections.collections

    }
}

export default connect(mapStoreToProps, {})(Home);