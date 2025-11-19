
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Waves, Droplets, Wind } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">BlueSite</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <Button variant="default">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 gradient-hero opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Welcome to the{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blue Experience
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dive into a world of tranquility and innovation. Experience the perfect blend of design and functionality.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Explore Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Blue?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make our platform stand out from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Fluid Design</CardTitle>
                <CardDescription>
                  Seamless and intuitive interfaces that flow naturally with your workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our design philosophy prioritizes user experience with smooth transitions and responsive layouts.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Crystal Clear</CardTitle>
                <CardDescription>
                  Transparent processes and clear communication at every step
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No hidden surprises. Everything you need to know is presented clearly and concisely.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Refreshing Speed</CardTitle>
                <CardDescription>
                  Lightning-fast performance that keeps you moving forward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed and efficiency, delivering results in the blink of an eye.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=600&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="relative px-8 py-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Ready to Dive In?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already discovered the power of our platform
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">BlueSite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BlueSite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}