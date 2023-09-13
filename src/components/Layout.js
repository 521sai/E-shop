import React from 'react'
import Search from './Search';
import { Link,Outlet } from 'react-router-dom';
import { HomeIcon,CartIcon } from './icons';
const Layout = ({ categories}) => {

    const RenderCategories =()=>{
        return categories.data.map(c=>
          <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
          
          );
      }
  return (
    
    <>
    <header>
      <div id='headerHomeIcon'>
        <Link to={'/'}><HomeIcon width={40}/></Link>
      </div>
      <Search/>
      <div id="headerTitle">eShop</div>
      <div id='headerCartIcon'>
        <Link to={'/basket'}><CartIcon width={40}/></Link>
      </div>
    </header>

    <section>
      <nav>
        { categories.errorMeassage && <div>Error: {categories.errorMeassage}</div>}
      <ul>
       { categories.data && RenderCategories() }
       </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </section>
    <footer>
      <Link to ="/">Home</Link> | <Link to='/Basket'>Basket</Link>
    </footer>
    
    </>
  )
}

export default Layout