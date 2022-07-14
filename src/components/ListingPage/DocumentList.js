import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { BookContext } from '../../Context/BookContext';
import axios from "axios";

function BookList() {

    const bookContext = React.useContext(BookContext);
    const { data, fetch } = bookContext;
    console.log(data, "list");

    const [bookData,setBookData]=useState([]);

    var array = [];
    async function ListBookData(){
        for (var i = 0; i < data.length; i++){
          await  axios.get( `https://${data[i].attributes.CID}.ipfs.infura-ipfs.io/data.json`).then((response) =>{
            array.push(response.data);
          });
        }
        setBookData(array);
    }

    useEffect(() =>{
        ListBookData();
    },[data])
    // useEffect(() =>{
    //     fetch();
    // },[])


    console.log(bookData,'newwwwwww');

    return (
        <>

            <div style={{ backgroundColor: "bisque" }} className="row container-fluid">
                <div className="section-title">
                    <h4>Related posts</h4>
                </div>
                <div className="main-div row container-fluid">

                    {
                        bookData && bookData.map((e) => {
                            if(e.category == "Newspaper"){
                          return   (
                            <div className="card col-3 offset-1">
                            <div className="row">
                                <img className="book-images" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F235986%2Fpexels-photo-235986.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-235986.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbackground%2520image%2F&tbnid=mpJpsUCpFwmlgM&vet=12ahUKEwjupvaI3vf4AhVKi9gFHQ5AA-sQMygoegUIARCxAg..i&docid=0aKRK2RZxWjguM&w=4000&h=6000&q=images&ved=2ahUKEwjupvaI3vf4AhVKi9gFHQ5AA-sQMygoegUIARCxAg"></img>
                            </div>
                            <div className="row clickable-chips">
                                <div className="offset-1 clo-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                </div>
                                <div className="offset-1 col-4"><Chip label={e.subject} component="a" href="#chip" clickable />
                                </div>
                            </div>
                            <div className="book-title">
                                <h5>{ e.name}</h5>
                            </div>
                            <div className="postedon">
                                <p className="posted-date"><strong>Posted On: </strong>{ new Date().toLocaleString()}</p>
                            </div>
                            <div className="some-text">
                                <p className="some-textofbook">{e.description}</p>
                            </div>
                            <div className=" readmore-book">
                                <Link to='/documents-detail'>
                                    <button className="readmore-btn">Read more</button>
                                </Link>                        </div>
                        </div>
                          )}
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default BookList;