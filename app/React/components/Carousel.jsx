import React from "react";

export default function Carousel() {

    return (
        <div className="owl-carousel owl-theme">
            <div className="item" style={{ backgroundImage: 'url("/dimension/media/img/PHP.jpg")' }}>
                <div>
                    <h3>PHP 7.4</h3>
                    <p>A little something to say about...</p>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: 'url("/dimension/media/img/react.png")' }}>
                <div>
                    <h3>React.js</h3>
                    <p>A little something to say about...</p>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: 'url("/dimension/media/img/webpack.png")' }}>
                <div>
                    <h3>WebPack</h3>
                    <p>A little something to say about...</p>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: 'url("/dimension/media/img/native.png")' }}>
                <div>
                    <h3>React Native</h3>
                    <p>A little something to say about...</p>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: 'url("/dimension/media/img/node.jpg")' }}>
                <div>
                    <h3>Node.js</h3>
                    <p>A little something to say about...</p>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: 'url("/dimension/media/img/docker.jpg")' }}>
                <div>
                    <h3>Docker</h3>
                    <p>A little something to say about...</p>
                </div>
            </div>
        </div>
    )
}