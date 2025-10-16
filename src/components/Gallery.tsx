"use client";

export default function Gallery() {
  const galleryImages = [
    {
      title: "Wellness Center",
      button: "Learn More",
      src: "/images/p1.jpg",
    },
    {
      title: "Beehive Wellness Therapy",
      button: "Book Now",
      src: "/images/p2 New.jpg",
    },
    {
      title: "IV Therapy Setup",
      button: "Explore",
      src: "/images/p3.png",
    },
    {
      title: "Lung Therapy",
      button: "Discover",
      src: "/images/p4.jpg",
    },
  ];

  return (
    <section className="py-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-deep-charcoal mb-4">
            Our Wellness Center
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities designed for your comfort and healing
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <button className="bg-pigment-blue text-white px-4 py-2 rounded-md hover:bg-pigment-blue/90 transition-colors">
                    {image.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience our healing environment?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('booking-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-white px-8 py-4 rounded-button font-inter font-semibold text-lg uppercase tracking-wide"
          >
            Book Your Visit
          </button>
        </div>
      </div>
    </section>
  );
}
