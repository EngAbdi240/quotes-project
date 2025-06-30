import { useState } from "react"

function MaahMaah (){

    const [index, setindex] = useState(0)

    const handleIncrement=()=> {

        if (index < quotes.length -1) {

             setindex(index +1)
     
        }


    }

    const handleDecrement=()=>{

        if(index > 0){

               setindex(index -1)


        }
        
       
    }

    const quotes = [
        "1.  Gagmo Wada Jir Bay Wax Ku Goyaan ",
        "2.  Maska Madax ayaa laga dilaa ",
        "3. Nin kuu digay kuma dilin ",
        "4. Nin caroodey laga badiye ",
        "5.  Ninkii seexdaa sicii dibi dhalay ",
        "6.  Far keliya fool ma dhaqdo ",
        "7.  Ninman shaqeysan shaah waka xaaran",
        "8. Afjoogo looma adeego ",
        "9.  Alle wate wehel uma baahna",
        "10. Run iyo ilko waa la cadeeya",

    ]
    return <div className="sm:mt-60 mt-40 w-100">

        <h1 style={{display: index === quotes.length-1 ? "block" : "none"}} className="text-3xl text-center text-red-700">Dhamaad</h1>
        <h1 style={{color: index === 4 ? "red" : ""}} className="sm:text-3xl text-center text-xl  font-semibold">{quotes[index]}</h1>
        <button onClick={handleDecrement} className="bg-blue-600 px-14 py-3 rounded-lg text-white sm:ml-[40%] mt-20 ">previous</button>
        <button onClick={handleIncrement} className="bg-blue-600 px-14 py-3 rounded-lg text-white ml-10">Next</button>
        
    </div>
}


export default MaahMaah