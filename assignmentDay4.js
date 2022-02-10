

var carArray = [
    {
        engine: "2JZ",
        seats: 6,
        suspension: "Bilstein",
        wheels: "Asanti"
    },
    {
        engine: "K20",
        seats: 2,
        suspension: "Eibach",
        wheels: "Vexx"
    },
    {
        engine: "SR-18",
        seats: 5,
        suspension: "Koni",
        wheels: "Konig"
    },
    {
        engine: "1JZ",
        seats: 4,
        suspension: "KYB",
        wheels: "BBS"
    },
    {
        engine: "2JZGTE",
        seats: 5,
        suspension: "GReddy",
        wheels: "TSW"
    },
]

for(var i = 0; i < 5; i+=1)
{
    console.log(carArray[i].seats, carArray[i].wheels);
}


carArray.forEach(
    function(a, i)
    {
        console.log(a.engine, a.suspension);
    }
)