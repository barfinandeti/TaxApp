
// var $ = function (id) {
//     return document.getElementById(id);
    
// };
// var calculateTax = function (){
//     IncomefromSalary = parseInt(document.getElementById("IncomefromSalary").value);
//     IncomefromInterest = parseInt(document.getElementById("IncomefromInterest").value);
//     IncomefromDigitalAssets = parseInt(document.getElementById("IncomefromDigitalAssets").value);
//     OtherIncome = parseInt(document.getElementById("OtherIncome").value);
//     RentalIncomeReceived = parseInt(document.getElementById("RentalIncomeReceived").value);
//     DonationstoCharity80G = parseInt(document.getElementById("DonationstoCharity80G").value);
//     ExemptAllowances = parseInt(document.getElementById("ExemptAllowances").value);
//     InterestonEducationalLoan80E = parseInt(document.getElementById("InterestonEducationalLoan80E").value);
//     EmployeecontributiontoNPS80CCD = parseInt(document.getElementById("EmployeecontributiontoNPS80CCD").value);
//     InterestPaidonHomeLoan = parseInt(document.getElementById("InterestPaidonHomeLoan").value);
//     InterestPaidonLoan =  parseInt(document.getElementById("InterestPaidonLoan").value);
//     InterestfromDeposits80TTA = parseInt(document.getElementById("InterestfromDeposits80TTA").value);
//     InterestonHousingLoan80EEA = parseInt(document.getElementById("InterestonHousingLoan80EEA").value);
//     BasicDeductions80C = parseInt(document.getElementById("BasicDeductions80C").value);
//     MedicalInsurance80D = parseInt(document.getElementById("MedicalInsurance80D").value);
    
//     var grossIncome = calculateGrossIncome(IncomefromDigitalAssets, IncomefromInterest, IncomefromSalary, RentalIncomeReceived, OtherIncome);
//     console.log(document.getElementById("GrossIncome").innerHTML = grossIncome);
//     var deductions = calculateDeductions(grossIncome, DonationstoCharity80G, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, InterestonHousingLoan80EEA);
//     document.getElementById("deductions").innerHTML = deductions;
// }

// function calculateGrossIncome(IncomefromDigitalAssets, IncomefromInterest, IncomefromSalary, RentalIncomeReceived, OtherIncome){
//     return grossIncome = IncomefromDigitalAssets + IncomefromInterest + IncomefromSalary + RentalIncomeReceived + OtherIncome;
// }

// function calculateDeductions (grossIncome, DonationstoCharity80G, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, InterestonHousingLoan80EEA) {
//     return deductions = grossIncome - (DonationstoCharity80G + InterestPaidonHomeLoan + InterestPaidonLoan + InterestfromDeposits80TTA + InterestonEducationalLoan80E + InterestonHousingLoan80EEA);
// }

// window.onload = function (){
//     $("calculate").onclick = calculateTax;
// }

const form = document.querySelector('#tax-form');


function calculatorIncomeTax(IncomefromSalary){
    let tax= 0;
    if(IncomefromSalary <= 300000){
        tax = 0;
    }else if(IncomefromSalary > 300000 && IncomefromSalary <= 600000){
        tax = (IncomefromSalary - 300000) *0.05;
    }else if(IncomefromSalary > 600000 && IncomefromSalary <= 900000){
        tax = (300000) * 0.05 + (IncomefromSalary - 600000) * 0.10
    }else if(IncomefromSalary > 900000 && IncomefromSalary <= 1200000){
        tax = (300000) * 0.05 + (300000) * 0.10 + (IncomefromSalary - 900000) * 0.15
    }else if(IncomefromSalary > 1200000 && IncomefromSalary <= 1500000){
        tax = (300000) * 0.05 + (300000) * 0.10 + ( 300000) * 0.15 + (IncomefromSalary - 1200000) * 0.20
    }else{
        tax = (300000 * 0.05) + (300000 * 0.10) +  (300000 * 0.15) + (300000 * 0.20) + (IncomefromSalary - 1500000) * 0.30
    }
    return tax;
}

function calculateGross(IncomefromInterest,IncomefromSalary,ExemptAllowances,RentalIncomeReceived,IncomefromDigitalAssets,OtherIncome){
    return gross = IncomefromSalary + IncomefromInterest + RentalIncomeReceived + IncomefromSalary + ExemptAllowances + IncomefromDigitalAssets + OtherIncome;
}

function calculateTotal(gross,InterestPaidonHomeLoan,InterestPaidonLoan,BasicDeductions80C,MedicalInsurance80D,InterestonEducationalLoan80E,EmployeecontributiontoNPS80CCD,InterestonHousingLoan80EEA,InterestfromDeposits80TTA,DonationstoCharity80G){
    return totalincome = gross - (InterestPaidonHomeLoan + InterestPaidonLoan + BasicDeductions80C + MedicalInsurance80D + InterestonEducationalLoan80E + EmployeecontributiontoNPS80CCD + InterestonHousingLoan80EEA + InterestfromDeposits80TTA + DonationstoCharity80G);
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const IncomefromSalary = Number(form.IncomefromSalary.value);
    const IncomefromInterest = Number(form.IncomefromInterest.value);
    const RentalIncomeReceived = Number(form.RentalIncomeReceived.value);
    const IncomefromDigitalAssets = Number(form.IncomefromDigitalAssets.value);
    const OtherIncome = Number(form.OtherIncome.value);
    const ExemptAllowances = Number(form.ExemptAllowances.value);
    const InterestPaidonHomeLoan = Number(form.InterestPaidonHomeLoan.value);
    const InterestPaidonLoan = Number(form.InterestPaidonLoan.value);
    const BasicDeductions80C = Number(form.BasicDeductions80C.value);
    const MedicalInsurance80D = Number(form.MedicalInsurance80D.value);
    const InterestonEducationalLoan80E = Number(form.InterestonEducationalLoan80E.value);
    const EmployeecontributiontoNPS80CCD = Number(form.EmployeecontributiontoNPS80CCD.value);
    const InterestfromDeposits80TTA = Number(form.InterestfromDeposits80TTA.value);
    const DonationstoCharity80G = Number(form.DonationstoCharity80G.value);
    const InterestonHousingLoan80EEA = Number(form.InterestonHousingLoan80EEA.value);


    const gross = calculateGross(IncomefromInterest,IncomefromSalary,ExemptAllowances,RentalIncomeReceived,IncomefromDigitalAssets,OtherIncome);
    const taxableIncome = calculateTotal(gross,InterestPaidonHomeLoan,InterestPaidonLoan,BasicDeductions80C,MedicalInsurance80D,InterestonEducationalLoan80E,EmployeecontributiontoNPS80CCD,InterestonHousingLoan80EEA,InterestfromDeposits80TTA,DonationstoCharity80G)
    const tax = calculatorIncomeTax(taxableIncome);

    // alert(`The income tax of an income of ${IncomefromSalary} is: ${tax}/n total income is ${gross}/n taxable income is ${totalincome}`);
    document.getElementById("taxOwed").innerHTML = tax;
    document.getElementById("GrossIncome").innerHTML = gross;
    document.getElementById("taxableincome").innerHTML = taxableIncome;
})
