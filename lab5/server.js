const express = require('express')
const bodyPasrer = require('body-parser')
const app = express()
const port = process.env.PORT || 8080 

app.set('view engine', 'ejs')
app.use(bodyPasrer.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index', {blogs})
})
app.get('/blog/:id', (req, res) => {
    const { id } = req.params
    blogs.forEach(blog => {
        if (id === blog.id) {
              res.render('blogPost', {blog})
        }
    })
})
app.post('/addpost', (req, res) => {
//    const author = req.body.author
//    const content = req.body.content
   const { author, content } = req.body
   blogs.push({
    id: 'blog-title-4',
    title: 'Blog Title 1',
    summary: 'This is a blog summary.',
    content,
    author,
    created: 'February 5, 2018'
   })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
let blogs = [
    {
      id: 'blog-title-1',
      title: 'Blog Title 1',
      summary: 'This is a blog summary.',
      content: `i'm at brainstation`,
      author: 'Roman',
      created: 'February 5, 2018'
    },
    {
      id: 'blog-title-2',
      title: 'Blog Title 2',
      summary: 'This is a blog summary.',
      content:  `i'm at brainstion too`,
      author: 'Sina',
      created: 'February 6, 2018'
    },
  ]