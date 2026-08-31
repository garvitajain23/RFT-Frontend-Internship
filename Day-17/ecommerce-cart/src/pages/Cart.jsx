import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, totalPrice, totalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={{ fontSize: "48px" }}>🛒</p>
        <h2>Your cart is empty</h2>
        <Link to="/" style={styles.shopBtn}>Browse Products</Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Your Cart ({totalItems} items)</h1>
      <div style={styles.layout}>
        <div style={styles.items}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          <div style={styles.summaryRow}>
            <span>Items ({totalItems})</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Shipping</span>
            <span style={{ color: "#2d6a4f" }}>Free</span>
          </div>
          <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "14px 0" }} />
          <div style={{ ...styles.summaryRow, fontWeight: "700", fontSize: "17px" }}>
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <button style={styles.checkoutBtn}>Proceed to Checkout</button>
          <Link to="/" style={styles.continueLink}>← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "32px", maxWidth: "1100px", margin: "0 auto" },
  heading: { fontSize: "22px", fontWeight: "700", marginBottom: "24px", color: "#111" },
  layout: { display: "flex", gap: "28px", alignItems: "flex-start" },
  items: { flex: 1 },
  empty: { textAlign: "center", padding: "80px 20px" },
  shopBtn: {
    display: "inline-block",
    marginTop: "16px",
    padding: "10px 24px",
    background: "#111",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
  summary: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "24px",
    minWidth: "280px",
    position: "sticky",
    top: "80px",
  },
  summaryTitle: { fontSize: "17px", fontWeight: "700", marginBottom: "16px", color: "#111" },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  checkoutBtn: {
    width: "100%",
    padding: "13px",
    marginTop: "16px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
  continueLink: {
    display: "block",
    textAlign: "center",
    marginTop: "12px",
    fontSize: "13px",
    color: "#888",
    textDecoration: "none",
  },
};