import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Collapse } from 'antd';
import m from '@/assets/img/m.png'
import '../index.css'

const { Panel } = Collapse;

const About30Game = () => {
  const { t } = useTranslation();
  const [dataList, setDataList] = useState([
  ]);
  useEffect(() => {
    setDataList([
      {
        id: 1,
        date: '2021/6/20 12:26:38',
        type: 'Standard Cricket',
        img: m,
        mpr: '5.30',
        userName: 'Alvin',
        rating: 17.01,
        location: 'ABCD shop',
        hatTrick: 10,
        '3inBed': 10,
        '3inBlack': 10,
        ton80: 10,
        '5Marks': 10,
        '6Marks': 10,
        '7Marks': 10,
        '8Marks': 10,
        '9Marks': 10,
        win: true,
        playerList: [
          { name: 'Eric', rt: 15.00, mpr: 48.25 },
          { name: 'Alion', rt: 21.20, mpr: 2.95 },
          { name: 'Edioter', rt: 45.94, mpr: 213.95 },
          { name: 'Crocket', rt: 485.26, mpr: 18.23 }
        ]
      },
      {
        id: 2,
        date: '2021/6/20 12:26:38',
        type: 'Standard Cricket',
        img: m,
        mpr: '5.30',
        userName: 'Alvin',
        rating: 17.01,
        location: 'ABCD shop',
        hatTrick: 10,
        '3inBed': 10,
        '3inBlack': 10,
        ton80: 10,
        '5Marks': 10,
        '6Marks': 10,
        '7Marks': 10,
        '8Marks': 10,
        '9Marks': 10,
        win: true,
        playerList: [
          { name: 'Eric', rt: 15.00, mpr: 48.25 },
          { name: 'Alion', rt: 21.20, mpr: 2.95 },
          { name: 'Edioter', rt: 45.94, mpr: 213.95 },
          { name: 'Crocket', rt: 485.26, mpr: 18.23 }
        ]
      }
    ])
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='About30Game'>{t(64)}</div>
      <Collapse accordion>
        {dataList.map(i => {
          return (
            <Panel header={`${i.date}   |   ${i.type}   |   MPR：${i.mpr}`} key={i.id}>
              <div className='Game30Box About30GamePersonalBox'>
                <div className='AllGameDataImgBox'><img src={i.img} alt="" /></div>
                <div className='About30GameInfo'>
                  <div>{i.userName}</div>
                  <div>{`Rating：${i.rating}  MPR：${i.mpr}`}</div>
                  <div>{`Location：${i.location}`}</div>
                </div>
                <div>{i.win ? 'WIN' : 'LOSE'}</div>
              </div>
              <div className='Game30Box About30GameResult'>
                <div>Awards</div>
                <div>
                  <div>{`HAT TRICK：${i.hatTrick}`}</div>
                  <div>{`3 IN A BED：${i['3inBed']}`}</div>
                  <div>{`3 IN THE BLACK：${i['3inBlack']}`}</div>
                  <div>{`TON80：${i.ton80}`}</div>
                  <div>{`5MARKS：${i['5Marks']}`}</div>
                  <div>{`6MARKS：${i['6Marks']}`}</div>
                  <div>{`7MARKS：${i['7Marks']}`}</div>
                  <div>{`8MARKS：${i['8Marks']}`}</div>
                  <div>{`9MARKS：${i['9Marks']}`}</div>
                </div>
              </div>
              <div className='Game30Box'>
                <div className='About30GamePlayerBox'>
                  <div>PLAYER</div>
                  <div>RT</div>
                  <div>MPR</div>
                </div>
                {i.playerList.map((j, jndex) => {
                  return (
                    <div className='About30GamePlayerBox About30GamePlayer'>
                      <div>{j.name}</div>
                      <div>{j.rt}</div>
                      <div>{j.mpr}</div>
                    </div>
                  )
                })}
              </div>
            </Panel>
          )
        })}
        {/* <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel> */}
      </Collapse>,
    </div>
  )
}
export default About30Game