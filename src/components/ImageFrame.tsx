import React from "react";
import '../App.css'

const ImageFrame: React.FC = () => {
    return (
        <section className="image-container">
            <figure className="frame-item item-1">
              <img src="pot.svg" alt="Pot with water" />
            </figure>
            <figure className="frame-item item-2">
              <img src="chef.svg" alt="Chef" />
            </figure>
            <figure className="frame-item item-3">
              <img src="eggs.svg" alt="Eggs" />
            </figure>
        </section>
    )
}

export default ImageFrame;