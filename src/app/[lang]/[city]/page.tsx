import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Данные о Баку
const cityData = {
  name: 'Баку',
  slug: 'baku',
  description: 'Столица Азербайджана, расположенная на западном берегу Каспийского моря. Современный мегаполис с богатой историей, где сочетаются древние памятники архитектуры и ультрасовременные небоскребы.',
  facts: [
    { label: 'Население', value: '2.3 млн' },
    { label: 'Основан', value: 'I век до н.э.' },
    { label: 'Расположение', value: 'Каспийское побережье' },
    { label: 'Климат', value: 'Умеренно континентальный' }
  ],
  attractions: [
    { name: 'Старый город (Ичери Шехер)', rating: 4.8, description: 'Древняя крепость с узкими улочками и историческими зданиями' },
    { name: 'Башня Мэйден', rating: 4.7, description: 'Средневековая башня 12 века с панорамным видом' },
    { name: 'Гобустан', rating: 4.7, description: 'Национальный парк с наскальными рисунками и грязевыми вулканами' },
    { name: 'Дворец Ширваншахов', rating: 4.7, description: 'Исторический дворец 15 века в Старом городе' },
    { name: 'Башни Пламени', rating: 4.6, description: 'Икона современного Баку, небоскребы в форме пламени' },
    { name: 'Мемориал Шехидов', rating: 4.5, description: 'Мемориал с панорамным видом на город' }
  ],
  restaurants: [
    { name: 'Mugam Club', rating: 4.8, cuisine: 'Азербайджанская', price: '$$', description: 'Элегантный ресторан с живой музыкой' },
    { name: 'Şirvanşah', rating: 4.7, cuisine: 'Национальная', price: '$$', description: 'Традиционный ресторан с аутентичной кухней' },
    { name: 'Sky Grill', rating: 4.7, cuisine: 'Стейкхаус', price: '$$$', description: 'Ресторан на крыше с видом на море' },
    { name: 'Nargiz', rating: 4.6, cuisine: 'Международная', price: '$$$', description: 'Ресторан с панорамным видом на Баку' },
    { name: 'Cafe The Public', rating: 4.5, cuisine: 'Кавказская', price: '$', description: 'Уютное кафе в центре города' }
  ],
  hotels: [
    { name: 'Four Seasons Baku', rating: 4.9, type: 'Люкс', price: '$$$$', description: 'Роскошный отель в историческом центре' },
    { name: 'JW Marriott Absheron', rating: 4.8, type: 'Премиум', price: '$$$', description: 'Современный отель в деловом центре' },
    { name: 'Fairmont Baku', rating: 4.8, type: 'Люкс', price: '$$$$', description: 'Элегантный отель на набережной' },
    { name: 'Hilton Baku', rating: 4.7, type: 'Премиум', price: '$$$', description: 'Отличное расположение в центре' },
    { name: 'JW Marriott Absheron', rating: 4.7, type: 'Бизнес', price: '$$', description: 'Хороший выбор для деловых путешествий' }
  ],
  routes: [
    { name: 'Баку за 1 день', description: 'Обзорная экскурсия по столице' },
    { name: 'Баку за 3 дня', description: 'Полное погружение в столицу' },
    { name: 'Weekend in Baku', description: 'Короткий отдых в столице' }
  ]
};

export default function CityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Главная</Link>
              <span className="mx-2">/</span>
              <Link href="/cities" className="hover:text-white">Города</Link>
              <span className="mx-2">/</span>
              <span>{cityData.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityData.name}</h1>
            <p className="text-lg text-blue-200 max-w-3xl">{cityData.description}</p>
            
            {/* Facts */}
            <div className="flex flex-wrap gap-6 mt-8">
              {cityData.facts.map((fact, index) => (
                <div key={index} className="bg-white/10 px-4 py-2 rounded">
                  <div className="text-sm text-blue-200">{fact.label}</div>
                  <div className="font-semibold">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-4 bg-white border-b sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4">
              <a href="#overview" className="text-gray-600 hover:text-blue-600 transition">Обзор</a>
              <a href="#attractions" className="text-gray-600 hover:text-blue-600 transition">Достопримечательности</a>
              <a href="#restaurants" className="text-gray-600 hover:text-blue-600 transition">Рестораны</a>
              <a href="#hotels" className="text-gray-600 hover:text-blue-600 transition">Отели</a>
              <a href="#routes" className="text-gray-600 hover:text-blue-600 transition">Маршруты</a>
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section id="attractions" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Достопримечательности {cityData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityData.attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                      ★ {attraction.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants */}
        <section id="restaurants" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Рестораны {cityData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityData.restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                      ★ {restaurant.rating}
                    </span>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                      {restaurant.cuisine}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                      {restaurant.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{restaurant.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section id="hotels" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Отели {cityData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityData.hotels.map((hotel, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                      ★ {hotel.rating}
                    </span>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs">
                      {hotel.type}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                      {hotel.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{hotel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Routes */}
        <section id="routes" className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Готовые маршруты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cityData.routes.map((route, index) => (
                <Link
                  key={index}
                  href={`/routes/${route.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-800 mb-2">{route.name}</h3>
                  <p className="text-sm text-gray-600">{route.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Планируете поездку в {cityData.name}?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Начните планировать свое путешествие сегодня и откройте для себя все чудеса этого города.
            </p>
            <Link href="/plan-trip" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              План поездки
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'ru', city: 'baku' },
    { lang: 'ru', city: 'gandja' },
    { lang: 'ru', city: 'sheki' },
    { lang: 'ru', city: 'lenkoran' },
    { lang: 'ru', city: 'gabala' }
  ];
}
