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
}

export const flats: Flat[] = [
  {
    slug: 'gran-via',
    name: { es: 'Piso Gran Vía', en: 'Gran Vía Flat', gl: 'Piso Gran Vía' },
    address: 'Gran Vía 42, Vigo',
    neighborhood: { es: 'Centro', en: 'City Center', gl: 'Centro' },
    description: {
      es: 'Amplio piso reformado en pleno centro de Vigo, a pasos de la estación de tren y las principales zonas comerciales. Luminoso y con vistas a la Gran Vía.',
      en: 'Spacious renovated flat in the heart of Vigo, steps from the train station and main shopping areas. Bright with views of Gran Vía.',
      gl: 'Amplo piso reformado no centro de Vigo, a pasos da estación de tren e as principais zonas comerciais. Luminoso e con vistas á Gran Vía.',
    },
    image: '/web_casas/images/flat-granvia.jpg',
    rooms: [
      { id: 'gv-1', name: { es: 'Habitación Sol', en: 'Sun Room', gl: 'Habitación Sol' }, price: 350, available: true, size: '12m²', features: ['Cama doble', 'Escritorio', 'Armario empotrado'] },
      { id: 'gv-2', name: { es: 'Habitación Luna', en: 'Moon Room', gl: 'Habitación Lúa' }, price: 320, available: true, size: '10m²', features: ['Cama individual', 'Escritorio', 'Armario'] },
      { id: 'gv-3', name: { es: 'Habitación Estrella', en: 'Star Room', gl: 'Habitación Estrela' }, price: 380, available: false, size: '14m²', features: ['Cama doble', 'Baño privado', 'Escritorio', 'Armario empotrado'] },
    ],
    amenities: ['WiFi', 'Cocina equipada', 'Lavadora', 'Calefacción', 'Ascensor'],
    coordinates: { lat: 42.2372, lng: -8.7126 },
  },
  {
    slug: 'casco-vello',
    name: { es: 'Piso Casco Vello', en: 'Old Town Flat', gl: 'Piso Casco Vello' },
    address: 'Rúa Real 15, Vigo',
    neighborhood: { es: 'Casco Vello', en: 'Old Town', gl: 'Casco Vello' },
    description: {
      es: 'Encantador piso en el corazón del Casco Vello, rodeado de restaurantes, bares y la vida nocturna de Vigo. Edificio histórico con carácter.',
      en: 'Charming flat in the heart of the Old Town, surrounded by restaurants, bars, and Vigo nightlife. Historic building with character.',
      gl: 'Encantador piso no corazón do Casco Vello, rodeado de restaurantes, bares e a vida nocturna de Vigo. Edificio histórico con carácter.',
    },
    image: '/web_casas/images/flat-cascovello.jpg',
    rooms: [
      { id: 'cv-1', name: { es: 'Habitación Mar', en: 'Sea Room', gl: 'Habitación Mar' }, price: 300, available: true, size: '11m²', features: ['Cama doble', 'Escritorio', 'Vistas al mar'] },
      { id: 'cv-2', name: { es: 'Habitación Piedra', en: 'Stone Room', gl: 'Habitación Pedra' }, price: 280, available: false, size: '9m²', features: ['Cama individual', 'Escritorio', 'Armario'] },
    ],
    amenities: ['WiFi', 'Cocina equipada', 'Lavadora', 'Calefacción'],
    coordinates: { lat: 42.2331, lng: -8.7264 },
  },
  {
    slug: 'bouzas',
    name: { es: 'Piso Bouzas', en: 'Bouzas Flat', gl: 'Piso Bouzas' },
    address: 'Avenida de Bouzas 78, Vigo',
    neighborhood: { es: 'Bouzas', en: 'Bouzas', gl: 'Bouzas' },
    description: {
      es: 'Piso tranquilo en el barrio marinero de Bouzas, con fácil acceso a la playa y al paseo marítimo. Ambiente familiar y acogedor.',
      en: 'Quiet flat in the fishing neighborhood of Bouzas, with easy access to the beach and waterfront promenade. Family-friendly and cozy atmosphere.',
      gl: 'Piso tranquilo no barrio mariñeiro de Bouzas, con fácil acceso á praia e ao paseo marítimo. Ambiente familiar e acolledor.',
    },
    image: '/web_casas/images/flat-bouzas.jpg',
    rooms: [
      { id: 'bz-1', name: { es: 'Habitación Brisa', en: 'Breeze Room', gl: 'Habitación Brisa' }, price: 280, available: true, size: '13m²', features: ['Cama doble', 'Escritorio', 'Armario empotrado', 'Balcón'] },
      { id: 'bz-2', name: { es: 'Habitación Onda', en: 'Wave Room', gl: 'Habitación Onda' }, price: 260, available: true, size: '10m²', features: ['Cama individual', 'Escritorio', 'Armario'] },
      { id: 'bz-3', name: { es: 'Habitación Arena', en: 'Sand Room', gl: 'Habitación Area' }, price: 300, available: true, size: '12m²', features: ['Cama doble', 'Escritorio', 'Armario', 'Vistas al mar'] },
    ],
    amenities: ['WiFi', 'Cocina equipada', 'Lavadora', 'Calefacción', 'Terraza', 'Parking'],
    coordinates: { lat: 42.2298, lng: -8.7452 },
  },
];
