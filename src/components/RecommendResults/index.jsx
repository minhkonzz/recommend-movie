import { motion } from "framer-motion";
import RecommendMovie from "../RecommendMovie";

export default function RecommnedResults({ submit }) { 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2.5 } }} 
      className="sidebar__result">
      <div className="result__movies">
        <div className="sidebar__result-title"> {
          submit.recommendMovies.length > 0 ?
          <> 
            <ion-icon name="checkmark-circle" />
            <h6>Lựa chọn phù hợp cho bạn</h6>
          </> :
          <h6>Xin lỗi, hiện tại chưa tìm thấy phim phù hợp cho bạn</h6>
        }
        </div>
        {
          submit.recommendMovies.map((movie, i) => {
            return <RecommendMovie key={i} movie={movie} />
          })
        }
      </div>
      <div className="result__rules">
        <div className="sidebar__result-title">
          <ion-icon name="checkmark-circle" />
          <h6>{`Tất cả các luật - ${submit.allRules.length} luật`}</h6>
        </div>
        <div className="rules__detail"> {
          submit.allRules.map((rule, i) => 
            <p key={i} style={{ margin: "6px 0" }}>{`IF ${ rule.VT.join(", ") } THEN ${ rule.VP.symbol }`}</p>
          )
        }
        </div>
      </div>
      <div className="result__rules">
        <div className="sidebar__result-title">
          <ion-icon name="checkmark-circle" />
          <h6>{`Các luật sử dụng - ${submit.rulesUsed.length} luật`}</h6>
        </div>
        <div className="rules__detail"> {
          submit.rulesUsed.map((rule, i) => 
            <p key={i} style={{ margin: "6px 0" }}>{`IF ${ rule.VT.join(", ") } THEN ${ rule.VP.symbol }`}</p>
          )
        }
        </div>
      </div>
    </motion.div>
  )
}