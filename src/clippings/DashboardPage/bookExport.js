const bookExport = (quotes) => {
    const element = document.createElement("a");
    const file = new Blob([QuotesString(quotes)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${quotes[0][1].book}_highlights`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

function QuotesString(quotes) {
    let s = ""
    for (const i in quotes) {
        console.log(quotes[i])
        s += quotes[i][1].quote + "\n \n"
        s += "***" + "\n \n"
    }
    
    return s
}

export default bookExport