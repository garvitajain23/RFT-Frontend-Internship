import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div style={styles.row}>
      <img src={item.image} alt={item.name} style={styles.img} />
      <div style={styles.details}>
        <p style={styles.name}>{item.name}</p>
        <p style={styles.unitPrice}>₹{item.price.toLocaleString()} each</p>
      </div>
      <div style={styles.controls}>
        <button style={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>−</button>
        <span style={styles.qty}>{item.quantity}</span>
        <button style={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
      <div style={styles.subtotal}>
        ₹{(item.price * item.quantity).toLocaleString()}
      </div>
      <button style={styles.remove} onClick={() => removeFromCart(item.id)}>✕</button>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "#fff",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1px solid #eee",
    marginBottom: "12px",
  },
  img: {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "8px",
    flexShrink: 0,
  },
  details: { flex: 1 },
  name: { margin: 0, fontWeight: "600", fontSize: "15px", color: "#111" },
  unitPrice: { margin: "4px 0 0", fontSize: "13px", color: "#888" },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  qtyBtn: {
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#f9f9f9",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qty: { fontSize: "15px", fontWeight: "600", minWidth: "20px", textAlign: "center" },
  subtotal: { fontWeight: "700", fontSize: "15px", minWidth: "80px", textAlign: "right", color: "#2d6a4f" },
  remove: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "16px",
    cursor: "pointer",
    padding: "4px",
  },
};