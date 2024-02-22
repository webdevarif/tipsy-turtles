import { motion } from "framer-motion";
import { useEffect } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from 'next/router';

const Layout = ({ children, footer = true }) => {
  // Get the router object
  const router = useRouter();

  // Access the hash value
  const hashValue = router.asPath.split('#')[1];

  useEffect(() => {
    // Scroll to the element with the matching ID when the component mounts
    if (hashValue) {
      const targetElement = document.getElementById(hashValue);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hashValue]);

  return (
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
        {footer && <Footer />}
      </motion.div>
    </div>
  );
};

export default Layout;
