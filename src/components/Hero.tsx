
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              BlueNovaSite.com
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Premium Hosting
              <span className="block">Solutions</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Power your digital presence with our cutting-edge web hosting, cloud storage, and platform hosting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg">
              View Plans
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Server className="h-12 w-12 mb-4 text-blue-200" />
            <h3 className="text-xl font-semibold mb-2">Web Hosting</h3>
            <p className="text-blue-100 text-center">Lightning-fast servers with 99.9% uptime guarantee</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Cloud className="h-12 w-12 mb-4 text-purple-200" />
            <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
            <p className="text-blue-100 text-center">Secure, scalable storage solutions for all your data</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Globe className="h-12 w-12 mb-4 text-indigo-200" />
            <h3 className="text-xl font-semibold mb-2">Platform Hosting</h3>
            <p className="text-blue-100 text-center">Complete hosting solutions for modern applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
