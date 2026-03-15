const btn = document.getElementById("btn");
const countText = document.getElementById("count");
const totalText = document.getElementById("total");

let count = localStorage.getItem("count");

if(count == null){
    count = 0;
}else{
    count = Number(count);
}

countText.textContent = count;

// サーバの合計取得
async function loadTotal(){
    const res = await fetch("/.netlify/functions/count");
    const data = await res.json();
    totalText.textContent = data.total;
}

loadTotal();

btn.onclick = async () => {

    count++;
    countText.textContent = count;

    localStorage.setItem("count", count);

    const res = await fetch("/.netlify/functions/count",{
        method:"POST"
    });

    const data = await res.json();

    totalText.textContent = data.total;
};