import { useTranslation } from 'react-i18next'
import { createFromIconfontCN } from '@ant-design/icons';
const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1994758_h15hv7vykv.js'
})
const NoData = () => {
  const { t } = useTranslation()
  return (
    <div className='noDataBox'>
      <div className='noDataIcon'>
        <MyIcon type="el-icon-empty-status-copy" />
        <div>{t(132)}</div>
      </div>
    </div>
  )
}
export default NoData;