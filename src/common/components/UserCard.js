import { useState, useEffect } from 'react'
import { Row, Col, Button, Progress } from 'antd'
import { LeftOutlined, RightOutlined, UserAddOutlined, GiftOutlined, MessageOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { indexUserCardListHttp } from '@/api';
import { useHistory } from 'react-router-dom'
const UserCard = (props) => {
  const [userCard, setUserCard] = useState([]);
  const [friend, setFriend] = useState(0);
  const [gift, setGift] = useState(0);
  const [position, setPosition] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);
  const history = useHistory();
  const num = userCard && userCard.length;
  const { t } = useTranslation();
  const handleUserCardClick = (direction) => {
    if (direction === 'left') {
      if (positionIndex > 0) {
        setPositionIndex(positionIndex - 1)
        setPosition(position + 400)
      }
    } else {
      if (positionIndex < num - 1) {
        setPositionIndex(positionIndex + 1)
        setPosition(position - 400)
      }
    }
  }
  const getUserCardList = () => {
    indexUserCardListHttp({ memberId: sessionStorage.getItem('websiteMemberId') || '' }).then(res => {
      if (res.data.code === 100) {
        setUserCard(res.data.data)
        sessionStorage.setItem('websiteCardId', res.data.data[0].cardId)
      }
    })
  }
  const handleBtnPush = (name) => {
    history.push({
      pathname: '/MyPage',
      state: {
        name
      }
    })
  }
  useEffect(() => {
    getUserCardList()
    setFriend(1)
    setGift(1)
  }, [])
  useEffect(() => {
    const dom = document.querySelector('.userCardListBox');
    dom.style.left = `${position}px`
  }, [position])
  return (
    <Row className='userCardBox'>
      <Col span='1' offset='1' className='iconBox' onClick={() => handleUserCardClick('left')}><LeftOutlined /></Col>
      <Col span='8' offset='1' className='userCardListBg'>
        <div className='userCardListBox animate__animated animate__fadeInRight'>
          {userCard && userCard.map((i, index) => {
            return (
              <div className='userCard' key={index}>
                <div className='userCardLeftBox' >
                  <div className='userInfo'>
                    <div>
                      <div className='userCountryImg'>
                        <img src={i.countryImg} alt="" />
                      </div>
                      <div className='userInfoBox'>
                        <div className='userCardImg'>
                          <img src={i.portrait} alt="" />
                        </div>
                        <div className='userName textOverFlow' title={i.name}>{i.name}</div>
                      </div>
                    </div>
                    <div className='userInfoGameBox'>
                      <div><Progress type="circle" percent={i.rating} status="exception" format={percent => `${percent} RATING`} /></div>
                      <div className='userInfoGame'>
                        <div>
                          <div>{i.ppd}</div>
                          <div className='fontStyle'>01 GAME</div>
                        </div>
                        <div>
                          <div>{i.mpr}</div>
                          <div className='fontStyle'>CRICKET</div>
                        </div>
                        <div>
                          <div>{i.countUpPoint}</div>
                          <div className='fontStyle'>COUNTUP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='userCardInfo'>
                    <div className='fontStyle'>Adarts NO：</div>
                    <div>{i.cardNo}</div>
                  </div>
                </div>
                <div className='userCardRightBox'>
                  <div className='userGameTotal'>
                    <div className='fontStyle'>WIN</div>
                    <div>{i.win}</div>
                  </div>
                  <div className='userGameTotal'>
                    <div className='fontStyle'>LOSE</div>
                    <div>{i.lose}</div>
                  </div>
                  <div className='userGameTotal'>
                    <div className='fontStyle'>最高连胜记录</div>
                    <div>{i.winContinued}</div>
                  </div>
                  <div>
                    <div className='fontStyle'>WIN%</div>
                    <div className='userWinsBox'><Progress type="circle" width={60} percent={i.winProbability} status="exception" format={percent => `${percent} %`} /></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='positionIndexBox'>
          {userCard && userCard.map((i, index) => {
            return (
              <div className={index === positionIndex ? 'isActive' : 'positionIndex'} key={index}></div>
            )
          })}
        </div>
      </Col>
      <Col span='1' offset='1' className='iconBox' onClick={() => handleUserCardClick('right')}><RightOutlined /></Col>
      <Col span='8' offset='1' className='userCardOther'>
        <div className='otherMoreBox'>
          {/* <Button block >{t('1')}<RightOutlined /></Button> */}
          <Button block onClick={() => handleBtnPush('About30Game')}>{t(16)}<RightOutlined /></Button>
          <Button block onClick={() => handleBtnPush('PropSetting')}>{t(17)}<RightOutlined /></Button>
          <hr />
        </div>
        <div className='otherInfoBox'>
          <div className='contentInfoBox'>
            <div className='iconBox'><UserAddOutlined /></div>
            <div>有 <span className='linkText'>{friend}</span> 好友邀请</div>
          </div>
          <div className='contentInfoBox'>
            <div className='iconBox'><GiftOutlined /></div>
            <div>已收到 <span className='linkText'>{gift}</span> 礼品</div>
          </div>
          <div className='contentInfoBox'>
            <div className='iconBox'><MessageOutlined /></div>
            <div>Award消息</div>
            <div className='awardChangeBox'>【更改】</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default UserCard