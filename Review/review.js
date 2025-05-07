

const stars = document.querySelectorAll(".stars i");

stars.forEach((star,index1)=>{

    star.addEventListener("click",()=>{

        stars.forEach((star,index2)=>{

            index1 >= index2 ? star.classList.add("active"): star.classList.remove("active");

        })

   })

})

function resetStars() {
    stars.forEach(star => star.classList.remove('active'));
    rating = 0;  
  }

document.getElementById('reviewForm').addEventListener('submit',function(e) {
    e.preventDefault();
    document.getElementById('thankYou').style.display='block';
    this.reset();
    resetStars();
    reviewInput.value = '';
  });  
