import {Component} from 'react'

class SalaryData extends Component {
  render() {
    const {item, filterSalary} = this.props

    const onChangeSalary = () => {
      filterSalary(item.salaryRangeId)
    }
    return (
      <>
        <li
          key={item.salaryRangeId}
          className="salary-items"
          onClick={onChangeSalary}
        >
          <input
            type="radio"
            id={item.salaryRangeId}
            name={item.salaryRangeId}
            value={item.salaryRangeId}
          />
          <label htmlFor={item.salaryRangeId} className="salary-label">
            {item.label}
          </label>
        </li>
      </>
    )
  }
}

export default SalaryData
