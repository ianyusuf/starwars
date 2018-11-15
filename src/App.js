import React, { Component, Fragment } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Artist from './pages/Artist'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './config/store'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gigs: [],
            artist: [],
        }
    }

    render() {
    const { gigs, artist } = this.state

        return (
            <Provider store={myStore}>
                <BrowserRouter>
                    <Fragment>
                        <NavBar />
                        <div>
                            <Route exact path="/" render={() => (
                                <Home gigs={gigs} artist={artist} />
                            )} />
                            <Route exact path="/about" component={About} />{/*  */}
                            <Route path="/artist/:id" component={Artist}/>
                        </div>
                        <Footer />
                    </Fragment>
                </BrowserRouter>         
            </Provider>
        );
    }
}

export default App;