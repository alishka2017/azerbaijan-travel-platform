import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for homepage
const popularDestinations = [
  { name: 'Баку', slug: 'baku', image: '/images/baku.jpg', description: 'Столица Азербайджана' },
  { name: 'Габала', slug: 'gabala', image: '/images/gabala.jpg', description: 'Горнолыжный курорт' },
  { name: 'Шеки', slug: 'sheki', image: '/images/sheki.jpg', description: 'Исторический город' },
];

const popularAttractions = [
  { name: 'Старый город (Ичери Шехер)', city: 'Баку', rating: 4.8 },
  { name: 'Гобустан', city: 'Баку', rating: 4.7 },
  { name: 'Дворец Шеки Ханов', city: 'Шеки', rating: 4.9 },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Путешествуй по Азербайджану
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Откройте для себя красоту Кавказа — от современного Баку до древних храмов
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/ru/baku" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
              Исследовать Баку
            </Link>
            <Link href="/ru/gabala" className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
              Горнолыжные курорты
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные направления</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((dest) => (
              <Link 
                key={dest.slug} 
                href={`/ru/${dest.slug}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                  {/* Placeholder for image */}
                  <span>{dest.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600">{dest.name}</h3>
                  <p className="text-gray-600">{dest.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные достопримечательности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularAttractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{attraction.name}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                    ★ {attraction.rating}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{attraction.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы к путешествию?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения персональных рекомендаций и планирования идеального маршрута по Азербайджану.
          </p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition inline-block">
            Оставить заявку
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
