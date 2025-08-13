import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, MapPin, Bell, Users, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Student Marketplace",
      description: "Buy and sell textbooks, electronics, clothing, and offer services like tutoring and tech help.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Campus Locations",
      description: "Navigate your campus easily with our comprehensive directory of lecture halls, hostels, and admin blocks.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Student News Feed",
      description: "Stay updated with campus announcements, events, promotions, and local business offers.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "Connect with fellow students, join study groups, and build lasting relationships.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "Trade with confidence using our secure, student-verified marketplace system.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices to match how students naturally interact with technology.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Platform Features
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Everything Students Need in One App
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform addresses every aspect of student life, from academics to social connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <span className="text-primary font-medium">🚀 Coming Soon: AI-powered study recommendations and campus event suggestions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;