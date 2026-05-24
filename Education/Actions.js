function setDomElement(element, type) {
    const type_element = document.createElement(`${type}`);
    type_element.style.textAlign = "center";
    type_element.style.margin = "1px";
    type_element.textContent = `${element}`;
    return type_element
}
async function GetFileInfo(){
    try{
        const response = await fetch("../Data/Info.txt")
        const txt = await response.text()
        txt.split(/\r?\n/).forEach((element) =>{
            switch (element.slice(0, 2)){
                case "> ":
                    document.body.appendChild(setDomElement(element.slice(2), "h1"))
                    break;
                case "- ":
                    document.body.appendChild(setDomElement(element.slice(2), "h3"))
                    break;
                case "~ ":
                    document.body.appendChild(setDomElement(element.slice(2), "p"))
                    break;
                default:
                    console.log("There is no way to do this!", element)
            }
        })
    }
    catch (error){
        console.error("Error in fetching file info!! Error: ", error)
    }
}
GetFileInfo()