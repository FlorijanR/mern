const mongoose = require('mongoose')
const Student = require('../src/student')
const Comment = require('../src/comment')
const ArticleBlog = require('../src/articleBlog')
const assert = require('assert')

describe('Association Test', () => {
    let jason, articleblog, comment

    beforeEach(done => {
        jason = new Student({ name: 'Jason' })
        articleBlog = new ArticleBlog({ title: 'MongoDB', content: 'Mongoose and Mocha' })
        comment = new Comment({ content: 'Well done!' })

        jason.articleBlog.push(articleBlog)
        articleBlog.comments.push(comment)
        comment.students = jason;

        // jason.save()
        // articleBlog.save()
        // comment.save()
        // done()

        Promise.all([jason.save(), articleBlog.save(), comment.save()])
            .then(() => done())
    })

    it('Associate student with articleBlog', done => {
        Student.findOne({ name: 'Jason' })
            .populate('articleBlog')
            .then(student => {
                console.log(student.articleBlog[0].title)
                assert(student.articleBlog[0].title === 'MongoDB')
                done()
                // console.log(student.articleBlog[0])
                // done()
            })
    })

    it('Nested populate', (done) => {
        Student.findOne({ name: 'Jason' })
            .populate({
                path: 'articleBlog',
                populate: {
                    path: 'comments',
                    model: 'comment',
                    populate: {
                        path: 'students',
                        model: 'student',
                        strictPopulate: false
                    }
                }
            })
            .then(student => {
                // console.log(student.articleBlog[0].comments[0])
                assert(student.name === 'Jason')
                assert(student.articleBlog[0].title = 'MongoDB')
                assert(student.articleBlog[0].comments[0].content === 'Well done!')
                assert(student.articleBlog[0].comments[0].students.name === 'Jason')
                done()
            })
            .catch(error => {
                console.error(error)
                done(error)
            })
    })

})