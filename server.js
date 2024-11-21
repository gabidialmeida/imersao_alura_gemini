import express from "express";

const app = express();
app.use(express.json());

const posts = [
    {
        "id": 1,
        "descricao": "Gato fofo",
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 2,
        "descricao": "Paisagem natural",
        "imagem": "https://source.unsplash.com/random"
    },
    {
        "id": 3,
        "descricao": "Comida deliciosa",
        "imagem": "https://picsum.photos/id/237/200/300"
    },
    {
        "id": 4,
        "descricao": "Imagem abstrata",
        "imagem": "https://placeimg.com/640/480/abstract"
    },
    {
        "id": 5,
        "descricao": "Fotografia em preto e branco",
        "imagem": "https://loremflickr.com/320/240/monochrome"
    },
    {
        "id": 6,
        "descricao": "Foto de perfil",
        "imagem": "https://thispersondoesnotexist.com/image"
    }
];

function getPostIndexById(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.listen(3000, () => {
    console.log("listen");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = getPostIndexById(req.params.id);
    res.status(200).json(posts[index]);
});