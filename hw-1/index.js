let reviewsVariable = []

function renderReviews(reviews) {
    const revDiv = document.getElementById('reviews');
    revDiv.innerHTML = '';
  
    reviews.forEach((r) => {
      const reviewElement = createReviewElement(r);
      revDiv.appendChild(reviewElement);
    });
  }

  function createReviewElement(r) {
    const ReviewElement = document.createElement('div');
    ReviewElement.classList.add('review-item');
  
    const p1 = document.createElement('p');
    p1.textContent = r.review;
    ReviewElement.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = r.rating;
    ReviewElement.appendChild(p2);
    
    return ReviewElement;
  }

  function addReview() {
    const textbox = document.getElementById('new-review');
    const inputText = textbox.value;

    const rating = document.getElementById('rating');
    const inputNumber = rating.value;
  
    if (!inputText || !inputNumber) {
        return;
      }
    
    const newRev = {
        review: inputText,
        rating: inputNumber,
    };
  
    reviewsVariable.push(newRev);
    renderReviews(reviewsVariable);  

  }
  

  // fill list with init reviews
  function init() {

    const rev1 = {
      review: "Great show!",
      rating: 5,
    };
  
    reviewsVariable.push(rev1);

    const rev2 = {
        review: "That's rough buddy",
        rating: 4,
      };
    
    reviewsVariable.push(rev2);
    renderReviews(reviewsVariable);

  }
  
  init()
  