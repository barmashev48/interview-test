import Header from "@components/Header/Header";
import TaxCalculator from "@components/TaxCalculator/TaxCalculator.tsx";
import Footer from "@components/Footer/Footer.tsx";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <main>
      <Header />
      <TaxCalculator />
      <Footer />
    </main>
  );
};

export default MainLayout;
