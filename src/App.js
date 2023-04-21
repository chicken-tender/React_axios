import './App.css';
import { useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = (category) => setCategory(category);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
