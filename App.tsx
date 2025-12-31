
import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, IceCream, ChevronDown, Check, Heart, Menu, X, Home, Flame, Zap, Settings2, BookOpen } from 'lucide-react';
import { recipes } from './data/recipes';
import { Category, Recipe } from './types';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { GuideModal } from './components/GuideModal';

const App: React.FC = () => {
  // Mobile Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  
  // Persisted States
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('creami_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [ratings, setRatings] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('creami_ratings');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('creami_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('creami_ratings', JSON.stringify(ratings));
  }, [ratings]);

  // Actions
  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const updateRating = (id: string, rating: number) => {
    setRatings(prev => ({ ...prev, [id]: rating }));
  };
  
  // Navigation State
  const [currentView, setCurrentView] = useState<'all' | 'favorites'>('all'); // Replaces showFavoritesOnly
  
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // Numeric Filters
  const [maxCalories, setMaxCalories] = useState<number | null>(null);
  const [minProtein, setMinProtein] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<string>('All');

  const categories = useMemo(() => Object.values(Category), []);

  const modes = useMemo(() => {
    const allModes = recipes.map(r => r.mode).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(allModes))];
  }, []);

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        recipe.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(recipe.category);
      const matchesCalories = maxCalories ? recipe.nutrition.calories <= maxCalories : true;
      const matchesProtein = minProtein ? recipe.nutrition.protein >= minProtein : true;
      const matchesMode = selectedMode === 'All' || recipe.mode === selectedMode;
      
      const matchesFavorite = currentView === 'favorites' ? favorites.includes(recipe.id) : true;

      return matchesSearch && matchesCategory && matchesCalories && matchesProtein && matchesMode && matchesFavorite;
    });
  }, [searchQuery, selectedCategories, maxCalories, minProtein, selectedMode, currentView, favorites]);

  // Reset function
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setMaxCalories(null);
    setMinProtein(null);
    setSelectedMode('All');
  };

  return (
    <div className="flex h-screen bg-apple-gray overflow-hidden font-sans text-apple-text">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-[280px] lg:w-[300px] bg-white border-r border-gray-200 shadow-xl lg:shadow-none
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-full
      `}>
        {/* Sidebar Header */}
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-md shrink-0">
               <IceCream size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Creami Chef</h1>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden ml-auto p-2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative group mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Main Nav */}
          <nav className="space-y-1 mb-8">
            <button
              onClick={() => { setCurrentView('all'); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentView === 'all' 
                  ? 'bg-black text-white shadow-lg shadow-black/10' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home size={18} />
              All Recipes
            </button>
            <button
              onClick={() => { setCurrentView('favorites'); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentView === 'favorites' 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Heart size={18} />
              My Favorites
            </button>

            {/* Guide Button */}
            <button
              onClick={() => { setIsGuideOpen(true); setIsSidebarOpen(false); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
            >
              <BookOpen size={18} />
              Guide & Tips
            </button>
          </nav>
        </div>

        {/* Scrollable Filters Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-8 custom-scrollbar">
          
          {/* Filters Header */}
          <div className="flex items-center gap-2 text-gray-900 font-bold text-sm uppercase tracking-wider">
            <Settings2 size={16} />
            Filters
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
            <div className="space-y-1.5">
              {categories.map((cat) => {
                const isSelected = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all
                      ${isSelected 
                        ? 'bg-blue-50 text-blue-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <span>{cat}</span>
                    {isSelected && <Check size={14} className="text-blue-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nutrition */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Nutrition Goals</h3>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-gray-600"><Flame size={14}/> Max Calories</span>
                  <span className="font-medium text-gray-900">{maxCalories || 'Any'}</span>
                </div>
                <input 
                  type="range" min="50" max="500" step="10"
                  value={maxCalories || 500}
                  onChange={(e) => setMaxCalories(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                   <span className="flex items-center gap-1.5 text-gray-600"><Zap size={14}/> Min Protein</span>
                   <span className="font-medium text-gray-900">{minProtein || 'Any'}</span>
                </div>
                <input 
                  type="range" min="0" max="50" step="1"
                  value={minProtein || 0}
                  onChange={(e) => setMinProtein(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>
            </div>
          </div>

          {/* Mode */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Machine Mode</h3>
            <div className="relative">
               <select 
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
               >
                 {modes.map(mode => (
                   <option key={mode} value={mode}>{mode}</option>
                 ))}
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                 <ChevronDown size={14} />
               </div>
            </div>
          </div>

          <button 
            onClick={resetFilters}
            className="w-full py-2 text-sm text-gray-400 hover:text-red-500 transition-colors border border-dashed border-gray-200 rounded-xl hover:border-red-200 hover:bg-red-50"
          >
            Reset Filters
          </button>

        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto bg-apple-gray relative w-full">
        
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
               <IceCream size={18} />
            </div>
            <span className="font-bold text-lg">Creami Chef</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 bg-gray-100 rounded-lg">
            <Menu size={20} />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 lg:mb-8 gap-4">
            <div>
               <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                 {currentView === 'favorites' ? 'My Favorites' : 'Discover Recipes'}
               </h2>
               <p className="text-gray-500 mt-1 text-sm lg:text-base">
                 {filteredRecipes.length} delicious recipe{filteredRecipes.length !== 1 && 's'} found
               </p>
            </div>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={setSelectedRecipe}
                  isFavorite={favorites.includes(recipe.id)}
                  onToggleFavorite={toggleFavorite}
                  rating={ratings[recipe.id]}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 lg:py-32 text-center">
               <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                 {currentView === 'favorites' ? <Heart size={32} className="text-gray-300" /> : <Search size={32} className="text-gray-300" />}
               </div>
               <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                 {currentView === 'favorites' ? 'No favorites yet' : 'No recipes found'}
               </h3>
               <p className="text-gray-500 max-w-sm mx-auto mb-8 text-sm">
                 {currentView === 'favorites' 
                   ? 'Start exploring and mark your favorite recipes to access them quickly here.' 
                   : "Try adjusting your filters or search for something else."}
               </p>
               {currentView !== 'favorites' && (
                 <button 
                   onClick={resetFilters}
                   className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 text-sm"
                 >
                   Clear all filters
                 </button>
               )}
            </div>
          )}
        </div>
      </main>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={toggleFavorite}
          rating={ratings[selectedRecipe.id] || 0}
          onUpdateRating={updateRating}
        />
      )}

      {/* Guide Modal */}
      {isGuideOpen && (
        <GuideModal onClose={() => setIsGuideOpen(false)} />
      )}
    </div>
  );
};

export default App;
