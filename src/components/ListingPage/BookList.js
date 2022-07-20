import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { BookContext } from '../../Context/BookContext';
import axios from "axios";

function BookList() {

    const bookContext = React.useContext(BookContext);
    const { data } = bookContext;
console.log(data,'data');

    useEffect(() => {
        const bList = JSON.parse(JSON.stringify(data));
        console.log(bList,'bList data');
        if (bList) {
            ListBookData(bList)
        }
    }, [data])


    const [bookData, setBookData] = useState([]);


    async function ListBookData(bList) {
        var array = [];
        if (bList) {
            for (let index = 0; index < bList.length; index++) {
                const element = bList[index];
                console.log(element, "book element");
                if (element.CID) {
                    await axios.get(`https://${element.CID}.ipfs.infura-ipfs.io/data.json`).then((response) => {
                        console.log(response, "response");
                        const id = element.objectId;
                        var newData = { ...response.data, id };
                        array.push(newData);
                    });
                }

            }
        }
        setBookData(array);
    }

    console.log(bookData, 'newwwwwww');

    return (
        <>

            <div style={{ backgroundColor: "bisque" }} className="row container-fluid">
                <div className="section-title">
                    <h4>Related posts</h4>
                </div>
                <div className="main-div row container-fluid">

                    {
                        bookData && bookData.map((e) => {
                            { console.log(e, e.objectId) }
                            if (e.category == "Book") {
                                return (
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
                                            <h5>{e.name}</h5>
                                        </div>
                                        <div className="postedon">
                                            <p className="posted-date"><strong>Posted On: </strong>{new Date().toLocaleString()}</p>
                                        </div>
                                        <div className="some-text">
                                            <p className="some-textofbook">{e.description}</p>
                                        </div>
                                        <div className=" readmore-book">
                                            <Link to={`/book-detail/${e.id}`}>
                                                <button className="readmore-btn">Read more</button>
                                            </Link>                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default BookList;