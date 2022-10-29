import {Component} from 'react'

class JobsPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="filter-container"></div>
          <div className="jobs-list"></div>
        </div>
      </>
    )
  }
}

export default JobsPage
