
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Cloud, Globe, Zap, Shield, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Web Hosting",
      description: "Professional web hosting with enterprise-grade infrastructure",
      features: [
        "99.9% Uptime Guarantee",
        "10 Personalised Email Addresses",
        "SSD Storage",
        "Free SSL Certificates",
        "Daily Backups",
        "24/7 Support",
        "One-Click WordPress Install"
      ],
      price: "R120",
      popular: true
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure and scalable cloud storage solutions for businesses",
      features: [
        "Enterprise Security",
        "Auto-Sync Across Devices",
        "Version Control",
        "Team Collaboration",
        "API Access",
        "Unlimited Bandwidth"
      ],
      price: "R299",
      popular: false
    },
    {
      icon: Globe,
      title: "Platform Hosting",
      description: "Complete hosting platform for modern web applications",
      features: [
        "Auto-scaling Infrastructure",
        "CDN Integration",
        "Database Hosting",
        "Container Support",
        "CI/CD Pipeline",
        "Advanced Monitoring"
      ],
      price: "R599",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of hosting solutions designed to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-4 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-white'}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <service.icon className={`h-16 w-16 mx-auto mb-4 ${service.popular ? 'text-blue-600' : 'text-gray-700'}`} />
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${service.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                  size="lg"
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
