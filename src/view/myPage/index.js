import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Row, Col, Anchor } from 'antd'
import './index.css'
const MyPage = () => {
  const { Link } = Anchor;
  const { t } = useTranslation()
  const Location = useLocation();
  const handleClick = (e, link) => {
    e.preventDefault()
    const ele = document.getElementById(link.href.substring(1))
    ele && ele.scrollIntoView(true);
  }
  console.log(Location.state);
  return (
    <Row className='myPage'>
      <Col span={4} offset={1} className='myPageLeft'>
        <Anchor onClick={handleClick}>
          <div className='myPageLink'><Link href="#1" title={t(20)} /></div>
          <div className='myPageLink'><Link href="#2" title='WHERE ARE YOU' /></div>
          <div className='myPageLink'><Link href="#3" title={t(21)} /></div>
          <div className='myPageLink'><Link href="#4" title={t(22)} /></div>
          <div className='myPageLink'><Link href="#5" title={t(23)} /></div>
          <div className='myPageLink'><Link href="#6" title={t(24)} /></div>
          <div className='myPageLink'><Link href="#7" title={t(25)} /></div>
        </Anchor>
      </Col>
      <Col span={18} offset={1} id='myPageRight'>
        <div>
          <div id='1'>{t(20)}</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div id='2'>WHERE ARE YOU</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div id='3'>{t(21)}</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div id='4'>{t(22)}</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div id='5'>{t(23)}</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div id='6'>{t(24)}</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div id='7'>{t(25)}</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </Col>
    </Row>
  )
}
export default MyPage