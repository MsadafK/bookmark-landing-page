import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-grey-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />
      </main>
    </div>
  );
}

export default App;