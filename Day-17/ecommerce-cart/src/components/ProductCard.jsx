import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>₹{product.price.toLocaleString()}</p>
        <button
          onClick={() => addToCart(product)}
          style={{
            ...styles.btn,
            background: inCart ? "#276749" : "#111",
          }}
        >
          {inCart ? `✓ In Cart (${inCart.quantity})` : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #eee",
    transition: "box-shadow 0.2s",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  info: {
    padding: "16px",
  },
  name: {
    fontSize: "15px",
    fontWeight: "600",
    margin: "0 0 6px",
    color: "#111",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#2d6a4f",
    margin: "0 0 14px",
  },
  btn: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
};