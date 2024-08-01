import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/selectors';
import TaskList from './TaskLists';

const CategorySelector = () => {
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(Number(e.target.value));
  };

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      {selectedCategory && <TaskList categoryId={selectedCategory} />}
    </div>
  );
};

export default CategorySelector;
