//Promise
// Thực hành

var users = [
    {
        id: 1,
        name: 'Vu Pham',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam',
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video',
    },

    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!',
    },
];

// 1. Lấy Comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Fake API

/*
    1. resolve comments vì comments là var nên khỏi bỏ trog ngoặc
*/
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    })
}

/*
    1. Dùng map để lặp qua comments để in ra mảng id 
    2. Có mảng id thì sẽ dùng hàm getUserByIDs để in ra object
*/
getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment){
           return comment.user_id;
        })
        return getUserByIDs(userIds)
                 .then(function(users) {
                    return {
                        users: users,
                        comments: comments,
                    }
                })
    })
    /*
        1. Có object thì sẽ dom selector trỏ tới id ul
        2. Dùng forEach để lặp qua hết comment dùng find để xác định 
        user name và comment content
        3. có dc name và content add vào html qua inner HTML
    */
    .then(function(data) {
        var comment_block = document.querySelector("#comment-block");
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        comment_block.innerHTML = html;
    });

// Dùng filter lặp qua hết mảng userIds nếu tk nào trùng 
// thì dùng include để lưu vào 1 biến result
function getUserByIDs(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        },1000)
    });
}
