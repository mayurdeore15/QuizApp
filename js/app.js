const questions = [
    {
    'que':'Javascript is an _______ language?',
    'a': 'Object-Oriented',
    'b': 'Object-Based',
    'c': 'Procedural',
    'd': 'None of the above',
    'correct': 'a'
    },
    {
    'que':'Which of the following keywords is used to define a variable in Javascript?',
    'a': 'Var',
    'b': 'Let',
    'c': 'Both A and B',
    'd': 'None of the above',
    'correct': 'c'
    },
    {
    'que':'Which of the following methods is used to access HTML elements using Javascript?',
    'a': 'getElementbyId()',
    'b': 'getElementbyClassName()',
    'c': 'Both Aand B',
    'd': 'None of the above',
    'correct': 'c'
    }
]

let index= 0;
let total = questions.length;
let correct =0, incorrect=0;
const quesbox = document.getElementById("quesbox");
const optionInputs = document.querySelectorAll('.option')

const loadQuestion = () => {
    
    if (total!=index) {
        reset()
        const data = questions[index] 
        console.log(data)
        quesbox.innerText = `${index+1}) ${data.que}`
        optionInputs[0].nextElementSibling.innerText = data.a
        optionInputs[1].nextElementSibling.innerText = data.b
        optionInputs[2].nextElementSibling.innerText = data.c
        optionInputs[3].nextElementSibling.innerText = data.d
        
    }
    else {       
        endQuiz()
    }  
} 

document.querySelector("#submit").addEventListener(
    "click", 
    function(){
        const data = questions[index]
        const ans = getAnswer()
        if(ans === data.correct){
            
           correct++;
        }
        else{
           incorrect++
        }
        index++;
        console.log("index :" + index)
        loadQuestion()
    }
)

// const SubmitQuestion = ()=>{

//     const ans = getAnswer()
//     const data = questions[index];
//     if(ans === data.correct){
//         right++;
//     }
//     else{
//         wrong++
//     }
//     index++
//     loadQuestion();
//     return;  
// }

const getAnswer =()=>{
    let ans;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                ans= input.value; 
                
            }
        }
    )
    return ans;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
             input.checked = false
        }
    )
}

const endQuiz =()=>{
    
    document.getElementsByClassName("question").innerText = `
    <h2> thank you</h2>
    <h3> ${correct} / ${total} are correct </h3>
    `
}



//initial call
loadQuestion(index);