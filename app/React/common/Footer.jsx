import React from 'react';

var date = new Date();
const year = date.getFullYear();

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.email = props.email
        this.api = props.api
    }

    render() {

        return (
            <>
                <div id='scroll_to_top' className='opacity'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                    </svg>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href='https://www.php.net/manual/fr/index.php' target='_blank'>
                                <img src='/dimension/media/img/logos/php.png' alt='logo PHP' />
                            </a>
                        </li>
                        <li>
                            <a href='https://fr.reactjs.org/' target='_blank'>
                                <img src='/dimension/media/img/logos/react.png' alt='logo React' />
                            </a>
                        </li>
                        <li>
                            <a href='https://webpack.js.org/' target='_blank'>
                                <img src='/dimension/media/img/logos/webpack.png' alt='logo webpack' />
                            </a>
                        </li>
                        <li>
                            <a href='https://nodejs.org/en/' target='_blank'>
                                <img src='/dimension/media/img/logos/node.png' alt='logo Node.js' />
                            </a>
                        </li>
                        <li>
                            <a href='https://reactnative.dev/' target='_blank'>
                                <img src='/dimension/media/img/logos/native.png' alt='logo React Native' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.docker.com/' target='_blank'>
                                <img src='/dimension/media/img/logos/docker.png' alt='logo Docker' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href={`mailto:${this.email}`} target='_blank'>Quantical Solutions | &copy; 2017 - {year}</a>
                </div>
            </>
        )
    }
}