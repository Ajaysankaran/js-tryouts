type User = {
    userId: string
    name?: string
}

const user: User = { userId: "u001" }

class CustomUser implements User {
    userId: string
    name?: string | undefined

    constructor(userId: string, name: string) {
        this.userId = userId;
        this.name = name
    }
}
