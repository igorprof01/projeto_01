import { db } from "../db.js"

export const getBooks = (request, response) => {

    const query = "SELECT * FROM books"

    db.query(query, (error, data) => {
        if(error){
            return response.json(error)
        }
        return response.status(200).json(data)
    })
}