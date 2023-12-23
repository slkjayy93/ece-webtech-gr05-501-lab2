import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../app/globals.css';

// Données fictives pour les jeux, remplacer par vos propres jeux
const games = [
  { src: '/images/nba2k24-pc.jpg', title: 'NBA 2K24', description: 'Le basketball à son apogée.' },
  { src: '/images/fc24-pc.jpg', title: 'FIFA 24', description: 'Découvrez le frisson du football mondial.' },
  { src: '/images/dragonballfighterz-pc.jpg', title: 'Dragon Ball FighterZ', description: 'Des combats épiques vous attendent.' },
  { src: '/images/codwarzone-pc.jpg', title: 'Call of Duty: Warzone', description: 'Survivez dans ce Battle Royale intense.' },
  { src: '/images/fifa23-pc.jpg', title: 'FIFA 23', description: 'Affrontez des équipes du monde entier.' },
  { src: '/images/onepiecepiratewarriors4-pc.jpg', title: 'One Piece Pirate Warriors 4', description: 'Rejoignez Luffy et son équipage dans leurs aventures.' },
  { src: '/images/narutostorm4-pc.jpg', title: 'Naruto Storm 4', description: 'Combattez avec vos ninjas favoris.' },
  { src: '/images/acvalhalla-pc.jpg', title: 'Assassin’s Creed Valhalla', description: 'Vivez la saga épique du Viking.' },
  { src: '/images/codmw2-pc.jpg', title: 'Call of Duty: Modern Warfare 2', description: 'Une aventure pleine d\'action et de stratégie.' },
  { src: '/images/codbo3-pc.jpg', title: 'Call of Duty: Black Ops III', description: 'Un futur sombre et complexe.' },
];



// Paramètres pour le carrousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gray-700 text-white">
          <h1 className="text-5xl font-bold mb-6">Bienvenue sur JoystickJury!</h1>
          <p className="text-xl">Votre source ultime pour les critiques et les nouvelles de jeux vidéo.</p>
        </section>

        {/* Games Section */}
        <section className="container mx-auto py-20">
          <h2 className="text-4xl text-center font-bold mb-12">Les incontournables</h2>
          <Slider {...settings}>
          {games.map((game, index) => (
              <div key={index} className="p-2 game-card">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                  <img src={game.src} alt={game.title} className="w-full object-contain" style={{ height: '250px' }} />
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h3 className="font-bold text-xl mb-2">{game.title}</h3>
                    <p className="text-gray-700 text-base">{game.description}</p>
                 </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* About Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">À propos de JoystickJury</h2>
            <p className="text-xl">Nous sommes une équipe passionnée par le monde du gaming. Notre mission est de vous apporter les critiques les plus honnêtes et les informations les plus récentes sur vos jeux préférés.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;