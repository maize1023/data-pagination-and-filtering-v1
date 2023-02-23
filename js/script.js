/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



// 1ページに対して、9人の生徒を表示するファンクション
//Function to display 9 students per page
function showPage(list, page){
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = "";
   for(let i = 0; i < list.length; i++){
      if(startIndex <= i && i < endIndex){
         const studentItem =`
         <li class="student-item cf">
           <div class="student-details">
             <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
             <h3>${list[i].name.first} ${list[i].name.last}</h3>
             <span class="email">${list[i].email}</span>
           </div>
           <div class="joined-details">
             <span class="date">Joined ${list[i].registered.date}</span>
           </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}



// ページネーションボタン作成のファンクション
// add pagination buttons function
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = "";

   for(let i = 1; i <= numOfPages; i++ ){
      const button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
      const firstButton = linkList.firstElementChild.querySelector('button');
      firstButton.className = "active";
   }


   // ボタンがクリックされた時のイベント
   // button click event
   linkList.addEventListener('click', (e)=>{
      if(e.target.tagName === 'BUTTON'){
         const previousActiveButton = linkList.querySelector('.active');
         if(previousActiveButton){
            previousActiveButton.classList.remove('active');
         }
         const clickedButton = e.target;
         const clickedNum = clickedButton.innerHTML;
         clickedButton.classList.add('active');
         showPage(data, clickedNum);
      }
   });
}



// extra credits
function addSearchBar(){
   const headerList = document.querySelector('.header');
   const searchBar = `
   <label for="search" class="student-search">
     <span>Search by name</span>
     <input id="search" placeholder="Search by name...">
     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;

   headerList.insertAdjacentHTML('beforeend', searchBar);
}



// function searchStudents(){

//    ①
//    ②
//    ③if(couldnt find student){
//       ""no results found""
//    }
// }










showPage(data, 1);
addPagination(data);
addSearchBar();
