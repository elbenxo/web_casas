export interface Review {
  name: string;
  text: { es: string; en: string; gl: string };
}

export interface Room {
  id: string;
  name: { es: string; en: string; gl: string };
  price: number;
  available: boolean;
  size: string;
  features: string[];
}

export interface Flat {
  slug: string;
  name: { es: string; en: string; gl: string };
  address: string;
  neighborhood: { es: string; en: string; gl: string };
  description: { es: string; en: string; gl: string };
  image: string;
  rooms: Room[];
  amenities: string[];
  coordinates: { lat: number; lng: number };
  reviews: Review[];
}

export const flats: Flat[] = [
  {
    slug: 'irmandinhos',
    name: { es: 'Piso Rúa Irmandiños', en: 'Rúa Irmandiños Flat', gl: 'Piso Rúa Irmandiños' },
    address: 'Rúa Irmandiños 23, Vigo',
    neighborhood: { es: 'Casco Urbano', en: 'City Center', gl: 'Casco Urbano' },
    description: {
      es: 'Espectacular piso reformado a estrenar en una de las mejores calles de Vigo. Amplias habitaciones con luz natural todo el día, acabados de primera calidad y una distribución perfecta para compartir. Zona tranquila y residencial pero a cinco minutos andando del centro y de todos los servicios. Sin duda, nuestra joya.',
      en: 'Spectacular newly renovated flat on one of the best streets in Vigo. Spacious rooms with natural light all day, top-quality finishes, and a perfect layout for sharing. A quiet residential area just five minutes on foot from the city center and all amenities. Without a doubt, our crown jewel.',
      gl: 'Espectacular piso reformado a estrear nunha das mellores rúas de Vigo. Amplas habitacións con luz natural todo o día, acabados de primeira calidade e unha distribución perfecta para compartir. Zona tranquila e residencial pero a cinco minutos andando do centro e de todos os servizos. Sen dúbida, a nosa xoia.',
    },
    image: '/web_casas/images/flat-irmandinhos.jpg',
    rooms: [
      { id: 'ir-1', name: { es: 'Habitación Principal', en: 'Main Room', gl: 'Habitación Principal' }, price: 380, available: true, size: '15m²', features: ['Cama doble', 'Baño privado', 'Escritorio grande', 'Armario empotrado', 'Balcón'] },
      { id: 'ir-2', name: { es: 'Habitación Luz', en: 'Light Room', gl: 'Habitación Luz' }, price: 350, available: true, size: '13m²', features: ['Cama doble', 'Escritorio', 'Armario empotrado', 'Ventanal'] },
      { id: 'ir-3', name: { es: 'Habitación Jardín', en: 'Garden Room', gl: 'Habitación Xardín' }, price: 330, available: true, size: '12m²', features: ['Cama doble', 'Escritorio', 'Armario empotrado', 'Vistas al patio'] },
    ],
    amenities: ['WiFi fibra', 'Cocina equipada', 'Lavadora', 'Secadora', 'Calefacción', 'Aire acondicionado', 'Ascensor', 'Trastero'],
    coordinates: { lat: 42.2365, lng: -8.7145 },
    reviews: [
      { name: 'Sofía T.', text: { es: 'El mejor piso en el que he vivido en Vigo. Las habitaciones son enormes y la reforma es impecable. Se nota que está todo hecho con cariño.', en: 'The best flat I have ever lived in in Vigo. The rooms are huge and the renovation is impeccable. You can tell everything was done with care.', gl: 'O mellor piso no que vivín en Vigo. As habitacións son enormes e a reforma é impecable. Nótase que está todo feito con cariño.' } },
      { name: 'Pablo N.', text: { es: 'Increíble relación calidad-precio. La zona es muy tranquila pero tienes todo a mano. El casero es un diez, siempre pendiente de todo.', en: 'Incredible value for money. The area is very quiet but everything is within reach. The landlord is a ten out of ten, always on top of things.', gl: 'Incrible relación calidade-prezo. A zona é moi tranquila pero tes todo a man. O caseiro é un dez, sempre pendente de todo.' } },
      { name: 'Elena F.', text: { es: 'Vine para una estancia de 6 meses y acabé quedándome dos años. El piso tiene algo especial que te hace sentir en casa desde el primer día.', en: 'I came for a 6-month stay and ended up staying two years. The flat has something special that makes you feel at home from day one.', gl: 'Vin para unha estancia de 6 meses e acabei quedándome dous anos. O piso ten algo especial que te fai sentir na casa dende o primeiro día.' } },
    ],
  },
  {
    slug: 'alfonso-xiii-4a',
    name: { es: 'Piso Alfonso XIII – 4ºA', en: 'Alfonso XIII Flat – 4ºA', gl: 'Piso Alfonso XIII – 4ºA' },
    address: 'Alfonso XIII, 9, Vigo',
    neighborhood: { es: 'Estación AVE', en: 'HST Station Area', gl: 'Estación AVE' },
    description: {
      es: 'Piso completamente reformado junto a la estación de alta velocidad de Vigo. Ubicación inmejorable en pleno centro, con acceso directo a transporte, comercios y zona universitaria. Luminoso, moderno y con todas las comodidades.',
      en: 'Fully renovated flat next to Vigo high-speed train station. Unbeatable central location with direct access to transport, shops, and the university area. Bright, modern, and fully equipped.',
      gl: 'Piso completamente reformado xunto á estación de alta velocidade de Vigo. Ubicación inmellorable no centro, con acceso directo a transporte, comercios e zona universitaria. Luminoso, moderno e con todas as comodidades.',
    },
    image: '/web_casas/images/flat-alfonso-4a.jpg',
    rooms: [
      { id: 'a4a-1', name: { es: 'Habitación Sol', en: 'Sun Room', gl: 'Habitación Sol' }, price: 350, available: true, size: '12m²', features: ['Cama doble', 'Escritorio', 'Armario empotrado'] },
      { id: 'a4a-2', name: { es: 'Habitación Luna', en: 'Moon Room', gl: 'Habitación Lúa' }, price: 320, available: true, size: '10m²', features: ['Cama individual', 'Escritorio', 'Armario'] },
      { id: 'a4a-3', name: { es: 'Habitación Estrella', en: 'Star Room', gl: 'Habitación Estrela' }, price: 380, available: false, size: '14m²', features: ['Cama doble', 'Baño privado', 'Escritorio', 'Armario empotrado'] },
    ],
    amenities: ['WiFi', 'Cocina equipada', 'Lavadora', 'Calefacción', 'Ascensor'],
    coordinates: { lat: 42.2318, lng: -8.7154 },
    reviews: [
      { name: 'María L.', text: { es: 'Viví aquí 2 años y fue genial. El piso está impecable y la ubicación al lado del AVE es perfecta para moverse.', en: 'I lived here for 2 years and it was great. The flat is spotless and the location next to the HST is perfect for getting around.', gl: 'Vivín aquí 2 anos e foi xenial. O piso está impecable e a ubicación ao lado do AVE é perfecta para moverse.' } },
      { name: 'Carlos R.', text: { es: 'Mejor relación calidad-precio de Vigo. Los compañeros de piso fueron estupendos y el casero muy atento.', en: 'Best value for money in Vigo. The flatmates were wonderful and the landlord very attentive.', gl: 'Mellor relación calidade-prezo de Vigo. Os compañeiros de piso foron estupendos e o caseiro moi atento.' } },
    ],
  },
  {
    slug: 'alfonso-xiii-2b',
    name: { es: 'Piso Alfonso XIII – 2ºB', en: 'Alfonso XIII Flat – 2ºB', gl: 'Piso Alfonso XIII – 2ºB' },
    address: 'Alfonso XIII, 9, Vigo',
    neighborhood: { es: 'Estación AVE', en: 'HST Station Area', gl: 'Estación AVE' },
    description: {
      es: 'Acogedor piso en segunda planta con mucha luz natural. A un minuto andando de la estación de alta velocidad y a cinco del centro comercial. Ideal para estudiantes y jóvenes profesionales.',
      en: 'Cozy second-floor flat with plenty of natural light. One minute walk from the high-speed train station and five from the shopping center. Ideal for students and young professionals.',
      gl: 'Acolledor piso na segunda planta con moita luz natural. A un minuto andando da estación de alta velocidade e a cinco do centro comercial. Ideal para estudantes e mozos profesionais.',
    },
    image: '/web_casas/images/flat-alfonso-2b.jpg',
    rooms: [
      { id: 'a2b-1', name: { es: 'Habitación Mar', en: 'Sea Room', gl: 'Habitación Mar' }, price: 300, available: true, size: '11m²', features: ['Cama doble', 'Escritorio', 'Armario empotrado'] },
      { id: 'a2b-2', name: { es: 'Habitación Piedra', en: 'Stone Room', gl: 'Habitación Pedra' }, price: 280, available: false, size: '9m²', features: ['Cama individual', 'Escritorio', 'Armario'] },
    ],
    amenities: ['WiFi', 'Cocina equipada', 'Lavadora', 'Calefacción'],
    coordinates: { lat: 42.2318, lng: -8.7154 },
    reviews: [
      { name: 'Ana P.', text: { es: 'Un piso súper cómodo y bien cuidado. La cocina tiene de todo y el barrio es muy tranquilo por la noche.', en: 'A super comfortable and well-maintained flat. The kitchen has everything and the neighborhood is very quiet at night.', gl: 'Un piso súper cómodo e ben coidado. A cociña ten de todo e o barrio é moi tranquilo pola noite.' } },
      { name: 'David M.', text: { es: 'Perfecto para ir a la universidad. Cogía el tren todos los días y tardaba nada. Muy recomendable.', en: 'Perfect for commuting to university. I took the train every day and it was no time at all. Highly recommended.', gl: 'Perfecto para ir á universidade. Collía o tren todos os días e non tardaba nada. Moi recomendable.' } },
    ],
  },
];
