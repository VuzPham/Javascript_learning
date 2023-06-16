var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
   var findNode = document.querySelector('ul');
    var combineString = courses.map(function (course) {
        return `<li>${course}</li>`;
   })
   console.log(combineString);
   findNode.innerHTML = combineString;
}
render(courses);
// render(courses)

