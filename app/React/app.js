import React from 'react';
import { render } from 'react-dom';
import { asyncComponent } from 'react-async-component';
//import Home from './pages/Home.jsx';
import HeaderComponent from './common/Header.jsx';
//import FooterComponent from './common/Footer.jsx';

/** We are importing our index.php my app Vairiable */
//import myApp from 'myApp';

//const { description, email, logged, charts, owl, fullcalendar, docker } = myApp;

class Header extends React.Component {
    render() {

        return (
            <HeaderComponent />
        )
    }
}

/*class Main extends React.Component {
    render() {

        return (
            <Home
                logged={logged}
                description={description}
                charts={charts}
                owl={owl}
                fullcalendar={fullcalendar}
                docker={docker}
            />
        )
    }
}*/

/*class Footer extends React.Component {
    render() {

        return (
            <FooterComponent
                email= {email}
                api= {__API_HOST__}
            />
        )
    }
}*/

if (document.querySelector('#header')) {
    render(<Header/>, document.querySelector('#header'));
}
/*if (document.querySelector('main')) {
    render(<Main/>, document.querySelector('main'));
}
if (document.querySelector('footer')) {
    render(<Footer/>, document.querySelector('footer'));
}*/
