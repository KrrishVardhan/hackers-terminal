let start = document.querySelector(".start");
let H = document.querySelector("#hacking");
let div1 = document.createElement("div");
let div2;
let div3;
let div4;
let div5 = document.createElement("div");
let cursor = document.createElement("span");
cursor.setAttribute("class", "cursor");
let bait = document.createElement("button");
bait.setAttribute("class", "start");
let bait2 = document.createElement("button");
bait2.setAttribute("class", "start");
bait.innerHTML = "Send Files";
bait2.innerHTML = "Don't Send Files!";
let fill = document.createElement("span");
let bar = document.createElement("span");
start.addEventListener("click", () => {
    start.remove();
    bar.append(fill);
    bar.setAttribute("class", "bar");
    fill.setAttribute("class", "fill");
    div1.innerHTML = `> Initializing Hacking`;
    H.append(div1);
    let dots = document.createElement("span");
    let tick1 = document.createElement("svg");
    tick1.innerHTML = `<span>&nbsp;&nbsp;&nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
</svg > `;
    let tick2 = document.createElement("svg");
    tick2.innerHTML = `<span>&nbsp;&nbsp;&nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cloud-check-fill" viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>`;
    dots.setAttribute("class", "dots")
    setTimeout(() => {
        div1.append(dots)
    }, 0);
    setTimeout(() => {
        dots.remove();
        div1.append(tick1);
    }, 7000);
    setTimeout(() => {
        div2 = document.createElement("span");
        div2.innerHTML = `> Reading Your Files`;
        H.append(div2);
        div2.append(bar);
    }, 7500);
    setTimeout(() => {
        div3 = document.createElement("div");
        div3.innerHTML = `<br>>> Password files Detected`;
        H.append(div3);
        div3.append(cursor);
    }, 12500);
    setTimeout(() => {
        H.append(bait);
        H.append(bait2);
    }, 13000);
    bait.addEventListener("click", () => {
        setTimeout(() => {
            bait.remove();
            bait2.remove();
            cursor.remove();
            div4 = document.createElement("div");
            div4.innerHTML = ">>> Sending All Passwords and Personal Files to Server";
            H.append(div4);
            div4.append(dots);
            setTimeout(() => {
                dots.remove();
                div4.append(tick2);
            }, 6000);
        }, 1000);
    })
    bait2.addEventListener("click", () => {
        setTimeout(() => {
            bait.remove();
            bait2.remove();
            cursor.remove();
            div4 = document.createElement("div");
            div4.innerHTML = ">>> Sending All Passwords and Personal Files to Server";
            H.append(div4);
            div4.append(dots);
            setTimeout(() => {
                dots.remove();
                div4.append(tick2);
            }, 6000);
        }, 1000);
    })
})  