
import { Zap, Shield, HeadphonesIcon, Award, Globe2, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized servers and CDN ensure your websites load in milliseconds"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and advanced security protocols protect your data"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our expert support team is available around the clock to help you"
    },
    {
      icon: Award,
      title: "99.9% Uptime",
      description: "Industry-leading uptime guarantee backed by SLA"
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Worldwide data centers ensure optimal performance everywhere"
    },
    {
      icon: Rocket,
      title: "Easy Deployment",
      description: "One-click deployments and automated scaling for your applications"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge hosting solutions with unmatched performance and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
