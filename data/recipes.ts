
import { Recipe, Category } from '../types';

export const recipes: Recipe[] = [
  // --- 1. Whey Protein ---
  {
    id: '1',
    title: 'Baunilha Clássica Proteica',
    category: Category.WHEY,
    nutrition: { calories: 145, protein: 18, carbs: 8, fat: 3 },
    ingredients: ['400ml leite desnatado', '1 scoop (30g) whey protein baunilha', '1 colher chá stevia', '½ colher chá extrato baunilha'],
    instructions: ['Coloque o leite no copo da Creami', 'Adicione o whey protein e mexa bem', 'Adicione o adoçante e extrato de baunilha', 'Tampe e congele por 24 horas', 'Passe sob água morna por 30s', 'Processe no modo Lite Ice Cream', 'Faça re-spin se necessário'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '2',
    title: 'Chocolate Proteico Intenso',
    category: Category.WHEY,
    nutrition: { calories: 168, protein: 20, carbs: 10, fat: 4 },
    ingredients: ['380ml leite desnatado', '1 scoop (30g) whey protein chocolate', '1 colher sopa cacau em pó (3g)', '1 colher chá stevia', 'Pitada de sal'],
    instructions: ['Dissolva whey e cacau no leite', 'Adicione stevia e sal', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '3',
    title: 'Morango com Whey Proteico',
    category: Category.WHEY,
    nutrition: { calories: 152, protein: 17, carbs: 12, fat: 3 },
    ingredients: ['350ml leite desnatado', '100g morangos congelados', '1 scoop (30g) whey protein morango', '1 colher chá adoçante', '½ colher sopa iogurte grego'],
    instructions: ['Pique morangos', 'Misture leite, whey e iogurte', 'Adicione morangos e adoçante', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '4',
    title: 'Banana com Pasta de Amendoim Proteica',
    category: Category.WHEY,
    nutrition: { calories: 210, protein: 19, carbs: 18, fat: 6 },
    ingredients: ['350ml leite integral', '½ banana média congelada', '1 scoop (30g) whey baunilha', '1 colher sopa pasta de amendoim (16g)', '½ colher chá adoçante'],
    instructions: ['Dissolva pasta no leite', 'Adicione whey e banana', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '5',
    title: 'Café Espresso Proteico',
    category: Category.WHEY,
    nutrition: { calories: 138, protein: 19, carbs: 6, fat: 3 },
    ingredients: ['370ml leite desnatado', '60ml café espresso resfriado', '1 scoop (30g) whey baunilha', '1 colher chá adoçante', 'Pitada de canela'],
    instructions: ['Misture leite, café e whey', 'Adicione adoçante e canela', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '6',
    title: 'Melancia e Whey Proteico',
    category: Category.WHEY,
    nutrition: { calories: 135, protein: 16, carbs: 14, fat: 2 },
    ingredients: ['300ml leite desnatado', '150g melancia congelada cubos', '1 scoop (30g) whey neutro/baunilha', '1 colher chá adoçante', 'Suco de ½ limão'],
    instructions: ['Misture leite e whey', 'Adicione melancia, limão e adoçante', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '7',
    title: 'Abacaxi com Coconut Proteico',
    category: Category.WHEY,
    nutrition: { calories: 162, protein: 17, carbs: 16, fat: 4 },
    ingredients: ['350ml leite de coco light', '120g abacaxi congelado', '1 scoop (30g) whey baunilha', '1 colher chá adoçante', '1 colher sopa coco ralado'],
    instructions: ['Misture leite coco e whey', 'Adicione abacaxi e coco ralado', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '8',
    title: 'Mirtilo e Proteína',
    category: Category.WHEY,
    nutrition: { calories: 148, protein: 18, carbs: 11, fat: 3 },
    ingredients: ['400ml leite desnatado', '100g mirtilos congelados', '1 scoop (30g) whey baunilha', '½ colher chá adoçante', 'Extrato de baunilha'],
    instructions: ['Misture leite e whey', 'Adicione mirtilos e adoçante', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '9',
    title: 'Goiaba com Whey Proteico',
    category: Category.WHEY,
    nutrition: { calories: 155, protein: 17, carbs: 15, fat: 3 },
    ingredients: ['380ml leite desnatado', '120g goiaba congelada', '1 scoop (30g) whey baunilha', '1 colher chá adoçante', 'Gengibre em pó (opcional)'],
    instructions: ['Dissolva whey no leite', 'Adicione goiaba e temperos', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '10',
    title: 'Pêssego e Proteína',
    category: Category.WHEY,
    nutrition: { calories: 158, protein: 18, carbs: 13, fat: 3 },
    ingredients: ['380ml leite desnatado', '120g pêssego congelado', '1 scoop (30g) whey baunilha', '1 colher chá adoçante', '¼ colher chá canela'],
    instructions: ['Prepare base com leite e whey', 'Adicione pêssego e canela', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 2. Iogurte Grego ---
  {
    id: '11',
    title: 'Iogurte Grego com Mel e Amêndoa',
    category: Category.YOGURT,
    nutrition: { calories: 165, protein: 12, carbs: 16, fat: 5 },
    ingredients: ['300ml iogurte grego 0%', '120ml leite desnatado', '1 colher chá mel', '1 colher sopa amêndoas picadas'],
    instructions: ['Misture iogurte, leite e mel', 'Polvilhe amêndoas', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '12',
    title: 'Iogurte Grego com Granola Low Carb',
    category: Category.YOGURT,
    nutrition: { calories: 172, protein: 13, carbs: 14, fat: 6 },
    ingredients: ['320ml iogurte grego 0%', '100ml leite desnatado', '2 colheres sopa granola low carb', 'Baunilha e adoçante'],
    instructions: ['Misture líquidos e congele 24h', 'Processe', 'Sirva com granola'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '13',
    title: 'Iogurte Grego com Banana Congelada',
    category: Category.YOGURT,
    nutrition: { calories: 156, protein: 11, carbs: 20, fat: 3 },
    ingredients: ['300ml iogurte grego 0%', '120ml leite desnatado', '½ banana congelada', 'Canela e adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '14',
    title: 'Iogurte Grego com Mel e Nozes',
    category: Category.YOGURT,
    nutrition: { calories: 178, protein: 12, carbs: 15, fat: 7 },
    ingredients: ['310ml iogurte grego 0%', '110ml leite desnatado', '1 colher chá mel', '1 colher sopa nozes picadas'],
    instructions: ['Misture líquidos, congele 24h', 'Processe', 'Decore com nozes'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '15',
    title: 'Iogurte Grego com Cereal Integral',
    category: Category.YOGURT,
    nutrition: { calories: 168, protein: 14, carbs: 18, fat: 4 },
    ingredients: ['320ml iogurte grego 0%', '100ml leite desnatado', '3 colheres sopa cereal integral', 'Baunilha'],
    instructions: ['Congele a base líquida 24h', 'Processe', 'Sirva com cereal'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '16',
    title: 'Iogurte Grego com Morango',
    category: Category.YOGURT,
    nutrition: { calories: 142, protein: 11, carbs: 17, fat: 3 },
    ingredients: ['310ml iogurte grego 0%', '110ml leite desnatado', '100g morangos congelados', 'Baunilha e adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '17',
    title: 'Iogurte Grego com Mirtilo e Mel',
    category: Category.YOGURT,
    nutrition: { calories: 158, protein: 12, carbs: 18, fat: 3 },
    ingredients: ['300ml iogurte grego 0%', '110ml leite desnatado', '90g mirtilos congelados', '1 colher chá mel'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '18',
    title: 'Iogurte Grego com Coco Ralado',
    category: Category.YOGURT,
    nutrition: { calories: 165, protein: 11, carbs: 14, fat: 6 },
    ingredients: ['320ml iogurte grego 0%', '100ml leite de coco light', '2 colheres sopa coco ralado', 'Adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '19',
    title: 'Iogurte Grego com Abacaxi',
    category: Category.YOGURT,
    nutrition: { calories: 152, protein: 11, carbs: 19, fat: 3 },
    ingredients: ['310ml iogurte grego 0%', '110ml leite desnatado', '100g abacaxi congelado', 'Suco ¼ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '20',
    title: 'Iogurte Grego com Goiaba',
    category: Category.YOGURT,
    nutrition: { calories: 155, protein: 11, carbs: 20, fat: 3 },
    ingredients: ['310ml iogurte grego 0%', '110ml leite desnatado', '110g goiaba congelada', 'Gengibre pó'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 3. Leite de Coco ---
  {
    id: '21',
    title: 'Coco Light com Proteína',
    category: Category.COCONUT,
    nutrition: { calories: 148, protein: 16, carbs: 12, fat: 4 },
    ingredients: ['380ml leite de coco light', '1 scoop (30g) whey baunilha', '1 colher chá adoçante', '½ colher sopa coco ralado'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '22',
    title: 'Coco com Melancia',
    category: Category.COCONUT,
    nutrition: { calories: 138, protein: 2, carbs: 16, fat: 5 },
    ingredients: ['300ml leite de coco light', '150g melancia congelada', 'Suco ½ limão', 'Adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '23',
    title: 'Coco com Abacaxi (Tropical)',
    category: Category.COCONUT,
    nutrition: { calories: 155, protein: 2, carbs: 18, fat: 5 },
    ingredients: ['320ml leite de coco light', '130g abacaxi congelado', 'Suco ¼ limão', 'Coco ralado'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '24',
    title: 'Coco com Mirtilo',
    category: Category.COCONUT,
    nutrition: { calories: 142, protein: 2, carbs: 14, fat: 5 },
    ingredients: ['350ml leite de coco light', '100g mirtilos congelados', 'Baunilha e adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '25',
    title: 'Coco com Morango',
    category: Category.COCONUT,
    nutrition: { calories: 138, protein: 2, carbs: 15, fat: 5 },
    ingredients: ['340ml leite de coco light', '120g morangos congelados', 'Coco ralado e adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 4. Café e Chocolate ---
  {
    id: '26',
    title: 'Café com Chocolate Proteico',
    category: Category.COFFEE_CHOC,
    nutrition: { calories: 175, protein: 18, carbs: 14, fat: 5 },
    ingredients: ['350ml leite desnatado', '70ml café espresso frio', '1 scoop whey chocolate', '1 colher sopa cacau'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '27',
    title: 'Chocolate Intenso com Avelã',
    category: Category.COFFEE_CHOC,
    nutrition: { calories: 182, protein: 5, carbs: 16, fat: 10 },
    ingredients: ['370ml leite desnatado', '2 colheres sopa cacau', '1 colher sopa pasta avelã', 'Adoçante'],
    instructions: ['Misture leite, cacau e pasta de avelã', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '28',
    title: 'Chocolate Branco Proteico',
    category: Category.COFFEE_CHOC,
    nutrition: { calories: 168, protein: 19, carbs: 12, fat: 4 },
    ingredients: ['380ml leite desnatado', '1 scoop whey baunilha', '2 colheres sopa chocolate branco pó zero', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '29',
    title: 'Mocca (Chocolate + Café)',
    category: Category.COFFEE_CHOC,
    nutrition: { calories: 162, protein: 17, carbs: 11, fat: 4 },
    ingredients: ['330ml leite desnatado', '80ml café espresso frio', '1 scoop whey chocolate', '1 colher sopa cacau'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '30',
    title: 'Chocolate com Morango',
    category: Category.COFFEE_CHOC,
    nutrition: { calories: 158, protein: 4, carbs: 18, fat: 6 },
    ingredients: ['350ml leite desnatado', '100g morangos', '1 colher sopa cacau', '½ colher sopa óleo de coco'],
    instructions: ['Dissolva cacau e óleo no leite', 'Adicione morangos', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 5. Frutas Vermelhas ---
  {
    id: '31',
    title: 'Blueberry Intenso',
    category: Category.RED_FRUIT,
    nutrition: { calories: 145, protein: 3, carbs: 16, fat: 5 },
    ingredients: ['350ml leite desnatado', '130g mirtilos', '½ colher sopa mel', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '32',
    title: 'Morango Completo',
    category: Category.RED_FRUIT,
    nutrition: { calories: 142, protein: 3, carbs: 17, fat: 4 },
    ingredients: ['360ml leite desnatado', '120g morangos', '½ colher sopa mel', 'Suco ¼ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '33',
    title: 'Mix de Frutas Vermelhas',
    category: Category.RED_FRUIT,
    nutrition: { calories: 148, protein: 3, carbs: 18, fat: 4 },
    ingredients: ['340ml leite desnatado', '50g morango', '40g mirtilo', '40g framboesa', 'Mel'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '34',
    title: 'Framboesa Delicada',
    category: Category.RED_FRUIT,
    nutrition: { calories: 138, protein: 3, carbs: 15, fat: 4 },
    ingredients: ['370ml leite desnatado', '100g framboesa', 'Baunilha', 'Adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '35',
    title: 'Cranberry com Laranja',
    category: Category.RED_FRUIT,
    nutrition: { calories: 152, protein: 3, carbs: 18, fat: 4 },
    ingredients: ['350ml leite desnatado', '80g cranberry congelado', '60ml suco laranja', 'Canela'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 6. Frutas Tropicais ---
  {
    id: '36',
    title: 'Abacaxi Tropical Puro',
    category: Category.TROPICAL,
    nutrition: { calories: 138, protein: 2, carbs: 18, fat: 4 },
    ingredients: ['360ml leite desnatado', '140g abacaxi cubos', 'Mel', 'Suco ¼ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '37',
    title: 'Melancia e Hortelã',
    category: Category.TROPICAL,
    nutrition: { calories: 128, protein: 2, carbs: 15, fat: 4 },
    ingredients: ['340ml leite desnatado', '160g melancia cubos', '8 folhas hortelã', 'Suco ½ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '38',
    title: 'Goiaba Rosa',
    category: Category.TROPICAL,
    nutrition: { calories: 145, protein: 2, carbs: 18, fat: 4 },
    ingredients: ['350ml leite desnatado', '130g goiaba cubos', 'Mel', 'Gengibre em pó'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '39',
    title: 'Maracujá Delícia',
    category: Category.TROPICAL,
    nutrition: { calories: 135, protein: 3, carbs: 16, fat: 4 },
    ingredients: ['350ml leite desnatado', '100g polpa maracujá', 'Mel', 'Adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '40',
    title: 'Mango Lassi (Manga + Iogurte)',
    category: Category.TROPICAL,
    nutrition: { calories: 158, protein: 5, carbs: 20, fat: 4 },
    ingredients: ['250ml leite desnatado', '100ml iogurte grego', '100g manga cubos', 'Cardamomo'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 7. Banana ---
  {
    id: '41',
    title: 'Banana com Cacau',
    category: Category.BANANA,
    nutrition: { calories: 168, protein: 3, carbs: 24, fat: 4 },
    ingredients: ['350ml leite desnatado', '¾ banana congelada', '1 colher sopa cacau', 'Canela'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '42',
    title: 'Banana com Mel',
    category: Category.BANANA,
    nutrition: { calories: 175, protein: 2, carbs: 26, fat: 4 },
    ingredients: ['360ml leite desnatado', '½ banana congelada', 'Mel', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '43',
    title: 'Banana com Pasta de Amendoim',
    category: Category.BANANA,
    nutrition: { calories: 215, protein: 6, carbs: 20, fat: 8 },
    ingredients: ['340ml leite integral', '½ banana congelada', '1,5 colher sopa pasta amendoim', 'Sal'],
    instructions: ['Dissolva pasta no leite', 'Adicione banana', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '44',
    title: 'Banana com Canela Pura',
    category: Category.BANANA,
    nutrition: { calories: 142, protein: 2, carbs: 24, fat: 3 },
    ingredients: ['370ml leite desnatado', '½ banana congelada', 'Canela', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '45',
    title: 'Banana com Aveia',
    category: Category.BANANA,
    nutrition: { calories: 178, protein: 6, carbs: 26, fat: 4 },
    ingredients: ['340ml leite desnatado', '½ banana congelada', '3 colheres sopa aveia', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 8. Especiarias ---
  {
    id: '46',
    title: 'Chai Spiced Cream',
    category: Category.SPICES,
    nutrition: { calories: 148, protein: 4, carbs: 14, fat: 5 },
    ingredients: ['380ml leite desnatado', '1 scoop whey baunilha', 'Mix: canela, gengibre, noz-moscada, cravo'],
    instructions: ['Misture leite, whey e especiarias', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '47',
    title: 'Gengibre com Limão',
    category: Category.SPICES,
    nutrition: { calories: 128, protein: 2, carbs: 15, fat: 4 },
    ingredients: ['360ml leite desnatado', '½ colher chá gengibre', 'Suco 1 limão + raspas', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '48',
    title: 'Canela com Maçã',
    category: Category.SPICES,
    nutrition: { calories: 135, protein: 3, carbs: 17, fat: 4 },
    ingredients: ['360ml leite desnatado', '100g maçã cubos', 'Canela', 'Noz-moscada'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '49',
    title: 'Cravo e Pimenta',
    category: Category.SPICES,
    nutrition: { calories: 132, protein: 2, carbs: 15, fat: 4 },
    ingredients: ['370ml leite desnatado', 'Cravo pó', 'Pimenta-do-reino', 'Canela', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '50',
    title: 'Cardamomo com Mel',
    category: Category.SPICES,
    nutrition: { calories: 145, protein: 2, carbs: 18, fat: 4 },
    ingredients: ['360ml leite desnatado', 'Mel', 'Cardamomo pó', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 9. Matcha e Chá ---
  {
    id: '51',
    title: 'Matcha Premium',
    category: Category.MATCHA_TEA,
    nutrition: { calories: 128, protein: 3, carbs: 12, fat: 4 },
    ingredients: ['360ml leite desnatado', '1 colher chá matcha', 'Baunilha', 'Sal'],
    instructions: ['Dissolva matcha', 'Misture com leite', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '52',
    title: 'Matcha com Leite de Coco',
    category: Category.MATCHA_TEA,
    nutrition: { calories: 142, protein: 2, carbs: 12, fat: 6 },
    ingredients: ['340ml leite de coco light', '1 colher chá matcha', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '53',
    title: 'Chá Verde com Mel',
    category: Category.MATCHA_TEA,
    nutrition: { calories: 138, protein: 2, carbs: 16, fat: 4 },
    ingredients: ['340ml leite desnatado', '60ml chá verde forte', 'Mel', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '54',
    title: 'Chai Tea Latte',
    category: Category.MATCHA_TEA,
    nutrition: { calories: 145, protein: 3, carbs: 15, fat: 4 },
    ingredients: ['350ml leite desnatado', '80ml chai tea', '1 scoop whey baunilha', 'Canela'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '55',
    title: 'Hibisco com Gengibre',
    category: Category.MATCHA_TEA,
    nutrition: { calories: 125, protein: 2, carbs: 14, fat: 4 },
    ingredients: ['340ml leite desnatado', '80ml chá hibisco', 'Gengibre pó', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 10. Nozes e Sementes ---
  {
    id: '56',
    title: 'Amendoim em Pó',
    category: Category.NUTS,
    nutrition: { calories: 178, protein: 7, carbs: 12, fat: 10 },
    ingredients: ['380ml leite integral', '2 colheres sopa amendoim pó', '1 scoop whey', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '57',
    title: 'Noz-Macadâmia Delicada',
    category: Category.NUTS,
    nutrition: { calories: 192, protein: 4, carbs: 11, fat: 13 },
    ingredients: ['370ml leite integral', '1 colher sopa pasta macadâmia', 'Baunilha', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '58',
    title: 'Linhaça com Aveia',
    category: Category.NUTS,
    nutrition: { calories: 162, protein: 6, carbs: 18, fat: 5 },
    ingredients: ['340ml leite desnatado', '2 colheres sopa linhaça', '2 colheres sopa aveia', 'Canela'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '59',
    title: 'Chia com Coco',
    category: Category.NUTS,
    nutrition: { calories: 158, protein: 4, carbs: 14, fat: 7 },
    ingredients: ['330ml leite de coco light', '1 colher sopa chia', '1 colher sopa coco ralado', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '60',
    title: 'Sunflower Seed Cream',
    category: Category.NUTS,
    nutrition: { calories: 168, protein: 6, carbs: 14, fat: 8 },
    ingredients: ['360ml leite desnatado', '2 colheres sopa pasta girassol', '1 scoop whey', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 11. Iogurte Natural ---
  {
    id: '61',
    title: 'Iogurte Natural com Mel',
    category: Category.NATURAL_YOGURT,
    nutrition: { calories: 142, protein: 8, carbs: 16, fat: 3 },
    ingredients: ['320ml iogurte natural', '100ml leite desnatado', 'Mel', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '62',
    title: 'Iogurte com Granola Artesanal',
    category: Category.NATURAL_YOGURT,
    nutrition: { calories: 165, protein: 9, carbs: 17, fat: 4 },
    ingredients: ['320ml iogurte natural', '100ml leite desnatado', '2 colheres sopa granola', 'Baunilha'],
    instructions: ['Congele base 24h', 'Processe', 'Sirva com granola'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '63',
    title: 'Iogurte com Mel e Banana',
    category: Category.NATURAL_YOGURT,
    nutrition: { calories: 158, protein: 7, carbs: 22, fat: 3 },
    ingredients: ['310ml iogurte natural', '90ml leite desnatado', '½ banana', 'Mel'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '64',
    title: 'Iogurte com Melancia',
    category: Category.NATURAL_YOGURT,
    nutrition: { calories: 128, protein: 7, carbs: 15, fat: 3 },
    ingredients: ['310ml iogurte natural', '90ml leite desnatado', '130g melancia', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '65',
    title: 'Iogurte com Morango e Mel',
    category: Category.NATURAL_YOGURT,
    nutrition: { calories: 138, protein: 8, carbs: 17, fat: 3 },
    ingredients: ['310ml iogurte natural', '90ml leite desnatado', '100g morango', 'Mel'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 12. Frutas Calóricas / Especiais ---
  {
    id: '66',
    title: 'Abacate Cremoso (Meia Porção)',
    category: Category.SPECIAL,
    nutrition: { calories: 185, protein: 5, carbs: 10, fat: 10 },
    ingredients: ['350ml leite desnatado', '60g abacate', '1 scoop whey', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '67',
    title: 'Coco com Proteína (Ajustado)',
    category: Category.SPECIAL,
    nutrition: { calories: 165, protein: 16, carbs: 12, fat: 5 },
    ingredients: ['350ml leite de coco light', '1 scoop whey', '1 colher sopa coco ralado', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '68',
    title: 'Açaí com Whey',
    category: Category.SPECIAL,
    nutrition: { calories: 172, protein: 18, carbs: 12, fat: 4 },
    ingredients: ['350ml leite desnatado', '60g polpa açaí', '1 scoop whey', 'Gengibre'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '69',
    title: 'Pistache Cremoso',
    category: Category.SPECIAL,
    nutrition: { calories: 182, protein: 6, carbs: 11, fat: 11 },
    ingredients: ['360ml leite desnatado', '1 colher sopa pasta pistache', 'Baunilha', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '70',
    title: 'Noz Pecã Delicada',
    category: Category.SPECIAL,
    nutrition: { calories: 188, protein: 5, carbs: 10, fat: 12 },
    ingredients: ['360ml leite desnatado', '1 colher sopa pasta noz pecã', 'Baunilha', 'Sal'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },

  // --- 13. Gelato ---
  {
    id: '71',
    title: 'Gelato de Baunilha Clássica',
    category: Category.GELATO,
    nutrition: { calories: 155, protein: 5, carbs: 14, fat: 5 },
    ingredients: ['250ml leite integral', '150ml iogurte grego', '1 scoop whey', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Gelato (4 min)'],
    mode: 'Gelato',
    yield: '400g'
  },
  {
    id: '72',
    title: 'Gelato de Chocolate Belga',
    category: Category.GELATO,
    nutrition: { calories: 168, protein: 6, carbs: 15, fat: 5 },
    ingredients: ['240ml leite integral', '150ml iogurte grego', '1 scoop whey chocolate', '1 colher sopa cacau'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Gelato'],
    mode: 'Gelato',
    yield: '400g'
  },
  {
    id: '73',
    title: 'Gelato de Morango',
    category: Category.GELATO,
    nutrition: { calories: 145, protein: 5, carbs: 16, fat: 4 },
    ingredients: ['240ml leite integral', '150ml iogurte grego', '80g morango', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Gelato'],
    mode: 'Gelato',
    yield: '400g'
  },
  {
    id: '74',
    title: 'Gelato Pistachio',
    category: Category.GELATO,
    nutrition: { calories: 172, protein: 6, carbs: 12, fat: 7 },
    ingredients: ['240ml leite integral', '150ml iogurte grego', '1 colher sopa pasta pistache', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Gelato'],
    mode: 'Gelato',
    yield: '400g'
  },
  {
    id: '75',
    title: 'Gelato de Café Espresso',
    category: Category.GELATO,
    nutrition: { calories: 152, protein: 6, carbs: 12, fat: 5 },
    ingredients: ['240ml leite integral', '150ml iogurte grego', '80ml café espresso', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Gelato'],
    mode: 'Gelato',
    yield: '400g'
  },

  // --- 14. Smoothie Bowl (Slushi) ---
  {
    id: '76',
    title: 'Smoothie Bowl Morango Banana',
    category: Category.SMOOTHIE,
    nutrition: { calories: 162, protein: 6, carbs: 22, fat: 3 },
    ingredients: ['200ml leite desnatado', '80g morango', '½ banana', '1 scoop whey morango'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi (3 min)'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '77',
    title: 'Smoothie Bowl Açaí',
    category: Category.SMOOTHIE,
    nutrition: { calories: 168, protein: 7, carbs: 20, fat: 3 },
    ingredients: ['200ml leite desnatado', '60g polpa açaí', '50g mirtilo', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '78',
    title: 'Smoothie Bowl Tropical',
    category: Category.SMOOTHIE,
    nutrition: { calories: 155, protein: 6, carbs: 21, fat: 3 },
    ingredients: ['200ml leite de coco light', '60g abacaxi', '40g manga', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '79',
    title: 'Smoothie Bowl Verde',
    category: Category.SMOOTHIE,
    nutrition: { calories: 145, protein: 8, carbs: 16, fat: 3 },
    ingredients: ['200ml leite desnatado', '80g espinafre', '½ banana', '1 scoop whey'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '80',
    title: 'Smoothie Bowl Chocolate Banana',
    category: Category.SMOOTHIE,
    nutrition: { calories: 165, protein: 7, carbs: 20, fat: 4 },
    ingredients: ['200ml leite integral', '½ banana', '1 scoop whey chocolate', '1 colher sopa cacau'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi'],
    mode: 'Slushi',
    yield: '300g'
  },
  
  // --- 15. SORBETS (Frutas Puras) ---
  {
    id: '81',
    title: 'Sorbet Manga com Laranja',
    category: Category.SORBET,
    nutrition: { calories: 95, protein: 1, carbs: 23, fat: 0 },
    ingredients: ['200ml suco de laranja natural', '150g manga congelada', '50ml água', 'Adoçante', 'Raspas de laranja'],
    instructions: ['Misture suco, água e manga', 'Adicione adoçante e raspas', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '82',
    title: 'Sorbet Morango Puro',
    category: Category.SORBET,
    nutrition: { calories: 88, protein: 1, carbs: 21, fat: 0 },
    ingredients: ['280g morango congelado', '80ml água filtrada', 'Adoçante', 'Suco ¼ limão'],
    instructions: ['Misture morango e água', 'Adicione adoçante e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '83',
    title: 'Sorbet Melancia com Limão',
    category: Category.SORBET,
    nutrition: { calories: 82, protein: 1, carbs: 19, fat: 0 },
    ingredients: ['300g melancia congelada', '70ml água filtrada', 'Adoçante', 'Suco ½ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '84',
    title: 'Sorbet Abacaxi Puro',
    category: Category.SORBET,
    nutrition: { calories: 92, protein: 1, carbs: 23, fat: 0 },
    ingredients: ['280g abacaxi congelado', '80ml água filtrada', 'Adoçante', 'Suco ¼ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '85',
    title: 'Sorbet Mirtilo Intenso',
    category: Category.SORBET,
    nutrition: { calories: 85, protein: 1, carbs: 21, fat: 0 },
    ingredients: ['280g mirtilo congelado', '80ml água filtrada', 'Adoçante', 'Mel (opcional)'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '86',
    title: 'Sorbet Goiaba Rosa',
    category: Category.SORBET,
    nutrition: { calories: 98, protein: 1, carbs: 24, fat: 0 },
    ingredients: ['260g goiaba congelada', '100ml água filtrada', 'Adoçante', 'Gengibre'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '87',
    title: 'Sorbet Maracujá Delícia',
    category: Category.SORBET,
    nutrition: { calories: 78, protein: 1, carbs: 18, fat: 0 },
    ingredients: ['180g polpa maracujá', '150ml água filtrada', 'Adoçante', 'Mel'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '88',
    title: 'Sorbet Caju Natural',
    category: Category.SORBET,
    nutrition: { calories: 102, protein: 1, carbs: 25, fat: 0 },
    ingredients: ['240g polpa caju', '110ml água filtrada', 'Adoçante', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '89',
    title: 'Sorbet Pitanga Selvagem',
    category: Category.SORBET,
    nutrition: { calories: 82, protein: 1, carbs: 20, fat: 0 },
    ingredients: ['280g pitanga congelada', '80ml água', 'Adoçante', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '90',
    title: 'Sorbet Açaí Puro',
    category: Category.SORBET,
    nutrition: { calories: 105, protein: 2, carbs: 22, fat: 0 },
    ingredients: ['180g polpa açaí', '150ml água filtrada', 'Adoçante', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '91',
    title: 'Sorbet Melão com Hortelã',
    category: Category.SORBET,
    nutrition: { calories: 88, protein: 1, carbs: 21, fat: 0 },
    ingredients: ['300g melão congelado', '70ml água', 'Adoçante', 'Hortelã', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '92',
    title: 'Sorbet Limão Siciliano',
    category: Category.SORBET,
    nutrition: { calories: 75, protein: 1, carbs: 18, fat: 0 },
    ingredients: ['200ml suco limão siciliano', '150ml água', 'Adoçante', '50ml gelo'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '93',
    title: 'Sorbet Tangerina Doce',
    category: Category.SORBET,
    nutrition: { calories: 92, protein: 1, carbs: 23, fat: 0 },
    ingredients: ['220ml suco tangerina', '130ml água', 'Adoçante', 'Raspas'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '94',
    title: 'Sorbet Kiwi com Abacaxi',
    category: Category.SORBET,
    nutrition: { calories: 89, protein: 1, carbs: 22, fat: 0 },
    ingredients: ['150g kiwi', '100g abacaxi', '100ml água', 'Adoçante', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '95',
    title: 'Sorbet Uva Verde com Limão',
    category: Category.SORBET,
    nutrition: { calories: 95, protein: 1, carbs: 24, fat: 0 },
    ingredients: ['280g uva verde', '80ml água', 'Adoçante', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '96',
    title: 'Sorbet Pêra com Canela',
    category: Category.SORBET,
    nutrition: { calories: 91, protein: 1, carbs: 23, fat: 0 },
    ingredients: ['280g pêra congelada', '80ml água', 'Adoçante', 'Canela'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '97',
    title: 'Sorbet Maçã Verde com Gengibre',
    category: Category.SORBET,
    nutrition: { calories: 88, protein: 1, carbs: 22, fat: 0 },
    ingredients: ['280g maçã verde', '80ml água', 'Adoçante', 'Gengibre', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '98',
    title: 'Sorbet Amora Selvagem',
    category: Category.SORBET,
    nutrition: { calories: 85, protein: 1, carbs: 21, fat: 0 },
    ingredients: ['280g amora', '80ml água', 'Adoçante', 'Mel'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '99',
    title: 'Sorbet Cereja Natural',
    category: Category.SORBET,
    nutrition: { calories: 92, protein: 1, carbs: 23, fat: 0 },
    ingredients: ['280g cereja (s/ semente)', '80ml água', 'Adoçante', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '100',
    title: 'Sorbet Ameixa Doce',
    category: Category.SORBET,
    nutrition: { calories: 98, protein: 1, carbs: 24, fat: 0 },
    ingredients: ['260g ameixa', '100ml água', 'Adoçante', 'Canela'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },

  // --- 16. Combinações Especiais ---
  {
    id: '101',
    title: 'Morango com Baunilha e Mel',
    category: Category.SPECIAL,
    nutrition: { calories: 148, protein: 3, carbs: 18, fat: 4 },
    ingredients: ['340ml leite desnatado', '100g morango', 'Mel', 'Baunilha'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '102',
    title: 'Melancia com Gengibre e Limão',
    category: Category.SPECIAL,
    nutrition: { calories: 132, protein: 2, carbs: 15, fat: 4 },
    ingredients: ['340ml leite desnatado', '160g melancia', 'Gengibre', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '103',
    title: 'Chocolate com Laranja',
    category: Category.SPECIAL,
    nutrition: { calories: 155, protein: 3, carbs: 17, fat: 5 },
    ingredients: ['340ml leite desnatado', '1 colher sopa cacau', 'Suco laranja + raspas'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '104',
    title: 'Melancia com Hortelã e Limão',
    category: Category.SPECIAL,
    nutrition: { calories: 128, protein: 2, carbs: 15, fat: 4 },
    ingredients: ['340ml leite desnatado', '160g melancia', 'Hortelã', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '105',
    title: 'Abacaxi com Gengibre',
    category: Category.SPECIAL,
    nutrition: { calories: 152, protein: 2, carbs: 18, fat: 4 },
    ingredients: ['340ml leite desnatado', '130g abacaxi', 'Gengibre', 'Limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Lite Ice Cream'],
    mode: 'Lite Ice Cream',
    yield: '400g'
  },
  {
    id: '106',
    title: 'Maracujá com Morango',
    category: Category.SORBET,
    nutrition: { calories: 98, protein: 2, carbs: 23, fat: 0 },
    ingredients: ['180ml polpa de maracujá', '120g morango congelado', '80ml água filtrada', '1 colher chá adoçante', 'Suco de ¼ limão'],
    instructions: ['Misture polpa, morango e água', 'Adicione adoçante e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '107',
    title: 'Kiwi com Morango',
    category: Category.SORBET,
    nutrition: { calories: 92, protein: 1, carbs: 22, fat: 0 },
    ingredients: ['180g kiwi congelado', '140g morango congelado', '60ml água filtrada', '1 colher chá adoçante', 'Suco de ¼ limão'],
    instructions: ['Misture kiwi, morango e água', 'Adicione adoçante e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '108',
    title: 'Pitaya com Morango',
    category: Category.SORBET,
    nutrition: { calories: 85, protein: 1, carbs: 20, fat: 0 },
    ingredients: ['180g pitaya congelada', '140g morango congelado', '60ml água filtrada', '1 colher chá adoçante', 'Pitada de limão'],
    instructions: ['Misture pitaya, morango e água', 'Adicione adoçante e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '109',
    title: 'Cereja com Baunilha',
    category: Category.SORBET,
    nutrition: { calories: 105, protein: 1, carbs: 25, fat: 0 },
    ingredients: ['260g cereja congelada', '100ml água filtrada', '1 colher chá adoçante', '½ colher chá baunilha', 'Suco de ¼ limão'],
    instructions: ['Misture cereja e água', 'Adicione adoçante, baunilha e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '110',
    title: 'Pêra Pura',
    category: Category.SORBET,
    nutrition: { calories: 91, protein: 1, carbs: 23, fat: 0 },
    ingredients: ['300g pêra congelada', '70ml água filtrada', '1 colher chá adoçante', 'Suco de ¼ limão', '⅛ colher chá canela'],
    instructions: ['Misture pêra e água', 'Adicione adoçante, limão e canela', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '111',
    title: 'Pêssego Delicado',
    category: Category.SORBET,
    nutrition: { calories: 98, protein: 1, carbs: 24, fat: 0 },
    ingredients: ['300g pêssego congelado', '70ml água filtrada', '1 colher chá adoçante', '¼ colher chá canela', 'Suco de ¼ limão'],
    instructions: ['Misture pêssego e água', 'Adicione adoçante, canela e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '112',
    title: 'Mirtilo com Amora',
    category: Category.SORBET,
    nutrition: { calories: 88, protein: 1, carbs: 21, fat: 0 },
    ingredients: ['160g mirtilo congelado', '140g amora congelada', '80ml água filtrada', '1 colher chá adoçante', '½ colher chá mel'],
    instructions: ['Misture mirtilo, amora e água', 'Adicione adoçante e mel', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '113',
    title: 'Morango com Framboesa',
    category: Category.SORBET,
    nutrition: { calories: 82, protein: 1, carbs: 20, fat: 0 },
    ingredients: ['180g morango congelado', '140g framboesa congelada', '60ml água filtrada', '1 colher chá adoçante', 'Suco de ¼ limão'],
    instructions: ['Misture morango, framboesa e água', 'Adicione adoçante e limão', 'Congele 24h', 'Mode: Sorbet'],
    mode: 'Sorbet',
    yield: '400g'
  },
  {
    id: '114',
    title: 'Banana com Morango',
    category: Category.SMOOTHIE,
    nutrition: { calories: 145, protein: 2, carbs: 28, fat: 1 },
    ingredients: ['1 banana congelada', '100g morango congelado', '100ml leite desnatado', '1 colher chá adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi (3 min)'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '115',
    title: 'Banana com Mirtilo',
    category: Category.SMOOTHIE,
    nutrition: { calories: 152, protein: 2, carbs: 30, fat: 1 },
    ingredients: ['1 banana congelada', '100g mirtilo congelado', '100ml leite desnatado', '1 colher chá adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi (3 min)'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '116',
    title: 'Banana com Manga',
    category: Category.SMOOTHIE,
    nutrition: { calories: 158, protein: 2, carbs: 32, fat: 1 },
    ingredients: ['1 banana congelada', '100g manga congelada', '100ml leite de coco light', '1 colher chá adoçante'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi (3 min)'],
    mode: 'Slushi',
    yield: '300g'
  },
  {
    id: '117',
    title: 'Banana com Framboesa',
    category: Category.SMOOTHIE,
    nutrition: { calories: 142, protein: 2, carbs: 27, fat: 1 },
    ingredients: ['1 banana congelada', '100g framboesa congelada', '100ml leite desnatado', '1 colher chá adoçante', 'Suco de ¼ limão'],
    instructions: ['Misture tudo', 'Congele 24h', 'Mode: Slushi (3 min)'],
    mode: 'Slushi',
    yield: '300g'
  }
];
