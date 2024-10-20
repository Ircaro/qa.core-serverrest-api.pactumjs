import pactum from 'pactum'

export async function postUsers(request, statusCode = 201) {
    const { json } = await pactum.spec()
        .post('https:/serverest.dev/usuarios')
        .withBody(request)
        .expectStatus(statusCode)
    return json
}