var postsE = ' http://localhost:3000/posts';

fetch(postsE) 
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        var ulE = document.querySelector("#block")
        var temps = result.map(function(temp) {
            return `<ul> 
            <h2>${temp.id}-${temp.author}</h2>
            <p>${temp.title}</p>
            </ul>`
        })
        html =  temps.join('');
        console.log(typeof html)
        ulE.innerHTML = html;
    })

// POST MAN
// - API sever là phần giúp trao đổi trực tiếp với dữ liệu website
//     - CRUD
//         - create: Tạo mới dữ liếu -> POST
//         - Read: lấy dữ liệu -> GET
//         - Update: chỉnh sửa -> PUT / PATCH
//         - Delete: xóa    -> DELETE

// - Postman: gửi đi 4 hành động CRUD không cần code (test trước r mới ghép)
