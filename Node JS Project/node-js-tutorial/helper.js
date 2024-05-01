const user = function(data) {
    return `${data} id logged in`
}

let id = function(id) {
    return `${id}`
}

let email = function(email) {
    return email
}

module.exports = {
    user,
    id,
    email
}