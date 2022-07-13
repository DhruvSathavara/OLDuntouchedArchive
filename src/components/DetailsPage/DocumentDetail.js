import React from "react";
import ModalContribute from "../Contribute/Contribute";


function DocumentDetail() {


    return (
        <div className="container-fluid row">
            <div className="col-12 book-details-tag">
                <h3>Book Details</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-4 particular-book-img">
                        <img src="https://primehostingindia.com/templatemonster/react/bookbay/assets/img/blog/4.jpg"></img>
                    </div>
                    <div className="col-4">
                        <p className="particular-book-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.    </p>
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
                        <ModalContribute></ModalContribute>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default DocumentDetail