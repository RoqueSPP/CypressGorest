

    function fakeName(){
        var nameAle = ["roque","carlito","yo","zeze","Agda", "Andréia",
         "André", "Adriano", "Abinadar", "Alice", "Ariana", "Alencar",
          "Alcemir", "Aline", "Américo", "Ariane", "Bruno", "Bruna", 
          "Beatriz", "Berenice", "Benedito", "Benedita", "Carlos", "Camila", 
          "Caroline", "Camilo", "Ceverino", "Denis", "Denise", "Daniel", 
          "Dorivaldo", "Darley", "Edson", "Eliane", "Eliana", "Ester",
          "Everaldo", "Elias", "Estenio", "Etevaldo", "Euclides", "Eliezer", 
          "Everaldo", "Eduardo", "Emanuel", "Eunice", "Elaine", "Jaqueline",
          "Josivaldo", "josefina", "Larissa", "Laís", "Laercío", "Leandro", 
          "Lucas", "Maria", "Marcos", "Melissa", "Marcelo", "Mariana", "Matheus", 
          "Milena", "Neilson", "Naiara", "Nilson", "Nerivaldo", "Noemia", 
          "Núbia", "Nilvan", "Olavo", "Oliver", "Olindo", "Paulo", "Paula", 
          "Pedro", "Pedrina", "Pivanne", "Patrícia", "Quelvin", "Queila", 
          "Ronaldo", "Ronan", "Romildo", "Rodolfo", "Rita", "Ravier", 
          "Romã", "Salivan", "Selton", "Simirá", "Tadeu", "Taís", 
          "Tamilá", "Tadeu", "Telma", "Ulisson", "Umberto", "Vicente", 
          "Vanice", "Vera", "Valdermor", "Zulmira", "Zenira"];
        var name = nameAle[Math.floor(Math.random()*nameAle.length)];
        return name;
    };
function number(){
       var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,11]
        var number = num[Math.floor(Math.random()*num.length)];
        return number;
    }

    const body = {
        "name": fakeName(),
        "gender": "male",
        "email": fakeName()+number()+'@hotmail.com',
        "status": "active"
    }
    
    export default body;