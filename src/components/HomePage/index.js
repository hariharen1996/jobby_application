import {Component} from 'react'
import Header from '../Header/index'
import './index.css'

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="content">
            <h1 className="home-heading">Find The Job That Fits Your Life</h1>
            <p className="home-text">
              Millions of people are searching for jobs, salary, information,
              company reviews. Find the job that fits your abilities and
              potential.
            </p>
            <button type="button" className="home-btn">
              Find Jobs
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default HomePage
