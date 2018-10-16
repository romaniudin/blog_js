const express = require('express')
const bodyPasrer = require('body-parser')

const port = porocess.env.PORT || 8080 

app.set('view engine', 'ejs')
app.use(bodyPasrer.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req,res) => {
    
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
let blogs = [
    {
      id: 'blog-title-1',
      title: 'Blog Title 1',
      summary: 'This is a blog summary.',
      content: 'This is the blog content',
      author: 'John Smith',
      created: 'February 5, 2018'
    },
    {
      id: 'blog-title-2',
      title: 'Blog Title 2',
      summary: 'This is a blog summary.',
      content: 'This is the blog content',
      author: 'John Smith',
      created: 'February 6, 2018'
    },
  ]