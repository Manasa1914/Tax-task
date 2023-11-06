function tax(){
    let salary=document.getElementById("salary").value
    let fullSalary=document.getElementById("fullSalary")
    let taxDeducted=document.getElementById("taxDeducted")
    let finalSalary=document.getElementById("finalSalary")
    let result=salary*0.1
    let totalSalary=salary-result
    fullSalary.innerHTML="full salary :" + " " + salary
    taxDeducted.innerHTML="tax deducted :" + " " + result
    finalSalary.innerHTML="final salary :" + " " + totalSalary
}