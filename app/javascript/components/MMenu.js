import React from "react"
import PropTypes from "prop-types"
import ATextblock from './ATextblock'
import AMainline from './AMainline'
import AMainclass from './AMainclass'
import AMaincategory from './AMaincategory'
import AMainnews from './AMainnews'
import AMainaccount from './AMainaccount'
import AMainhome from './AMainhome'
import AMainlogo from './AMainlogo'

class MMenu extends React.Component {
  render () {
    return (
      <div>
      <AMainlogo/>
        <AMainhome/>
        <AMainaccount/>
        <AMainnews/>
        <AMaincategory/>
        <AMainclass/>
        <div className="Menuline1">
          <AMainline/>
          </div>
        <div className="Menu">
        <ATextblock text={"уроки"}/>
      </div>
          <div className="Menu2">
        <ATextblock text={"курсы"}/>
        </div>
          <div className="Menu3">
          <ATextblock text={"закрытые группы"}/>
          </div>
            <div className="Menu4">
            <ATextblock text={"плейлисты"}/>
                </div>
                  <div className="Menuline2">
                    <AMainline/>
                    </div>
      </div>
    );
  }
}

export default MMenu
