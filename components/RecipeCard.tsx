import React from 'react';
import { Recipe, Category } from '../types';
import { Flame, Zap, Droplet, Coffee, Cherry, Sun, Leaf, Nut, Snowflake, Star, Utensils, Heart, Citrus } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  rating?: number;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, isFavorite, onToggleFavorite, rating }) => {
  
  // Configuration for visual theme based on category
  const getCategoryConfig = (cat: Category) => {
    switch (cat) {
      case Category.WHEY: 
        return { color: 'bg-blue-50 text-blue-600 border-blue-100', icon: Zap };
      case Category.YOGURT: 
      case Category.NATURAL_YOGURT:
        return { color: 'bg-cyan-50 text-cyan-600 border-cyan-100', icon: Droplet };
      case Category.COCONUT: 
        return { color: 'bg-emerald-50 text-emerald-600 border-emerald-100', icon: Leaf };
      case Category.COFFEE_CHOC: 
        return { color: 'bg-amber-50 text-amber-700 border-amber-100', icon: Coffee };
      case Category.RED_FRUIT: 
        return { color: 'bg-rose-50 text-rose-600 border-rose-100', icon: Cherry };
      case Category.TROPICAL: 
      case Category.BANANA:
        return { color: 'bg-yellow-50 text-yellow-600 border-yellow-100', icon: Sun };
      case Category.MATCHA_TEA: 
        return { color: 'bg-lime-50 text-lime-600 border-lime-100', icon: Leaf };
      case Category.SPICES: 
        return { color: 'bg-orange-50 text-orange-600 border-orange-100', icon: Star };
      case Category.NUTS: 
        return { color: 'bg-stone-100 text-stone-600 border-stone-200', icon: Nut };
      case Category.GELATO: 
        return { color: 'bg-indigo-50 text-indigo-600 border-indigo-100', icon: Snowflake };
      case Category.SMOOTHIE: 
        return { color: 'bg-pink-50 text-pink-600 border-pink-100', icon: Utensils };
      case Category.SORBET:
        return { color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100', icon: Citrus };
      default: 
        return { color: 'bg-gray-50 text-gray-600 border-gray-100', icon: Utensils };
    }
  };

  const config = getCategoryConfig(recipe.category);
  const Icon = config.icon;

  return (
    <div 
      onClick={() => onClick(recipe)}
      className="group relative bg-white rounded-2xl md:rounded-[24px] border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 p-4 md:p-5 cursor-pointer flex flex-col h-full hover:-translate-y-1 active:scale-95 md:active:scale-100"
    >
      {/* Header Area */}
      <div className="flex justify-between items-start mb-3 md:mb-4">
        {/* Left: Icon */}
        <div className={`p-2 md:p-2.5 rounded-xl md:rounded-2xl ${config.color} bg-opacity-50 shrink-0`}>
          <Icon size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
        </div>

        {/* Right: Actions (Rating + Favorite) */}
        <div className="flex items-center gap-2 pl-2">
          {rating && rating > 0 && (
            <div className="px-1.5 py-1 md:px-2 md:py-1.5 bg-yellow-50 text-yellow-700 rounded-lg text-[10px] md:text-xs font-bold flex items-center gap-1 border border-yellow-200">
              <Star size={10} className="md:w-3 md:h-3 text-yellow-500" fill="currentColor" />
              <span>{rating}</span>
            </div>
          )}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
            className={`p-1.5 rounded-full transition-colors ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-300 hover:text-gray-500'}`}
          >
            <Heart size={16} className="md:w-[18px] md:h-[18px]" fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* Mode Tag (Moved below header to avoid collision) */}
      <div className="mb-2 md:mb-3">
         <span className={`inline-block text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 md:px-2 rounded-md ${config.color} bg-opacity-30`}>
          {recipe.mode || 'Creami'}
        </span>
      </div>

      {/* Title Area */}
      <div className="flex-grow">
        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-1">
          {recipe.title}
        </h3>
        <p className="text-[10px] md:text-xs text-gray-400 font-medium">
          {recipe.category}
        </p>
      </div>
      
      {/* Divider */}
      <div className="h-px w-full bg-gray-100 my-3 md:my-4" />

      {/* Macros Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg border border-gray-100">
          <Flame size={10} className="md:w-3 md:h-3 text-orange-500 fill-orange-500" />
          <span className="text-[10px] md:text-xs font-bold">{recipe.nutrition.calories}</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg border border-gray-100">
          <Zap size={10} className="md:w-3 md:h-3 text-blue-500 fill-blue-500" />
          <span className="text-[10px] md:text-xs font-bold">{recipe.nutrition.protein}g</span>
        </div>
      </div>
    </div>
  );
};