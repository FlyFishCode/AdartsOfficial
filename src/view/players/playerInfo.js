import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PaperClipOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import { playerInfoHttp } from '@/api';

import NoData from '@/common/components/noData.js'

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1994758_cbx0r9x7c16.js',
});

const PlayerInfo = () => {
  const parmas = useLocation();
  const { t } = useTranslation();
  const [playerInfo, setPlayerInfo] = useState({
    picture: '[]',
    dartImg: '[]',
    goods: '[]',
    achievement: '[]',
  });
  const getPlayerInfo = (id) => {
    playerInfoHttp({ playerId: id }).then(res => {
      setPlayerInfo(res.data.data)
    })
  }
  const handleIconClick = (value) => {
    window.open(value, '_blank')
  }
  useEffect(() => {
    getPlayerInfo(parmas.state.id)
  }, [parmas])
  return (
    <div className='containerBox'>
      <div className='playerName'>
        {playerInfo.name}
        {playerInfo.facebookLink ? <div className='playerIconBox' onClick={() => handleIconClick(playerInfo.facebookLink)}><MyIcon type="el-icon-icon-facebook" /></div> : null}
        {playerInfo.twitterLink ? <div className='playerIconBox' onClick={() => handleIconClick(playerInfo.twitterLink)}><MyIcon type="el-icon-hoveraax" /></div> : null}
        {playerInfo.otherLink ? <div className='playerIconBox' onClick={() => handleIconClick(playerInfo.otherLink)}><PaperClipOutlined /></div> : null}
      </div>
      <div className='playerImgBox'>{JSON.parse(playerInfo.picture).map(i => {
        return (
          <div className='playerImg' key={i.uid}>
            <img src={i.url} alt="" />
          </div>
        )
      })}
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(140)}</div>
        <div className='dartsBox'><img src={JSON.parse(playerInfo.dartImg)[0] ? JSON.parse(playerInfo.dartImg)[0].url : ''} alt="" /></div>
        <div className='datrtsTitleBox dartsTitleStyle'>
          <div>TIP</div>
          <div>BARREL</div>
          <div>SHAFT</div>
          <div>FLIGHT</div>
        </div>
        <div className='datrtsTitleBox dartsContentStyle'>
          <div>{playerInfo.dartTip}</div>
          <div>{playerInfo.dartBarrel}</div>
          <div>{playerInfo.dartShaft}</div>
          <div>{playerInfo.dartFlight}</div>
        </div>
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(141)}</div>
        <div className='playerContentInfoBox'>
          {playerInfo.achievement ? JSON.parse(playerInfo.achievement).map(i => {
            return (
              <div key={i.id} className='contentBox'>
                <div>{i.label}</div>
                <div>{i.content}</div>
              </div>
            )
          }) : <NoData />}
        </div>
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(142)}</div>
        <div className='playerInfo'>
          <video src={playerInfo.videoUrl} controls></video>
        </div>
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(143)}</div>
        <div className='playerProductBox'>
          {JSON.parse(playerInfo.goods).map(i => {
            return (
              <div key={i.uid}><img src={i.url} alt="" /></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default PlayerInfo;