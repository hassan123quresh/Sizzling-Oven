
import { Category, MenuItem } from './types';

export const CATEGORIES: Category[] = [
  'All', 'Pizza', 'Burgers', 'Steaks', 'Fried Chicken', 'Wings', 
  'Sandwiches', 'Wraps', 'Rolls', 'Pasta', 'Fries', 'Soup', 
  'Hot Drinks', 'Cold Drinks'
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BEST SELLERS / FEATURED ---
  {
    id: 'feat-1',
    name: 'Sizzling Special Steak',
    description: 'Our signature steak served on a sizzling platter with chef special sauce and veggies.',
    price: 1350,
    variations: [
       { size: 'Chicken Half', price: 1050 },
       { size: 'Chicken Full', price: 1650 },
       { size: 'Beef Half', price: 1350 },
       { size: 'Beef Full', price: 1890 },
    ],
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks',
    isFeatured: true
  },
  {
    id: 'feat-2',
    name: 'Loaded Fries Beast',
    description: 'Large fries topped with melted cheese, jalapeños, chicken chunks, and dynamite sauce.',
    price: 450,
    variations: [
        { size: 'Regular', price: 450 },
        { size: 'Large', price: 750 },
    ],
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop',
    category: 'Fries',
    isFeatured: true
  },
  {
    id: 'feat-3',
    name: 'Sizzling Lava Burger',
    description: 'A massive burger experience with molten cheese lava and a juicy patty.',
    price: 890,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers',
    isFeatured: true
  },
  {
    id: 'feat-4',
    name: 'Malai Boti Pizza',
    description: 'Creamy Malai Boti chunks, onions, and jalapenos on a premium crust.',
    price: 750,
    variations: [
        { size: 'Small', price: 750 },
        { size: 'Medium', price: 1290 },
        { size: 'Large', price: 1690 },
        { size: 'X-Large', price: 2290 },
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza',
    isFeatured: true
  },

  // --- PIZZA (Regular) ---
  {
    id: 'piz-1',
    name: 'Chicken Tikka Pizza',
    description: 'Traditional Tikka chunks, onions, and cheese.',
    price: 650,
    variations: [
        { size: 'Small', price: 650 },
        { size: 'Medium', price: 1090 },
        { size: 'Large', price: 1490 },
        { size: 'X-Large', price: 2090 },
    ],
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-2',
    name: 'Chicken Fajita Pizza',
    description: 'Spicy Fajita chicken with bell peppers and onions.',
    price: 650,
    variations: [
        { size: 'Small', price: 650 },
        { size: 'Medium', price: 1090 },
        { size: 'Large', price: 1490 },
        { size: 'X-Large', price: 2090 },
    ],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-3',
    name: 'Chicken Tandoori Pizza',
    description: 'Smoky Tandoori flavors with melted mozzarella.',
    price: 650,
    variations: [
        { size: 'Small', price: 650 },
        { size: 'Medium', price: 1090 },
        { size: 'Large', price: 1490 },
        { size: 'X-Large', price: 2090 },
    ],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-4',
    name: 'Chicken Achari Pizza',
    description: 'Tangy pickle spices mixed with chicken and cheese.',
    price: 650,
    variations: [
        { size: 'Small', price: 650 },
        { size: 'Medium', price: 1090 },
        { size: 'Large', price: 1490 },
        { size: 'X-Large', price: 2090 },
    ],
    image: 'https://images.unsplash.com/photo-1593560708920-63892806d567?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },

  // --- PIZZA (Premium) ---
  {
    id: 'piz-5',
    name: 'Supreme Pizza',
    description: 'Loaded with chicken, sausages, veggies and extra cheese.',
    price: 750,
    variations: [
        { size: 'Small', price: 750 },
        { size: 'Medium', price: 1290 },
        { size: 'Large', price: 1690 },
        { size: 'X-Large', price: 2290 },
    ],
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-6',
    name: 'Four Flavour Pizza',
    description: 'Four distinctive flavors in one pizza.',
    price: 1690,
    variations: [
        { size: 'Large', price: 1690 },
        { size: 'X-Large', price: 2290 },
    ],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },

  // --- PIZZA (Special) ---
  {
    id: 'piz-7',
    name: 'Bihari Kabab Pizza',
    description: 'Spicy Bihari Kabab chunks on a cheesy pizza base.',
    price: 850,
    variations: [
        { size: 'Small', price: 850 },
        { size: 'Medium', price: 1390 },
        { size: 'Large', price: 1990 },
        { size: 'X-Large', price: 2590 },
    ],
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-8',
    name: 'Stuffed Crust Kabab Pizza',
    description: 'Pizza with a seekh kabab stuffed crust.',
    price: 1390,
    variations: [
        { size: 'Medium', price: 1390 },
        { size: 'Large', price: 1990 },
        { size: 'X-Large', price: 2590 },
    ],
    image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-9',
    name: 'Crown Crust Pizza',
    description: 'Royal crown crust filled with delicious goodness.',
    price: 1390,
    variations: [
        { size: 'Medium', price: 1390 },
        { size: 'Large', price: 1990 },
        { size: 'X-Large', price: 2590 },
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 'piz-10',
    name: 'Sizzling Special Bonfire',
    description: 'Our signature bonfire flavor pizza.',
    price: 1390,
    variations: [
        { size: 'Medium', price: 1390 },
        { size: 'Large', price: 1990 },
        { size: 'X-Large', price: 2590 },
    ],
    image: 'https://images.unsplash.com/photo-1593560708920-63892806d567?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
   {
    id: 'piz-11',
    name: 'Volcano Pizza',
    description: 'An explosion of flavors with extra spicy toppings and sauces. (Large Only)',
    price: 2490,
    variations: [
        { size: 'Large', price: 2490 },
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },


  // --- FRIED CHICKEN ---
  {
    id: 'chk-1',
    name: 'Fried Chicken',
    description: 'Crispy, golden fried chicken pieces served hot.',
    price: 450,
    variations: [
        { size: '2 Pcs', price: 450 },
        { size: '4 Pcs', price: 850 },
    ],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken'
  },
  {
    id: 'chk-2',
    name: 'Polo Chicken',
    description: 'Stuffed chicken breast rolls fried to perfection.',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken'
  },
  {
    id: 'chk-3',
    name: 'Chicken Drumstick',
    description: 'Single piece of juicy fried chicken drumstick.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1569691105751-88df003de7a4?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken'
  },
  {
    id: 'chk-4',
    name: 'Quarter Chicken',
    description: 'Oven roasted or fried quarter leg/chest.',
    price: 600,
    variations: [
        { size: 'Regular', price: 600 },
        { size: 'With Fries', price: 750 },
    ],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken'
  },
  {
    id: 'chk-5',
    name: 'Half Chicken',
    description: 'Oven roasted or fried half chicken served with fries.',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken'
  },
   {
    id: 'chk-6',
    name: 'Full Chicken',
    description: 'Whole chicken, perfectly seasoned and cooked, served with fries.',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken'
  },

  // --- BURGERS ---
  {
    id: 'brg-1',
    name: 'Junior Zinger',
    description: 'Classic crispy chicken fillet in a small bun.',
    price: 390,
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-2',
    name: 'Zinger Burger',
    description: 'The classic crunch with mayo and lettuce.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-3',
    name: 'Chicken Burger',
    description: 'Classic chicken patty burger.',
    price: 530,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-4',
    name: 'Grilled Patty Burger',
    description: 'Juicy grilled patty with secret sauce.',
    price: 550,
    variations: [
        { size: 'Chicken', price: 550 },
        { size: 'Beef', price: 590 },
    ],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-5',
    name: 'Grilled BBQ Burger',
    description: 'Grilled patty with rich BBQ sauce.',
    price: 590,
    variations: [
        { size: 'Chicken', price: 590 },
        { size: 'Beef', price: 640 },
    ],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-6',
    name: 'Grilled Mexican Burger',
    description: 'Spicy Mexican style grilled burger.',
    price: 590,
    variations: [
        { size: 'Chicken', price: 590 },
        { size: 'Beef', price: 640 },
    ],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-7',
    name: 'Grilled Cheese Burger',
    description: 'Grilled patty loaded with melted cheese.',
    price: 650,
    variations: [
        { size: 'Chicken', price: 650 },
        { size: 'Beef', price: 690 },
    ],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-8',
    name: 'Grilled Double Patty',
    description: 'Double the meat, double the flavor.',
    price: 690,
    variations: [
        { size: 'Chicken', price: 690 },
        { size: 'Beef', price: 790 },
    ],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-9',
    name: 'Grilled Steak Burger',
    description: 'Premium steak slices inside a burger bun (Chicken only).',
    price: 750,
    image: 'https://images.unsplash.com/photo-1601356616077-695228938730?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-10',
    name: 'Smash Burger',
    description: 'Smashed beef patty with crispy edges and cheddar cheese.',
    price: 790,
    variations: [
        { size: 'Chicken', price: 790 },
        { size: 'Beef', price: 890 },
    ],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-11',
    name: 'Double Anda Shami',
    description: 'Double traditional lentil patty with egg.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: 'brg-12',
    name: 'Anda Shami Burger',
    description: 'Traditional street style lentil patty with egg.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers'
  },

  // --- SANDWICHES ---
  {
    id: 'snd-1',
    name: 'Club Sandwich',
    description: 'Triple layered with chicken, egg, and veggies. Served with fries.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 'snd-2',
    name: 'Tikka Sandwich',
    description: 'Spicy chicken tikka filling in toasted bread.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 'snd-3',
    name: 'Fajita Sandwich',
    description: 'Mexican style fajita chicken sandwich.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 'snd-4',
    name: 'Smokey Sandwich',
    description: 'Smokey flavored chicken sandwich.',
    price: 590,
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e1737e342?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 'snd-5',
    name: 'Grilled Sandwich',
    description: 'Grilled chicken filling toasted to perfection. Served with fries.',
    price: 690,
    image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 'snd-6',
    name: 'Double Steak Sandwich',
    description: 'Double layer of steak slices. Served with fries.',
    price: 890,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 'snd-7',
    name: 'BBQ Sandwich',
    description: 'Smokey BBQ chicken filling.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e1737e342?q=80&w=800&auto=format&fit=crop',
    category: 'Sandwiches'
  },

  // --- WRAPS ---
  {
    id: 'wrp-1',
    name: 'Zinger Wrap',
    description: 'Fried chicken strips and mayo wrapped in tortilla.',
    price: 450,
    variations: [
        { size: 'Regular', price: 450 },
        { size: 'Large', price: 690 },
    ],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },
  {
    id: 'wrp-2',
    name: 'Arabian Wrap',
    description: 'Middle eastern flavors in a soft wrap.',
    price: 450,
    variations: [
        { size: 'Regular', price: 450 },
        { size: 'Large', price: 690 },
    ],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },
  {
    id: 'wrp-3',
    name: 'Grilled Wrap',
    description: 'Healthier grilled chicken option in a wrap.',
    price: 490,
    variations: [
        { size: 'Regular', price: 490 },
        { size: 'Large', price: 750 },
    ],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },
  {
    id: 'wrp-4',
    name: 'Sizzling Special Wrap',
    description: 'Pocket Style Jumbo Wrap.',
    price: 790,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },
  {
    id: 'wrp-5',
    name: 'Chicken Shawarma',
    description: 'Authentic Middle Eastern style chicken shawarma.',
    price: 250,
    variations: [
        { size: 'Small', price: 250 },
        { size: 'Large', price: 400 },
    ],
    image: 'https://images.unsplash.com/photo-1633321769407-af3f2fdb3d52?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },
  {
    id: 'wrp-6',
    name: 'Zinger Shawarma',
    description: 'Crispy zinger pieces in a pita roll.',
    price: 350,
    variations: [
        { size: 'Small', price: 350 },
        { size: 'Large', price: 490 },
    ],
    image: 'https://images.unsplash.com/photo-1640842229232-a567635677d2?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },
  {
    id: 'wrp-7',
    name: 'Grilled Shawarma',
    description: 'Juicy grilled chicken shawarma.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1633321769407-af3f2fdb3d52?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps'
  },

  // --- ROLLS ---
  {
    id: 'rol-1',
    name: 'Chicken Paratha Roll',
    description: 'Desi style flaky paratha filled with chicken.',
    price: 450,
    variations: [
        { size: 'Regular', price: 450 },
        { size: 'Jumbo', price: 790 },
    ],
    image: 'https://images.unsplash.com/photo-1596229341459-7f920f26939b?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-2',
    name: 'Chicken Cheese Paratha',
    description: 'Paratha roll with extra cheese.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1596229341459-7f920f26939b?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-3',
    name: 'Zinger Cheese Paratha',
    description: 'Crispy Zinger and cheese in a paratha.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1596229341459-7f920f26939b?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-4',
    name: 'Chicken Chutni Roll',
    description: 'Spicy chutney roll.',
    price: 390,
    image: 'https://images.unsplash.com/photo-1596229341459-7f920f26939b?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-5',
    name: 'Chicken Malai Roll',
    description: 'Creamy Malai Boti pieces in a roll.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-6',
    name: 'Chicken Bihari Roll',
    description: 'Spicy Bihari boti roll.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-7',
    name: 'Chicken Kabab Roll',
    description: 'Seekh Kabab in a paratha roll.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1563220499-4d6cb879641d?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-8',
    name: 'Chicken Cheese Kabab',
    description: 'Seekh Kabab with melted cheese in a paratha roll.',
    price: 590,
    image: 'https://images.unsplash.com/photo-1563220499-4d6cb879641d?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },
  {
    id: 'rol-9',
    name: 'Sizzling Special Pizzatha',
    description: 'Fusion of Pizza and Paratha.',
    price: 690,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    category: 'Rolls'
  },

  // --- STEAKS ---
  {
    id: 'stk-1',
    name: 'T-Bone / Ribeye Steak',
    description: 'Premium Beef cut grilled to your liking.',
    price: 1250,
    variations: [
        { size: 'Beef Half', price: 1250 },
        { size: 'Beef Full', price: 1790 },
    ],
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },
  {
    id: 'stk-2',
    name: 'Fish Steak',
    description: 'Grilled fish fillet with herbs.',
    price: 1250,
    variations: [
        { size: 'Half', price: 1250 },
        { size: 'Full', price: 1790 },
    ],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },
  {
    id: 'stk-3',
    name: 'Black Pepper Steak',
    description: 'Grilled steak topped with spicy black pepper sauce.',
    price: 950,
    variations: [
        { size: 'Chk Half', price: 950 },
        { size: 'Chk Full', price: 1500 },
        { size: 'Beef Half', price: 1250 },
        { size: 'Beef Full', price: 1790 },
    ],
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28d5a?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },
  {
    id: 'stk-4',
    name: 'Creamy Dream Steak',
    description: 'Rich and creamy white sauce steak.',
    price: 950,
    variations: [
        { size: 'Chk Half', price: 950 },
        { size: 'Chk Full', price: 1500 },
        { size: 'Beef Half', price: 1250 },
        { size: 'Beef Full', price: 1790 },
    ],
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },
  {
    id: 'stk-5',
    name: 'Mushroom Steak',
    description: 'Steak smothered in creamy mushroom sauce.',
    price: 1050,
    variations: [
        { size: 'Chk Half', price: 1050 },
        { size: 'Chk Full', price: 1650 },
        { size: 'Beef Half', price: 1350 },
        { size: 'Beef Full', price: 1890 },
    ],
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },
  {
    id: 'stk-6',
    name: 'Mexican Steak',
    description: 'Spicy salsa and jalapeño topped steak.',
    price: 1050,
    variations: [
        { size: 'Chk Half', price: 1050 },
        { size: 'Chk Full', price: 1650 },
        { size: 'Beef Half', price: 1350 },
        { size: 'Beef Full', price: 1890 },
    ],
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28d5a?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },
  {
    id: 'stk-7',
    name: 'Moroccan Steak',
    description: 'Exotic Moroccan spices and sauce.',
    price: 1050,
    variations: [
        { size: 'Chk Half', price: 1050 },
        { size: 'Chk Full', price: 1650 },
        { size: 'Beef Half', price: 1350 },
        { size: 'Beef Full', price: 1890 },
    ],
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop',
    category: 'Steaks'
  },

  // --- WINGS ---
  {
    id: 'wng-1',
    name: 'Baked Wings',
    description: 'Healthy baked wings.',
    price: 400,
    variations: [
        { size: '5 Pcs', price: 400 },
        { size: '10 Pcs', price: 700 },
    ],
    image: 'https://images.unsplash.com/photo-1527477396000-64ca9c0016cb?q=80&w=800&auto=format&fit=crop',
    category: 'Wings'
  },
  {
    id: 'wng-2',
    name: 'Crunchy Wings',
    description: 'Crispy fried wings.',
    price: 450,
    variations: [
        { size: '5 Pcs', price: 450 },
        { size: '10 Pcs', price: 800 },
    ],
    image: 'https://images.unsplash.com/photo-1569691105751-88df003de7a4?q=80&w=800&auto=format&fit=crop',
    category: 'Wings'
  },
  {
    id: 'wng-3',
    name: 'Saucy & Crunchy',
    description: 'Wings tossed in your favorite sauce.',
    price: 500,
    variations: [
        { size: '5 Pcs', price: 500 },
        { size: '10 Pcs', price: 900 },
    ],
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop',
    category: 'Wings'
  },

  // --- PASTA & FRIES & SOUP (Starters) ---
  {
    id: 'str-1',
    name: 'Alfredo Steak Pasta',
    description: 'Creamy Alfredo pasta topped with steak slices.',
    price: 490,
    variations: [
        { size: 'Regular', price: 490 },
        { size: 'Large', price: 890 },
    ],
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=800&auto=format&fit=crop',
    category: 'Pasta'
  },
  {
    id: 'str-2',
    name: 'Plain Fries',
    description: 'Classic salted french fries.',
    price: 300,
    variations: [
        { size: 'Regular', price: 300 },
        { size: 'Large', price: 450 },
    ],
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop',
    category: 'Fries'
  },
  {
    id: 'str-3',
    name: 'Loaded Fries',
    description: 'Fries with cheese, chicken and sauces.',
    price: 450,
    variations: [
        { size: 'Regular', price: 450 },
        { size: 'Large', price: 750 },
    ],
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop',
    category: 'Fries'
  },
  {
    id: 'str-4',
    name: 'Chicken & Chips',
    description: 'Fried chicken chunks with chips.',
    price: 500,
    variations: [
        { size: 'Regular', price: 500 },
        { size: 'Large', price: 900 },
    ],
    image: 'https://images.unsplash.com/photo-1562967963-ed7b6f968886?q=80&w=800&auto=format&fit=crop',
    category: 'Fries'
  },
  {
    id: 'str-5',
    name: 'Hot & Sour Soup',
    description: 'Traditional spicy soup with chicken and veggies.',
    price: 250,
    variations: [
        { size: 'Regular', price: 250 },
        { size: 'Large', price: 990 },
    ],
    image: 'https://images.unsplash.com/photo-1547592166-23acbe3b624b?q=80&w=800&auto=format&fit=crop',
    category: 'Soup'
  },
  {
    id: 'str-6',
    name: 'Chicken Corn Soup',
    description: 'Classic comfort soup with sweet corn and egg.',
    price: 200,
    variations: [
        { size: 'Regular', price: 200 },
        { size: 'Large', price: 790 },
    ],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop',
    category: 'Soup'
  },

  // --- DRINKS ---
  {
    id: 'drk-1',
    name: 'Mineral Water',
    description: 'Pure mineral water.',
    price: 75,
    variations: [
        { size: 'Small', price: 75 },
        { size: 'Large', price: 150 },
    ],
    image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=800&auto=format&fit=crop',
    category: 'Cold Drinks'
  },
  {
    id: 'drk-2',
    name: 'Soft Drink',
    description: 'Chilled carbonated drink.',
    price: 90,
    variations: [
        { size: '300ml', price: 90 },
        { size: '0.5L', price: 120 },
        { size: '1.0L', price: 150 },
        { size: '1.5L', price: 190 },
    ],
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
    category: 'Cold Drinks'
  },
  {
    id: 'drk-3',
    name: 'Fresh Lime',
    description: 'Refreshing 7up with lime juice.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    category: 'Cold Drinks'
  },
  {
    id: 'drk-4',
    name: 'Margarita',
    description: 'Mint or Strawberry margarita slush.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
    category: 'Cold Drinks'
  },
  {
    id: 'drk-5',
    name: 'Lemon Soda',
    description: 'Fizzy lemon soda.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    category: 'Cold Drinks'
  },
  {
    id: 'drk-6',
    name: 'Coffee',
    description: 'Hot brewed coffee.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
    category: 'Hot Drinks'
  },
  {
    id: 'drk-7',
    name: 'Karak Tea',
    description: 'Strong tea.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231844f74?q=80&w=800&auto=format&fit=crop',
    category: 'Hot Drinks'
  },
   {
    id: 'drk-8',
    name: 'Kashmiri Chai',
    description: 'Traditional pink tea with nuts.',
    price: 200,
    variations: [
        { size: 'Regular', price: 200 },
        { size: 'Special', price: 250 },
    ],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231844f74?q=80&w=800&auto=format&fit=crop',
    category: 'Hot Drinks'
  }
];

export const MARQUEE_TEXT = "🔥 OPEN 4 PM – 4 AM • DINE-IN • TAKEOUT • DELIVERY • SIZZLING OVEN • LAHORE 🔥 OPEN 4 PM – 4 AM • DINE-IN • TAKEOUT • DELIVERY • SIZZLING OVEN • LAHORE";

export const CONTACT_INFO = {
  address: "549, Sector B2 Block 2, Sector B 2, Lahore, 54000, Pakistan",
  phone: "+92 314 7378138",
  email: "sizzlingoven@gmail.com",
  instagram: "https://www.instagram.com/sizzlingoven/",
  facebook: "https://www.facebook.com/profile.php?id=61578210321476"
};
