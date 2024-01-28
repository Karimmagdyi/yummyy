/// <reference types="../@types/jquery" />

let resp =''
let finalResponse = []
let categoryResponse=[]
let filterResponse=[]
let area=[]
let country=[]
let ingredientt=[]
let ingFilter=[]
let searchResponse=[]
let letterResponse=[]
         // apis  

         async function getData() {
            let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            let response = await api.json()
            finalResponse = response.meals
            displayData()
            items()
            // console.log(finalResponse);
        }
        getData()

        async function mealss(meal){
            let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            let response = await api.json()
             resp= response.meals
             display()
             console.log(resp);
             document.getElementById('containerRow').innerHTML=''
             
         }


async function categoryApi(){
    let api= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let response= await api.json()
     categoryResponse=response.categories
     categoryDisplay()
     cat()
     console.log(categoryResponse);
}

async function filterCategory(meal){
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
    let response= await api.json()
    filterResponse = response.meals
    console.log(filterResponse);
    filterDisplay()
    
}


async function areaApi(){
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response= await api.json()
    area=response.meals
    areaDisplay()
}

async function filterArea(countr){
let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countr}`)
let response= await api.json()
country=response.meals
filterAreaDisplay()
console.log(country);
}

async function ingredient(){
    let api= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let response= await api.json()
    ingredientt= response.meals.slice(0,20);
    ingredientDisplay()
}

async function ingredientFilter(ingMeal){
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingMeal}`)
    let response= await api.json()
    ingFilter=response.meals
    ingmeal()
}


async function searchName(term){
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    let response= await api.json()
    searchResponse=response.meals
    console.log(searchResponse);
    searchDisplay()
}
   
  async function searchLetter(term){
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    let response = await api.json()
    letterResponse=response.meals
    console.log(letterResponse);
    letterDisplay()
  }




        //  display

             function contactDisplay(){
                let cols=`<div class="col-md-6 mt-5">
                <input oninput="inputsValidation()" id="nameInput" class="form-control bg-light " type="text"
                    placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <input oninput="inputsValidation()" id="phoneInput" class="form-control bg-light " type="number"
                    placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <input oninput="inputsValidation()" id="ageInput" class="form-control bg-light " type="number"
                    placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>

            <div class="col-md-6 mt-5">
                <input oninput="inputsValidation()" id="emailInput" class="form-control bg-light " type="email"
                    placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <input oninput="inputsValidation()" id="passwordInput" class="form-control bg-light "
                    type="password" placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <input oninput="inputsValidation()" id="repasswordInput" class="form-control bg-light "
                    type="password" placeholder="Enter Your Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword
                </div>
            </div>

            <div class="button d-flex justify-content-center align-items-center mt-5">
                <button id="submitBtn" class="btn bg-transparent disabled">submit</button>
            </div>`
            document.getElementById('dataRow').innerHTML=cols
             }

             
//    contactDisplay()

        function letterDisplay(){
            let cols = ''
            for (let i = 0; i < letterResponse.length; i++) {
        
                cols +=
                    ` 
                 <div class="col-md-3">
                 <div class='items'>
                <div onclick=" searchLetterDesc('${
                    letterResponse[i].strMeal
                       }')" class="item mt-5">
                    <img class="w-100 rounded" src="${letterResponse[i].strMealThumb}" alt="">
                    <div class="layer">
                        <h4>${letterResponse[i].strMeal}</h4>
                    </div>
                </div>
            </div>
            </div>`
            }
            document.getElementById('dataRow').innerHTML = cols
        
        }


        function mainSearch(){
            let cols=''

            cols+=` <div class="col-md-6">
            <div class="input mt-5">
                <input oninput="searchName(this.value)" id="searchInput"  class="form-control text-white bg-transparent" type="text"placeholder="Search By Name">
            </div>
         </div>
         <div class="col-md-6">
            <div class="input mt-5">
                <input maxlength="1" oninput="searchLetter(this.value)" id="searchLetter" class="form-control text-white bg-transparent" type="text" name="" placeholder="Search By Name">
            </div>
         </div>`
         document.getElementById('containerRow').innerHTML=cols
         document.getElementById('dataRow').innerHTML = ''
         
        }


      function searchDisplay(){
        let cols = ''
        console.log(searchResponse);
        for (let i = 0; i < searchResponse.length; i++) {
    
            cols +=
                ` 
             <div class="col-md-3">
             <div class='items'>
            <div onclick=" searchByNameDesc('${
                searchResponse[i].strMeal
                   }')" class="item mt-5">
                <img class="w-100 rounded" src="${searchResponse[i].strMealThumb}" alt="">
                <div class="layer">
                    <h4>${searchResponse[i].strMeal}</h4>
                </div>
            </div>
        </div>
        </div>`
        }
        document.getElementById('dataRow').innerHTML = cols
        
    
    }








