
import { Heart, Star, Flower, Baby, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: "Camila Santos",
      text: "Debora foi um anjo durante minha gestação. Seu apoio emocional me deu toda a confiança que eu precisava para o parto.",
      rating: 5
    },
    {
      name: "Lucas e Fernanda",
      text: "O parto foi muito mais tranquilo com o suporte da Debora. Ela nos ajudou a tomar decisões informadas e nos sentimos seguros.",
      rating: 5
    },
    {
      name: "Mariana Oliveira",
      text: "No pós-parto, Debora me ajudou muito com a amamentação e cuidados com o bebê. Profissional incrível!",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f472b6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Heart className="h-5 w-5 text-rose-500" />
                <span className="font-inter text-sm font-medium text-gray-700">Doula Certificada • Goiânia, GO</span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Suporte
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600"> Humanizado</span>
                <br />
                na Maternidade
              </h1>
              
              <p className="font-inter text-xl text-gray-600 leading-relaxed max-w-lg">
                Olá, sou <span className="font-semibold text-gray-800">Debora Maria</span>! Ofereço apoio emocional, físico e informativo para tornar sua jornada da maternidade mais segura, tranquila e especial aqui em Goiânia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="group bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-inter font-semibold hover:from-rose-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center relative overflow-hidden"
              >
                <span className="relative z-10">Agendar Consulta</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/sobre"
                className="group border-2 border-rose-400 text-rose-600 px-8 py-4 rounded-2xl font-inter font-semibold hover:bg-rose-50 transition-all duration-300 text-center backdrop-blur-sm bg-white/70 shadow-lg hover:shadow-xl"
              >
                Conhecer Minha História
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="font-inter text-sm text-gray-600 ml-2">5.0 (80+ famílias atendidas)</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mulher grávida em momento de tranquilidade"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-mint-fresh to-green-200 p-4 rounded-2xl animate-float shadow-xl">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-rose-warm to-pink-200 p-4 rounded-2xl animate-float shadow-xl" style={{ animationDelay: '1s' }}>
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full">
              <Flower className="h-5 w-5 text-rose-500" />
              <span className="font-inter text-sm font-medium text-rose-700">Meus Serviços</span>
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900">
              Como Posso Te Ajudar
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Ofereço suporte completo em todas as fases da sua jornada maternal, sempre com carinho e profissionalismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Baby,
                title: "Acompanhamento Pré-natal",
                description: "Apoio emocional e informativo durante toda a gestação, preparando você para o parto dos seus sonhos.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: Heart,
                title: "Suporte no Parto",
                description: "Presença contínua durante o trabalho de parto, oferecendo conforto físico e emocional.",
                gradient: "from-rose-500 to-pink-600"
              },
              {
                icon: Flower,
                title: "Cuidados Pós-parto",
                description: "Apoio na recuperação, amamentação e adaptação aos primeiros dias com o bebê.",
                gradient: "from-green-500 to-teal-600"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl blur-xl"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-fit mb-6 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f472b6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-inter text-sm font-medium text-gray-700">Depoimentos</span>
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900">
              O Que Dizem as Famílias
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Histórias reais de quem viveu essa experiência especial comigo em Goiânia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-6 leading-relaxed italic text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ')[0][0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-inter font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="font-inter text-sm text-gray-500">
                        Goiânia, GO
                      </p>
                    </div>
                  </div>
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
              Pronta para uma Jornada Especial?
            </h2>
            <p className="font-inter text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Vamos conversar sobre como posso apoiar você neste momento único da sua vida. Atendo toda a região de Goiânia com carinho e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contato"
                className="group bg-white text-purple-600 px-8 py-4 rounded-2xl font-inter font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Agendar Conversa Gratuita</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/servicos"
                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-inter font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 backdrop-blur-sm"
              >
                Ver Todos os Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
