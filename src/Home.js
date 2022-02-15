import React from 'react';
import Product from './Product';
import './Home.css';
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="imagess/bannerimgg.jpg" alt=""/>
        {/* <h1>I am the home page</h1> */}

        {/* Product id,title,price,rating,image */}
        <div className="home__row">
        <Product 
        id="12321143" 
        title="The Lean Startup: How Constant Innovation Creates Radically Successful"
        price={646}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
        />
        <Product 
        id="49538094" 
        title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
        price={4290}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
        />
        </div>
        <div className="home__row">
        <Product 
        id="4903850" 
        title="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Black/Carbon, One Size (S & L Bands Included) (Black/Carbon)"
        price={13499}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product 
        id="23445930" 
        title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)"
        price={5499}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61VMT8H7RvL._SL1000_.jpg"
        />
        <Product 
        id="3254354345" 
        title="2020 Apple iPad Pro with A12Z Bionic chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
        price={71900}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SL1500_.jpg"
        />
        </div>
        <div className="home__row">
        <Product 
        id="90829332" 
        title="Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports - LC27T550FDWXXL"
        price={20900}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/91%2BfneWO62L._SL1500_.jpg"
        />   
        </div>
        {/* Product */}
        </div>
    )
}

export default Home
