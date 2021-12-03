import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'antd';
import { countryListHttp } from '@/api';
import { setCountryIconPosition } from '@/common/Utlis';

const CountryLanguage = ({ visible, onClick, handleCounty }) => {
  const { t, i18n } = useTranslation();
  const [country, setCountry] = useState();
  const [language, setLanguage] = useState('jp');
  const [languageList, setLanguageList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const handleChange = (type, id) => {
    if (type) {
      setCountry(id);
      handleCounty(id);
      sessionStorage.setItem('websiteCountryId', id)
    } else {
      setLanguage(id);
      i18n.changeLanguage(id);
    }
  }
  const getData = () => {
    countryListHttp().then(res => {
      if (res.data.code === 100) {
        setCountryList(res.data.data);
      }
    })
    getLanguage();
    setLanguageList([
      { id: 'jt', name: '简体中文' },
      { id: 'ft', name: '繁体中文' },
      { id: 'en', name: '英语' },
      { id: 'jp', name: '日本语' },
    ])
  }
  const getLanguage = () => {
    const query = window.location.search.split('=')[1] || '';
    switch (query) {
      case 'cn':
        handleChange(0, 'jt');
        handleChange(1, 208);
        break;
      case 'hk':
        handleChange(0, 'ft');
        handleChange(1, 19464);
        break;
      case 'en':
        handleChange(0, 'en');
        handleChange(1, 617);
        break;
      default:
        handleChange(0, 'jp');
        handleChange(1, 17829);
        break;
    }
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Modal
      title={t(99)}
      visible={visible}
      className='countryLanguageModal'
      width='50%'
      footer={null}
      onCancel={() => onClick(false)}
    >
      <div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{t(31)}</div>
        <div className='countryLanguageBox'>
          {countryList.length ? countryList.map(i => {
            return (
              <div className={`${i.countryId === country ? 'currentSelect' : ''} countryLanguage`}
                title={i.countryName}
                key={i.countryId}
                onClick={() => handleChange(1, i.countryId)}
              >
                <div className='countryIconPosition'>
                  <div style={{ backgroundPosition: setCountryIconPosition(i.countryCode) }}></div>
                </div>
                <div >{i.countryName}</div>
              </div>
            )
          }) : null}
        </div>
      </div>
      <hr />
      <div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{t(32)}</div>
        <div className='countryLanguageBox'>
          {languageList.length ? languageList.map(i => {
            return (
              <div className={`${i.id === language ? 'currentSelect' : ''} countryLanguage`}
                title={i.name}
                key={i.id}
                onClick={() => handleChange(0, i.id)}
              >
                <div>{i.name}</div>
              </div>
            )
          }) : null}
        </div>
      </div>
    </Modal>
  )
}
export default CountryLanguage;