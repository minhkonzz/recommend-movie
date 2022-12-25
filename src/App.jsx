import { useState, useEffect } from "react";
import store from "./store";
import { Provider as MemoryProvider } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import MovieSlides from './components/MovieSlides';
import AskingSidebar from './components/AskingSidebar';
import "./styles/index.css";

function App() {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    loading ? <Loading /> :
    <div className="App">
      <MemoryProvider store={store}>
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 }}}>
            <MovieSlides />
          </motion.div>
          <AskingSidebar />
        </AnimatePresence>
      </MemoryProvider>
    </div>
  );
}

export default App;
