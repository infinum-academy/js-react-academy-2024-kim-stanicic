const rev1 = {
    review: "Great show!",
    rating: 5,
    id: 1,
  };

  const rev2 = {
      review: "That's rough buddy",
      rating: 4,
      id: 2,
    };

currentId = 3
avgRating = 0
let reviewsVariable = [rev1, rev2]

function renderReviews(reviews) {
    const revDiv = document.getElementById('reviews');
    revDiv.innerHTML = '';
  
    reviews.forEach((r) => {
      const reviewElement = createReviewElement(r);
      revDiv.appendChild(reviewElement);
    });

    updateRatings()
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

    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = 'Remove';
    DeleteButton.onclick = () => {
        ReviewElement.classList.add('review-item');
        reviewsVariable = reviewsVariable.filter((tmp) => r.id != tmp.id);
        saveReviews(reviewsVariable);
        renderReviews(reviewsVariable);  
    };
   ReviewElement.appendChild(DeleteButton);

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
        id: currentId,
    };
    
    currentId++;

    reviewsVariable.push(newRev);
    saveReviews(reviewsVariable);
    renderReviews(reviewsVariable);  

  }
  
  function loadReviews() {
    const revs = localStorage.getItem('reviews');
    const Id = localStorage.getItem('id')

    if(!Id) {currentId=3;}
    else {currentId= JSON.parse(Id);}
    
    if (revs) {
      reviewsVariable = JSON.parse(revs);
      return reviewsVariable;
    }
    
    return [];
  }
  
  function saveReviews(revs) {
    localStorage.setItem('reviews', JSON.stringify(revs));
    localStorage.setItem('id', JSON.stringify(currentId))
  }
  
  function updateRatings(){


    let sum = 0;
    reviewsVariable.forEach((r) => {
        sum += parseFloat(r.rating);
      });
   
    avgRating = sum/(reviewsVariable.length);

    const avgDiv = document.getElementById('avg-rating');
    avgDiv.innerHTML = avgRating;

  }
  

  function init() {
    //load from local storage
    loadReviews()
    renderReviews(reviewsVariable);

  }
  
  init()
  