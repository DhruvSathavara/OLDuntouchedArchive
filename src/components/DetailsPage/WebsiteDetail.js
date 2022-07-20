import React, { useEffect, useState } from "react";
import ModalContribute from "../Contribute/Contribute";
import { BookContext } from '../../Context/BookContext';
import { useParams } from "react-router-dom";
import { useMoralis } from "react-moralis";

function WebsiteDetail() {
    const params = useParams();
    const { isAuthenticated, isInitialized } = useMoralis()

    const bookContext = React.useContext(BookContext);
    const { getBookDetails, bookDetails } = bookContext;

    useEffect(() => {
        getBookDetails(params)
    }, [isAuthenticated, isInitialized])


   console.log(bookDetails.walletAddress); 

    return (
        <div className="container-fluid row">
            <div className="col-12 book-details-tag">
                <h3>{bookDetails.name}</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-4 particular-book-img">
                        <img src="https://primehostingindia.com/templatemonster/react/bookbay/assets/img/blog/4.jpg"></img>
                    </div>
                    <div className="col-4">
                        <p className="particular-book-text" >{bookDetails.description}</p>
                    </div>
                    <div className="col-4 view-and-download-btn">
                        <div className="row view-btn-row">
                            <button className="btn btn-info my-2 viewonline-btn my-sm-0 offset-4" type="submit">View Online</button>
                        </div>
                        <div className="row download-btn-row">
                            <button className="btn btn-danger my-2 download-btn my-sm-0 offset-3" type="submit">Download</button>
                        </div>
                    </div>
    
                     <div className="under-line col-12"></div>
                    <div className="col-12">
                    <ModalContribute walletAddress={bookDetails.walletAddress}></ModalContribute>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default WebsiteDetail