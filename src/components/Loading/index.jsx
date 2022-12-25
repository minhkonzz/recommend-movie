import ReactLoading from "react-loading"; 

export default function Loading() {
  return (
    <div className="app__main-loading">
      <ReactLoading type="bubbles" color="white" width={100} />
      <p className="loading__title">LOADING</p>
    </div>
  )
}