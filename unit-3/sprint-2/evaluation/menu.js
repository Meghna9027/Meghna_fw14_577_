 const api_url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
 

  async function getUser() {
    const response = await fetch(api_url);
    const data = await response.json()
    const dishes = [data.meals.slice(0,30)];

    var body = document.querySelector("body");

    dishes.forEach(e=>{
      e.forEach(i=>{
        var card = document.createElement("div");
        var dish_img = document.createElement("img");
        dish_img.setAttribute("src", i.strMealThumb)
        var dish_name = document.createElement("div");
        dish_name.textContent=i.strMeal;
        var dish_price = document.createElement("div");
        dish_price.textContent="$" + Math.floor((Math.random()*401)+100);
        var add = document.createElement("button");
        add.textContent="Add To Cart";
        card.append(dish_img,dish_name,dish_price,add);
        console.log(card);

        card.style.border = "1px solid red";
        card.style.width = "300";
        card.style.marginLeft = "70";
        card.style.marginTop = "30";
        card.style.display = "inline-block";
        dish_name.style.display = "inline-block";
        dish_name.style.fontSize = "20";
        dish_name.style.fontWeight = "bold";
        dish_name.style.width = "260";
        dish_price.style.display = "inline-block";
        dish_price.style.fontSize = "20";
        dish_price.style.color = "red";
        dish_price.style.fontWeight = "bold";
        dish_img.height = "300";
        add.style.marginLeft = "100";
        body.append(card);

      });
    });

  }
  getUser();
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  