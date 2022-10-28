import HeaderBanner from "./HeaderBanner";
import NewUser from "./NewUser";
import ProductList from "./ProductList";
import PromoSection from "./PromoSection";

export default function Page() {
  return (
    <div>
      <HeaderBanner />
      <NewUser />
      <PromoSection />
      <ProductList />
    </div>
  );
}
