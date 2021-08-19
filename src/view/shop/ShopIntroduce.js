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
            <div className='ShopIntroduceInfo'>※PHOENIX EYE(3GOLD)＋HAT TRICK (2GOLD) : 5GOLD</div>
            - TON80 : 3GOLD<br />
            <div className='ShopIntroduceInfo'>※ TON80(3GOLD)＋HIGH TON(2GOLD）: 5GOLD</div>
            - THREE IN A BED: 2GOLD<br />
            <div className='ShopIntroduceInfo'>※PHOENIX EYE(3GOLD)＋HAT TRICK (2GOLD) : 5GOLD</div>
            - HIGH TON : 2GOLD<br />
            - HAT TRICK : 2GOLD<br />
            - LOW TON : 1GOLD<br />
          </div>
          <div>CRICKET</div>
          <div>
            - WHITE HORSE : 3GOLD<br />
            <div className='ShopIntroduceInfo'>※WHITE HORSE(3GOLD)＋9MARK(3GOLD): 6GOLD</div>
            - PHOENIX EYE : 3GOLD<br />
            <div className='ShopIntroduceInfo'>※PHOENIX EYE(3GOLD)＋HAT TRICK (2GOLD) : 5GOLD</div>
            - TON80: 3GOLD<br />
            <div className='ShopIntroduceInfo'>※TON80(3GOLD)＋THREE IN A BED(2 GOLD) : 5GOLD</div>
            - THREE IN A BED (投中三倍區時) :2GOLD<br />
            <div className='ShopIntroduceInfo'>※計算公式THREE IN A BED(2GOLD)＋9MARK(3GOLD) : 5GOLD</div>
            - THREE IN A BED (投中雙倍區時) : 2GOLD<br />
            <div className='ShopIntroduceInfo'>※計算公式THREE IN A BED(2GOLD)＋6MARK(1GOLD) : 3GOLD</div>
            - 9 MARK : 3GOLD<br />
            - HAT TRICK : 2GOLD<br />
            - 8 MARK : 2GOLD<br />
            - 7 MARK : 2GOLD<br />
            - 6 MARK : 1GOLD<br />
            - 5 MARK : 1GOLD
          </div>
        </Panel>
        <Panel header={t(192)} key="2">
          <div className='ShopIntroduceTitle'>Gold Battle</div>
          <div>
            『GOLD BATTLE』是一種有效地增加GOLD的方法。<br />
            『GOLD BATTLE』是為了爭取對手的GOLD Point進行的一種遊戲。<br />
            如果獲勝的話, 可以獲得對手的GOLD Point。<br />
            Gold的投入數目取決於 VS 級別。因此，有可能一次獲得許多Gold。<br />
          </div>
          <div className='ShopIntroduceTitle'>可以進行GOLD BATTLE的GAME</div>
          <div>
            - COUNT-UP<br />
            - 301<br />
            - 501<br />
            - 701<br />
            - Standard Cricket<br />
          </div>
          <div className='ShopIntroduceTitle'>進行GOLD BATTLE的條件</div>
          <div>
            必須持有GOLD Point。<br />
            兩人比賽。<br />
          </div>
          <div className='ShopIntroduceTitle'>進行GOLD BATTLE的方法</div>
          <div>
            1. 選擇遊戲。<br />
            『VS MODE』的遊戲 在COUNT-UP/301/501/701/Standard Cricket 中選一個。<br />
            2. 選擇要遊戲的人數。<br />
            3. 把會員卡刷在機台的在讀卡器上拍卡, 讓機器能夠讀出個人的信息。<br />
            4. 選擇GOLD數量。<br />
               選擇GOLD數量方法如下 : 在遊戲之前的畫面上, 用三角形的按鈕(▽△)來設定選擇GOLD數量<br />
               在GOLD BATTLE 能投入GOLD數量<br />
               進行GOLD BATTLE時, 每個人能能投入GOLD數量為 『VS LEVEL較低者的VS LEVEL 的100倍』 但如果擁有GOLD數量少於上面的條件, 能投入的GOLD數量為擁有較少GOLD POINT者的所有上有GOLD POINT。<br />
            5. 開始遊戲<br />
          </div>
        </Panel>
        <Panel header={t(193)} key="3">
          <div className='ShopIntroduceTitle'>什麼是ITEM SHOP?</div>
          <div>
            在 GOLD STORE內, 利用GOLD POINT換取各種ITEM<br />

            When you apply the purchased items, you can enjoy special effects in the PHOENIX dart machine.v 從我們的官方網站註冊卡，即可在Gold Store裏購買商品或者變更商品的設定。<br />

            你還可以使用我們專爲智能手機開發的 PHOENIXDART 軟件<br />
          </div>
        </Panel>
        <Panel header={t(194)} key="4">
          <div className='ShopIntroduceTitle'>Gold Item 分類</div>
          <div>Gold Item的種類如下.</div>
          <div className='ShopIntroduceGoldItem'>
            <div>
              <span>AWARD</span><br />
            HAT TRICK ，LOWTON等動畫 Item.<br />
            </div>
            <div>
              <span>MARK AWARD</span><br />
            在CRICKET中，投中5Mark以上 指定的分值區時，Mark Award 的圖案<br />
            </div>
            <div>
              <span>SOUND</span><br />
            投中從15到20分數的三倍區(TRIPLE)或紅心(BULL)時發出的音效<br />
            </div>
            <div>
              <span>EFFECT</span><br />
            投中三倍區(Triple)時,出現的畫面<br />
            </div>
            <div>
              <span>STYLE</span><br />
            遊戲時的背景圖案<br />
            </div>
            <div>
              <span>DART THROW</span><br />
            出鏢動畫<br />
            </div>
            <div>
              <span>FRAME</span><br />
            遊戲畫面上的Camera Frame.<br />
            </div>
            <div>
              <span>DYNAMIC FRAME</span><br />
            遊戲畫面上的限定Camera Frame.<br />
            </div>
            <div>
              <span>BULL</span><br />
            投中紅心(Bull)時，發出的聲響.<br />
            </div>
            <div>
              <span>SET</span><br />
            成套购买每一个分类(Category)的item时使用。<br />
            </div>
          </div>
          <div className='ShopIntroduceTitle'>Item 種類</div>
          <div>
            按照Gold Item 的分類，適用的機種也有不同(Phoenix / VSPhoenix)<br />
            於item的”對應機器”一欄內，可獲悉Item適用的機種。
          </div>
          <div><span style={{ background: '#FD0000', padding: '0 5px', color: '#fff' }}>VSP</span>VSPhoenix 專用Item</div>
        </Panel>
        <Panel header={t(195)} key="5">
          <div className='ShopIntroduceTitle'>購買Item</div>
          <div>
            首次購買Item時，能夠使用該Item的限期為90/180天。<br />
            到期後須延長使用期間方可繼續使用。
          </div>
          <div className='ShopIntroduceInfo'>※注意：即使未使用的Item，也不能變更該Item的使用限期。</div>
          <div className='ShopIntroduceTitle'>Custom(Item設定與取消)</div>
          <div>
            在Item Shop的Item Package Page上，可以設定或是取消Item。
          </div>
          <div className='ShopIntroduceInfo'>※注意：即使未使用的Item，也不能變更該Item的使用限期。</div>
          <div className='ShopIntroduceTitle'>以items送禮</div>
          <div>您可以使用Gold贈送Items 給您的“朋友列表”或“最近的對手”。</div>
          <div className='ShopIntroduceInfo'>※只能贈送Items同一國家的朋友或同一國家的對手贈送Items。</div>
          <div className='ShopIntroduceInfo'>※好友列表是接受發出“申請成為朋友”請求的玩家列表</div>
          <div>▶如何採購作為禮物的商品</div>
          <div>
            在我們網站或是智能手機應用的商品採購頁面，會顯示一個禮物商品按鈕（鏈接）。 如果要送出禮物，請按這個按鈕採購商品。<br />
            從“朋友列表”裏選擇玩家，送出你的禮物。
          </div>
          <div className='ShopIntroduceInfo'>※你不能購買“Set Items”作為禮物。</div>
          <div>▶如何接受禮物</div>
          <div>
            你可以檢查禮品盒，看是否有禮物。<br />
            一檢查禮品盒，禮物即登記爲你的禮物。
          </div>
          <div className='ShopIntroduceInfo'>※如果禮物是你已經擁有的商品，使用期會延展 90/180 天。</div>
          <div className='ShopIntroduceInfo'>※使用期從你檢查禮品盒當日起開始倒數。如果未檢查禮品盒，則從收到禮物之日起減少 7 天。</div>
          <div className='ShopIntroduceTitle'>查看購買記錄</div>
          <div>
            在My Page的Gold Store 購買記錄頁面上，可以查看Gold Item的購買記錄及內容。<br />
            -購買記錄 :<br />
            您可以查看用金幣購買的所有配件的清單。<br />
            -購買內容 :<br />
            您可以查看從可用金幣購買的當前在售配件中購買的配件
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}
export default ShopIntroduce;