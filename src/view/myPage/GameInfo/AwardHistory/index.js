
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { awardHistoryDataHttp } from '@/api'
import NoData from '@/common/components/noData'
import '../index.css'
const AwardHistory = () => {
  const { t } = useTranslation()
  const [dataList, setDataList] = useState([]);
  const cardId = Number(sessionStorage.getItem('websiteCardId'));
  const getData = (cardId) => {
    awardHistoryDataHttp({ cardId }).then(res => {
      const data = res.data.data
      if (data) {
        setDataList([
          { name: 'S-Bull', count: 0, total: 0 },
          { name: 'D-Bull', count: 0, total: 0 },
          { name: 'LOW TON', count: data.lowTonMonth, total: data.lowTonTotal },
          { name: 'HAT TRICK', count: data.hatTrickMonth, total: data.hatTrickTotal },
          { name: '9MARK', count: data.nineMarkMonth, total: data.nineMarkTotal },
          { name: '8MARK', count: data.eightMarkMonth, total: data.eightMarkTotal },
          { name: '7MARK', count: data.sevenMarkMonth, total: data.sevenMarkTotal },
          { name: '6MARK', count: data.sixMarkMonth, total: data.sixMarkTotal },
          { name: '5MARK', count: data.fiveMarkMonth, total: data.fiveMarkTotal },
          { name: '3 IN A BED', count: data.threeInAbedMonth, total: data.threeInAbedTotal },
          { name: 'HIGT TON', count: data.highTonMonth, total: data.highTonTotal },
          { name: 'TON 80', count: data.ton80Month, total: data.ton80Total },
          { name: 'WHITE HORSE', count: data.whiteHorseMonth, total: data.whiteHorseTotal },
          { name: '3 IN THE BLACK', count: data.threeInABlackMonth, total: data.threeInABlackTotal },
        ])
      }
    })
  }
  useEffect(() => {
    getData(cardId)
  }, [cardId])
  return (
    <div>
      <div className='myPageTitle' id='AwardHistory'>{t(65)}</div>
      <div className='AwardHistoryDataList'>
        <div>AWARD</div>
        <div>{t(128)}</div>
        <div>TOTAL</div>
      </div>
      {dataList.length ? dataList.map((i, index) => {
        return (
          <div key={index} className='AwardHistoryDataList'>
            <div>{i.name}</div>
            <div>{`${i.count} ${t(129)}`}</div>
            <div>{`${i.total} ${t(129)}`}</div>
          </div>
        )
      }) :
        <NoData />
      }
    </div>
  )
}
export default AwardHistory