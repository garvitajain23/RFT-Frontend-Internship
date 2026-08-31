import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>ShopCart</Link>
      <Link to="/cart" style={styles.cartBtn}>
        🛒 Cart
        {totalItems > 0 && <span style={styles.badge}>{totalItems}</span>}
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 32px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111",
    textDecoration: "none",
  },
  cartBtn: {
    position: "relative",
    padding: "8px 18px",
    background: "#111",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "14px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "#e53e3e",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "700",
  },
};