import { useTranslation } from 'react-i18next'
const AdartsShopThemeSet = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className='myPageTitle' id='adartsShopThemeSet'>{t(113)}</div>
        </div>
    )
}
export default AdartsShopThemeSet