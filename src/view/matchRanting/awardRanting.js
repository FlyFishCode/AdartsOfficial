import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'antd';

import RenderDom from './renderListDom';

const { Option } = Select;

const AwardRanting = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [thisMonthList, setThisMonthList] = useState([]);
  const [lastMonthList, setLastMonthList] = useState([]);
  const optionsList = [
    { value: 1, label: '9 MARK' },
    { value: 2, label: 'TON 80' },
    { value: 3, label: 'LOW TON' },
    { value: 4, label: 'HIGH TON' },
    { value: 5, label: 'HAT TRICK' },
    { value: 6, label: '3 IN A BED' },
  ];
  const getData = () => {
    setThisMonthList([]);
    setLastMonthList([]);
  };
  useEffect(() => {
    getData();
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