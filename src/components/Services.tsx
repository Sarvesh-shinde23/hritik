import React from 'react';

const services = [
  {
    id: 1,
    icon: 'bi bi-activity',
    title: 'Nesciunt Mete',
    description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    link: '#',
  },
  {
    id: 2,
    icon: 'bi bi-briefcase',
    title: 'Dolor Sit Amet',
    description: 'Aperiam, doloremque ab itaque magni sapiente doloribus sint reiciendis nihil.',
    link: '#',
  },
  {
    id: 3,
    icon: 'bi bi-gear',
    title: 'Consectetur Adipiscing',
    description: 'Aliquam doloribus aliquam veniam voluptates inventore reprehenderit, possimus, nihil minus.',
    link: '#',
  },
  {
    id: 4,
    icon: 'bi bi-globe',
    title: 'Adipisicing Elit',
    description: 'Quod distinctio impedit ut possimus alias aspernatur, commodi vero temporibus.',
    link: '#',
  },
  {
    id: 5,
    icon: 'bi bi-lightning',
    title: 'Sed Do Eiusmod',
    description: 'Voluptates impedit consequatur libero repudiandae, doloribus laboriosam.',
    link: '#',
  },
  {
    id: 6,
    icon: 'bi bi-puzzle',
    title: 'Tempor Incididunt',
    description: 'Alias debitis quibusdam laborum numquam minus doloribus, expedita hic.',
    link: '#',
  },
];

const Services = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-lg">
          <span>Check Our</span> <span className="font-semibold text-accent-color">Services</span>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 mt-12">
        {services.map(service => (
          <div
            key={service.id}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className=" p-4 bg-surface-color text-center hover:border hover:border-blue-600 h-full">
              <div className="mx-auto w-16 h-16 bg-accent-color rounded-sm flex items-center   ">
                <i className={`${service.icon} text-2xl text-contrast-color`} />
              </div>
              <a href={service.link} className="block">
                <h3 className="text-2xl font-bold mb-3 text-default-color">
                  {service.title}
                </h3>
              </a>
              <p className="text-sm text-wrap text-center  text-gray-700 mb-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
