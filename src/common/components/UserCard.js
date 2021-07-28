import { useState, useEffect } from 'react'
import { Row, Col, Progress } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { indexUserCardListHttp } from '@/api';
// import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom'

import { setCountryIconPosition } from '@/common/Utlis';

import adartsCard from '@/assets/img/adartsCard.png'

const UserCard = (props) => {
    // const history = useHistory();
    // const { t } = useTranslation();
    // const [friend, setFriend] = useState(0);
    // const [gift, setGift] = useState(0);
    const [userCard, setUserCard] = useState([]);
    const [position, setPosition] = useState(0);
    const [positionIndex, setPositionIndex] = useState(0);
    const num = userCard && userCard.length;
    const handleUserCardClick = (direction) => {
        if (direction === 'left') {
            if (positionIndex > 0) {
                setPositionIndex(positionIndex - 1)
                setPosition(position + 450)
            }
        } else {
            if (positionIndex < num - 1) {
                setPositionIndex(positionIndex + 1)
                setPosition(position - 450)
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
    // const handleBtnPush = (name) => {
    //   history.push({
    //     pathname: '/MyPage',
    //     state: {
    //       name
    //     }
    //   })
    // }
    useEffect(() => {
        getUserCardList()
        // setFriend(1)
        // setGift(1)
        return () => setUserCard([])
    }, [])
    useEffect(() => {
        const dom = document.querySelector('.userCardListBox');
        dom.style.left = `${position}px`
    }, [position])
    return (
        <Row className='userCardBox'>
            {userCard.length > 0 ? <Col span='1' className='iconBox' onClick={() => handleUserCardClick('left')}><LeftOutlined /></Col> : null}
            <Col span='9' className='userCardListBg'>
                <div className='userCardListBox animate__animated animate__fadeInRight'>
                    {userCard && userCard.map((i, index) => {
                        return (
                            <div className='userCard' key={index}>
                                <div className='userCardLeftBox' >
                                    <div className='userInfo'>
                                        <div>
                                            <div className='countryIconPosition'>
                                                <div style={{ backgroundPosition: setCountryIconPosition(i.countryCode) }} />
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
                                                    <div className='userCardFont'>{i.ppd}</div>
                                                    <div className='fontStyle'>01 GAME</div>
                                                </div>
                                                <div>
                                                    <div className='userCardFont'>{i.mpr}</div>
                                                    <div className='fontStyle'>CRICKET</div>
                                                </div>
                                                <div>
                                                    <div className='userCardFont'>{i.countUpPoint}</div>
                                                    <div className='fontStyle'>COUNTUP</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='userCardInfo'>
                                        <div className='fontStyle'>Adarts NO：</div>
                                        <div className='userCardFont'>{i.cardNo}</div>
                                    </div>
                                </div>
                                <div className='userCardRightBox'>
                                    <div className='userGameTotal'>
                                        <div className='fontStyle'>WIN</div>
                                        <div className='userCardFont'>{i.win}</div>
                                    </div>
                                    <div className='userGameTotal'>
                                        <div className='fontStyle'>LOSE</div>
                                        <div className='userCardFont'>{i.lose}</div>
                                    </div>
                                    <div className='userGameTotal'>
                                        <div className='fontStyle'>最高连胜记录</div>
                                        <div className='userCardFont'>{i.winContinued}</div>
                                    </div>
                                    <div>
                                        <div className='fontStyle'>WIN%</div>
                                        <div className='userWinsBox'><Progress type="circle" width={60} percent={i.winProbability} status="exception" format={percent => `${percent} %`} /></div>
                                    </div>
                                </div>
                                <div className='cardStyleBox'>
                                    <img src={adartsCard} alt="" />
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
            {userCard.length > 0 ? <Col span='1' className='iconBox' onClick={() => handleUserCardClick('right')}><RightOutlined /></Col> : null}
            {/* <Col span='8' offset='1' className='userCardOther'>
        <div className='otherMoreBox'>
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
      </Col> */}
        </Row>
    )
}
export default UserCard