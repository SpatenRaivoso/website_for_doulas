
import { Heart, Flower, Baby, Leaf } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como se Preparar Emocionalmente para o Parto",
      excerpt: "Dicas práticas para cultivar tranquilidade e confiança durante a gestação e o trabalho de parto.",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Preparação",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Heart
    },
    {
      id: 2,
      title: "Os Benefícios do Parto Humanizado",
      excerpt: "Entenda como o parto humanizado pode transformar positivamente sua experiência de nascimento.",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      category: "Parto Humanizado",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Flower
    },
    {
      id: 3,
      title: "Primeiros Dias com o Bebê: O que Esperar",
      excerpt: "Guia completo para os primeiros dias após o nascimento, com dicas práticas para a família.",
      date: "2 de Janeiro, 2024",
      readTime: "6 min",
      category: "Pós-parto",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Baby
    },
    {
      id: 4,
      title: "Amamentação: Dicas para um Início Tranquilo",
      excerpt: "Como estabelecer uma rotina de amamentação saudável e prazerosa para mãe e bebê.",
      date: "28 de Dezembro, 2023",
      readTime: "8 min",
      category: "Amamentação",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Leaf
    },
    {
      id: 5,
      title: "Exercícios Seguros Durante a Gestação",
      excerpt: "Mantenha-se ativa de forma segura com exercícios recomendados para cada trimestre da gravidez.",
      date: "20 de Dezembro, 2023",
      readTime: "5 min",
      category: "Gestação",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Heart
    },
    {
      id: 6,
      title: "Criando seu Plano de Parto",
      excerpt: "Passo a passo para elaborar um plano de parto que reflita seus desejos e necessidades.",
      date: "15 de Dezembro, 2023",
      readTime: "10 min",
      category: "Planejamento",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Flower
    }
  ];

  const categories = ["Todos", "Gestação", "Parto Humanizado", "Pós-parto", "Amamentação", "Preparação", "Planejamento"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-soft via-beige-light to-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800">
              Blog da
              <span className="text-rose-500"> Maternidade</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Artigos, dicas e reflexões sobre gestação, parto, amamentação e os primeiros passos da maternidade. Conhecimento para uma jornada mais tranquila e informada.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-rose-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Post Principal */}
            <div className="lg:col-span-2">
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-rose-500 text-white px-4 py-2 rounded-full font-inter font-medium text-sm">
                      {posts[0].category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 font-inter">
                    <span>{posts[0].date}</span>
                    <span>•</span>
                    <span>{posts[0].readTime} de leitura</span>
                  </div>
                  <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="font-inter text-gray-600 leading-relaxed text-lg">
                    {posts[0].excerpt}
                  </p>
                  <button className="flex items-center space-x-2 text-rose-500 font-inter font-medium hover:text-rose-600 transition-colors">
                    <span>Continuar lendo</span>
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </div>

            {/* Posts Secundários */}
            <div className="space-y-8">
              {posts.slice(1, 3).map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full font-inter font-medium text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 font-inter">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Grade de Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(3).map((post) => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="group cursor-pointer bg-gradient-to-br from-beige-light to-mint-soft rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 p-2 rounded-full">
                        <IconComponent className="h-4 w-4 text-rose-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full font-inter font-medium text-xs">
                        {post.category}
                      </span>
                      <span className="font-inter text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-xs text-gray-500">
                        {post.date}
                      </span>
                      <button className="text-rose-500 hover:text-rose-600 transition-colors">
                        <span className="sr-only">Ler mais</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-rose-400 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-playfair text-3xl font-bold text-white">
              Receba Conteúdos Especiais
            </h2>
            <p className="font-inter text-xl text-rose-100">
              Assine nossa newsletter e receba dicas, artigos e novidades sobre maternidade diretamente no seu email.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-rose-500 px-8 py-4 rounded-full font-inter font-semibold hover:bg-rose-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