function ingmeal(){
    let cols=''
    for (let i = 0; i < ingFilter.length; i++) {

        cols +=
            ` 
         <div class="col-md-3">
         <div onclick=" mealIng('${
            ingFilter[i].strMeal
               }')" class='items'>
        <div class="item mt-5">
            <img class="w-100 rounded" src="${ingFilter[i].strMealThumb}" alt="">
            <div class="layer">
                <h4>${ingFilter[i].strMeal}</h4>
            </div>
        </div>
    </div>
    </div>`
    }
    document.getElementById('dataRow').innerHTML = cols


}




function ingredientDisplay(){
    let cols=''
    for(let i=0;i<ingredientt.length;i++){
       cols+=` <div class="col-md-3 mt-5">
       <div onclick=" ingredientMeal('${
        ingredientt[i].strIngredient
           }')" class="area text-light text-center">
           <i><iconify-icon icon="fa6-solid:drumstick-bite" width="64" height="64"></iconify-icon></i>
           <h3>${ingredientt[i].strIngredient}</h3>
           <p>${ingredientt[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
       </div>
     </div>`
     document.getElementById('dataRow').innerHTML=cols
     document.getElementById('containerRow').innerHTML=''
    }
}



        function filterAreaDisplay(){
            let cols = ''
            console.log(country);
            for (let i = 0; i < country.length; i++) {
        
                cols +=
                    ` 
                 <div class="col-md-3">
                 <div onclick=" areaMealDesc('${
                    country[i].strMeal
                  }')" role="button" class='items'>
                <div class="item mt-5">
                    <img class="w-100 rounded" src="${country[i].strMealThumb}" alt="">
                    <div class="layer">
                        <h4>${country[i].strMeal}</h4>
                    </div>
                </div>
            </div>
            </div>`
            }
            document.getElementById('dataRow').innerHTML = cols
        }


        function areaDisplay(){
            let cols=''
            for(let i=0;i<area.length;i++){
             cols+=`<div class="col-md-3 mt-5">
             <div role="button" onclick=" areaMeals('${
                area[i].strArea
              }')" class="area text-light">
                 <i><iconify-icon icon="fa6-solid:house-laptop" width="82" height="82"></iconify-icon></i>
                 <h3>${area[i].strArea}</h3>
             </div>
           </div>`
           document.getElementById('dataRow').innerHTML=cols
           document.getElementById('containerRow').innerHTML=''
            }
        }


        function filterDisplay(){
            let cols = ''
            // console.log(filterResponse);
            for (let i = 0; i < filterResponse.length; i++) {
        
                cols +=
                    ` 
                 <div class="col-md-3">
                 <div onclick=" filterDesc('${
                    filterResponse[i].strMeal
                  }')" class='items'>
                <div class="item mt-5">
                    <img class="w-100 rounded" src="${filterResponse[i].strMealThumb}" alt="">
                    <div class="layer">
                        <h4>${filterResponse[i].strMeal}</h4>
                    </div>
                </div>
            </div>
            </div>`
            }
            document.getElementById('dataRow').innerHTML = cols
        }
