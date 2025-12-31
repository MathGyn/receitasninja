
import React, { useState } from 'react';
import { Recipe, Category } from '../types';
import { X, ChefHat, Clock, Send, Flame, Zap, Droplet, Star, Heart, Scale, ArrowLeft } from 'lucide-react';
import { askChef } from '../services/geminiService';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  rating: number;
  onUpdateRating: (id: string, rating: number) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ 
  recipe, 
  onClose, 
  isFavorite, 
  onToggleFavorite,
  rating,
  onUpdateRating
}) => {
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  if (!recipe) return null;

  const handleAskChef = async () => {
    if (!question.trim()) return;
    setIsLoading(true);
    setAiAnswer(null);
    try {
      const answer = await askChef(recipe, question);
      setAiAnswer(answer);
    } catch (e) {
      setAiAnswer("Could not reach the chef.");
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryColor = (cat: Category) => {
     switch (cat) {
      case Category.WHEY: return 'text-blue-600 bg-blue-50';
      case Category.YOGURT: return 'text-cyan-600 bg-cyan-50';
      case Category.COCONUT: return 'text-emerald-600 bg-emerald-50';
      case Category.COFFEE_CHOC: return 'text-amber-700 bg-amber-50';
      case Category.RED_FRUIT: return 'text-rose-600 bg-rose-50';
      case Category.TROPICAL: return 'text-yellow-600 bg-yellow-50';
      case Category.BANANA: return 'text-yellow-600 bg-yellow-50';
      case Category.GELATO: return 'text-indigo-600 bg-indigo-50';
      case Category.SORBET: return 'text-fuchsia-600 bg-fuchsia-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const themeClass = getCategoryColor(recipe.category);

  return (
    // Wrapper: Fixed inset-0 for both, but different styling strategies
    <div className="fixed inset-0 z-50 flex md:items-center md:justify-center bg-white md:bg-gray-900/40 md:backdrop-blur-sm md:p-6 transition-all">
      
      {/* Click outside to close (Desktop only) */}
      <div 
        className="hidden md:block absolute inset-0" 
        onClick={onClose}
      />
      
      {/* Main Container: Full screen on mobile, Rounded Modal on Desktop */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl bg-white md:rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fadeIn">
        
        {/* Mobile Sticky Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/95 backdrop-blur z-20 sticky top-0">
           <button 
            onClick={onClose}
            className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full"
           >
             <ArrowLeft size={22} />
           </button>
           <span className="font-bold text-gray-900 truncate max-w-[60%] text-sm">{recipe.title}</span>
           <button 
                onClick={() => onToggleFavorite(recipe.id)}
                className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400'}`}
            >
                <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
            </button>
        </div>

        {/* Desktop Absolute Header Controls */}
        <div className="hidden md:flex absolute top-4 right-4 z-10 gap-2">
            <button 
                onClick={() => onToggleFavorite(recipe.id)}
                className={`p-2 rounded-full transition-colors border ${isFavorite ? 'bg-red-50 text-red-500 border-red-100' : 'bg-white text-gray-300 border-gray-100 hover:text-gray-400'}`}
            >
                <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <button 
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500 border border-transparent"
            >
            <X size={20} />
            </button>
        </div>

        {/* Content Wrapper: Scrollable on mobile (single col), Split on desktop */}
        <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">

            {/* Left Column (Info) */}
            <div className="w-full md:w-5/12 bg-white md:bg-gray-50/80 p-5 md:p-8 flex flex-col md:border-r md:border-gray-100 md:overflow-y-auto custom-scrollbar">
            
            <div className="mb-4">
                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${themeClass}`}>
                {recipe.category}
                </span>
                <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">{recipe.title}</h2>
                
                <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 md:bg-white px-2.5 py-1.5 rounded-lg border border-gray-100 md:border-gray-200">
                    <Clock size={14} />
                    <span>Mode: <span className="text-gray-900">{recipe.mode || 'Lite Ice Cream'}</span></span>
                </div>
                {recipe.yield && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 md:bg-white px-2.5 py-1.5 rounded-lg border border-gray-100 md:border-gray-200">
                    <Scale size={14} />
                    <span>Rende: <span className="text-gray-900">{recipe.yield}</span></span>
                    </div>
                )}
                </div>
            </div>

            {/* Nutrition - Horizontal Scroll on Mobile to save space */}
            <div className="bg-white md:bg-transparent rounded-xl md:p-0 shadow-sm md:shadow-none border border-gray-100 md:border-none p-4 mb-6 md:mb-6">
                <h3 className="hidden md:block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Nutrição por Pote</h3>
                <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-y-4 md:gap-x-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                
                <div className="flex items-center gap-2.5 shrink-0 min-w-[80px]">
                    <div className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                    <Flame size={16} fill="currentColor" />
                    </div>
                    <div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">{recipe.nutrition.calories}</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Kcal</div>
                    </div>
                </div>
                
                <div className="w-px h-8 bg-gray-100 md:hidden"></div>

                <div className="flex items-center gap-2.5 shrink-0 min-w-[80px]">
                    <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg">
                    <Zap size={16} fill="currentColor" />
                    </div>
                    <div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">{recipe.nutrition.protein}g</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Prot</div>
                    </div>
                </div>

                <div className="w-px h-8 bg-gray-100 md:hidden"></div>

                <div className="flex items-center gap-2.5 shrink-0 min-w-[80px]">
                    <div className="p-1.5 bg-green-50 text-green-500 rounded-lg">
                    <Droplet size={16} fill="currentColor" />
                    </div>
                    <div>
                    <div className="text-lg font-bold text-gray-900">{recipe.nutrition.carbs}g</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Carb</div>
                    </div>
                </div>

                <div className="w-px h-8 bg-gray-100 md:hidden"></div>

                <div className="flex items-center gap-2.5 shrink-0 min-w-[80px]">
                    <div className="p-1.5 bg-purple-50 text-purple-500 rounded-lg">
                    <Star size={16} fill="currentColor" />
                    </div>
                    <div>
                    <div className="text-lg font-bold text-gray-900">{recipe.nutrition.fat}g</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase">Gord</div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Chef AI - Mobile Only (Top placement after nutrition) */}
            <div className="md:hidden mb-6">
                <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
                    <ChefHat size={16} className="text-blue-500" />
                    Dúvidas do Chef?
                </h3>
                 <div className="relative">
                    <input
                    type="text"
                    placeholder="Posso trocar o leite?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-all pr-10"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAskChef()}
                    />
                    <button 
                    onClick={handleAskChef}
                    disabled={isLoading}
                    className="absolute right-1.5 top-1.5 p-1.5 bg-gray-900 text-white rounded-lg disabled:opacity-50"
                    >
                    {isLoading ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={12} />}
                    </button>
                </div>
                {aiAnswer && (
                     <div className="mt-3 bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-gray-800 animate-fadeIn">
                        <p className="leading-relaxed text-xs">{aiAnswer}</p>
                     </div>
                )}
            </div>
            </div>

            {/* Right Column (Instructions) */}
            <div className="flex-1 p-5 md:p-8 bg-white md:overflow-y-auto md:max-h-[90vh] custom-scrollbar border-t md:border-t-0 border-gray-100">
            <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                Ingredientes
                </h3>
                <ul className="space-y-1">
                {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${themeClass.replace('bg-', 'bg-op-100 ')}`} style={{ backgroundColor: 'currentColor'}} />
                    <span className="text-gray-700 font-medium text-sm leading-snug">{ing}</span>
                    </li>
                ))}
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">Modo de Preparo</h3>
                <div className="space-y-0">
                {recipe.instructions.map((step, idx) => (
                    <div key={idx} className="group flex gap-3">
                    <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${themeClass}`}>
                        {idx + 1}
                        </div>
                        {idx !== recipe.instructions.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-100 my-0.5 group-hover:bg-gray-200 transition-colors" />
                        )}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm pt-0.5 pb-5">{step}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Rating Section */}
            <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Star size={16} className="text-yellow-500" fill="currentColor" />
                    Minha Avaliação
                </h3>
                <div 
                className="flex flex-wrap gap-2 items-center bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100"
                onMouseLeave={() => setHoverRating(0)}
                >
                    <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                        <button
                        key={star}
                        onClick={() => onUpdateRating(recipe.id, star)}
                        onMouseEnter={() => setHoverRating(star)}
                        className="p-0.5 focus:outline-none"
                        >
                        <Star 
                            size={20} 
                            fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                            className={`${(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-200`}
                            strokeWidth={(hoverRating || rating) >= star ? 0 : 2}
                        />
                        </button>
                    ))}
                    </div>
                    <div className="ml-auto md:ml-3 flex items-baseline gap-1">
                    <span className="text-xl md:text-2xl font-bold text-gray-800 tabular-nums">
                        {(hoverRating || rating) > 0 ? (hoverRating || rating) : '-'}
                    </span>
                    <span className="text-xs font-medium text-gray-400">/ 10</span>
                    </div>
                </div>
            </div>

            {/* AI Chef Section - Desktop Only */}
            <div className="hidden md:block bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-gray-900 font-bold text-sm">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                    <ChefHat size={18} />
                </div>
                <span>Dúvidas do Chef?</span>
                </div>
                
                {aiAnswer ? (
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 mb-3 text-sm text-gray-800 animate-fadeIn">
                    <p className="leading-relaxed text-sm">{aiAnswer}</p>
                    <button 
                    onClick={() => setAiAnswer(null)} 
                    className="block mt-2 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wide"
                    >
                    Fazer outra pergunta
                    </button>
                </div>
                ) : (
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Dica: Posso trocar o leite?"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all pr-10 shadow-sm"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAskChef()}
                    />
                    <button 
                    onClick={handleAskChef}
                    disabled={isLoading}
                    className="absolute right-2 top-2 p-1.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    {isLoading ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={14} />}
                    </button>
                </div>
                )}
                <p className="text-[10px] text-gray-400 mt-2 font-medium text-center">
                Powered by Google Gemini AI
                </p>
            </div>
            
            {/* Bottom Padding for Mobile Scrolling */}
            <div className="h-10 md:hidden" />
            </div>
        </div>
      </div>
    </div>
  );
};
