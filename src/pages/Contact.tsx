
import { Phone, Mail, Heart, Flower, Star, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dueDate: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui seria implementada a lógica de envio do formulário
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-soft via-beige-light to-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800">
              Vamos
              <span className="text-rose-500"> Conversar?</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estou aqui para esclarecer suas dúvidas e entender como posso apoiar você nesta jornada especial. Entre em contato e vamos agendar nossa primeira conversa.
            </p>
          </div>
        </div>
      </section>

      {/* Contato e Formulário */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Informações de Contato */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="font-playfair text-3xl font-bold text-gray-800">
                  Entre em Contato
                </h2>
                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                  Adoraria conhecer você e sua família. Nossa primeira conversa é sempre gratuita e sem compromisso - é uma oportunidade para nos conhecermos e entendermos como posso apoiar vocês.
                </p>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-gray-800">Telefone</p>
                    <p className="font-inter text-gray-600">62 98219-8113</p>
                    <p className="font-inter text-sm text-gray-500">WhatsApp disponível 24h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-mint-fresh p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-gray-800">Email</p>
                    <p className="font-inter text-gray-600">marina@doula.com</p>
                    <p className="font-inter text-sm text-gray-500">Respondo em até 24h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-calm p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-gray-800">Horário de Atendimento</p>
                    <p className="font-inter text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="font-inter text-sm text-gray-500">Emergências: disponível 24h</p>
                  </div>
                </div>
              </div>

              {/* Processo de Atendimento */}
              <div className="bg-gradient-to-br from-beige-light to-mint-soft p-8 rounded-2xl">
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-6">
                  Como Funciona Nosso Primeiro Contato
                </h3>
                <div className="space-y-4">
                  {[
                    "Conversa inicial gratuita de 30 minutos",
                    "Conhecimento mútuo e esclarecimento de dúvidas",
                    "Apresentação dos serviços adequados para você",
                    "Proposta personalizada conforme suas necessidades"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-rose-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="font-inter text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-gradient-to-br from-white to-rose-soft/30 p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="h-8 w-8 text-rose-500" />
                    <h3 className="font-playfair text-2xl font-bold text-gray-800">
                      Formulário de Contato
                    </h3>
                  </div>
                  <p className="font-inter text-gray-600">
                    Preencha os campos abaixo e entraremos em contato em breve
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-inter font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent font-inter"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-inter font-medium text-gray-700 mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent font-inter"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent font-inter"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dueDate" className="block font-inter font-medium text-gray-700 mb-2">
                        Data Prevista do Parto
                      </label>
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent font-inter"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block font-inter font-medium text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent font-inter"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="prenatal">Acompanhamento Pré-natal</option>
                        <option value="parto">Suporte no Parto</option>
                        <option value="pos-parto">Cuidados Pós-parto</option>
                        <option value="completo">Pacote Completo</option>
                        <option value="consultoria">Consultoria</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent font-inter resize-none"
                      placeholder="Conte-me um pouco sobre suas expectativas e como posso ajudar você..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-4 rounded-lg font-inter font-semibold hover:from-rose-500 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Enviar Mensagem
                  </button>

                  <p className="text-center font-inter text-sm text-gray-500">
                    Ao enviar, você concorda em receber contato nosso. Seus dados estão seguros conosco.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-r from-blue-serene to-mint-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="font-playfair text-3xl font-bold text-gray-800">
              Perguntas Frequentes
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Tire suas principais dúvidas sobre o trabalho da doula
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quando devo procurar uma doula?",
                answer: "O ideal é procurar uma doula no segundo trimestre da gestação, mas nunca é tarde demais. Posso apoiar você em qualquer fase da gravidez ou até mesmo apenas no parto."
              },
              {
                question: "A doula substitui o médico ou parteira?",
                answer: "Não! A doula oferece suporte emocional, físico e informativo, mas não realiza procedimentos médicos. Trabalhamos em complemento à equipe médica."
              },
              {
                question: "Como é o acompanhamento durante o parto?",
                answer: "Fico com você desde o início do trabalho de parto até algumas horas após o nascimento, oferecendo apoio contínuo, técnicas de alívio da dor e suporte emocional."
              },
              {
                question: "Quanto custa o serviço de uma doula?",
                answer: "Os valores variam conforme o pacote escolhido. Oferece uma consulta gratuita inicial para conhecermos suas necessidades e apresentar as opções."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-2 rounded-full mt-1">
                    <Star className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-playfair font-semibold text-gray-800 text-lg">
                      {faq.question}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
