import { useState, useRef } from "react";
import AskingSection from "../AskingSection";
import RecommnedResults from "../RecommendResults";

export default function AskingSidebar() {

  const sidebarRef = useRef(null);
  const [ isSidebarVisible, setIsSidebarVisible ] = useState(false);
  const [ submit, setSubmit ] = useState(null);

  const openSidebar = () => { setIsSidebarVisible(true); }

  const closeSidebar = () => {
    sidebarRef.current.style.setProperty("right", "-500px");
    setTimeout(() => { setIsSidebarVisible(false); }, 450);
  }

  return (
    <>    
      <p className="app__main-title">Phim hay tháng này</p>
      <button className="app__main-button" onClick={openSidebar}>Bắt đầu tư vấn</button>
      { 
        isSidebarVisible && 
        <aside className="app__main-sidebar" ref={sidebarRef}>
          <div className="sidebar__close">
            <button className="sidebar__close-button" onClick={closeSidebar}>
              <ion-icon name="close"/>
            </button>
          </div>
          { submit ? <RecommnedResults submit={submit}/> : <AskingSection setSubmit={setSubmit} /> }
        </aside>
      }
    </>
  )
}