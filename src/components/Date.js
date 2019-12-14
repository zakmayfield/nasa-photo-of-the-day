import React, {useState} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Date = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="sub-date-container">
      <p>{props.date}</p>

      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        Select A Year
        </DropdownToggle>
        <DropdownMenu>
          <div onClick={ props.setWhichDate.bind(null, props.getDateXYearsAgo()) }>
            <DropdownItem>Today</DropdownItem>
          </div>
          <div onClick={ props.setWhichDate.bind(null, props.getDateXYearsAgo(1)) }>
            <DropdownItem>1 Year Ago</DropdownItem>
          </div>
          <div onClick={ props.setWhichDate.bind(null, props.getDateXYearsAgo(2))}>
            <DropdownItem>2 Years Ago</DropdownItem>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Date




