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
import AMenuback from './AMenuback'

class MMenu extends React.Component {
  render () {
    return (
      <div>
      <AMenuback/>
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
      <a href="/posts"><ATextblock text={"уроки"}/></a>
      </div>
          <div className="Menu2">
        <a href="/tracks"><ATextblock text={"курсы"}/></a>
        </div>
          <div className="Menu3">
          <a href="/groups"><ATextblock text={"закрытые группы"}/></a>
          </div>
            <div className="Menu4">
            <a href="/playlists"> <ATextblock text={"плейлисты"}/></a>
                </div>
                  <div className="Menuline2">
                    <AMainline/>
                    </div>
      </div>
    );
  }
}

export default MMenu
