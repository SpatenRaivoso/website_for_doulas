
import { Heart, Flower, Star, Book, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f472b6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span className="font-inter text-sm font-medium text-gray-700">Goiânia, Goiás</span>
                </div>
                
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Olá, eu sou a
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600"> Debora Maria</span>
                </h1>
                
                <p className="font-inter text-xl text-gray-600 leading-relaxed">
                  Doula certificada, dedicada a apoiar famílias em um dos momentos mais transformadores de suas vidas. Minha missão é oferecer suporte emocional, físico e informativo para que cada nascimento seja uma experiência positiva e empoderada aqui em Goiânia.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <Heart className="h-5 w-5" />
                  <span className="font-inter font-medium">Mais de 150 partos acompanhados</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <Award className="h-5 w-5" />
                  <span className="font-inter font-medium">5 anos de experiência</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Debora Maria, doula profissional"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-mint-fresh to-green-200 p-4 rounded-2xl shadow-xl">
                <Flower className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minha História */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-6">
                <Heart className="h-5 w-5 text-rose-500" />
                <span className="font-inter text-sm font-medium text-rose-700">Minha Jornada</span>
              </div>
              <h2 className="font-playfair text-4xl font-bold text-gray-900">
                Minha História
              </h2>
            </div>
            
            <div className="space-y-8 font-inter text-gray-600 leading-relaxed text-lg">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
                <p>
                  Minha jornada como doula começou após vivenciar meu próprio parto aqui em Goiânia. Embora tenha sido uma experiência transformadora, senti que algo estava faltando - um apoio mais personalizado e humanizado durante aqueles momentos únicos.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
                <p>
                  Foi então que descobri o trabalho das doulas e me apaixonei pela possibilidade de fazer a diferença na vida de outras famílias goianas. Desde 2019, dedico-me integralmente a esta profissão que considero mais que um trabalho - é uma vocação.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
                <p>
                  Acredito profundamente que cada nascimento é único e sagrado. Meu papel é estar presente, oferecendo suporte contínuo, informações baseadas em evidências e, principalmente, um ambiente de amor e segurança para que você possa viver esta experiência da forma mais positiva possível, seja em casa ou nos hospitais de Goiânia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Certificações */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f472b6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Book className="h-5 w-5 text-purple-500" />
              <span className="font-inter text-sm font-medium text-gray-700">Qualificações</span>
            </div>
            
            <h2 className="font-playfair text-4xl font-bold text-gray-900">
              Formação e Certificações
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Estou sempre me atualizando para oferecer o melhor suporte às famílias goianas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Book className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900">
                  Certificações Principais
                </h3>
              </div>
              <ul className="space-y-4 font-inter text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Doula Certificada pela ANDO (Associação Nacional de Doulas)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Especialização em Parto Humanizado - UFG</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Curso de Apoio à Amamentação - Instituto Mater</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Massagem para Gestantes - Escola Brasileira de Massoterapia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Primeiros Socorros e RCP - Cruz Vermelha Goiás</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-2xl shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900">
                  Formação Continuada
                </h3>
              </div>
              <ul className="space-y-4 font-inter text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Workshop de Técnicas de Relaxamento - Mindfulness Brasil</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Curso de Comunicação Não-Violenta - CNV Brasil</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Treinamento em Aromaterapia - Instituto Bravissimo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Parto na Água - Curso de Especialização GO</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Atualização anual em Evidências Científicas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia de Trabalho */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
              <Flower className="h-5 w-5 text-purple-500" />
              <span className="font-inter text-sm font-medium text-purple-700">Meus Valores</span>
            </div>
            
            <h2 className="font-playfair text-4xl font-bold text-gray-900">
              Minha Filosofia de Trabalho
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Respeito",
                description: "Cada família é única e suas escolhas são respeitadas sempre. Acredito na autonomia e no protagonismo da mulher.",
                gradient: "from-rose-500 to-pink-600"
              },
              {
                icon: Flower,
                title: "Empoderamento",
                description: "Informação e apoio para que você tome decisões conscientes e se sinta segura em sua jornada.",
                gradient: "from-purple-500 to-indigo-600"
              },
              {
                icon: Star,
                title: "Presença",
                description: "Apoio contínuo e dedicação completa durante todo o processo, desde o pré-natal até o pós-parto.",
                gradient: "from-green-500 to-teal-600"
              }
            ].map((value, index) => (
              <div key={index} className="group text-center space-y-6">
                <div className="relative mx-auto w-fit">
                  <div className={`bg-gradient-to-r ${value.gradient} p-6 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                    <value.icon className="h-10 w-10 text-white mx-auto" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-rose-500 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white">
              Vamos Conversar?
            </h2>
            <p className="font-inter text-xl text-white/90 max-w-2xl mx-auto">
              Adoraria conhecer você e sua família. Vamos marcar uma conversa gratuita para entender como posso apoiar vocês nesta jornada especial aqui em Goiânia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-2xl font-inter font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden">
                <span className="relative z-10">Agendar Conversa Gratuita</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
