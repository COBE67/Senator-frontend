import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const Home = ({match}) => (
    <div>
        <h2>Home</h2>
        <p>Welcome to my Senators page</p>
    </div>
)

const Republicans = ({match}) => (
    <div>
        <h2>Republicans</h2>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Democrats = ({match}) => (
    <div>
        <h2>Democrats</h2>
    </div>
)

const Independents = ({match}) => (
    <div>
        <h2>Independents</h2>
    </div>
)

const ByState = ({match}) => (
    <div>
        <h2>By State</h2>
    </div>
)
const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/republicans">Republicans</Link></li>
                <li><Link to="/democrats">Democrats</Link></li>
                <li><Link to="/independents">Independents</Link></li>
                <li><Link to="/byState">By State</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/republicans" component={Republicans}/>
            <Route path="/democrats" component={Democrats}/>
            <Route path="/independents" component={Independents}/>
            <Route path="/byState" component={ByState}/>
        </div>
    </Router>
)
export default BasicExample