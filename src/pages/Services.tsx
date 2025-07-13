
import { Baby, Heart, Flower, Sun, Moon, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Baby,
      title: "Acompanhamento Pré-natal",
      description: "Suporte completo durante toda a gestação",
      features: [
        "Consultas mensais de apoio emocional",
        "Orientações sobre o trabalho de parto",
        "Elaboração do plano de parto",
        "Preparo físico e mental",
        "Apoio na escolha da equipe médica",
        "Esclarecimento de dúvidas"
      ],
      duration: "A partir da 20ª semana",
      price: "Consulte valores"
    },
    {
      id: 2,
      icon: Heart,
      title: "Suporte durante o Parto",
      description: "Presença contínua e apoio ininterrupto",
      features: [
        "Presença desde o início do trabalho de parto",
        "Técnicas de alívio da dor",
        "Apoio emocional contínuo",
        "Comunicação com a equipe médica",
        "Apoio ao parceiro/família",
        "Registro fotográfico (opcional)"
      ],
      duration: "Durante todo o trabalho de parto",
      price: "Consulte valores"
    },
    {
      id: 3,
      icon: Flower,
      title: "Cuidados Pós-parto",
      description: "Apoio na adaptação e recuperação",
      features: [
        "Visitas domiciliares",
        "Apoio à amamentação",
        "Cuidados com o recém-nascido",
        "Apoio emocional pós-parto",
        "Orientações sobre recuperação",
        "Rede de apoio e recursos"
      ],
      duration: "Primeiras 6 semanas",
      price: "Consulte valores"
    }
  ];

  const packages = [
    {
      name: "Pacote Completo",
      description: "Acompanhamento integral da gestação ao pós-parto",
      includes: ["Pré-natal", "Parto", "Pós-parto"],
      highlight: true
    },
    {
      name: "Pacote Parto",
      description: "Suporte focado no trabalho de parto e nascimento",
      includes: ["2 encontros pré-natais", "Parto", "1 visita pós-parto"],
      highlight: false
    },
    {
      name: "Consultoria Personalizada",
      description: "Serviços avulsos conforme sua necessidade",
      includes: ["Flexibilidade total", "Pagamento por sessão"],
      highlight: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-soft via-beige-light to-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800">
              Serviços de
              <span className="text-rose-500"> Apoio Maternal</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofereci suporte personalizado em cada fase da sua jornada, desde a gestação até os primeiros meses do bebê, sempre respeitando suas escolhas e necessidades.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-rose-100 to-mint-100 p-4 rounded-full">
                      <service.icon className="h-8 w-8 text-rose-500" />
                    </div>
                    <div>
                      <h2 className="font-playfair text-2xl font-bold text-gray-800">
                        {service.title}
                      </h2>
                      <p className="font-inter text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-playfair text-lg font-semibold text-gray-800">
                      O que inclui:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Star className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                          <span className="font-inter text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-beige-light to-rose-soft p-6 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-inter text-sm text-gray-600">Duração</p>
                        <p className="font-inter font-semibold text-gray-800">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-inter text-sm text-gray-600">Investimento</p>
                        <p className="font-inter font-semibold text-gray-800">{service.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1649972904349-6e44c42644a7' : index === 1 ? '1500673922987-e212871fec22' : '1518495973542-4542c06a5843'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                    {index === 0 ? <Sun className="h-6 w-6 text-yellow-500" /> : 
                     index === 1 ? <Moon className="h-6 w-6 text-blue-500" /> : 
                     <Flower className="h-6 w-6 text-green-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section className="py-20 bg-gradient-to-r from-blue-serene to-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="font-playfair text-3xl font-bold text-gray-800">
              Pacotes de Atendimento
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Escolha a opção que melhor se adapta às suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg relative ${pkg.highlight ? 'ring-2 ring-rose-400 transform scale-105' : ''}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-rose-500 text-white px-6 py-2 rounded-full font-inter font-semibold text-sm">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-inter text-gray-600">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-inter font-semibold text-gray-800">Inclui:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Star className="h-4 w-4 text-rose-400" />
                          <span className="font-inter text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-4 rounded-full font-inter font-semibold transition-all duration-200 ${
                    pkg.highlight 
                      ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-rose-400 text-rose-600 hover:bg-rose-50'
                  }`}>
                    Saber Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="font-playfair text-3xl font-bold text-gray-800">
              Por que Ter uma Doula?
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Pesquisas mostram que o apoio contínuo de uma doula traz benefícios significativos para mãe e bebê
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { percentage: "39%", benefit: "Redução no tempo de trabalho de parto" },
              { percentage: "60%", benefit: "Diminuição na solicitação de anestesia" },
              { percentage: "50%", benefit: "Redução de cesáreas desnecessárias" },
              { percentage: "40%", benefit: "Menor uso de ocitocina sintética" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-beige-light to-mint-soft p-6 rounded-xl">
                <div className="font-playfair text-3xl font-bold text-rose-500 mb-2">
                  {stat.percentage}
                </div>
                <p className="font-inter text-gray-600 text-sm">
                  {stat.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-400 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-playfair text-3xl font-bold text-white">
              Pronta para Começar?
            </h2>
            <p className="font-inter text-xl text-rose-100">
              Vamos conversar sobre suas necessidades e como posso apoiar você nesta jornada especial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-500 px-8 py-4 rounded-full font-inter font-semibold hover:bg-rose-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Agendar Consulta Gratuita
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-white hover:text-rose-500 transition-all duration-200">
                Fazer Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
