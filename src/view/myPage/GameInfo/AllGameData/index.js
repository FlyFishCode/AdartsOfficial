import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import m from '@/assets/img/m.png'
import '../index.css'
const AllGameData = () => {
  const { t } = useTranslation()
  const [data] = useState({
    cardNo: '9999999999999',
    userName: 'Alive',
    rating: 100,
    ppd: 90,
    ppr: 80,
    mpr: 70,
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 700,
    f: 1502,
    g: 123,
    gg: 324,
    ggg: 23424,
    gggg: 4620,
  })
  useEffect(() => {
    console.log(AllGameData);
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AllGameData'>{t(21)}</div>
      <div className='AllGameDataDefault AllGameDataInfoBox'>
        <div className='AllGameDataImgBox'>
          <img src={m} alt="" />
        </div>
        <div className='AllGameDataUserBox'>
          <div>{data.userName}</div>
          <div>Card No：{data.cardNo}</div>
        </div>
      </div>
      <div className='AllGameDataDefault AllGameDataGameBox'>
        <div className='AllGameDataGame'>
          <div>Rating</div>
          <div>{data.rating}</div>
        </div>
        <div className='AllGameDataGame'>
          <div>PPD</div>
          <div>{data.ppd}</div>
        </div>
        <div className='AllGameDataGame'>
          <div>PPR</div>
          <div>{data.ppr}</div>
        </div>
        <div className='AllGameDataGame'>
          <div>MPR</div>
          <div>{data.mpr}</div>
        </div>
      </div>
      <div className='AllGameDataDefault AllGameDataGameRateBox'>
        <div className='AllGameDataGameRate'>
          <div>{t(74)}</div>
          <div>{t(75)}</div>
          <div>{t(76)}</div>
          <div>{t(77)}</div>
        </div>
        <div className='AllGameDataGameRate'>
          <div>{data.a}</div>
          <div>{data.b}</div>
          <div>{data.c}</div>
          <div>{data.d}</div>
        </div>
      </div>
      <div className='AllGameDataDefault AllGameDataCountBox'>
        <div className='AllGameDataCount'>
          <div>{t(78)}</div>
          <div>{data.e}</div>
        </div>
        <div className='AllGameDataCount'>
          <div>{t(79)}</div>
          <div>{data.f}</div>
        </div>
      </div>
      <div className='AllGameDataDefault'>
        <div className='AllGameDataMax'>{t(80)}</div>
        <div className='AllGameDataMaxBox'>
          <div className='AllGameDataMaxEle'>
            <div>Half it</div>
            <div>{data.g}</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>Big Bull</div>
            <div>{data.gg}</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>Eagle Eyes</div>
            <div>{data.ggg}</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>Cricket Count Up</div>
            <div>{data.gggg}</div>
          </div>
        </div>
      </div>
      <div className='AllGameDataDefault AllGameDataTotalBox'>
        <div className='AllGameDataTotalName'>
          <div>01 游戏</div>
          <div>S.Cricket</div>
        </div>
        <div className='AllGameDataTotalData'>
          <div>{t(81)}</div>
          <div>{t(82)}</div>
          <div>{t(83)}</div>
          <div>{t(84)}</div>
        </div>
        <div className='AllGameDataTotalData'>
          <div>{data.gg}</div>
          <div>{data.gg}</div>
          <div>{data.gg}</div>
          <div>{data.gg}</div>
        </div>
      </div>
      <div className='AllGameDataDefault'>
        <div className='AllGameDataMax'>{t(85)}</div>
        <div className='AllGameDataMaxBox'>
          <div className='AllGameDataMaxEle'>
            <div>301</div>
            <div>501</div>
            <div>701</div>
            <div>901</div>
            <div>1101</div>
            <div>1501</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>{data.gg}</div>
            <div>{data.gg}</div>
            <div>{data.gg}</div>
            <div>{data.gg}</div>
            <div>{data.gg}</div>
            <div>{data.gg}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllGameData