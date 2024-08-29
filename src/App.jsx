import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
