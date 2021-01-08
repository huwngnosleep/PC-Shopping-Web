import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Row } from 'reactstrap';

export default Filter = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Filter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
              <Button onClick={props.categoriesClick} type="button" value="pc">PC</Button> 
              <Button onClick={props.categoriesClick} type="button" value="laptop">Laptop</Button>
              <Button onClick={props.categoriesClick} type="button" value="screen">PC Screen</Button>
              <Button onClick={props.categoriesClick} type="button" value="accessory">Accessory</Button>
              <Button onClick={props.categoriesClick} type="button" value="gear">Gear</Button>
              <Button onClick={props.categoriesClick} type="button" value="smart watch">Smart Watch</Button>
          </DropdownItem>
          <DropdownItem>
              <Button onClick={props.productorClick} type="button" value="Asus">Asus</Button>
              <Button onClick={props.productorClick} type="button" value="Lenovo">Lenovo</Button>
              <Button onClick={props.productorClick} type="button" value="Acer">Acer</Button>
              <Button onClick={props.productorClick} type="button" value="MSI">MSI</Button>
              <Button onClick={props.productorClick} type="button" value="HP">HP</Button>
              <Button onClick={props.productorClick} type="button" value="Intel">Intel</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    
  );
}