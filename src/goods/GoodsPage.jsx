import './GoodsPage.css'
import Cards from '../common-components/cards/Cards'
import FilterSection from './filter-section/FilterSection'
import Header from '../common-components/header/Header'

export default function App() {

  return (
    <>
      <Header></Header>
      <div className="container">
        <Cards></Cards>
        <FilterSection></FilterSection>
      </div>
    </>
  )
}

