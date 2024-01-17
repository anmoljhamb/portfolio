import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="h-screen w-full bg-bgColor text-text-primary">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
