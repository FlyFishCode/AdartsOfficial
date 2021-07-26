import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';

import a from '@/assets/img/a.jpg'

const PlayerDes = () => {
  const history = useHistory();
  const [playerList, setPlayerList] = useState([]);
  const handlePlayerClick = (id) => {
    history.push({
      pathname: 'PlayerInfo',
      // state: { id }
    })
  }
  useEffect(() => {
    setPlayerList([
      { id: 1, src: a, playerName: 'AAA' },
      { id: 2, src: a, playerName: 'BBB' },
      { id: 3, src: a, playerName: 'CCC' },
      { id: 4, src: a, playerName: 'DDD' },
      { id: 5, src: a, playerName: 'EEE' },
      { id: 6, src: a, playerName: 'FFF' },
      { id: 7, src: a, playerName: 'GGG' },
      { id: 8, src: a, playerName: 'HHH' },
      { id: 9, src: a, playerName: 'III' },
      { id: 10, src: a, playerName: 'III' },
    ])
  }, [])
  return (
    <div className='playerDes'>
      <Row className='playerDesBox' justify="space-around">
        {playerList.map(i => {
          return (
            <Col key={i.id} span='5' className='playerBg' onClick={() => handlePlayerClick(i.id)}>
              <div className='playerBox'>
                <div><img src={i.src} alt="" /></div>
                <div className='playerDesName'>{i.playerName}</div>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default PlayerDes;