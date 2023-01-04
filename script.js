let students = [

  {
    name: "Paulo",
    gradeOne: 6,
    gradeTwo: 7,
  },
  {
    name: "Carla",
    gradeOne: 9,
    gradeTwo: 7,
  },
  {
    name: "Suzuki",
    gradeOne: 7,
    gradeTwo: 7,
  },
]




let average = function (gradeOne, gradeTwo){
 return((gradeOne + gradeTwo) / 2);  
}

function  printResult(student){
  if (average(student.gradeOne , student.gradeTwo) >= 7) {
     return ` A média do(a) aluno(a) ${student.name} foi de: 
     ${average(student.gradeOne, student.gradeTwo)}. Parabéns, você foi aprovado(a) no concurso!`
  } else {
    return`A média do(a) aluno(a) ${student.name} foi de:
    ${average(student.gradeOne, student.gradeTwo)}. Infelizmente, não foi dessa vez
    ${student.name}! Você foi reprovado  `
  };
}

for(let student of students) {
  let averageMessage = printResult(student)
  alert(averageMessage)
}

