import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>All Products</h1>
      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "32px", maxWidth: "1100px", margin: "0 auto" },
  heading: { fontSize: "22px", fontWeight: "700", marginBottom: "24px", color: "#111" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "20px",
  },
};