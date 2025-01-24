import supertest from "supertest";
import chai from "chai"; 

const expect = chai.expect; 
const requester = supertest("http://localhost:8080"); 

describe("Router de Adopciones", () => {
    describe("GET /api/adoptions", () => {
        
        it("Me deberia retornar una lista de adopciones", async () => {
            const {status} = await requester.get("/api/adoptions"); 

            expect(status).to.equal(200); 
        })

        it("Me retorna 404 si la ruta no existe", async () => {
            const {status} = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404); 
        })

        it("Buscamos que me retorne la info de una adopción existente", async () => {
            let aid = "6791235991539eda566f5483"; 

            const {status} = await requester.get(`/api/adoptions/${aid}`); 
            expect(status).to.equal(200); 
        })

        it("Nos deberia retornar 404 si la adopcion no existe", async () => {
            let noExisteAid = "67626d05a3f6fa3a7145f729"; 
            const {status} = await requester.get(`/api/adoptions/${noExisteAid}`); 

            expect(status).to.equal(404);
        })

        it("Vamos a crear una adopción", async () => {
            "/:uid/:pid"

            let uid = "6755c01c4cca02b9c8f879c3";
            let pid = "6755c01d4cca02b9c8f879cb";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(200);

        })

        it("Nos deberia retornar 400 si la mascota ya ha sido adoptada", async () => {
            "/:uid/:pid"

            let uid = "6755c01c4cca02b9c8f879c3";
            let pid = "6755c01d4cca02b9c8f879c9";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(400);

        })

        it("Nos deberia retornar 404 si la mascota no existe", async () => {
            "/:uid/:pid"

            let uid = "6755c01c4cca02b9c8f879c3";
            let pid = "6755c01d4cca02b9c8f879c8";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(404);

        })

        it("Nos deberia retornar 404 si el usuario no existe", async () => {
            "/:uid/:pid"

            let uid = "6755c01c4cca02b9c8f879c4";
            let pid = "6755c01d4cca02b9c8f879c9";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(404);

        })

        it("Nos deberia retornar 404 si ni la mascota y el usuario no existen", async () => {
            "/:uid/:pid"

            let uid = "6755c01c4cca02b9c8f879c4";
            let pid = "6755c01d4cca02b9c8f879c8";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(404);

        })



    })
})