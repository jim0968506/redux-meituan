import "./index.scss"

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='menu'>
        <div className='menu-item active'>
          點菜<span className='menu-active-bar'></span>
        </div>
        <div className='menu-item'>
          評價<span className='menu-comment'>1796</span>
        </div>
        <div className='menu-item'>商家</div>
      </div>

      <div className='menu-search'>
        <div className='menu-form'>
          <div className='menu-search-icon'></div>
          <div className='menu-search-text'>請輸入菜品名稱</div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
