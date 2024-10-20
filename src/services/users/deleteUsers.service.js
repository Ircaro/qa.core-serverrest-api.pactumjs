import pactum from "pactum";

export async function deleteUser(userId, statusCode = 200) {
    const { json } = await pactum.spec()
    .delete(`https://serverest.dev/usuarios/${userId}`)
    .expectStatus(statusCode)
    return json
}