let searchInput= document.getElementById("searchInput")
 let searchValu;
 let searchInputt= document.getElementById("searchInputt")
 let searchVal;
 let pass=document.getElementById("pass");
let repass=document.getElementById("repass");
 
 //events

$(document).ready(function(){
    $(".loading-screen ").fadeOut(1000,function(){
        $(".loading-screen i ").fadeOut(1000,function(){
            $(".loading-screen ").remove()
            $("body").css("overflow","auto")
        })
    })
})
$("#toggle-menu").click(function () {

    toggleMenu();
});

$("#search").click(function(){
    closeee();
   $("#search-div").toggleClass("d-none")
   $("#contact-div").addClass("d-none")
   $(".myrow").html("")
    
})

if(searchInput){
    searchInput.addEventListener('keyup',function(){
    
        searchByName()
        
    })
}

if(searchInputt){
    searchInputt.addEventListener('keyup',function (){
        searchByletter();
    })
}

$("#Categories").click(function(){
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").addClass("d-none")
    getCat();
})

$("#area").click(function(){
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").addClass("d-none")
    getArea();
})

$("#ingred").click(function(){
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").addClass("d-none")
    getIngredients();
})


$("#contact").click(function(){
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").toggleClass("d-none")
    $(".myrow").html("")
    
})

   

function toggleMenu() {
    if ($(".open-nav").css("left") == "0px") {
        $("#toggle-menu i").removeClass("fa-align-justify").addClass("fa-times");
        
        $(".open-nav").css("left","240px")
        $(".side-nav").css("transform", "translateX(0%)")
    
        $(".side-nav .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1100)
        $(".side-nav .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1200)
        $(".side-nav .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1300)
        $(".side-nav .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1400)
        $(".side-nav .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1500)


    } 
    else
        {
        $("#toggle-menu i").removeClass("fa-times").addClass("fa-align-justify");
        $(".open-nav").css("left","0px")
        $(".side-nav").css("transform", "translateX(-100%)")
        
        $(".item1,.item2,.item3,.item4,.item5,.item6").css({"opacity":"0","padding-top":" 500px"})
    }
    }



//close-menu

function closeee(){
    $(".open-nav").css("left","0px")
    $(".side-nav").css("transform", "translate(-100%)")
    $("#toggle-menu i").removeClass("fa-times").addClass("fa-align-justify");
    $(".item1,.item2,.item3,.item4,.item5,.item6").css({"opacity":"0","padding-top":" 500px"})
}



async function searchByName(){
    searchValu= searchInput.value.trim();
    
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValu}`)
    let resjson= await res.json()
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealsArr.forEach(element => {
            html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
            <div class="card">
  <img src="${element.strMealThumb}" class="card-img-top" alt="food">
  <div class="card-body">
    <h5 class="card-title">${element.strMeal.split(' ').slice(0, 3).join(' ')}</h5>
    <a href="#" class="btn btn-primary" data-id = "${element.idMeal}">Get Recipe </a>
  </div>
</div>
</div>
`
          });
    }
    else{
        html = "Sorry, we didn't find any meal!";
    }
    $(".myrow").html(html)
    
    
  
}
async function searchByletter(){
    searchVal= searchInputt.value.trim();
    console.log(searchVal)
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchVal}`)
    let resjson= await res.json();
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealsArr.forEach(element => {
            html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
            <div class="card">
  <img src="${element.strMealThumb}" class="card-img-top" alt="food">
  <div class="card-body">
    <h5 class="card-title">${element.strMeal.split(' ').slice(0, 3).join(' ')}</h5>
    <a href="#" class="btn btn-primary" data-id = "${element.idMeal}">Get Recipe </a>
  </div>
</div>
</div>
`
          });
    }
    else{
        html = "Sorry, we didn't find any meal!";
    }
    $(".myrow").html(html)
    
  
}
async function getCat(){
    
    
     let res= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
     let resjson= await res.json()
     let catArr= resjson.categories
 
     let html=""
     if(catArr)
     {
         catArr.forEach(element => {
           
           
             html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
             <div class="card ">
   <img src="${element.strCategoryThumb}" class="card-img-top" alt="food" cat-id = "${element.strCategory}">
   <div class="card-body">
     <h5 class="card-title" cat-id = "${element.strCategory}">${element.strCategory}</h5>
     
   </div>
 </div>
 </div>
 `
               
           });
           
     }
     else{
         html = "Sorry, we didn't find any meal!";
     }
     
     $(".myrow").html(html)
    
     
    
 }

 async function getArea(){
    
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let resjson= await res.json()
    let areaArr= resjson.meals

    let html=""
    if(areaArr)
    {
        areaArr.forEach(element => {
          
          
            html+=  `<div class="col-lg-3 col-md-4 col-sm-6 py-2   ">
                       <div class="card py-5" area-id="${element.strArea}">
                       <i area-id="${element.strArea}" class="fa-solid fa-city fa-3x mb-3 text-primary"></i>
                       <h5  area-id="${element.strArea}">${element.strArea}</h5>
                       
                       </div>

                       </div>    
                       ` 
          });
          
    }
    else{
        html = "Sorry, we didn't find any meal!";
    }
    $(".myrow").html(html)
   
  
  

    

}
async function getIngredients(){
    
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let resjson= await res.json()
    let ingredArr= resjson.meals

    let html=""
    if(ingredArr)
    {
       
          for(let i=0; i<20;i++)
{
            html+=  `<div class="col-lg-3 col-md-4 col-sm-6 text-center py-2" ingred-id=" ${ingredArr[i].strIngredient}">
                       <div ingred-id="${ingredArr[i].strIngredient}" class="card py-5  ">
                       <i ingred-id="${ingredArr[i].strIngredient}" class="fa-solid fa-bowl-food fa-3x mb-3 lemon "></i>
                       <h5  ingred-id="${ingredArr[i].strIngredient}">${ingredArr[i].strIngredient}</h5>
                       </div>

                       </div>    
                       `
          }
    }
    else{
        html = "Sorry, we didn't find any meal!";
    }
    $(".myrow").html(html)
   
}
async function home(){
   
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let resjson= await res.json()
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealsArr.forEach(element => {
            html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
            <div class="card ">
  <img src="${element.strMealThumb}" class="card-img-top" alt="food">
  <div class="card-body">
    <h3 class="card-title">${element.strMeal?.split(' ').slice(0, 3).join(' ')}</h3>
    <a href="#" class="btn btn-primary" data-id = "${element.idMeal}">Get Recipe </a>
  </div>
</div>
</div>
`
      
    
    });
    }
    else{
        html = "Sorry, we didn't find any meal!";
    }
    document.querySelector(".myrow").innerHTML=html;
  
}

