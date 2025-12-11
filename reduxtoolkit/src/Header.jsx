import AddtoCart from "./AddtoCart";


const Header = () => {
    
    return (
         <header className="main-header">
    <div className="logo">MyShop</div>

    <nav className="nav-links">
      <a href="/">Home</a>
      
    </nav>
            
    <AddtoCart  />

    
  </header>
        
    )
}


export default Header;
