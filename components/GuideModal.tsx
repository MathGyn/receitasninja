
import React from 'react';
import { X, BookOpen, Snowflake, Wind, Thermometer, Layers, Clock } from 'lucide-react';

interface GuideModalProps {
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-[24px] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-scaleIn">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 text-yellow-600 rounded-xl">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Guia & Dicas de Ouro</h2>
              <p className="text-sm text-gray-500">Para o máximo sucesso com sua Ninja Creami</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar space-y-8">
          
          {/* Section 1: Preparation */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <Snowflake className="text-blue-500" size={20} />
              Preparação da Base
            </h3>
            <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 space-y-3">
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span><strong>Mexa bem:</strong> Assegure-se de que todos os ingredientes (especialmente whey e adoçantes) estejam bem dissolvidos antes de congelar.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span><strong>Cubos pequenos:</strong> Se usar frutas frescas, corte em cubos pequenos. Elas congelam melhor e processam mais uniformemente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span><strong>Regra das 24h:</strong> O tempo mínimo recomendado de congelamento é 24 horas. Se o centro não estiver totalmente congelado, a textura ficará líquida.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Processing */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <Wind className="text-purple-500" size={20} />
              Processamento & Modos
            </h3>
            <div className="bg-purple-50/50 rounded-xl p-5 border border-purple-100 space-y-4">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-50 shadow-sm">
                <Thermometer size={18} className="text-purple-400 mt-0.5" />
                <p className="text-sm text-gray-600"><strong>Dica de Chef:</strong> Passe o pote sob água morna por 30-45 segundos antes de processar. Isso solta as laterais e evita gelo nas bordas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-purple-50 text-center">
                  <div className="font-bold text-purple-700 text-sm">Lite Ice Cream</div>
                  <div className="text-xs text-gray-500 mt-1">Para receitas padrão, whey e leite (3 min + re-spin)</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-50 text-center">
                  <div className="font-bold text-purple-700 text-sm">Gelato</div>
                  <div className="text-xs text-gray-500 mt-1">Para misturas mais densas com iogurte grego (4 min)</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-50 text-center">
                  <div className="font-bold text-purple-700 text-sm">Sorbet / Slushi</div>
                  <div className="text-xs text-gray-500 mt-1">Para frutas puras ou smoothie bowls</div>
                </div>
              </div>

               <p className="text-sm text-gray-600 italic border-l-4 border-purple-200 pl-3">
                 <strong>Re-spin é essencial:</strong> Se sair farelento, adicione uma colher de líquido e use o botão "Re-spin" (1 min). Isso muda tudo!
               </p>
            </div>
          </section>

          {/* Section 3: Toppings */}
          <section>
             <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <Layers className="text-green-500" size={20} />
              Toppings "Sem Culpa"
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800">Granola Low Carb</div>
                    <div className="text-xs text-gray-500">2 colheres = ~50 kcal</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800">Coco Ralado (s/ açúcar)</div>
                    <div className="text-xs text-gray-500">1 colher = ~10 kcal</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800">Frutas Frescas</div>
                    <div className="text-xs text-gray-500">Pequena porção = ~30 kcal</div>
                </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800">Castanhas</div>
                    <div className="text-xs text-gray-500">1 colher = ~50 kcal</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800">Calda Zero</div>
                    <div className="text-xs text-gray-500">1 colher = ~20 kcal</div>
                </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800">Sementes Abóbora</div>
                    <div className="text-xs text-gray-500">1 colher = ~40 kcal</div>
                </div>
            </div>
          </section>

           {/* Section 4: Storage */}
           <section>
             <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <Clock className="text-orange-500" size={20} />
              Armazenamento
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed bg-orange-50 p-4 rounded-xl border border-orange-100">
              As bases congeladas mantêm qualidade por até <strong>30 dias</strong> no freezer. Sempre tampe bem para evitar cristais de gelo. Se sobrar sorvete processado, alise a superfície antes de recongelar. Ao comer novamente, use o re-spin.
            </p>
           </section>

        </div>
      </div>
    </div>
  );
};
