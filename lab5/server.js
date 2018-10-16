const express = require('express')
const bodyPasrer = require('body-parser')

const port = porocess.env.PORT || 8080 

app.set('view engine', 'ejs')
app.use(bodyPasrer.urlencoded({extended: false}))
aapp.use(express.static('public'))

app.get('/', (req,res) => {

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})