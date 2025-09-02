import { Rating } from "../ui/rating"

export interface ReviewType {
  rating: number,
  comment: string,
  date: Date,
  reviewerName: string,
  reviewerEmail: string
}

export interface ReviewsProps {
  reviews: Array<ReviewType>
}

export function Reviews({ reviews }: ReviewsProps){
  return(
    <>
      {reviews.map((review: ReviewType, i: number) => 
        <div className="mb-4" key={i}>
          <div className="flex items-center">
            <div className="text-lg font-semibold">
              {review.reviewerName}
            </div>
            <div className="mx-2">
              <Rating value={review.rating}/>
            </div>
          </div>
          <p className="leading-7">
            {review.comment}
          </p>
          <span className="text-muted-foreground text-sm">
            {new Date(review.date).toLocaleDateString("pt-br")}
          </span>
        </div>
      )}
    </>
  )
}