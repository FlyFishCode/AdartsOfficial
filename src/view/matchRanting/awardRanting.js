import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'antd';

import RenderDom from './renderListDom';

import { awardRankListHttp } from '@/api';

const { Option } = Select;

const AwardRanting = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [thisMonthList, setThisMonthList] = useState([]);
  const [lastMonthList, setLastMonthList] = useState([]);
  const optionsList = [
    { value: 2, label: '9 MARK' },
    { value: 5, label: 'TON 80' },
    { value: 1, label: 'LOW TON' },
    { value: 4, label: 'HIGH TON' },
    { value: 0, label: 'HAT TRICK' },
    { value: 3, label: '3 IN A BED' },
    { value: 6, label: '3 IN THE BLACK' },
  ];
  const getData = () => {
    awardRankListHttp({ awardType: value }).then(res => {
      if (res.data.code === 100) {
        const { thisMonth, lastMonth } = res.data.data;
        setThisMonthList(thisMonth);
        setLastMonthList(lastMonth);
      }
    })
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return (
    <div>
      <div className='myPageTitle'>{t(200)}</div>
      <div>
        <Select value={value} style={{ width: '100%' }} onChange={(value) => setValue(value)}>
          {optionsList.map(i => {
            return (
              <Option key={i.value} value={i.value}>{i.label}</Option>
            )
          })}
        </Select>
      </div>
      <div className='RowBox'><RenderDom thisMonth={thisMonthList} lastMonth={lastMonthList} /></div>
    </div>
  )
}
export default AwardRanting;