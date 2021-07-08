import { useTranslation } from 'react-i18next'
const AdartsShopNew = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='adartsShopNew'>{t(10)}</div>
    </div>
  )
}
export default AdartsShopNew