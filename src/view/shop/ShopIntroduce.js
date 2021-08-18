import { useTranslation } from 'react-i18next';

import { Collapse } from 'antd';

const { Panel } = Collapse;


const ShopIntroduce = () => {
  const { t } = useTranslation();
  return (
    <div className='ShopIntroduceBox'>
      <div className='Title'>{t(165)}</div>
      <Collapse>
        <Panel header={t(191)} key="1">
          <div className='ShopIntroduceTitle'>{t(191)}</div>
          <div>GOLD是用PHOENIX CLUB CARD來遊戲時,積累在每個遊戲上的積分(Point)。 這樣累計的積分使用於參加Present Campaign等活動或是購買Digital Content(數碼資訊)。 而且用『GOLD BATTLE』來增加GOLD數量。</div>

          <div className='ShopIntroduceTitle'>GOLD累計條件</div>
          <div>先刷PHOENIX CULB CARD, 然後投硬幣進行到最後一輪遊戲的話,累計GOLD。</div>
          <div>遊戲費用和GOLD積累沒有任何關係。按使用於遊戲的Credit數量來累計GOLD。</div>

          <div className='ShopIntroduceTitle'>1個game能獲得的GOLD</div>
          <div>Bonus GOLD是按照以下的三個條件追加</div>
          <div>(1）是否VS GAME</div>
          <div>(2）勝/負</div>
          <div>(3）對戰途中出現的Awards</div>

          <div className='ShopIntroduceTitle'>在一場遊戲中能獲得的GOLD種類</div>
          <div>(1)遊戲中能獲得的 GOLD</div>
          <div>- VS GAME(1 :1) : 10 GOLD</div>
          <div>- 不是 VS GAME 時: 10 GOLD</div>
          <div>- I-ROBOT : 10 GOLD</div>
          <div>(2)獲勝時能獲得的 GOLD</div>
          <div>- VS GAME(1 :1) : 10 GOLD</div>
          <div>- 不是 VS GAME 時: - GOLD</div>
          <div>- I-ROBOT : - GOLD</div>
          <div>(3)獎勵顯示出來時追加 GOLD</div>
          <div>- VS GAME(1 :1) : 最多10 GOLD</div>
          <div>- 不是 VS GAME 時: - GOLD</div>
          <div>- I-ROBOT : - GOLD</div>
          <div>在一場游戲中能獲得的GOLD為（1）＋（2）＋（3）(1)+(2)+(3)的合計GOLD(最多30GOLD)</div>

          <div className='ShopIntroduceTitle'>獎勵顯示出來時追加GOLD的詳細內容</div>
          <div>01 GAME & COUNT UP</div>
          <div>
            - PHOENIX EYE : 3GOLD<br />
            ※PHOENIX EYE(3GOLD)＋HAT TRICK (2GOLD) : 5GOLD<br />
            - TON80 : 3GOLD<br />
            ※ TON80(3GOLD)＋HIGH TON(2GOLD）: 5GOLD<br />
            - THREE IN A BED: 2GOLD<br />
            ※PHOENIX EYE(3GOLD)＋HAT TRICK (2GOLD) : 5GOLD<br />
            - HIGH TON : 2GOLD<br />
            - HAT TRICK : 2GOLD<br />
            - LOW TON : 1GOLD<br />
          </div>
          <div>CRICKET</div>
          <div>
            - WHITE HORSE : 3GOLD<br />
            ※WHITE HORSE(3GOLD)＋9MARK(3GOLD): 6GOLD<br />
            - PHOENIX EYE : 3GOLD<br />
            ※PHOENIX EYE(3GOLD)＋HAT TRICK (2GOLD) : 5GOLD<br />
            - TON80: 3GOLD<br />
            ※TON80(3GOLD)＋THREE IN A BED(2 GOLD) : 5GOLD<br />
            - THREE IN A BED (投中三倍區時) :2GOLD<br />
            ※計算公式THREE IN A BED(2GOLD)＋9MARK(3GOLD) : 5GOLD<br />
            - THREE IN A BED (投中雙倍區時) : 2GOLD<br />
            ※計算公式THREE IN A BED(2GOLD)＋6MARK(1GOLD) : 3GOLD<br />
            - 9 MARK : 3GOLD<br />
            - HAT TRICK : 2GOLD<br />
            - 8 MARK : 2GOLD<br />
            - 7 MARK : 2GOLD<br />
            - 6 MARK : 1GOLD<br />
            - 5 MARK : 1GOLD
          </div>
        </Panel>
        <Panel header={t(192)} key="2">
          <p>{1111111111111111111}</p>
        </Panel>
        <Panel header={t(193)} key="3">
          <p>{1111111111111111111}</p>
        </Panel>
        <Panel header={t(194)} key="4">
          <p>{1111111111111111111}</p>
        </Panel>
        <Panel header={t(195)} key="5">
          <p>{1111111111111111111}</p>
        </Panel>
      </Collapse>
    </div>
  )
}
export default ShopIntroduce;