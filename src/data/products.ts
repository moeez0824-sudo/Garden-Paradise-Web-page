export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  rating: number;
  reviewCount: number;
  stock: number;
  tags: string[];
}

export const products: Product[] = [
  // Seeds Category
  {
    id: 'seed-1',
    name: 'Organic Vegetable Seed Collection',
    category: 'seeds',
    price: 6997,
    description: 'A comprehensive collection of 15 organic vegetable seeds for your home garden. Includes tomatoes, lettuce, carrots, cucumbers, and more.',
    features: [
      '15 varieties of non-GMO seeds',
      'Certified organic',
      'High germination rate',
      'Detailed planting instructions included',
      'Resealable packaging for long-term storage'
    ],
    image: 'https://m.media-amazon.com/images/I/81FhR6HdW-L._AC_SS450_.jpg',
    rating: 4.7,
    reviewCount: 128,
    stock: 50,
    tags: ['organic', 'vegetable', 'seeds', 'garden', 'non-GMO']
  },
  {
    id: 'seed-2',
    name: 'Herb Garden Starter Kit',
    category: 'seeds',
    price: 8397,
    description: 'Everything you need to start your own indoor herb garden. Includes seeds for basil, cilantro, parsley, mint, and chives.',
    features: [
      '5 culinary herb varieties',
      'Biodegradable growing pots',
      'Organic seed starting soil',
      'Plant markers',
      'Detailed growing guide'
    ],
    image: 'https://m.media-amazon.com/images/I/819fWQl5MCL._AC_SL1500_.jpg',
    rating: 4.9,
    reviewCount: 72,
    stock: 45,
    tags: ['herbs', 'seeds', 'indoor', 'kitchen', 'starter kit']
  },
  {
    id: 'seed-3',
    name: 'Wildflower Seed Mix',
    category: 'seeds',
    price: 4477,
    description: 'Create a beautiful wildflower meadow with this diverse mix of native flower seeds. Perfect for attracting pollinators.',
    features: [
      'Mix of 20+ wildflower species',
      'Native varieties',
      'Attracts butterflies and bees',
      'Easy to grow',
      'Coverage for 100 sq ft'
    ],
    image: 'https://m.media-amazon.com/images/I/71MzNrCPYsL.jpg',
    rating: 4.6,
    reviewCount: 95,
    stock: 60,
    tags: ['wildflowers', 'seeds', 'native', 'pollinators']
  },
  {
    id: 'seed-4',
    name: 'Premium Tomato Seeds Collection',
    category: 'seeds',
    price: 5317,
    description: 'A curated collection of heirloom tomato varieties, including beefsteak, cherry, and unique colored varieties.',
    features: [
      '6 heirloom tomato varieties',
      'Non-GMO seeds',
      'High yield potential',
      'Detailed growing instructions',
      'Storage container included'
    ],
    image: 'https://survivalgardenseeds.com/cdn/shop/products/Tomato-Collection-10-Image01.jpg?v=1661799879&width=1214',
    rating: 4.8,
    reviewCount: 83,
    stock: 40,
    tags: ['tomato', 'heirloom', 'seeds', 'vegetables']
  },
  {
    id: 'seed-5',
    name: 'Microgreens Growing Kit',
    category: 'seeds',
    price: 9797,
    description: 'Complete kit for growing nutrient-rich microgreens indoors. Includes popular varieties like radish, arugula, and mustard.',
    features: [
      '8 microgreen varieties',
      'Growing trays included',
      'Professional growing medium',
      'Spray bottle',
      'Comprehensive guide'
    ],
    image: 'https://i5.walmartimages.com/asr/fd5d36d3-8d6c-49d8-bcab-94e1ae5120a6.31eb3d322b858f35366be40c43b130d5.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    rating: 4.7,
    reviewCount: 67,
    stock: 35,
    tags: ['microgreens', 'indoor', 'seeds', 'healthy']
  },
  {
    id: 'seed-6',
    name: 'Butterfly Garden Seed Mix',
    category: 'seeds',
    price: 4757,
    description: 'Create a butterfly-friendly garden with this specially selected mix of flower seeds that attract and support butterflies.',
    features: [
      '12 butterfly-attracting varieties',
      'Easy to grow',
      'Season-long blooms',
      'Native species included',
      'Planting guide'
    ],
    image: 'https://cdn.shopify.com/s/files/1/0011/2341/8172/products/Butterfly-Garden-Sprinkle-Packet-Wildflower-Seeds_FL3451R_1024x1024.jpg?v=1523415841',
    rating: 4.5,
    reviewCount: 54,
    stock: 55,
    tags: ['butterfly', 'flowers', 'seeds', 'garden']
  },
  {
    id: 'seed-7',
    name: 'Salad Greens Seed Collection',
    category: 'seeds',
    price: 6157,
    description: 'Grow your own fresh salad greens with this collection of lettuce, spinach, arugula, and other leafy green seeds.',
    features: [
      '10 salad green varieties',
      'Quick growing',
      'Cut-and-come-again varieties',
      'Year-round growing',
      'Storage tin included'
    ],
    image: 'https://th.bing.com/th/id/OIP.bmY1wPJ1EPVIgQDzlk6u5QHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    reviewCount: 78,
    stock: 45,
    tags: ['salad', 'greens', 'seeds', 'vegetables']
  },
  {
    id: 'seed-8',
    name: 'Exotic Hot Pepper Seeds',
    category: 'seeds',
    price: 5597,
    description: 'Collection of rare and exotic hot pepper seeds, from mild to super hot varieties.',
    features: [
      '8 pepper varieties',
      'Range of heat levels',
      'Rare varieties included',
      'Growing tips',
      'Heat scale guide'
    ],
    image: 'https://www.kroger.com/product/images/large/front/0004153055905',
    rating: 4.8,
    reviewCount: 91,
    stock: 40,
    tags: ['peppers', 'hot', 'exotic', 'seeds']
  },

  // Plants Category
  {
    id: 'plant-1',
    name: 'Heirloom Tomato Plants Set',
    category: 'plants',
    price: 5597,
    description: 'A set of three heirloom tomato plants, ready to transplant to your garden. Varieties include Brandywine, Cherokee Purple, and Green Zebra.',
    features: [
      'Three established seedlings',
      'Rare heirloom varieties',
      'Grown without chemical pesticides',
      'Ready to transplant',
      'Care instructions included'
    ],
    image: 'https://5280heirlooms.com/wp-content/uploads/2020/05/IMG_5508-scaled.jpg',
    rating: 4.5,
    reviewCount: 86,
    stock: 30,
    tags: ['tomato', 'heirloom', 'plants', 'vegetables']
  },
  {
    id: 'plant-2',
    name: 'Ornamental Grass Collection',
    category: 'plants',
    price: 11197,
    description: 'A set of three beautiful ornamental grasses that add texture and movement to your landscape.',
    features: [
      'Three established grass varieties',
      'Drought tolerant',
      'Year-round interest',
      'Low maintenance',
      'Planting guide included'
    ],
    image: 'https://th.bing.com/th/id/OIP.cjXJEDjepF1Ua1OtNF7Q2wHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    reviewCount: 58,
    stock: 25,
    tags: ['ornamental', 'grass', 'landscape', 'perennial']
  },
  {
    id: 'plant-3',
    name: 'Herb Garden Collection',
    category: 'plants',
    price: 9797,
    description: 'Set of six popular culinary herbs in biodegradable pots, ready for your kitchen garden.',
    features: [
      'Six established herb plants',
      'Common cooking varieties',
      'Organic growing practices',
      'Ready to harvest',
      'Care guide included'
    ],
    image: 'https://th.bing.com/th/id/OIP.K9Yw9Bb71IPKjT0aR_iLrgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    reviewCount: 73,
    stock: 40,
    tags: ['herbs', 'culinary', 'plants', 'kitchen']
  },
  {
    id: 'plant-4',
    name: 'Succulent Collection',
    category: 'plants',
    price: 8397,
    description: 'Assortment of five different succulent varieties in decorative pots.',
    features: [
      'Five unique varieties',
      'Decorative pots included',
      'Low maintenance',
      'Perfect for indoor growing',
      'Care instructions'
    ],
    image: 'https://i.pinimg.com/originals/3b/6f/75/3b6f7596a2613787cfd88aef7681cb3e.jpg',
    rating: 4.9,
    reviewCount: 92,
    stock: 35,
    tags: ['succulents', 'indoor', 'plants', 'decorative']
  },
  {
    id: 'plant-5',
    name: 'Butterfly Garden Plant Collection',
    category: 'plants',
    price: 12597,
    description: 'Set of butterfly-attracting perennial plants to create a pollinator-friendly garden.',
    features: [
      'Four butterfly-friendly plants',
      'Native varieties',
      'Perennial plants',
      'Attracts pollinators',
      'Planting layout guide'
    ],
    image: 'https://i.pinimg.com/originals/ea/ba/fd/eabafd5d5709196967b3754b82aa0d8e.jpg',
    rating: 4.6,
    reviewCount: 64,
    stock: 30,
    tags: ['butterfly', 'perennial', 'plants', 'native']
  },
  {
    id: 'plant-6',
    name: 'Indoor Tropical Plant Set',
    category: 'plants',
    price: 13997,
    description: 'Collection of three tropical plants perfect for bringing life to indoor spaces.',
    features: [
      'Three tropical varieties',
      'Air-purifying qualities',
      'Decorative pots included',
      'Indoor growing guide',
      'Care instructions'
    ],
    image: 'https://th.bing.com/th/id/OIP.GUray5fnZJXYXCQiV3b7zQHaE8?rs=1&pid=ImgDetMain',
    rating: 4.7,
    reviewCount: 81,
    stock: 25,
    tags: ['tropical', 'indoor', 'plants', 'air-purifying']
  },
  {
    id: 'plant-7',
    name: 'Shade Garden Collection',
    category: 'plants',
    price: 12037,
    description: 'Curated selection of plants that thrive in shady garden locations.',
    features: [
      'Four shade-loving plants',
      'Various heights and textures',
      'Low maintenance',
      'Year-round interest',
      'Design suggestions'
    ],
    image: 'https://cdn.shopify.com/s/files/1/2045/8185/articles/Plants-for-Shade-Hostas_1200x800.jpg?v=1554148441',
    rating: 4.5,
    reviewCount: 57,
    stock: 30,
    tags: ['shade', 'perennial', 'plants', 'garden']
  },
  {
    id: 'plant-8',
    name: 'Mediterranean Herb Collection',
    category: 'plants',
    price: 10357,
    description: 'Collection of classic Mediterranean herbs including rosemary, thyme, and oregano.',
    features: [
      'Five Mediterranean herbs',
      'Drought tolerant',
      'Fragrant varieties',
      'Culinary quality',
      'Growing tips'
    ],
    image: 'https://th.bing.com/th/id/OIP.EdWWgMc-8EnwU6o5Hub-qAHaFd?rs=1&pid=ImgDetMain',
    rating: 4.8,
    reviewCount: 69,
    stock: 35,
    tags: ['herbs', 'Mediterranean', 'plants', 'culinary']
  },

  // Tools Category
  {
    id: 'tool-1',
    name: 'Premium Garden Tool Set',
    category: 'tools',
    price: 13997,
    description: 'A complete set of high-quality gardening tools with ergonomic handles.',
    features: [
      '5 essential garden tools',
      'Ergonomic non-slip handles',
      'Durable stainless steel',
      'Storage case included',
      'Lifetime warranty'
    ],
    image: 'https://th.bing.com/th/id/R.aa47e2c1c46c5e2a5e260cbc7fdf5b83?rik=Qp21cV02YnyIcQ&riu=http%3a%2f%2fimgardenmart.com%2fcdn%2fshop%2fcollections%2fGardening-tools-and-utensils-on-a-lush-green-meadow-Farming-tools-Featured-SS-1200x900_1200x1200.jpg%3fv%3d1635492178&ehk=sviaBnnSCTjM2JcvHNyEbBcy2A2cBiJrHoCveONQPf4%3d&risl=&pid=ImgRaw&r=0',
    rating: 4.8,
    reviewCount: 215,
    stock: 40,
    tags: ['tools', 'gardening', 'equipment']
  },
  {
    id: 'tool-2',
    name: 'Expandable Garden Hose',
    category: 'tools',
    price: 12037,
    description: 'Lightweight, flexible garden hose that expands to 50 feet when in use.',
    features: [
      'Expands to 50 feet',
      'Kink-resistant design',
      'Brass fittings',
      'Storage bag included',
      'Multi-pattern sprayer'
    ],
    image: 'https://m.media-amazon.com/images/I/51RYybyBrxL._AC_.jpg',
    rating: 4.5,
    reviewCount: 183,
    stock: 55,
    tags: ['hose', 'watering', 'tools']
  },
  {
    id: 'tool-3',
    name: 'Professional Pruning Shears',
    category: 'tools',
    price: 9237,
    description: 'High-quality bypass pruners with precision-ground steel blades.',
    features: [
      'Sharp steel blades',
      'Ergonomic grip',
      'Safety lock',
      'Spring-loaded action',
      'Carrying holster'
    ],
    image: 'https://m.media-amazon.com/images/I/81hgrSRn5OL.jpg',
    rating: 4.7,
    reviewCount: 146,
    stock: 60,
    tags: ['pruning', 'tools', 'professional']
  },
  {
    id: 'tool-4',
    name: 'Garden Kneeler and Seat',
    category: 'tools',
    price: 10917,
    description: 'Versatile garden kneeler that converts to a comfortable seat.',
    features: [
      'Dual-use design',
      'Sturdy steel frame',
      'Foam padding',
      'Tool pouches',
      'Folds for storage'
    ],
    image: 'https://www.thompson-morgan.com/product_images/100/G0999_D79B7D03-C8A1-3501-A130129F53E3DCD0.jpg',
    rating: 4.6,
    reviewCount: 128,
    stock: 45,
    tags: ['comfort', 'tools', 'gardening']
  },
  {
    id: 'tool-5',
    name: 'Composting Tumbler',
    category: 'tools',
    price: 25197,
    description: 'Dual-chamber compost tumbler for efficient organic waste processing.',
    features: [
      'Two 27-gallon chambers',
      'Aeration vents',
      'Sturdy steel frame',
      'Easy turning mechanism',
      'Assembly tools included'
    ],
    image: 'https://th.bing.com/th/id/OIP.2YU0WEMxZz3tshBfB52TGQAAAA?rs=1&pid=ImgDetMain',
    rating: 4.4,
    reviewCount: 92,
    stock: 30,
    tags: ['composting', 'tools', 'eco-friendly']
  },
  {
    id: 'tool-6',
    name: 'Garden Tool Organizer',
    category: 'tools',
    price: 12877,
    description: 'Wall-mounted organizer for storing and organizing garden tools.',
    features: [
      'Holds up to 40 tools',
      'Weather-resistant',
      'Easy installation',
      'Adjustable hooks',
      'Tool slots'
    ],
    image: 'https://i.pinimg.com/originals/2b/ee/05/2bee056f0cf8577e2ada48de4c079f41.jpg',
    rating: 4.5,
    reviewCount: 76,
    stock: 40,
    tags: ['storage', 'organization', 'tools']
  },
  {
    id: 'tool-7',
    name: 'Electric Leaf Blower',
    category: 'tools',
    price: 22397,
    description: 'Powerful electric leaf blower with variable speed control.',
    features: [
      '12-amp motor',
      'Variable speed',
      'Lightweight design',
      'Vacuum capability',
      'Collection bag included'
    ],
    image:'https://cdn.thewirecutter.com/wp-content/media/2022/10/leaf-blower-2048px-0119.jpg',
    rating: 4.3,
    reviewCount: 104,
    stock: 35,
    tags: ['power tools', 'cleanup', 'electric']
  },
  {
    id: 'tool-8',
    name: 'Garden Tool Belt',
    category: 'tools',
    price: 8397,
    description: 'Professional-grade tool belt with multiple pockets for garden tools.',
    features: [
      'Multiple tool pockets',
      'Adjustable fit',
      'Water-resistant',
      'Reinforced stitching',
      'Quick-release buckle'
    ],
    image: 'https://i.etsystatic.com/16546621/r/il/090335/2353354221/il_fullxfull.2353354221_1xin.jpg',
    rating: 4.6,
    reviewCount: 88,
    stock: 50,
    tags: ['storage', 'tools', 'professional']
  },

  // Fertilizers Category
  {
    id: 'fert-2',
    name: 'Rose & Flower Food',
    category: 'fertilizers',
    price: 5597,
    description: 'Specialized fertilizer formulated for flowering plants and roses.',
    features: [
      'Enhanced bloom formula',
      'Slow-release',
      'With micronutrients',
      'Easy application',
      '3lb container'
    ],
    image: 'https://www.pestrol.com.au/wp-content/uploads/2023/03/BRRFF2K-1-WP.webp',
    rating: 4.7,
    reviewCount: 82,
    stock: 60,
    tags: ['fertilizer', 'flowers', 'roses']
  },
  {
    id: 'fert-3',
    name: 'Compost Tea Bags',
    category: 'fertilizers',
    price: 6997,
    description: 'Easy-to-use compost tea bags for natural plant nutrition.',
    features: [
      '12 tea bags',
      'All-natural ingredients',
      'Rich in nutrients',
      'No mess application',
      'Reusable bag'
    ],
    image: 'https://cdn.shopify.com/s/files/1/0244/8248/0177/products/8515_900x.jpg?v=1574909156',
    rating: 4.5,
    reviewCount: 68,
    stock: 45,
    tags: ['fertilizer', 'organic', 'compost']
  },
  {
    id: 'fert-5',
    name: 'Tomato & Vegetable Food',
    category: 'fertilizers',
    price: 5317,
    description: 'Specialized fertilizer for growing healthy, productive vegetables.',
    features: [
      'High phosphorus formula',
      'With calcium',
      'Prevents blossom end rot',
      'Granular form',
      '5lb bag'
    ],
    image: 'https://cdn.morningchores.com/wp-content/uploads/2018/03/Espoma-Tomato-tone-Organic-4lbs-Fertilizer-432x800.jpg',
    rating: 4.6,
    reviewCount: 89,
    stock: 65,
    tags: ['fertilizer', 'vegetables', 'tomatoes']
  },
  {
    id: 'fert-7',
    name: 'Bone Meal Fertilizer',
    category: 'fertilizers',
    price: 5037,
    description: 'Natural bone meal for strong root development and flowering.',
    features: [
      'High phosphorus',
      'Organic source',
      'Promotes blooming',
      'Slow-release',
      '4lb bag'
    ],
    image: 'https://i5.walmartimages.com/asr/9accabdc-2aeb-474b-88a0-e4bf0d1e12ae.279c51ed3e417a9ab2ab9d7cb3cc7761.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    rating: 4.7,
    reviewCount: 64,
    stock: 70,
    tags: ['fertilizer', 'organic', 'bone meal']
  },
  {
    id: 'fert-8',
    name: 'Citrus & Fruit Tree Food',
    category: 'fertilizers',
    price: 6717,
    description: 'Specialized fertilizer for citrus and fruit trees.',
    features: [
      'Balanced nutrients',
      'With micronutrients',
      'Prevents deficiencies',
      'Granular form',
      '5lb bag'
    ],
    image: 'https://www.ebstone.org/wp-content/uploads/2020/04/CitrusFruitTreeFood.jpg',
    rating: 4.8,
    reviewCount: 58,
    stock: 50,
    tags: ['fertilizer', 'fruit trees', 'citrus']
  },

  // Decor Category
  {
    id: 'decor-1',
    name: 'Solar Garden Lights Set',
    category: 'decor',
    price: 9797,
    description: 'Set of 6 solar-powered garden lights with warm white LEDs.',
    features: [
      'Solar powered',
      'Automatic on/off',
      'Weather resistant',
      'Easy installation',
      '8-hour runtime'
    ],
    image: 'https://www.damart.co.uk/media/catalog/product/cache/e0641f7c62ee91230c5e14755392f1dd/6/2/62993-16016-F-1-HD-3.jpg',
    rating: 4.4,
    reviewCount: 156,
    stock: 60,
    tags: ['decor', 'lighting', 'solar']
  },
  {
    id: 'decor-2',
    name: 'Decorative Garden Windmill',
    category: 'decor',
    price: 25197,
    description: 'Rustic metal windmill for garden decoration.',
    features: [
      '6-foot height',
      'Weather-resistant finish',
      'Easy assembly',
      'Spinning action',
      'Vintage design'
    ],
    image: 'https://i.pinimg.com/736x/08/dd/ac/08ddac97660ccb65e90a6f926957a094.jpg',
    rating: 4.5,
    reviewCount: 92,
    stock: 40,
    tags: ['decor', 'metal', 'windmill']
  },
  {
    id: 'decor-3',
    name: 'Mosaic Garden Stepping Stones',
    category: 'decor',
    price: 12037,
    description: 'Set of 4 decorative mosaic stepping stones.',
    features: [
      'Colorful design',
      'Weather resistant',
      'Non-slip surface',
      '12-inch diameter',
      'Handcrafted'
    ],
    image: 'https://th.bing.com/th/id/OIP.DEh0SESoKWJaSiC2KyXAogHaIJ?rs=1&pid=ImgDetMain',
    rating: 4.6,
    reviewCount: 78,
    stock: 45,
    tags: ['decor', 'stepping stones', 'mosaic']
  },
  {
    id: 'decor-4',
    name: 'Hanging Plant Brackets',
    category: 'decor',
    price: 8117,
    description: 'Set of 2 decorative cast iron hanging plant brackets.',
    features: [
      'Ornate design',
      'Powder-coated finish',
      'Heavy-duty construction',
      'Easy mounting',
      'Hardware included'
    ],
    image: 'https://i5.walmartimages.com/asr/9444b9cf-57fc-4855-b557-b2cf9fe750e2.5e9a16116e28080a07d9c9bbce87674f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    rating: 4.7,
    reviewCount: 64,
    stock: 55,
    tags: ['decor', 'brackets', 'iron']
  },
  {
    id: 'decor-5',
    name: 'Garden Gnome Collection',
    category: 'decor',
    price: 13997,
    description: 'Set of 3 whimsical garden gnomes with different poses.',
    features: [
      'Hand-painted',
      'Weather-resistant resin',
      'Various poses',
      '12-inch height',
      'Detailed design'
    ],
    image: 'https://th.bing.com/th/id/OIP.o6Igd5TQ4uR_u9cSDYLx9wHaFj?rs=1&pid=ImgDetMain',
    rating: 4.3,
    reviewCount: 86,
    stock: 35,
    tags: ['decor', 'gnomes', 'whimsical']
  },
  {
    id: 'decor-6',
    name: 'Butterfly Garden Stakes',
    category: 'decor',
    price: 9237,
    description: 'Set of 5 metal butterfly garden stakes with glass accents.',
    features: [
      'Colorful design',
      'Metal construction',
      'Glass accents',
      '24-inch height',
      'Easy installation'
    ],
    image: 'https://img.staticdj.com/a7159244e15d3d6ff4531d08722ba462_1080x_nw.jpg',
    rating: 4.5,
    reviewCount: 72,
    stock: 50,
    tags: ['decor', 'stakes', 'butterfly']
  },
  {
    id: 'decor-7',
    name: 'Garden Wall Fountain',
    category: 'decor',
    price: 36397,
    description: 'Elegant wall-mounted garden fountain with LED lights.',
    features: [
      'Built-in pump',
      'LED lighting',
      'Weatherproof',
      'Easy installation',
      'Adjustable flow'
    ],
    image: 'https://i5.walmartimages.com/asr/b7bb7fc0-4439-4baa-a0f6-6cb700dd27c2_1.68c8ded0895659cd781bbc35d6187584.jpeg',
    rating: 4.8,
    reviewCount: 58,
    stock: 30,
    tags: ['decor', 'fountain', 'water feature']
  },
  {
    id: 'decor-8',
    name: 'Decorative Garden Trellis',
    category: 'decor',
    price: 15397,
    description: 'Elegant metal garden trellis for climbing plants.',
    features: [
      'Powder-coated steel',
      'Victorian design',
      '72-inch height',
      'Easy assembly',
      'Ground stakes included'
    ],
    image: 'https://th.bing.com/th/id/OIP.GCna614dxJ-tBmqSXdDNzAHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    reviewCount: 94,
    stock: 40,
    tags: ['decor', 'trellis', 'metal']
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low-high':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high-low':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    default:
      return sortedProducts;
  }
};