import React from 'react'

function Home(props) {
    let starsnum= [];
    for(let i = 0; i <props.stars; i++){
        starsnum.push(<ion-icon name="star"></ion-icon>)
    }
    return (
        <div id="imgContainer">
            
            <img src={props.img} alt="Mount Fuji" id="picture"/>
            <div>
                {starsnum}
            </div>
                
            <p className="picPara">{props.comment}</p>
            <div id="avatarContainer">
                <div id="avatar">
                    <img src={props.ava} alt="jack" className="avatarpic"/>
                </div>
                <div id="profile">
                    <h4>{props.name}</h4>
                    <p>{props.country}</p>
                </div>
            </div>
            
            
        </div>
    )
}
export default Home;