import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { playerListHttp } from '@/api';

const PlayerDes = () => {
  const history = useHistory();
  const [playerList, setPlayerList] = useState([]);
  const handlePlayerClick = (id) => {
    history.push({
      pathname: 'PlayerInfo',
      state: { id }
    })
  }
  const getPlayerList = () => {
    playerListHttp({ countryId: 208 }).then(res => {
      res.data.data.forEach(i => {
        i.picture = JSON.parse(i.picture)
      })
      setPlayerList(res.data.data);
    })
  }
  useEffect(() => {
    getPlayerList()
  }, [])
  return (
    <div className='playerDes containerBox'>
      <Row className='playerDesBox' justify="space-around">
        {playerList.map(i => {
          return (
            <Col key={i.id} span='5' className='playerBg' onClick={() => handlePlayerClick(i.id)}>
              <div className='playerBox'>
                <div><img src={i.picture[0] ? i.picture[0].url : ''} alt="" /></div>
                <div className='playerDesName'>{i.name}</div>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default PlayerDes;