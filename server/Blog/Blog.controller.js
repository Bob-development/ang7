const blog = [
    {
        id: 0,
        title: 'Greeting',
        isRead: true
    },

    {
        id: 1,
        title: 'King',
        isRead: false
    },

    {
        id: 2,
        title: 'Cool University',
        isRead: true
    }
]


async function getBlog(req, res){
    try {
        return res.json(blog);
    } catch (e){
        console.log(e.message);
    }
}

module.exports = {
    getBlog
}