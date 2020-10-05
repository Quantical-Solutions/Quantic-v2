import React from 'react';
import Chart from '../components/Chart.jsx';
import Hammer from 'hammerjs';
import touchEmulator from 'hammer-touchemulator';
import Carousel from '../components/Carousel.jsx';
import Presentation from '../components/Presentation.jsx';
import Calendar from '../components/Calendar.jsx';
import Docker from '../components/Docker.jsx';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.logged = props.logged
        this.description = props.description
        this.charts = props.charts
        this.owl = props.owl
        this.fullcalendar = props.fullcalendar
        this.docker = props.docker
    }

    render() {
        return (
            <>
                <section id='presentation' className='row'>
                    <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12 marginBottom'>
                        <div className='space-sides wrap'>
                            <Presentation
                                description= {this.description}
                                logged= {this.logged}
                            />
                        </div>
                    </div>
                </section>
                <section id='chart' className='row'>
                    <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12'>
                        <div className='space-sides column'>
                            <h2 className='sectionH2'>Charts</h2>
                            <p className='paraPrez'>{this.charts}</p>
                        </div>
                    </div>
                    <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12'>
                        <div className='space-sides'>
                            <Chart/>
                        </div>
                    </div>
                </section>
                <section id='carousel' className='row'>
                    <div className='xLarge-6 large-6 medium-6 small-12 xSmall-12'>
                        <div className='space-sides'>
                            <Carousel />
                        </div>
                    </div>
                    <div className='xLarge-6 large-6 medium-6 small-12 xSmall-12'>
                        <div className='space-sides column'>
                            <h2 className='sectionH2'>Owl-Carousel v2</h2>
                            <p className='paraPrez'>{this.owl}</p>
                        </div>
                    </div>
                </section>
                <section id='calendar' className='row'>
                    <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12'>
                        <div className='space-sides column'>
                            <h2 className='sectionH2'>Fullcalendar</h2>
                            <p className='paraPrez'>{this.fullcalendar}</p>
                        </div>
                    </div>
                    <div className='xLarge-12 large-12 medium-12 small-12 xSmall-12 marginBottom'>
                        <div className='space-sides'>
                            <Calendar />
                        </div>
                    </div>
                </section>
                <section id='docker' className='row stretch'>
                    <div className='xLarge-6 large-6 medium-6 small-12 xSmall-12'>
                        <div className='space-sides' id='dockerLeft' style={{ backgroundImage: 'url("/dimension/media/img/dockerBG.png")' }}>
                            <Docker />
                        </div>
                    </div>
                    <div className='xLarge-6 large-6 medium-6 small-12 xSmall-12'>
                        <div className='space-sides column'>
                            <h2 className='sectionH2'>Docker</h2>
                            <p className='paraPrez'>{this.docker}</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}