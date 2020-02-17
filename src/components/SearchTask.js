import React,{useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default function SeatchTask(){
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen(prevState => !prevState);
        return(
            <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem className="dropdown-item" href="#">Name ASC</DropdownItem>
                      <DropdownItem className="dropdown-item" href="#">Name DESC</DropdownItem>
                      <div className="dropdown-divider"></div>
                      <DropdownItem className="dropdown-item" href="#">Level ASC</DropdownItem>
                      <DropdownItem className="dropdown-item" href="#">Level DESC</DropdownItem>
                    </DropdownMenu>
                    <span className="badge badge-success badge-medium">NAME - DESC</span>
                  </Dropdown>
                </div>
              </div>
              <div className="col-12">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-append">
                    <button className="btn btn-info" type="button">Clear!</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
    }