import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Wordmark: "Shelter" in emerald green, "Link" in navy blue */}
        <motion.div
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-primary">Shelter</span>
          <span className="text-secondary">Link</span>
        </motion.div>

        {/* Loading progress bar */}
        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
