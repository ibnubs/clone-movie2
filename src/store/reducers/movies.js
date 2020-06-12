//-----------------latihan pke Data dummy-------------------------

const initialState = {
    movies: [
        {
            id: 1,
            images: require('../../assets/image/fb.png'),
            description: "satu"
        },
        {
            id: 2,
            images: require('../../assets/image/pinterst.jpg'),
            description: "dua"
        },
        {
            id: 3,
            images: require('../../assets/image/igg.jpg'),
            description: "tiga"
        }
    ]
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}

export default movies;