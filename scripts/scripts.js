    // get element form html
const dataBox = document.querySelector(".datas");
const titleBox = document.querySelector(".titels");


    // handleResponse()

// send request for get api
let request = new XMLHttpRequest();
request.addEventListener("load" , handleResponse);
let call = function(){
    request.open("get" , "https://api.navaxcollege.com/frontend-exam/exam.php")
    request.send();
}
call();



    // functions
// create a title item
function createTitle(item){
    const title = document.createElement("button");
    title.classList = "title";
    title.innerText = item.title;
    changeSize(title);
    title.addEventListener('click', ()=>{
        showTab(item);
        activeItem(title);
        // changeSize(title)
    })
    if(item.is_active){
        showTab(item);
        title.classList.add("active")
    }
    return title;       
}

// change title btn size
function changeSize(title){
    const width = title.offsetWidth;
    console.log(width);
}

function showTab(items){

    const content = createDataText(items.body)
    dataBox.innerHTML = ""
    dataBox.append(content);  
    
    // activeItem()
}

// create a data item
function createDataText(texts){
    let container = document.createElement('div');
    container.classList = "row"
    const tLength = texts.length
    if(tLength > 3){
        tLength = 3;
    }
    let col = 12 / tLength;
    
    for (const text of texts) {        
        let data = document.createElement("p");
        data.classList.add("data-text" , `col-lg-${col}`);
        data.innerText = text;
        container.append(data);
    }    
    return container;
}

// find active item
function activeItem(title){
    const titelsList = titleBox.querySelectorAll(".title");
    for (const title of titelsList) {
        title.classList.remove("active");           
    }    
    title.classList.add("active") 
}

// get data from api
function handleResponse(){
    data = JSON.parse(this.responseText).data.tabs;
    for (const item of data) {
        titleBox.append(createTitle(item));
    }    
}