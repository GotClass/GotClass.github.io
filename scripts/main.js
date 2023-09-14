const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySource = myImage.getAttribute("src");

    if (mySource === "images/mainpage-dragon.png")
    {
        myImage.setAttribute("src", "images/mainpage-dragon-flipside.png");
    } else {
        myImage.setAttribute("src", "images/mainpage-dragon.png");
    }

};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    let name = prompt("What is your name?");

    if (!name)
    {
        setUserName();
    }else {
        localStorage.setItem("name", name);
        myHeading.textContent = `Hello, ${name}`;
    }
    
}

if (!localStorage.getItem("name"))
{
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
}

myButton.onclick = () =>{
    setUserName();
}