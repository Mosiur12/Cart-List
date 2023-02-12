import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ShoppingList = () => {
    const [myData, setMyData] = useState();
    useEffect(() => {
        axios.get ("https://jsonplaceholder.typicode.com/users")
        .then ( res => setMyData(res.data));
        // .then (res => console.log(res.data))

    },[]);
    // return (
    //             {
    //                 myData && myData.map((item)=> 
    //                 {
    //                     return (<div className='my-5'>
    //                     <div className="card w-25 h-100"><div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    //               </div>
    //               </div>
    //               </div>
    //               )
    //                 }
    //             )
    //             }
    //           {/* <img src={} className="card-img-top" alt="..."> */}
              
    //         {/* <Card.Img fluid={res.data.image} alt="Card image" /> */}
              
    //      </div>

            
    //         <h1>jdf</h1>
    //     </div>
    // );
};

export default ShoppingList;