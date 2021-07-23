import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import a from '@/assets/img/a.jpg';
import NoData from '@/common/components/noData.js'

const PlayerInfo = () => {
  const parmas = useLocation();
  const { t } = useTranslation();
  const [playerMatchList, setPlayerMatchList] = useState([]);
  const [playerObj, setPlayerObj] = useState({ playerName: '', herfList: [], playerImg: [], productImgList: [] });
  const getPlayerMatchList = () => {
    setPlayerMatchList([]);
  }
  useEffect(() => {
    getPlayerMatchList()
  }, [])
  useEffect(() => {
    console.log(parmas?.state?.id);
    setPlayerObj({
      playerName: 'ZHANG SAN',
      herfList: [
        { id: 1, herfIcon: a, herf: 'www.baidu.com' },
        { id: 2, herfIcon: a, herf: 'www.baidu.com' },
      ],
      playerImg: [
        { id: 1, img: a },
        { id: 2, img: a },
        { id: 3, img: a },
        { id: 4, img: a },
        { id: 5, img: a },
        { id: 6, img: a },
        { id: 7, img: a }
      ],
      matchResult: [
        { id: 1, year: 2021, },
        { id: 2, year: 2020, }
      ],
      productImgList: [
        { id: 1, img: a },
        { id: 2, img: a },
        { id: 3, img: a },
        { id: 4, img: a },
        { id: 5, img: a }
      ]
    })
  }, [parmas])
  return (
    <div>
      <div className='playerName'>
        {playerObj.playerName}
        {playerObj.herfList.map(i => {
          return (
            <div className='playerIconBox' key={i.id}><img src={i.herfIcon} alt="" /></div>
          )
        })}
      </div>
      <div className='playerImgBox'>{playerObj.playerImg.map(i => {
        return (
          <div className='playerImg' key={i.id}>
            <img src={i.img} alt="" />
          </div>
        )
      })}
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(140)}</div>
        <div className='dartsBox'><img src={a} alt="" /></div>
        <div className='datrtsTitleBox dartsTitleStyle'>
          <div>TIP</div>
          <div>BARREL</div>
          <div>SHAFT</div>
          <div>FLIGHT</div>
        </div>
        <div className='datrtsTitleBox dartsContentStyle'>
          <div>aaa</div>
          <div>ccc</div>
          <div>vvv</div>
          <div>bbb</div>
        </div>
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(141)}</div>
        {playerMatchList.length ? playerMatchList.map((i, index) => {
          return (
            <div key={index}></div>
          )
        }) : <NoData />}
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(142)}</div>
        <div className='playerInfo'>
          <video src='http://static.adarts-cn.com/static/bulletin/advert/20191227/advert_2.mp4' controls></video>
        </div>
      </div>
      <div className='RowBox'>
        <div className='playerName'>{t(143)}</div>
        <div className='playerProductBox'>
          {playerObj.productImgList.map(i => {
            return (
              <div key={i.id}><img src={i.img} alt="" /></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default PlayerInfo;