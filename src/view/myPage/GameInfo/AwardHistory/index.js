
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../index.css'
const AwardHistory = () => {
  const { t } = useTranslation()
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    setDataList([
      { name: 'S-Bull', count: 20, total: 200 },
      { name: 'D-Bull', count: 20, total: 200 },
      { name: 'LOW TON', count: 20, total: 200 },
      { name: 'HAT TRICK', count: 20, total: 200 },
      { name: '9MARK', count: 20, total: 200 },
      { name: '8MARK', count: 20, total: 200 },
      { name: '7MARK', count: 20, total: 200 },
      { name: '6MARK', count: 20, total: 200 },
      { name: '5MARK', count: 20, total: 200 },
      { name: '3 IN A BED', count: 20, total: 200 },
      { name: 'HIGT TON', count: 20, total: 200 },
      { name: 'TON 80', count: 20, total: 200 },
      { name: 'WHITE HORSE', count: 20, total: 200 },
      { name: '3 IN THE BLACK', count: 20, total: 200 },
    ])
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AwardHistory'>{t(65)}</div>
      <div className='AwardHistoryDataList'>
        <div>AWARD</div>
        <div>本月</div>
        <div>TOTAL</div>
      </div>
      {dataList.map((i, index) => {
        return (
          <div key={index} className='AwardHistoryDataList'>
            <div>{i.name}</div>
            <div>{`${i.count} 次数`}</div>
            <div>{`${i.total} 次数`}</div>
          </div>
        )
      })}
    </div>
  )
}
export default AwardHistory