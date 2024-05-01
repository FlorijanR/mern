const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/students_test", { useNewUrlParser: true })

mongoose.connection
    .once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error occured", error)
    })

beforeEach((done) => {
    // mongoose.connection.collections.students.drop()
    // done()

    const { students, comments, articleblogs } = mongoose.connection.collections

    students.drop(() => {
        comments.drop(() => {
            articleblogs.drop(() => {
                done()
            })
        })
    })
})