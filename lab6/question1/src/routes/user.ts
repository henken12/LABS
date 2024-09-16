import Router from 'express';
const router = Router();

// Mock list of users
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Sam Smith', email: 'sam@example.com' }
];

// GET method to list all users as HTML
router.get('/', (req, res) => {
    let userListHtml = '<h3>List of Users</h3><ul>';
    users.forEach(user => {
        userListHtml += `<li>${user.name}</li>`;
    });
    userListHtml += '</ul>';

    res.send(userListHtml); 
});

// POST method to add a new user
router.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; 
    users.push(newUser); 
    res.send(`User Added: ${JSON.stringify(newUser)}`);
});

export default router;
