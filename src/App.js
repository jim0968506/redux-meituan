import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import Cart from "./components/Cart"
import FoodsCategory from "./components/FoodsCategory"

import "./App.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFoodsList } from "./store/modules/takeaway"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFoodsList())
  }, [dispatch])

  const { foodsList, activeIndex } = useSelector((state) => state.foods)
  return (
    <div className='home'>
      {/* 導航 */}
      <NavBar />

      {/* 內容 */}
      <div className='content-wrap'>
        <div className='content'>
          <Menu />

          <div className='list-content'>
            <div className='goods-list'>
              {/* 外賣商品列表 */}
              {foodsList.map((item, index) => {
                return (
                  activeIndex === index && (
                    <FoodsCategory
                      key={item.tag}
                      // 列表標題
                      name={item.name}
                      // 列表商品
                      foods={item.foods}
                    />
                  )
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 購物車 */}
      <Cart />
    </div>
  )
}

export default App
