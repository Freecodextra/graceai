import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import StartingPoint from './components/StartingPoint';
import Problem from './components/Problem';
import ComparisonTable from './components/ComparisonTable';
import Features from './components/Features';
import Gains from './components/Gains';
import Industries from './components/Industries';
import Process from './components/Process';
import Consulting from './components/Consulting';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-brand-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <StartingPoint />
        <Problem />
        <ComparisonTable />
        <Features />
        <Gains />
        <Industries />
        <Process />
        <Consulting />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
