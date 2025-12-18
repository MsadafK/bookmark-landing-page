import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import Tabs from './components/Tabs';
import { Chrome } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-grey-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-preset-1 text-blue-950 mb-6">
            A Simple Bookmark Manager
          </h1>
          <p className="text-preset-4 text-grey-600 max-w-2xl mx-auto mb-8">
            A clean and simple interface to organize your favourite websites. 
            Open a new browser tab and see your sites load instantly.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Get it on Chrome</Button>
            <Button variant="outline">Get it on Firefox</Button>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-16">
          <h2 className="text-preset-2 text-blue-950 text-center mb-8">Features</h2>
          <Tabs />
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-preset-2 text-blue-950 text-center mb-12">
            Download the extension
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              icon={<Chrome size={64} className="text-blue-600" />}
              title="Add to Chrome"
              description="Minimum version 62"
              buttonText="Add & Install Extension"
            />
            <Card
              icon={<Chrome size={64} className="text-blue-600" />}
              title="Add to Chrome"
              description="Minimum version 62"
              buttonText="Add & Install Extension"
            />
            <Card
              icon={<Chrome size={64} className="text-blue-600" />}
              title="Add to Chrome"
              description="Minimum version 62"
              buttonText="Add & Install Extension"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;