const request = require('request');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/contact-list', (req, res, next) => {
    const options = {
        'method': 'GET',
        'url': 'https://books.zoho.com/api/v3/contacts/?organization_id=649249007#Contacts_List_contacts',
        'headers': {
            'Authorization': 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b',
            'Cookie': 'ba05f91d88=90891e66e822696d3e050430949175d4; zbcscook=e12db7b7-8a9a-4626-ac3c-9324a56e941d; JSESSIONID=18D31E6132BCDBCA57752C407D8463AB'
        }
    };
    request(options,  (error, response) => {
        if (error) throw new Error(error);
        res.send(response.body);
    });

});


app.listen(3001, () => {
    console.log("server running on http://localhost:3001/");
});