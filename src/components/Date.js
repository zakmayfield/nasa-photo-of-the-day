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
          <DropdownItem>1 Year Ago</DropdownItem>
          <DropdownItem>2 Years Ago</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Date




