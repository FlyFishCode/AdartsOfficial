import AllGameData from './AllGameData'
import About30Game from './30Game'
import AwardHistory from './AwardHistory'
const GameInfo = (props) => {
  const { cardId } = props;
  return (
    <div className='box'>
      <AllGameData />
      <About30Game cardId={cardId} />
      <AwardHistory />
    </div>
  )
}
export default GameInfo