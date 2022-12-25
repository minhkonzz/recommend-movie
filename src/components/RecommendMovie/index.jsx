import { motion } from "framer-motion";

export default function RecommendMovie({ movie }) {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 1 }}} 
      className="result__movie">
      <img className="result__movie-thumbnail" src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}`} />
      <h6 className="result__movie-name">{movie.original_title}</h6>
      <div className="result__movie-genre play__button">
        <p className="result__movie-genre">{`Thể loại - ${movie.genre}`}</p>
        <button className="result__movie-play-button">
          <ion-icon name="play" />
          <span>Play trailer</span>
        </button>
      </div>
      <div className="result__movie-times nation">
        <span className="result__movie-nation">{`Quốc gia: ${movie.production_country}`}</span>
      </div>
      <div className="result__movie-times nation">
        <span>{`Thời lượng: ${movie.runtime}p`}</span>
        <span>{`Bắt đầu lúc:`}</span> 
      </div>
      <div className="result__movie-showtimes"> {
        movie.show_times.map((show_time, i) =>
          <span key={i}>{`${show_time.t.h}:${show_time.t.m} - ${show_time.ticketPrice}đ`}</span>
        )}
      </div>
      <button className="result__movie-detail-button">Thông tin chi tiết</button>
    </motion.div>
  )
}