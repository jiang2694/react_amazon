import ReviewDetails from "./ReviewDetails";

export default function ReviewList(props) {
  return(
    <>
    <h2>Review List</h2>
      {props.list.map((r, i)=> {
        return <QuestionDetails
          key={i}
          rating={r.rating}
          body={r.body}
          reviewer={r.reviewer}
          created_at={r.created_at}
        />
      })}
    </>
  )
}