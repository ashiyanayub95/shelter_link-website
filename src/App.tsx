import React from 'react';
import { Switch, Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import BackToTop from './components/BackToTop';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Career from './pages/Career';
import NotFound from './pages/not-found';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-secondary">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/career" component={Career} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
        <BackToTop />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
