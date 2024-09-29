const ocvOpen = document.getElementById("ocvOpen");
const ocvClose = document.getElementById("ocv-close");
const offCanvas = document.getElementById("off-canvas-mi");
const main = document.getElementById("main");

//OPENING AND CLOSING THE OFF-CANVAS

document.addEventListener("DOMContentLoaded", () => {
  ocvOpen.addEventListener("click", () => {
    offCanvas.classList.add("off-canvas-mi-open");
  });

  ocvClose.addEventListener("click", () => {
    offCanvas.classList.remove("off-canvas-mi-open");
  });

});



// FETCHING THE BLOGS FROM THE JSON FILE/API
const blogUrl = "https://raw.githubusercontent.com/philips-of-ng/My-JSON-Files/main/blogs.json";
const fetchBlogs = async () => {
  try {
    const response = await fetch(blogUrl);
    const data = await response.json();
    const slicedData = data.slice(1, 4);
    console.log("Blogs Loaded ✅ :", slicedData);

    renderBlogs(slicedData);
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }
};

// RENDERING THE BLOGS ON THE PAGE/DOM
const renderBlogs = (blogs) => {
  const blogContainer = document.getElementById("blogContainer");
  const oneBlog = document.getElementById("oneBlog");

  blogs.forEach((blog) => {
    const blogElement = oneBlog.cloneNode(true);

    blogElement.querySelector("#blogTopic").textContent = blog.topic;
    blogElement.querySelector("#blogDate").textContent = blog.datePosted;
    blogElement.querySelector("#blogCategory").textContent = blog.category;
    blogElement.querySelector("#blogDescr").textContent;

    blogContainer.appendChild(blogElement);
  });

  oneBlog.remove();
};

fetchBlogs();

//FETCHING THE WORKS FROM THE JSON FILE/API

const workUrl = 'https://raw.githubusercontent.com/philips-of-ng/My-JSON-Files/main/works.json';
const fetchWorks = async () => {
  try {
    const response = await fetch(workUrl);
    const data = await response.json();
    const slicedWork = data.slice(0, 4);
    console.log("Works Loaded ✅ :", slicedWork);

    renderWorks(slicedWork);
  } catch (error) {
    console.log("There was an error fetching your works", error);
  }
};

const renderWorks = (works) => {
  const workContainer = document.getElementById("workContainer");
  const oneWork = document.getElementById("oneWork");

  works.forEach((work) => {
    const workElement = oneWork.cloneNode(true);

    workElement.querySelector("#workImage").src = work.workImage;
    workElement.querySelector("#workTitle").textContent = work.workTitle;
    workElement.querySelector("#workYear").textContent = work.workYear;
    workElement.querySelector("#workType").textContent = work.workType;
    workElement.querySelector("#workDescr").textContent = work.workDescr;

    workContainer.appendChild(workElement);
  });

  oneWork.remove();
};

fetchWorks();

const reviewUrl = "https://raw.githubusercontent.com/philips-of-ng/My-JSON-Files/main/reviews.json";
const fetchReviews = async () => {
  try {
    const response = await fetch(reviewUrl);
    const data = await response.json();
    const slicedReviews = data.slice(0, 3);
    console.log("Reviews Loaded ✅ :", slicedReviews);

    renderReviews(slicedReviews);
  } catch (error) {
    console.log("There was an error fetching your review:", error);
  }
};

const renderReviews = (reviews) => {
  const reviewContainer = document.getElementById("reviewContainer");
  const oneReview = document.getElementById("oneReview");

  reviews.forEach((review) => {
    reviewElement = oneReview.cloneNode(true);

    reviewElement.querySelector("#rev-name").textContent = review.name;
    reviewElement.querySelector("#rev-text").textContent = review.reviewText;
    reviewElement.querySelector("#rev-image").src = review.image;

    const oneStar = `<i class="bx bxs-star"></i>`;
    const emptyStar = `<i class='bx bx-star'></i>`;

    if (review.stars <= 1) {
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
    } else if (review.stars <= 2 && review.stars > 1) {
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
    } else if (review.stars <= 3 && review.stars > 2) {
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
    } else if (review.stars <= 4 && review.stars > 3) {
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(emptyStar));
    } else if (review.stars <= 5 && review.stars > 4 || review.stars > 5) {
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
      reviewElement
        .querySelector("#rev-stars-div")
        .appendChild(createStarElement(oneStar));
    }

    function createStarElement(starHtml) {
      const starSpan = document.createElement("span");
      starSpan.innerHTML = starHtml;
      return starSpan.firstChild;
    }

    reviewContainer.appendChild(reviewElement);
  });

  oneReview.remove();
};

fetchReviews();