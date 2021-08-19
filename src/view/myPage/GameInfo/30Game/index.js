import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Collapse } from 'antd';
import { about30GameListHttp } from '@/api'
import NoData from '@/common/components/NoData'
import defalutPlayer from '@/assets/img/defalutPlayer.png';
import '../index.css'

const { Panel } = Collapse;

const About30Game = (props) => {
    const { cardId } = props
    const { t } = useTranslation();
    const [dataList, setDataList] = useState([]);
    const getDateTime = (date) => {
        const [year, month, day, hour, minute, second] = [
            new Date(Number(date)).getFullYear(),
            new Date(Number(date)).getMonth() + 1,
            new Date(Number(date)).getDate(),
            new Date(Number(date)).getHours(),
            new Date(Number(date)).getMinutes(),
            new Date(Number(date)).getSeconds()
        ]

        return `${year}/${month}/${day}  ${hour}:${minute}:${second} `
    }
    const getGameName = (type) => {
        let str = '';
        switch (type) {
            case 1:
                str = '301'
                break;
            case 2:
                str = '501'
                break;
            case 3:
                str = '701'
                break;
            case 4:
                str = '901'
                break;
            case 5:
                str = 'STANDARDCRICKET'
                break;
            case 6:
                str = 'AWARDCRICKET'
                break;
            case 7:
                str = 'COUNTUP;'
                break;
            case 8:
                str = 'TIMECOUNTUP'
                break;
            case 9:
                str = 'HALFIT'
                break;
            case 10:
                str = 'TEAMCRICKET'
                break;
            case 11:
                str = 'SNOW301'
                break;
            case 12:
                str = 'SNOW501'
                break;
            case 13:
                str = 'SNOW701'
                break;
            case 14:
                str = 'SNOW901'
                break;
            case 20:
                str = 'EAGLEEYE'
                break;
            case 21:
                str = 'BIGBULL'
                break;
            // case 22:
            //   str = 'CRICKETCOUNTUP'
            //   break;
            default:
                str = 'CRICKETCOUNTUP'
                break;
        }
        return str
    }
    const getDataList = (cardId) => {
        about30GameListHttp({ cardId }).then(res => {
            setDataList(res.data.data)
        })
    }
    useEffect(() => {
        getDataList(cardId || sessionStorage.getItem('websiteCardId'));
        return () => setDataList([]);
    }, [cardId])
    return (
        <div>
            <div className='myPageTitle' id='About30Game'>{t(64)}</div>
            <Collapse accordion>
                {dataList.length ? dataList.map(i => {
                    return (
                        <Panel header={`${getDateTime(i.dateTime)}   |   ${getGameName(i.gameName)}   |   MPR：${i.mpr}`} key={i.dateTime}>
                            <div className='Game30Box About30GamePersonalBox'>
                                <div className='AllGameDataImgBox'><img src={i.portrait ? i.portrait : defalutPlayer} alt="" /></div>
                                <div className='About30GameInfo'>
                                    <div>{i.userName}</div>
                                    <div>{`Rating：${i.rating}  MPR：${i.mpr}`}</div>
                                    <div>{`Location：${i.shopName}`}</div>
                                </div>
                                <div className='About30GameResultBox'>{i.result ? 'WIN' : 'LOSE'}</div>
                            </div>
                            <div className='Game30Box About30GameResult'>
                                <div>Awards</div>
                                <div>
                                    <div>{`HAT TRICK：${i.hatTrick}`}</div>
                                    <div>{`3 IN A BED：${i.threeInABed}`}</div>
                                    <div>{`3 IN THE BLACK：${i.threeInABlack}`}</div>
                                    <div>{`TON80：${i.ton80}`}</div>
                                    <div>{`5MARKS：${i.fiveMark}`}</div>
                                    <div>{`6MARKS：${i.sixMark}`}</div>
                                    <div>{`7MARKS：${i.sevenMark}`}</div>
                                    <div>{`8MARKS：${i.eightMark}`}</div>
                                    <div>{`9MARKS：${i.nineMark}`}</div>
                                </div>
                            </div>
                            <div className='Game30Box'>
                                <div className='About30GamePlayerBox'>
                                    <div>PLAYER</div>
                                    <div>RATING</div>
                                    <div>MPR</div>
                                </div>
                                {i.teammateList.map((j, jndex) => {
                                    return (
                                        <div className='About30GamePlayerBox About30GamePlayer' key={jndex}>
                                            <div>{j.memberName}</div>
                                            <div>{j.rating}</div>
                                            <div>{j.mpr}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Panel>
                    )
                }) :
                    <NoData />
                }
                {/* <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel> */}
            </Collapse>
        </div>
    )
}
export default About30Game