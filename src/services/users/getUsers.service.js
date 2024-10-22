import pactum from "pactum";

export async function getUsers(userId, userName, userEmail, userPassword, statusCode = 200) {
    const { json } = await pactum.spec()
    .get("https://serverest.dev/usuarios")
    .withQueryParams({
        _id: userId,
        nome: userName,
        email: userEmail,
        password: userPassword
    })
    .expectStatus(statusCode)
    return json
}