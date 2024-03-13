const posts = [
    {
        label: 'Pet',
        description: 'Cute pet has been sold'
    },

    {
        label: 'Dota',
        description: 'Dota deleted from enternet ('
    },

    {
        label: 'The best teacher',
        description: 'In Ukraine was founded the best teacher Kir'
    }
]


async function getPosts(req, res){
    try {
        return res.json(posts);
    } catch (e){
        console.log(e.message);
    }
}

module.exports = {
    getPosts
}