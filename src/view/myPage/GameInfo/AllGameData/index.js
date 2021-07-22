import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { allGameDataHttp } from '@/api'
import '../index.css'
const AllGameData = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const getData = (cardId) => {
    allGameDataHttp({ cardId }).then(res => {
      setData(res.data.data)
    })
  }
  useEffect(() => {
    const cardId = Number(sessionStorage.getItem('websiteCardId'));
    if (cardId) {
      getData(cardId)
    }
    return () => setData({})
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AllGameData'>{t(21)}</div>
      <div className='AllGameDataDefault AllGameDataInfoBox'>
        <div className='AllGameDataImgBox'>
          <img src={data.portrait} alt="" />
        </div>
        <div className='AllGameDataUserBox'>
          <div>{data.memberName}</div>
          <div>Card No：{data.cardNo}</div>
        </div>
      </div>
      <div className='AllGameDataDefault AllGameDataGameBox'>
        <div className='AllGameDataGame'>
          <div>Rating</div>
          <div>{data.rating || '-'}</div>
        </div>
        <div className='AllGameDataGame'>
          <div>PPD</div>
          <div>{data.ppd || '-'}</div>
        </div>
        <div className='AllGameDataGame'>
          <div>PPR</div>
          <div>{data.ppr || '-'}</div>
        </div>
        <div className='AllGameDataGame'>
          <div>MPR</div>
          <div>{data.mpr || '-'}</div>
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
          <div>{`${data.quantity01 || '-'} / ${data.quantity01 || '-'}%`} </div>
          <div>{`${data.quantity01 || '-'} / ${data.winProbability01 || '-'}%`}</div>
          <div>{`${data.quantityCricket || '-'} / ${data.winProbabilityCricket || '-'}%`}</div>
          <div>{`${data.allQuantity || '-'} / ${data.allWinProbability || '-'}%`}</div>
        </div>
      </div>
      <div className='AllGameDataDefault AllGameDataCountBox'>
        <div className='AllGameDataCount'>
          <div>{t(78)}</div>
          <div>{data.countUpAverage || '-'}</div>
        </div>
        <div className='AllGameDataCount'>
          <div>{t(79)}</div>
          <div>{data.countUpMax || '-'}</div>
        </div>
      </div>
      <div className='AllGameDataDefault'>
        <div className='AllGameDataMax'>{t(80)}</div>
        <div className='AllGameDataMaxBox'>
          <div className='AllGameDataMaxEle'>
            <div>Half it</div>
            <div>{data.quantity01 || '-'}</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>Big Bull</div>
            <div>{data.quantity01 || '-'}</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>Eagle Eyes</div>
            <div>{data.quantity01 || '-'}</div>
          </div>
          <div className='AllGameDataMaxEle'>
            <div>Cricket Count Up</div>
            <div>{data.quantity01 || '-'}</div>
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
          <div>{data.quantity01 || '-'}</div>
          <div>{data.quantity01 || '-'}</div>
          <div>{data.quantity01 || '-'}</div>
          <div>{data.quantity01 || '-'}</div>
        </div>
      </div>
      <div className='AllGameDataDefault'>
        <div className='AllGameDataMax'>{t(85)}</div>
        <div className='AllGameDataMaxBox'>
          <div className='AllGameDataFast'>
            <div>301</div>
            <div>501</div>
            <div>701</div>
            <div>901</div>
            <div>1101</div>
            <div>1501</div>
          </div>
          <div className='AllGameDataFast'>
            <div>{data.quantity01 || '-'}</div>
            <div>{data.quantity01 || '-'}</div>
            <div>{data.quantity01 || '-'}</div>
            <div>{data.quantity01 || '-'}</div>
            <div>{data.quantity01 || '-'}</div>
            <div>{data.quantity01 || '-'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllGameData