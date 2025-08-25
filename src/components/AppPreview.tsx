import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import appMockup1 from "@/assets/app-mockup-1.jpg";
import appMockup2 from "@/assets/app-mockup-2.jpg";

const AppPreview = () => {
  const developmentFeatures = [
    {
      title: "Marketplace Interface",
      status: "In Development",
      description: "Clean, intuitive design for buying and selling student items",
      progress: 85
    },
    {
      title: "Campus Navigation",
      status: "In Development", 
      description: "Interactive maps and location-based services",
      progress: 70
    },
    {
      title: "User Authentication",
      status: "Completed",
      description: "Secure student verification and account management",
      progress: 100
    },
    {
      title: "News Feed System",
      status: "Testing",
      description: "Real-time updates and campus announcements",
      progress: 90
    },
    {
      title: "Payment Integration",
      status: "Planning",
      description: "Secure transaction processing for marketplace",
      progress: 30
    },
    {
      title: "Chat Messaging",
      status: "In Development",
      description: "Direct communication between students",
      progress: 60
    }
  ];

  return (
    <section id="app-preview" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Development Progress
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            See Our App in Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an exclusive preview of the BuildU app currently under development. 
            Here's what we're building for Nigerian university students.
          </p>
        </div>

        {/* App Mockups */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={appMockup1} 
                alt="BuildU Marketplace Interface" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-medium">Marketplace</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">Student Marketplace</h3>
              <p className="text-muted-foreground">
                Intuitive interface for browsing, buying, and selling student items with category filters and search functionality.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img 
                src={appMockup2} 
                alt="BuildU Campus Navigation" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-medium">Navigation</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">Campus Discovery</h3>
              <p className="text-muted-foreground">
                Interactive campus maps with building locations, services, and real-time navigation for students.
              </p>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Development Status</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {developmentFeatures.map((feature, index) => (
              <Card key={index} className="border-border/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <Badge 
                      // variant={
                      //   // feature.status === "Completed" ? "default" : 
                      //   // feature.status === "Testing" ? "secondary" : 
                      //   // feature.status === "Planning" ? "outline" : "secondary"
                      // }
                    >
                      {/* {feature.status} */}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Beta Testing: Available Soon
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <span className="text-primary font-medium w-[50%]"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
