'use client';

import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  // Get current theme
  const isDarkTheme =
    document.documentElement.getAttribute('data-theme') === 'dark';

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="search-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="search-button"
          disabled={isLoading || !city.trim()}
        >
          {isLoading ? (
            <ClipLoader
              size={20}
              color={isDarkTheme ? '#ffffff' : '#1f2937'}
              loading={isLoading}
            />
          ) : (
            <FiSearch size={20} />
          )}
        </button>
      </div>
    </form>
  );
};
