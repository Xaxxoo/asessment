import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Categories from "./components/Categories";
import Pagination from './components/Pagination';

function App() {
  return (
    <div className='px-12'>
      <Navigation />
      <Hero />
      <Categories />
      <Pagination />
      
    </div>
  );
}

export default App;
