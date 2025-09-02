function Rating({ value }: { value: number }){
  return(
    Array.from({ length: value }, (_, i) =>
      <span key={i}>★</span>
    )
  )
}
export { Rating }