import Elysia from "elysia";

const user = new Elysia()
.get('/yoyo', ({redirect, status}) => {
    // return redirect('www.google.com')
    return status(200, 'hey there')
})

export default user