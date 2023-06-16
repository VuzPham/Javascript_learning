// 1. Front-end: Xây dựng giao diện người dùng
// người dùng

// 2. Back-end: Xây dựng logic xử lý
// + Cơ sở dữ liệu

// API(url) -> Application programing interface 

// Cổng giao tiếp giữa các PM

// Backend -> API -> Fetch -> JSON/XML
// -> JSON.pare -> Javascript types
// Render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/albums';

fetch(postAPI)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript type
    })
    .then(function (posts) {
        var htmls = posts.map(function(post) {
            return `<ul> 
                <h2>${post.id}</h2>
                <p>${post.title}</p>
            </ul>`
        })
        var html = htmls.join('');
        var postBlock = document.getElementById('postBlock');
        postBlock.innerHTML = html;
    });
