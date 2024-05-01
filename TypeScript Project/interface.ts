interface Person {
    username:string
    password:string
    email:string

}

function save(person:Person){
    console.log(person.username + ' ' + 'was registered')
}

save({username:'John', email:'john@gmail.com',password:'123'})

class Person2{
    username:string
    password:string
    email:string
}

let person2 = new Person2
person2.username

function save2 (person2:Person) {
    console.log(person2.username + ' ' + 'was registered')
}

save2(person2)