import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student-Centered",
      description: "Every feature designed with Nigerian university students at the heart of our decisions."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission-Driven",
      description: "Digitizing the student experience across universities in Africa, one campus at a time."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve real-world problems in institutional ecosystems."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community",
      description: "Building connections and fostering collaboration within university communities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Story
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            From ConectUJ to BuildU
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BuildU is a digital technology company focused on creating student-centered platforms for 
            tertiary institutions in Nigeria and beyond. Formerly known as ConectUJ, we've rebranded 
            to better reflect our mission of building scalable digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Problem We're Solving</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  University students lack structured ways to buy/sell second-hand items
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  Difficulty finding campus services and locations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  Limited platforms for campus announcements and events
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  Fragmented communication within university communities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Solution</h3>
              <p className="text-muted-foreground mb-4">
                An all-in-one mobile platform exclusively for students, offering a digital marketplace, 
                campus discovery, and a student-focused news feed.
              </p>
              <p className="text-muted-foreground">
                By simplifying peer-to-peer commerce, campus navigation, and information sharing, 
                we're on a mission to digitize the student experience across universities in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;