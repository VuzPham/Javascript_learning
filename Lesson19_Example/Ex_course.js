var listCourseBlock = document.querySelector("#courseElement");
var numRow = document.querySelector("#numberRow");

var courseAPI = "http://localhost:3000/Course";

function Start() {
    getCourse(renderCourse);  // Courses nay chinh la courseAPI tu json -> js
    handleCreateForm();
    handleFixForm()
}

Start()


// function lấy ra khóa học
function getCourse(callback) {
    fetch(courseAPI) 
        .then(function(courseAPI) {
            return courseAPI.json();
        })
        .then(callback);
}
//function postData(url = "", data = {})

function renderCourse(Courses) {
    var temp = Courses.map(function(course) {
        return `<li class="data-course-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick = "handleDeleteForm(${course.id})">Xóa</button>
        </li>`
    })
    var temps = temp.join('');
    listCourseBlock.innerHTML = temps;
}

// Tạo khóa học mới 
function createCourse(data,callback) {
    var options = {
        method: 'POST',
        // không thêm header chỉ có id vào form unlencoded
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    }

    fetch(courseAPI, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="Name"]').value;
        var description = document.querySelector('input[name="Description"]').value;
        var formData = {
            name: name,
            description: description,
        };
        createCourse(formData,function() {
            getCourse(renderCourse);
        });
    }
}

// Chỉnh khóa học
function fixCourse(data,callback,id) {
    var options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleFixForm() {
    var fixBtn = document.querySelector('#fix');
    fixBtn.onclick = function() {
        var name = document.querySelector('input[name="fixName"]').value;
        var description = document.querySelector('input[name="fixDes"]').value;
        var formData = {
            name: name,
            description: description,
        };
        fixCourse(formData,function() {
            getCourse(renderCourse);
        },numRow.value);
    }
}
// Xóa khóa học 
function handleDeleteForm(id) {
    var options = {
        method: 'DELETE',
        // không thêm header chỉ có id vào form unlencoded
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            //getCourse(renderCourse)
            var coursesItems = document.querySelector(".data-course-"+id);
            coursesItems.remove();
        });
}

