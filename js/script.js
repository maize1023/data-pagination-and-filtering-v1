/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



// 1ページに対して、9人の生徒を表示するファンクション
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

showPage(data, 1);
