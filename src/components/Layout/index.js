import { motion } from "framer-motion";
import Header from "../Header";

const Layout = ({ children }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Header />
      {children}
    </motion.div>
  </div>
);
export default Layout;