export default function Recettes(jsonFile) {
    return{
        recipes: [],
        init() {
            this.fetchDatas(jsonFile)
        },
        
        fetchDatas(json){
            fetch(json)
                .then(Response => Response.json())
                .then(data => { 
                    this.setDatas(data);
                })
                .catch(error => console.error('Erreur lors de la récupération des données :', error));
        },

        setDatas(data) {
            this.recipes = data.recipes;
        }
    }
}