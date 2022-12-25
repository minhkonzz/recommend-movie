import useTilt from "../../hooks/useTilt.hook";
import { motion, AnimatePresence } from "framer-motion";

export default function MovieSlide({ movie, offset }) {
  const active = offset === 0 ? true : null; 
  const ref = useTilt(active); 
  return (
    <motion.div 
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      ref={ref} 
      className="slide" 
      data-active={active} 
      style={{ "--offset": offset, "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1 }} >
      <div 
        className="slideBackground" 
        style={{ backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`}} />
      <div 
        className="slideContent" 
        style={{ backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')` }}>
        <div className="slideContentInner">
          <h2 className="slideTitle">{movie.original_title}</h2>
        </div>
      </div>
    </motion.div>
  )
}