//profile.jsx
import React from 'react';

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.logged = props.logged
        this.description = props.description
    }

    render() {

        return (
            <>
                <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12'>
                    <h2 className='firstSectionH2 end'>What QUANTIC is</h2>
                </div>
                <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12'>
                    {this.logged &&
                    <p className='paraPrez'>{this.description}</p>
                    }
                    <a id='githubBtn' href='https://github.com/Quantical-Solutions/Quantic' target='_blank'>
                        <img src='/dimension/media/img/github.png' alt='Github logo' />
                    </a>
                </div>
            </>
        )
    }
}