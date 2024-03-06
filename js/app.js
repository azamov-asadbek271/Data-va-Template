import job from "./data.js"

let template = document.getElementById("my-template");
const list = document.getElementById("list")
let allAdd = document.querySelector(".filter-all_add");

job.forEach((job) => {
  let clone = template.content.cloneNode(true);

  if (job.featured) {
    clone.querySelector(".list-item").classList.add("border-left");
  }
  // images
  clone.querySelector(".list-item__img").src = job.logo;

  // company
  clone.querySelector(".list-item_content_info_company").textContent =
    job.company;

  // new

  clone.querySelector(".list-item_content_info_new").style.display = `${
    job.new ? " block" : "none"
  }  `;

  // featured
  clone.querySelector(".list-item_content_info_featured").style.display = `${
    job.featured ? "block" : "none"
  }`;

  // potision
  clone.querySelector(".list-item__title").textContent = job.position;

  // postedAt
  clone.querySelector(".postedat").textContent = job.postedAt;

  clone.querySelector(".contract").textContent = job.contract;

  clone.querySelector(".location").textContent = job.location;

  //   level
  //   role
  //   langues
  let filterData = [
    {
      role: job.role,
    },
    {
      lenguages:[...job.languages],
    },
    {
      tools: [...job.tools],
    },
    {
      level: job.level,
    }
  ];

  const filClone = clone.querySelector(".list-item_filter");
  filterData.forEach ((data) => {
   let span = document.createElement("span")
    span.classList.add("list-item_filter__title");

     if (typeof data[Object.keys(data)[0]]  != "object") {
    span.textContent = data[Object.keys(data)[0]]
    span.setAttribute(
      `data-${Object.keys(data)[0]}`,
      data[Object.keys(data)[0]]
    );
    filClone.appendChild(span)
   }
   else {
      let arr = data[Object.keys(data)[0]];
      arr.forEach((item) => {
        let span = document.createElement("span")
       span.classList.add("list-item_filter__title");
       span.textContent = item;
       span.setAttribute(
         `data-${Object.keys(data)[0]}`,item);
       filClone.appendChild(span);
        span.addEventListener("click", () => {
          console.log("hello");
        });


      })
  
      
      }
      span.addEventListener("click", () => {
        console.log("hello")
      })
  })


  list.appendChild(clone);


})