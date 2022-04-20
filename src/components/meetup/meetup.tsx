import React from "react";
import { Meetup } from "../../store/meetup";

import './meetup.css'

const MeetupComponent = (props: Meetup) => {
    const { title, address, image, description } = props;

    return (
        <div className="m-meetup">
            <img className="a-meetup-image" alt={`${title}`} src={image} style={{width:"100%", display: "block"}}/>
            <div className="m-meetup-details">
                <div>title: {title}</div>
                <div>address: {address}</div>
                {/* <div>image: {image}</div> */}
                <div>description: {description}</div>
            </div>
        </div>
    )
}

export default MeetupComponent