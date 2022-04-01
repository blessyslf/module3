import React from "react"
import PropTypes from "prop-types"
import AFavouritebuttontrack from './AFavouritebuttontrack'
import ARateStars from './ARateStars'
import ATextTrackblock from './ATextTrackblock'
import Alinetrack from './Alinetrack'
class MTrack extends React.Component {
  render () {
    return (
      <div>
        <p className="catiddd">{this.props.track.category_id}</p>
        <h1 className="trackname">{this.props.track.name}</h1>
        <h1 className="trackktitle">{this.props.track.title}</h1>
        <p className="lessontextttt" dangerouslySetInnerHTML={{__html: this.props.track.content}} />
          <img src={this.props.track.image.url} className="trackimg"/>

<AFavouritebuttontrack/>
<ARateStars/>

<div className="tracklesname">
<ATextTrackblock textt={"список уроков"}/>
    </div>

<div className="Alinetrack">
    <Alinetrack/>
</div>
<div className="Alinetrack1">
    <Alinetrack/>
</div>

<div className="Alinetrack2">
    <Alinetrack/>
</div>

<div className="Alinetrack3">
    <Alinetrack/>
</div>

<div className="Alinetrack4">
    <Alinetrack/>
</div>

<div className="Alinetrack5">
    <Alinetrack/>
</div>

<div className="Alinetrack6">
    <Alinetrack/>
</div>

<div className="Alinetrack7">
    <Alinetrack/>
</div>

<div className="Alinetrack8">
    <Alinetrack/>
</div>

<div className="Alinetrack9">
    <Alinetrack/>
</div>

<div className="Alinetrack10">
    <Alinetrack/>
</div>

<div className="Alinetrack11">
    <Alinetrack/>
</div>

<div className="ur1">
<ATextTrackblock textt={"1 урок. Правильное положение"}/>
</div>
  <div className="ur2">
<ATextTrackblock textt={"2 урок. Что делать с руками"}/>
</div>
  <div className="ur3">
<ATextTrackblock textt={"3 урок. Работа ног и коленей"}/>
  </div>
    <div className="ur4">
<ATextTrackblock textt={"4 урок. Три базовых кача"}/>
        </div>
        <div className="ur5">
        <ATextTrackblock textt={"5 урок. Изучаем tone wope"}/>
        </div>
          <div className="ur6">
        <ATextTrackblock textt={"6 урок. Изучаем bk bounce"}/>
        </div>
          <div className="ur7">
        <ATextTrackblock textt={"7 урок. Изучаем kriss kross"}/>
          </div>
            <div className="ur8">
        <ATextTrackblock textt={"8 урок. Изучаем sham rock"}/>
                </div>
                <div className="ur9">
              <ATextTrackblock textt={"9 урок. Изучаем up town"}/>
              </div>
                <div className="ur10">
              <ATextTrackblock textt={"10 урок. Изучаем doggie"}/>
                </div>
                  <div className="ur11">
              <ATextTrackblock textt={"11 урок. Учимся соединять связки"}/>
                      </div>
                      <div className="ur12">
                  <ATextTrackblock textt={"12 урок. Фристайл с выученными элементами"}/>
                          </div>





          <div className="Menuline2">

            </div>
      </div>

    );
  }
}

export default MTrack
