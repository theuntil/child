"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function VideoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // ESC + scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // modal açılınca video play dene (sesli)
  useEffect(() => {
    if (open && videoRef.current) {
      const video = videoRef.current;

      video.muted = false;
      video.volume = 1;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // autoplay bloklanırsa → ilk user interaction’da aç
          const unlock = () => {
            video.muted = false;
            video.volume = 1;
            video.play();
            window.removeEventListener("click", unlock);
          };

          window.addEventListener("click", unlock);
        });
      }
    }
  }, [open]);

  // kapanınca reset
  useEffect(() => {
    if (!open && videoRef.current) {
      const video = videoRef.current;
      video.pause();
      video.currentTime = 0;
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* WRAPPER */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* MODAL */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
              initial={{ scale: 0.92, y: 60, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 40, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
            >
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* VIDEO */}
              <video
                ref={videoRef}
                src="/cocuk.mp4"
                className="w-full h-full object-cover"
                playsInline
                preload="auto"
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}