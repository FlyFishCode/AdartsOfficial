
import { useState, useEffect } from 'react'
import { Progress, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { myPageIndexUserCardInfoHttp, myPageIndexGameInfoHttp } from '@/api'
import { createFromIconfontCN } from '@ant-design/icons';
import { MessageOutlined, HomeFilled, UserOutlined, PlusOutlined, BulbOutlined } from '@ant-design/icons'

import m from '@/assets/img/m.png'

const MyPageIndex = (props) => {
  // const { changeCardId } = props;
  const { t } = useTranslation()
  const [card, setCard] = useState({});
  const [ganeInfo, setGaneInfo] = useState(
    {
      adartsRating: 20.73,
      leagueRating: 45.7,
      gameIcon: m,
      gameA: 1520,
      gameB: 189152,
      shopName: 'Office Vbar',
      playerList: [
        {
          name: '张三',
        },
        {
          name: '李四',
        },
        {
          name: '王五',
        }
      ],
      friendsList: [
        {
          id: 1,
          img: m,
          name: 'AAAAAAA',
          rating: 52,
          ppd: 51.3,
          mpr: 19
        },
        {
          id: 2,
          img: m,
          name: 'AAAAAAA',
          rating: 52,
          ppd: 51.3,
          mpr: 19
        },
        {
          id: 3,
          img: m,
          name: 'AAAAAAA',
          rating: 52,
          ppd: 51.3,
          mpr: 19
        }
      ]
    }
  );
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1994758_ss07hdd81wn.js'
  })
  const getData = (cardId) => {
    myPageIndexUserCardInfoHttp({
      cardId: cardId,
      memberId: sessionStorage.getItem('websiteMemberId')
    }).then(res => {
      if (res.data.data) {
        setCard(res.data.data)
        // changeCardId(res.data.data.cardId)
        // sessionStorage.setItem('websiteCardId', res.data.data.cardId)
      }
    })
  }
  const getGameInfoData = (cardId) => {
    myPageIndexGameInfoHttp({ cardId: cardId }).then(res => {
      if (res.data.code === 100) {
        setGaneInfo(res.data.data)
      }
    })
  }
  useEffect(() => {
    const cardId = Number(sessionStorage.getItem('websiteCardId'));
    if (cardId) {
      getData(cardId)
      getGameInfoData(cardId)
    }
    return () => {
      setCard({});
      setGaneInfo({});
    }
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='myPageIndex'>{t(20)}</div>
      <div className='MyPageIndex'>
        <div className='userCard'>
          <div className='userCardLeftBox' >
            <div className='userInfo'>
              <div>
                <div className='userCountryImg'>
                  {/* <img src={card.countryImg} alt="" /> */}
                </div>
                <div className='userInfoBox'>
                  <div className='userCardImg'>
                    <img src={card.portrait} alt="" />
                  </div>
                  <div className='userName textOverFlow' title={card.name}>{card.name}</div>
                </div>
              </div>
              <div className='userInfoGameBox'>
                <div><Progress type="circle" percent={card.rating} status="exception" format={percent => `${percent} RATING`} /></div>
                <div className='userInfoGame'>
                  <div>
                    <div>{card.ppd}</div>
                    <div className='fontStyle'>01 GAME</div>
                  </div>
                  <div>
                    <div>{card.mpr}</div>
                    <div className='fontStyle'>CRICKET</div>
                  </div>
                  <div>
                    <div>{card.countUpPoint}</div>
                    <div className='fontStyle'>COUNTUP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='userCardInfo'>
              <div className='fontStyle'>Adarts NO：</div>
              <div>{card.cardNo}</div>
            </div>
          </div>
          <div className='userCardRightBox'>
            <div className='userGameTotal'>
              <div className='fontStyle'>WIN</div>
              <div>{card.win}</div>
            </div>
            <div className='userGameTotal'>
              <div className='fontStyle'>LOSE</div>
              <div>{card.lose}</div>
            </div>
            <div className='userGameTotal'>
              <div className='fontStyle'>最高连胜记录</div>
              <div>{card.winContinued}</div>
            </div>
            <div>
              <div className='fontStyle'>WIN%</div>
              <div className='userWinsBox'><Progress type="circle" width={60} percent={card.winProbability} status="exception" format={percent => `${percent} %`} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='myPageIndexGameBox'><span className='myPageIndexIcon'><MessageOutlined /></span>{t(116)}</div>
      <div className='myPageIndexGameRating'>
        <div>Adarts Rating：{ganeInfo.adartsRating}</div>
        <div>League Rating：{ganeInfo.leagueRating}</div>
      </div>
      <div className='myPageIndexBox'>
        <div className='myPageIndexItemBox'>
          <div>ITEM</div>
          <div>
            <div className='myPageIndexIconBox'>
              <div><img src={ganeInfo.gameIcon} alt="" /></div>
              <div>{ganeInfo.coin}</div>
            </div>
            <div className='myPageIndexIconBox'>
              <div><img src={ganeInfo.gameIcon} alt="" /></div>
              <div>{ganeInfo.coin}</div>
            </div>
          </div>
          <div className='myPageIndexStyleBox'>
            <div>
              <div>My Style</div>
              <div className='myPageIndexStyleIcon'><img src={ganeInfo.gameIcon} alt="" /></div>
            </div>
            <div className='myPageIndexRMDStyle'>
              <div>{t(117)}</div>
              <div>
                <div className='myPageIndexStyleIcon'><img src={ganeInfo.gameIcon} alt="" /></div>
                <div className='myPageIndexStyleIcon'><img src={ganeInfo.gameIcon} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className='myPageIndexHomeShop'>
          <div><span><HomeFilled /></span>{t(23)}</div>
          <div>{ganeInfo.homeShop}</div>
          <div>
            <div>
              <div>「 <UserOutlined />[ANYWHERE] 」{t(118)}</div>
              <div><Button shape="circle" size='small' icon={<PlusOutlined />} /></div>
            </div>
            {ganeInfo.playerList && ganeInfo.playerList.map((i, index) => {
              return (
                <div key={index}>
                  <div>{i.name}</div>
                  <div><BulbOutlined /></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <div>{t(67)}</div>
        <div className='myPageIndexPlayerBox'>
          {ganeInfo.friendsList && ganeInfo.friendsList.map((i, index) => {
            return (
              <div key={index}>
                <div className='myPageIndexPlayerIcon'><img src={i.img} alt="" /></div>
                <div>
                  <div>{i.name}</div>
                  <div><span>PPD {i.ppd}</span><span>MPR {i.mpr}</span></div>
                </div>
                <div className='myPageIndexPlayerMsg'><MessageOutlined /></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='myPageIndexOtherBox'>
        <div><MyIcon type="el-icon-gonggao1-copy" />{t(8)}</div>
        <div><MyIcon type="el-icon-hangyepaiming-copy-copy" />{t(119)}</div>
        <div><MyIcon type="el-icon-ditu1-copy" />{t(120)}</div>
        <div><MyIcon type="el-icon-kefu-copy" />{t(121)}</div>
      </div>
    </div>
  )
}
export default MyPageIndex