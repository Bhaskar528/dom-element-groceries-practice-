let bgContainerEl = document.createElement("div")
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEL = document.createElement("h1")
headingEL.classList.add("heading");
headingEL.textContent= "Groceries"
bgContainerEl.appendChild(headingEL)

let listContainerEl = document.createElement("ul")
listContainerEl.classList.add("list-container")
bgContainerEl.appendChild(listContainerEl)

let groceriesItems = ["milk","bun","peeanut Butter","cupcake","curd","milk","bun","peeanut Butter","cupcake","curd"]

for(eachItem of groceriesItems){
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("list-element")
    listItemEl.textContent=eachItem
    listContainerEl.appendChild(listItemEl)
}

let checkBoxEl = document.createElement("input");
checkBoxEl.type= "checkbox";
checkBoxEl.id = "deliveryMode"
bgContainerEl.appendChild(checkBoxEl)


let labelEl = document.createElement("label")
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add("labelELement")
labelEl.textContent = "Need Home Delivery"
bgContainerEl.appendChild(labelEl)

let headingEL = document.createElement("h2")
headingEL.classList.add("heading");
headingEL.textContent= "BHASKAR"
bgContainerEl.appendChild(headingEL)