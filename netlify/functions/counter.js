let count = 0;

btn.onclick = async () => {

    count++;
    countText.textContent = count;

    localStorage.setItem("count", count);

    try{
        await fetch("/.netlify/functions/counter", {
            method: "POST"
        });
    }catch(e){
        console.error(e);
    }

};