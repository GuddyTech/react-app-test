import React from 'react';
import Card from './card';

const user = {
    name: "Guddy",
    imageUrl: "https://www.pexels.com/photo/wooden-window-of-a-house-13023407/",
    imageSize: 90
};



const Contact = () => {
    return (
        <div>
            <h1> My Contacts</h1>
            <Card names="Anthony" url="www.anthony.com" contact="+234818288383838" img='https://www.pexels.com/photo/a-woman-looking-out-the-window-8619615/' />
            <Card names="Guddy" url="www.anthony.com" contact="+23483457345638" img='https://www.pexels.com/photo/wooden-window-of-a-house-13023407/' />
            <Card names="Edward" url="www.edward.com" contact="+2342342342342" img="https://www.pexels.com/photo/silhouette-of-a-person-walking-on-the-beach-143Another 13933/" />
            <h2>Another Header</h2>
            <div>
                <h3>{user.name}</h3>
                <img src={user.imageUrl} alt="" width={user.imageSize}/>
            </div>

        </div>
    )
}

export default Contact;