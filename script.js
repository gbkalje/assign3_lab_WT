let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#restaurant').appendChild(opt);
            }
        }
       
    });

   /* let itemNode = document.querySelector("#item");
    itemNode.addEventListener("keyup", createList);

    let addItemButton = document.querySelector("#addButton");
    addItemButton.addEventListener('click',addItem);

    function createList(e) {
        if (e.target.value.length >= 3 && data!=null) {
            let itemArray = [];
            for (const item in data) {
                let temp = data[item].name.toLowerCase();
                if ( temp.includes(e.target.value) ) {
                    itemArray.push(item);
                }
            }

            if (itemArray.length > 0 ) {
                // console.log("add li");
                createListItem(itemArray);
            }
        }
    }

    function createListItem(itemList) {
        let itemListNode = document.querySelector("#itemList");
        itemListNode.innerHTML = "";

        for (const itemIndex of itemList) {
            let itemObj = data[itemIndex];
            let li = document.createElement("li");
            let chkbox = document.createElement("input");
            chkbox.type = 'checkbox';
            chkbox.value = itemIndex;
            let label = document.createElement('label');
            label.appendChild(chkbox);
            label.appendChild(document.createTextNode(itemObj.name));
            li.appendChild(label);
            itemListNode.appendChild(li);

        }
    }

    function addItem() {
        let selectedItems = document.querySelectorAll("#itemList input:checked");
        for(const chkBoxNode of selectedItems) {
            buyItemList.push(data[chkBoxNode.value]);
        }
        addFoodItem(buyItemList);
    }

    function addFoodItem(selectedItems) {
        let i = 0, totPrice = 0;
        let myOrderListNode = document.querySelector("#myOrderList");
        myOrderListNode.innerHTML = "<tr><td>Sr</td><td>Name</td><td>Price</td><td>&nbsp;</td></tr>";

        for (const item of selectedItems) {
            let tr = document.createElement("tr");
            let tdSr = document.createElement("td");
            tdSr.textContent = ++i;
            tr.appendChild(tdSr);

            let tdName = document.createElement("td");
            tdName.textContent = item.name;
            tr.appendChild(tdName);

            let tdPrice = document.createElement("td");
            tdPrice.textContent = item.price_large;
            totPrice += item.price_large;
            tr.appendChild(tdPrice);

            let tdAction = document.createElement("td");
            let actButton = document.createElement("button");
            actButton.setAttribute("class","buttonX");
            actButton.setAttribute("id", "tr"+i);
            actButton.addEventListener('click',deleteItem);
            actButton.textContent = "X";
            tdAction.appendChild(actButton);

            tr.appendChild(tdAction);

            myOrderListNode.appendChild(tr);
            // console.log();
        }*/
    
document.querySelector("#restaurant").addEventListener("change",showdetails);

function showdetails(e){
    let index = e.target.value;
    
    if(menu_items != null){
        let x = menu_items[index];
        let pricesmall;
        
     
        document.querySelector("#Name").textContent=x.name;
        document.querySelector("#shortName").textContent=x.short_name;
        document.querySelector("#priceSmall").textContent=x.price_small;
        document.querySelector("#priceLarge").textContent=x.price_large;
        document.querySelector("#desc").textContent=x.description;
    }

    
}


});


