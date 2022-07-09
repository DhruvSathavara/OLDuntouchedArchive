import React from "react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

function BookDetail() {
    const [review, setReview] = useState('');

    const reviewEvent = (e) => {
        setReview(e.target.value)
    }
    console.log(review);
    function onAddClick(e) {
        e.preventDefault();
        console.log('review ok');

        addReview();
        storeFiles();
    }

    const { Moralis } = useMoralis();
    const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
    const client = new Web3Storage({ token: API_Token })

    const untouchedReview = Moralis.Object.extend("UntouchedArchieve");
    const reviewUntouched = new untouchedReview();

    function addReview() {
        const blob = new Blob(
            [
                JSON.stringify(review)
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "data.json"),
        ];
        console.log(files);
        
        return files;
      
    }
    function addli(){
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(review));
        ul.appendChild(li);
    }

    async function storeFiles() {
        let files = addReview()
        console.log(files);
        addli();
        const cid = await client.put(files);
        reviewUntouched.set("CID", cid);
        reviewUntouched.save();
        console.log("review added successfully", cid);
        setReview('');
        return cid;
       
    }



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
    
                    <div className=" col-12 contribute-title">
                        <h5>Contribute token or coin to the creator</h5>
                    </div>
                    <div className=" col-12 contributer-class">
                        <button className=" offset-5 button-contribute">Contribute</button>
                    </div>
                    <div className="under-line col-12"></div>
                    <div className=" col-12">
                        <div className="col-12 review-title">
                            <h4>Add Your Review</h4>
                        </div>
                        <div className="row review-section">
                            <div className=" review-box col-4">
                                <textarea value={review} onChange={reviewEvent} placeholder="Add a review" name="field5" className="col-12 review-field"></textarea>
                            </div>
                            <div className="col-2">
                                <button onClick={onAddClick} className="btn btn-primary add-review-btn">Add</button>
                            </div>
                        </div>
                        <div className="col-4 review-list">
                            {/* <h4>Add Your Review</h4> */}
                            <ul id="ul"></ul>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    )

}


export default BookDetail