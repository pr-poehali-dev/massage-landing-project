import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Классический лечебный массаж",
      description: "Восстановление мышечного тонуса и снятие напряжения",
      duration: "60 мин",
      price: "3000 ₽",
    },
    {
      title: "Спортивный массаж",
      description: "Профилактика травм и восстановление после нагрузок",
      duration: "90 мин",
      price: "4000 ₽",
    },
    {
      title: "Массаж спины и шеи",
      description: "Устранение болей и зажимов в шейно-воротниковой зоне",
      duration: "45 мин",
      price: "2500 ₽",
    },
    {
      title: "Реабилитационный массаж",
      description: "Восстановление после травм и операций",
      duration: "60 мин",
      price: "3500 ₽",
    },
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличный специалист! Боли в спине прошли уже после второго сеанса.",
      rating: 5,
    },
    {
      name: "Михаил Сидоров",
      text: "Профессиональный подход, индивидуальная программа. Рекомендую!",
      rating: 5,
    },
    {
      name: "Елена Козлова",
      text: "Очень довольна результатом. Массажист знает свое дело на 100%.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-[#8B7355] text-white px-4 py-2">
            Лечебный массаж
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[#8B7355] mb-6 font-['Source_Sans_Pro']">
            Восстановление и здоровье
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-['Source_Sans_Pro']">
            Профессиональный лечебный массаж для восстановления здоровья и
            снятия боли. Сертифицированные специалисты с опытом более 10 лет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#F7A85B] hover:bg-[#e59649] text-white px-8 py-3"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на сеанс
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#8B7355] mb-4 font-['Source_Sans_Pro']">
              О нас
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наш центр лечебного массажа работает с 2010 года, помогая людям
              восстановить здоровье и избавиться от боли естественными методами.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-[#F7A85B] border-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-[#F7A85B] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#8B7355]">15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сертифицированные массажисты с медицинским образованием
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-[#F7A85B] border-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-[#F7A85B] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#8B7355]">2000+ клиентов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Довольных пациентов, которые вернули себе здоровье
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-[#F7A85B] border-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-[#F7A85B] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#8B7355]">
                  Индивидуальный подход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Персональная программа лечения для каждого пациента
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#8B7355] mb-8 font-['Source_Sans_Pro']">
            Сертификаты
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Наши специалисты имеют официальные сертификаты и лицензии
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((cert) => (
              <Card
                key={cert}
                className="p-6 hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="text-center">
                  <div className="w-full h-32 bg-gradient-to-br from-[#F7A85B] to-[#8B7355] rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Award" size={48} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-[#8B7355] mb-2">
                    Сертификат {cert}
                  </h3>
                  <p className="text-sm text-gray-600">Лечебный массаж</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#8B7355] mb-4 font-['Source_Sans_Pro']">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600">
              Профессиональный лечебный массаж для решения различных проблем со
              здоровьем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#F7A85B]"
              >
                <CardHeader>
                  <CardTitle className="text-[#8B7355] text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <Icon name="Clock" size={16} className="mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-2xl font-bold text-[#F7A85B]">
                      {service.price}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-[#F7A85B] hover:bg-[#e59649] text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#8B7355] mb-4 font-['Source_Sans_Pro']">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-gray-600">
              Что говорят наши пациенты о результатах лечения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-[#F7A85B] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#F7A85B] rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#8B7355]">
                        {review.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#8B7355] mb-6 font-['Source_Sans_Pro']">
                Контакты
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-[#F7A85B] mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[#8B7355]">Адрес</p>
                    <p className="text-gray-600">ул. Здоровья, 123, Москва</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-[#F7A85B] mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[#8B7355]">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-[#F7A85B] mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[#8B7355]">Режим работы</p>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00-21:00
                      <br />
                      Сб-Вс: 10:00-18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-[#8B7355]">
                  Записаться на прием
                </CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#8B7355] mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#F7A85B] outline-none"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8B7355] mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#F7A85B] outline-none"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8B7355] mb-2">
                    Услуга
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#F7A85B] outline-none">
                    <option>Выберите услугу</option>
                    <option>Классический лечебный массаж</option>
                    <option>Спортивный массаж</option>
                    <option>Массаж спины и шеи</option>
                    <option>Реабилитационный массаж</option>
                  </select>
                </div>

                <Button className="w-full bg-[#F7A85B] hover:bg-[#e59649] text-white py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B7355] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Центр лечебного массажа</p>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
