const btn = document.getElementById("btn");
const countText = document.getElementById("count");

// 保存された回数を取得
let count = localStorage.getItem("count");

if(count === null){
    count = 0;
}else{
    count = Number(count);
}

countText.textContent = count;

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