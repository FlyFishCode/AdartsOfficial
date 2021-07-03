import { useTranslation } from 'react-i18next'
const AccountInfoSetting = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='AccountInfoSetting'>{t(70)}</div>
    </div>
  )
}
export default AccountInfoSetting