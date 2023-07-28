import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

// const tempCategory = menu.map((item) => item.category)
// const tempSet = new Set(tempCategory)
// const tempItems = ['all', ...tempSet]
// console.log(tempItems)

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
    console.log(category)
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
