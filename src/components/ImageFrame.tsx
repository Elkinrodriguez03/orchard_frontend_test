import React from "react";
import '../App.css'

const ImageFrame: React.FC = () => {
    return (
        <div className="image-container">
            <div className="frame-item item-1">
              <img src="pot.svg" alt="Pot with water" />
            </div>
            <div className="frame-item item-2">
              <img src="chef.svg" alt="Chef" />
            </div>
            <div className="frame-item item-3">
              <img src="eggs.svg" alt="Eggs" />
            </div>
        </div>
    )
}

export default ImageFrame;