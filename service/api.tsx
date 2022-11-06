

export class APIService {

    async getDefinition(text: string) {
        try {
            const res = await fetch(`api/word/${text}`);
            const data = await res.json();
        } catch (err) {
            console.log(err);
        }
    }


}