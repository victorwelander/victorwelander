"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";

const Attention: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showAttention = useCallback(() => {
    setIsVisible(true);
    sessionStorage.setItem("hasSeenAttention", "true");

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState === "visible") {
      const hasSeenAttention = sessionStorage.getItem("hasSeenAttention");
      if (!hasSeenAttention) {
        showAttention();
      }
    }
  }, [showAttention]);

  useEffect(() => {
    try {
      const hasSeenAttention = sessionStorage.getItem("hasSeenAttention");

      if (!hasSeenAttention) {
        showAttention();
      }

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    } catch (error) {
      console.error("Error in Attention component:", error);
    }
  }, [showAttention, handleVisibilityChange]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg"
        >
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center text-2xl font-bold text-white"
          >
            The website is currently being developed
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Attention;
