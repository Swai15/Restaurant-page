const tabs = document.querySelectorAll(".list");
// const contents = document.querySelectorAll(".content-main");
const contents = document.querySelectorAll("tabContent")


tabs.forEach((tab) => {
  tab.addEventListener("click",(tab) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    tab.target.classList.add("active")
  })
})