//  filterDisplay()

        function categoryDisplay(){
            let cols=''
            for(let i=0;i<categoryResponse.length;i++){
            cols+=` <div class="col-md-3">
            <div onclick=" cat('${
                categoryResponse[i].strCategory
              }')" class='items'>
           <div class="item categorry mt-5">
               <img class="w-100 rounded" src="${categoryResponse[i].strCategoryThumb}" alt="">
               <div class="layer d-flex flex-column justify-content-center align-items-center ">
                   <h3>${categoryResponse[i].strCategory }</h3> 
                   <p >${categoryResponse[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                  
               </div>
           </div>
       </div>
       </div>`
            }
            document.getElementById('dataRow').innerHTML=cols
            document.getElementById('containerRow').innerHTML=''
        }

        function displayData() {
            let cols = ''
            console.log(finalResponse);
            for (let i = 0; i < finalResponse.length; i++) {
        
                cols +=
                    ` 
                 <div class="col-md-3">
                 <div class='items'>
                <div class="item mt-5">
                    <img class="w-100 rounded" src="${finalResponse[i].strMealThumb}" alt="">
                    <div class="layer">
                        <h4>${finalResponse[i].strMeal}</h4>
                    </div>
                </div>
            </div>
            </div>`
            }
            document.getElementById('dataRow').innerHTML = cols
        
        
        
        }


        function display(){
            let cols=''
           for(let i=0;i<resp.length;i++){
                cols+=`  <div class="col-md-4">
                <div class="meal mt-5">
                    <img class="w-100 rounded" src="${resp[i].strMealThumb}" alt="">
                    <h2>${resp[i].strMeal}</h2>
                </div>
            </div>
            <div class="col-md-8">
                <div class="mealContent mt-5 text-light">
                  <h2>instructions</h2>
                  <p>${resp[i].strInstructions}
                <h3>
                    <span>Area :</span>
                    ${resp[i].strArea}
                </h3>
                <h3>
                 <span> Category :</span>
                 ${resp[i].strCategory}
                </h3>
                <h3>
                    Recipes :
                    <ul class='d-flex'>
                    <li>
                   ${resp[i].strMeasure1}
                   ${resp[i].strIngredient1}
                    </li>
                    <li>
                    ${resp[i].strMeasure2}
                    ${resp[i].strIngredient2}
                    </li>
                    <li>
                    ${resp[i].strMeasure3}
                    ${resp[i].strIngredient3}
                    </li>
                    <li>
                    ${resp[i].strMeasure4}
                    ${resp[i].strIngredient4}
                    </li>
                    <li>
                    ${resp[i].strMeasure5}
                    ${resp[i].strIngredient5}
                    </li>
                    <li>
                    ${resp[i].strMeasure6}
                    ${resp[i].strIngredient6}
                    </li>
                    <li>
                    ${resp[i].strMeasure7}
                    ${resp[i].strIngredient7}
                    </li>
                    <li>
                    ${resp[i].strMeasure8}
                    ${resp[i].strIngredient8}
                    </li>
                    <li>
                    ${resp[i].strMeasure9}
                    ${resp[i].strIngredient9}  
                    </li>
                    <li>
                    ${resp[i].strMeasure10}
                    ${resp[i].strIngredient10}
                    </li>
                    </ul>
                </h3>
        
                <h3>tags:</h3>
                <a class="btn bg-success" href="${resp[i].strSource}">Source</a>
                <a class="btn btn-danger" href="${resp[i].strYoutube}">Youtube</a>
                </div>
            </div>`
           }
           document.getElementById('dataRow').innerHTML=cols
        }






        // habal


        function displayN(nn){
            let cols=''
           for(let i=0;i<nn.length;i++){
                cols+=`  <div class="col-md-4">
                <div class="meal mt-5">
                    <img class="w-100 rounded" src="${nn[i].strMealThumb}" alt="">
                    <h2>${nn[i].strMeal}</h2>
                </div>
            </div>
            <div class="col-md-8">
                <div class="mealContent mt-5 text-light">
                  <h2>instructions</h2>
                  <p>${nn[i].strInstructions}
                <h3>
                    <span>Area :</span>
                    ${nn[i].strArea}
                </h3>
                <h3>
                 <span> Category :</span>
                 ${nn[i].strCategory}
                </h3>
                <h3>
                    Recipes :
                    <ul class='d-flex'>
                    <li>
                   ${nn[i].strMeasure1}
                   ${nn[i].strIngredient1}
                    </li>
                    <li>
                    ${nn[i].strMeasure2}
                    ${nn[i].strIngredient2}
                    </li>
                    <li>
                    ${nn[i].strMeasure3}
                    ${nn[i].strIngredient3}
                    </li>
                    <li>
                    ${nn[i].strMeasure4}
                    ${nn[i].strIngredient4}
                    </li>
                    <li>
                    ${nn[i].strMeasure5}
                    ${nn[i].strIngredient5}
                    </li>
                    <li>
                    ${nn[i].strMeasure6}
                    ${nn[i].strIngredient6}
                    </li>
                    <li>
                    ${nn[i].strMeasure7}
                    ${nn[i].strIngredient7}
                    </li>
                    <li>
                    ${nn[i].strMeasure8}
                    ${nn[i].strIngredient8}
                    </li>
                    <li>
                    ${nn[i].strMeasure9}
                    ${nn[i].strIngredient9}  
                    </li>
                    <li>
                    ${nn[i].strMeasure10}
                    ${nn[i].strIngredient10}
                    </li>
                    </ul>
                </h3>
        
                <h3>tags:</h3>
                <a class="btn bg-success" href="${resp[i].strSource}">Source</a>
                <a class="btn btn-danger" href="${resp[i].strYoutube}">Youtube</a>
                </div>
            </div>`
           }
           document.getElementById('dataRow').innerHTML=cols
        }


        // functionss


        $('#navIcon').on('click', function () {
            $('.leftside').animate({ width: 'toggle', paddingInline: 'toggle' }, 500
            )
        })
        
        
        function items() {
            let meals = document.getElementsByClassName('items')
            for (let i = 0; i < meals.length; i++) {
                meals[i].addEventListener('click', function (e) {
                    let meal=e.target.innerText
                    mealss(meal)
                })
        
            }
        }
        function cat(ppp) {
            let categories = document.getElementsByClassName('layer');
            console.log(ppp);
            filterCategory(ppp)
            
          
        }
            

        document.getElementById('category').addEventListener('click',function(){
            categoryApi()
        })


        function filterDesc(zz){
           mealss(zz)    
        }

        document.getElementById('area').addEventListener('click',function(){
            areaApi()
        })
        function areaMeals(kk){
            filterArea(kk)
        }

        function areaMealDesc(ll){
            mealss(ll);
        }
        document.getElementById('ingredient').addEventListener('click',function(){
            ingredient()
        })
        function ingredientMeal(meal){
            ingredientFilter(meal)
        }
        function mealIng(cc){
          mealss(cc)
        }
        // mainSearch()

        document.getElementById('search').addEventListener('click',function(){
            mainSearch()
            
          })


       
        
      function searchByNameDesc(term){
        mealss(term)
      }
      function searchLetterDesc(term){
         mealss(term)
      }
      let nameInputTouched = false;
           let emailInputTouched = false;
           let phoneInputTouched = false;
           let ageInputTouched = false;
           let passwordInputTouched = false;
           let repasswordInputTouched = false;

      document.getElementById('contactUs').addEventListener('click',function(){
        contactDisplay()
        document.getElementById("nameInput").addEventListener("focus", () => {
            nameInputTouched = true
        })
    
        document.getElementById("emailInput").addEventListener("focus", () => {
            emailInputTouched = true
        })
    
        document.getElementById("phoneInput").addEventListener("focus", () => {
            phoneInputTouched = true
        })
    
        document.getElementById("ageInput").addEventListener("focus", () => {
            ageInputTouched = true
        })
    
        document.getElementById("passwordInput").addEventListener("focus", () => {
            passwordInputTouched = true
        })
    
        document.getElementById("repasswordInput").addEventListener("focus", () => {
            repasswordInputTouched = true
        })
      })

           //   validation  

       
    
             

           
           
           
           
           
           function inputsValidation() {
               if (nameInputTouched) {
                   if (nameValidation()) {
                       document.getElementById("nameAlert").classList.replace("d-block", "d-none")
           
                   } else {
                       document.getElementById("nameAlert").classList.replace("d-none", "d-block")
           
                   }
               }
               if (emailInputTouched) {
           
                   if (emailValidation()) {
                       document.getElementById("emailAlert").classList.replace("d-block", "d-none")
                   } else {
                       document.getElementById("emailAlert").classList.replace("d-none", "d-block")
           
                   }
               }
           
               if (phoneInputTouched) {
                   if (phoneValidation()) {
                       document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
                   } else {
                       document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
           
                   }
               }
           
               if (ageInputTouched) {
                   if (ageValidation()) {
                       document.getElementById("ageAlert").classList.replace("d-block", "d-none")
                   } else {
                       document.getElementById("ageAlert").classList.replace("d-none", "d-block")
           
                   }
               }
           
               if (passwordInputTouched) {
                   if (passwordValidation()) {
                       document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
                   } else {
                       document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
           
                   }
               }
               if (repasswordInputTouched) {
                   if (repasswordValidation()) {
                       document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
                   } else {
                       document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
           
                   }
               }
           
           
               if (nameValidation() &&
                   emailValidation() &&
                   phoneValidation() &&
                   ageValidation() &&
                   passwordValidation() &&
                   repasswordValidation()) {
                   submitBtn.classList.remove("disabled")
               } else {
                   submitBtn.classList.add("disabled", true)
               }
           }
           
           function nameValidation() {
               return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
           }
           
           function emailValidation() {
               return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
           }
           
           function phoneValidation() {
               return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
           }
           
           function ageValidation() {
               return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
           }
           
           function passwordValidation() {
               return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
           }
           
           function repasswordValidation() {
               return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
           }


           $(function(){
            getData().then(()=>{

                $('.loader').fadeOut(700,function(){
                    $('.loading').fadeOut(700,function(){
                        $('body').css('overflow','auto')
                        $('.loading').remove()
                    })
                })
               })
            }
            )

      