async function categoryMeals(id){
    console.log(id);
    
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
     let resjson= await res.json()
     let mealsArr= resjson.meals 
     let html=""
     if(mealsArr)
     {
         mealsArr.forEach(element => {
             html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
             <div class="card">
   <img src="${element.strMealThumb}" class="card-img-top" alt="food">
   <div class="card-body">
     <h5 class="card-title">${element.strMeal?.split(' ').slice(0, 3).join(' ')}</h5>
     <a href="#" class="btn btn-primary" data-id = "${element.idMeal}">Get Recipe </a>
   </div>
 </div>
 </div>
 `           
});
           
     }
     else{
         html = "Sorry, we didn't find any meal!";
     }
     $(".myrow").html(html)
    
   
    
 
     
 
 }
 async function AreaMeals(id){
    console.log(id);
    
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
     let resjson= await res.json()
     let mealsArr= resjson.meals 
     let html=""
     if(mealsArr)
     {
         mealsArr.forEach(element => {
             html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
             <div class="card">
   <img src="${element.strMealThumb}" class="card-img-top" alt="food">
   <div class="card-body">
     <h5 class="card-title">${element.strMeal?.split(' ').slice(0, 3).join(' ')}</h5>
     <a href="#" class="btn btn-primary" data-id = "${element.idMeal}">Get Recipe </a>
   </div>
 </div>
 </div>
 `
        
       
               
           });
           
     }
     else{
         html = "Sorry, we didn't find any meal!";
     }
     $(".myrow").html(html)
 }
 async function IngredientsMeals(id){
    console.log(id);
    
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
     let resjson= await res.json()
     let mealsArr= resjson.meals 
     let html=""
     if(mealsArr)
     {
         mealsArr.forEach(element => {
             html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
             <div class="card">
   <img src="${element.strMealThumb}" class="card-img-top" alt="food">
   <div class="card-body">
     <h5 class="card-title">${element.strMeal?.split(' ').slice(0, 3).join(' ')}</h5>
     <a href="#" class="btn btn-primary" data-id = "${element.idMeal}">Get Recipe </a>
   </div>
 </div>
 </div>
 `
        
       
               
           });
           
     }
     else{
         html = "Sorry, we didn't find any meal!";
     }
     $(".myrow").html(html)    
 
 }

document.addEventListener('click',async function(e){
    
    
    let category= e.target.getAttribute("cat-id")
     let area=e.target.getAttribute("area-id")
     let ingredient=e.target.getAttribute("ingred-id")
     let id=e.target.getAttribute("data-id")
console.log(category);
   
     if(area!=null){
       
     AreaMeals(area);
    
     
     }
    else if(category!=null){
    categoryMeals(category)
}
    else if(ingredient!=null){
    IngredientsMeals(ingredient);
}
else if(id!=null)
    {
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let resjson= await res.json()
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealRecipeModal(mealsArr)
    }
    
    
}
     
     
     
     
   
})




// create a recipe modal
function mealRecipeModal(recipe){
   
 
   let meal=recipe[0]
 
   let html=`<div class="bg-white pt-2" >
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header border-bottom mb-2 ">
         <h5  class="modal-title ">${meal.strMeal}</h5>
        
       </div>

       <div class="modal-body row mt-2">
       <div class="  col-md-4  ">
       <img class="w-100 mb-3 " src=${meal.strMealThumb}>
     </div>
     <div class="col-md-8 text-start   ">
       <h2>Instructions</h2>
       <p class="">${meal.strInstructions}</p>
       <p class="fw-bolder">Area : <span class="fw-lighter">${meal.strArea}</span></p>
       <p class="fw-bolder">Category : <span class="fw-lighter ">${meal.strCategory}</span></p>
       <h3>Recipes :</h3>
       <ul class="d-flex flex-wrap  list-unstyled ps-0" id="recipes"></ul>
       <h3 class="my-2 mx-1 p-1">Tags :</h3>
       <ul class="d-flex flex-wrap list-unstyled ps-0" id="tags"></ul>
       <a class="btn  btn-danger text-white mb-2" target="_blank" href=${meal.strYoutube}>Youtub</a>
     </div>
       </div>


       <div class="modal-footer border-top py-1 ">
         <button type="button" class="btn btn-secondary" onclick="home()">Close</button>
       </div>
     </div>
   </div>
 </div>

`

let recipes = ""
for (let i = 1; i <= 6; i++) {
    if (meal[`strIngredient${i}`]) {
        recipes += `<li class="my-3 mx-1 p-1 border w-auto light-green fs-6 rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
    }
}

let tags = meal.strTags?.split(",")
let tagsStr = ""
for (let i = 0; i < tags?.length; i++)
{
 tagsStr += `<li class="my-3 mx-1 p-1  fs-6 bg-success text-white border w-auto rounded">${tags[i]}</li>`
 
}

  
///$(".meals").after(html)
$(".myrow").html(html)
$("#recipes").html(recipes)
$("#tags").html(tagsStr)

}


//home page
home()



////////validation events


if(pass)
{
  pass.addEventListener("keyup",function(){
    passwordValidation();
 })
}
if(repass)
{
  repass.addEventListener("keyup",function(){
    repasswordValidation();
 })
}
if($('#age')){
    $('#age').keyup(function(){
        ageValidation();
     })
}
if($('#phone')){
    $('#phone').keyup(function(){
        phoneValidation();
     })
}
 

 $("#name").keyup(function(){
    ValidateName();
})

$('#email').keyup(function(){
    ValidateEmail();
 })


 //validation events end

 function passwordValidation(){
    if(/^[A-Za-z]\w{7,14}$/.test(pass.value))
    {
    pass.classList.remove("is-invalid")
    pass.classList.add("is-valid")
    document.getElementById("pass-valid").style.display="none"
    return true
    }
     else { 
        pass.classList.remove("is-valid")
        pass.classList.add("is-invalid")
        document.getElementById("pass-valid").style.display="block"
        return false
  }
 }

 function repasswordValidation(){
    if(/^[A-Za-z]\w{7,14}$/.test(repass.value)&& repass.value==pass.value)
    {
    repass.classList.remove("is-invalid")
    repass.classList.add("is-valid")
    document.getElementById("repass-valid").style.display="none"
    return true
    }
     else { 
        repass.classList.remove("is-valid")
        repass.classList.add("is-invalid")
        document.getElementById("repass-valid").style.display="block"
        return false
  }
 }



//age +10
 function ageValidation(){
    let regAge = /^(1[0-9]|[2-9]\d)$/gm
    let age = $('#age').val();
    if(regAge.test(age))
    { 
        document.getElementById("notvalid").style.display="none"
        $("#age").addClass("is-valid")
        $("#age").removeClass("is-invalid")
        return true
    
        }
    else
    {
        document.getElementById("notvalid").style.display="block"
        $("#age").addClass("is-invalid")
        $("#age").removeClass("is-valid")
        
    }
     }


     //phone
     function phoneValidation(){
        let regAge = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm
        let age = $('#phone').val();
        if(regAge.test(age))
        { 
            
            $("#phone").addClass("is-valid")
            $("#phone").removeClass("is-invalid")
            document.getElementById("invalid-phone").style.display="none"
            return true
        
            }
        else
        {       $("#age").addClass("is-invalid")
                $("#age").removeClass("is-valid")
            document.getElementById("invalid-phone").style.display="block"
            
            
        }
         }


//email

     function ValidateEmail() 
    {
        
        let mail=$('#email').val();
        
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            
            $("#email").removeClass("is-invalid")
            $("#email").addClass("is-valid")
            document.getElementById("invalidmail").style.display="none"
           return true
        }
        else
        {
        
        $("#email").removeClass("is-valid")
        $("#email").addClass("is-invalid")
        document.getElementById("invalidmail").style.display="block"
            
            return false
        }
    
}


///Name
function ValidateName() 
{
    
    let name=$('#name').val();
    
        if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(name))
    {
        
        $("#name").removeClass("is-invalid")
        $("#name").addClass("is-valid")
        document.getElementById("invalid-name").style.display="none"
       return true
    }
    else
    {
    
    $("#name").removeClass("is-valid")
    $("#name").addClass("is-invalid")
    document.getElementById("invalid-name").style.display="block"
        
        return false
    }

}








 

