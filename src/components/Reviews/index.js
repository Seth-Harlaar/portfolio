import { ReviewsContainer, ReviewCard, ReviewName, ReviewSource, ReviewDescription, ReviewRatingContainer } from "./ReviewElements";


import { AiFillStar } from  'react-icons/ai';

const ReviewStarStyle = {
  fontSize: '12px',
  color: '#FCA311',
  margin: '0 2px',
};


const ReviewRating = () => {
  return(
    <>
      <ReviewRatingContainer>
        <AiFillStar style={ReviewStarStyle}/>
        <AiFillStar style={ReviewStarStyle}/>
        <AiFillStar style={ReviewStarStyle}/>
        <AiFillStar style={ReviewStarStyle}/>
        <AiFillStar style={ReviewStarStyle}/>
      </ReviewRatingContainer>
    </>
  )
}





const Reviews = () => {
  return (
    <>
      <ReviewsContainer>

        <ReviewCard>
          <ReviewName>Alexey Dubovskoy</ReviewName>
          <ReviewSource>Cooklang Project</ReviewSource>

          <ReviewDescription>"Seth is pleasure to work with. He can dive deep into 
            complicated problems and deliver great results. Highly recommend."</ReviewDescription>
          
          <ReviewRating/>
          
        </ReviewCard>
        
        <ReviewCard>
          <ReviewName>Jake Vanags</ReviewName>
          <ReviewSource>Spanish Audio Drills</ReviewSource>

          <ReviewDescription>"I had a really unique project, which required 
            not just the development of a tool - but the collaboration with 
            someone who had the knowledge to make it better. Seth worked 
            with me over several weeks to create a special tool that will 
            save us 10x the work and energy the task once required. Seth 
            is extremely communicative and collaborative, he works 
            through tasks with ease, and finds solutions for possible 
            bottlenecks when the answer isn't clear. It was fantastic 
            working with Seth, and I look forward to working with him 
            again in the near future."</ReviewDescription>

            <ReviewRating/>

        </ReviewCard>

      </ReviewsContainer>
    </>
  )
}

export default Reviews;