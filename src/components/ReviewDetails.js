function ReviewDetails(props) {
  return(
    <div>
      <p>{props.rating}</p>
      <p>
        {props.body}
        <br />
        Created: {created_at.toLocaleString()}
        By {props.reviewer.full_name}
      </p>
    </div>
  )
}

export default ReviewDetails