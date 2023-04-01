// "use strict";
var $ = function (id) {
    return document.getElementById(id);
    
};

   var IncomefromSalary;
   var year1;
   var year2;
   var age1;
   var age2;
   var age3;
   var IncomefromInterest;
   var RentalIncomeReceived;
   var IncomefromDigitalAssets;
   var OtherIncome;
   var ExemptAllowances;
   var InterestPaidonHomeLoan;
   var InterestPaidonLoan;
   var BasicDeductions80C;
   var MedicalInsurance80D;
   var InterestonEducationalLoan80E;
   var EmployeecontributiontoNPS80CCD;
   var InterestfromDeposits80TTA;
   var DonationstoCharity80G;
   var InterestonHousingLoan80EEA;
   var BasicDeductions80C;
   var deductions;
   var taxableincome;
   var taxOwed;
   var GrossIncome;



   var calculateGross = function(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived){
    // if( IncomefromDigitalAssets || IncomefromInterest || OtherIncome || RentalIncomeReceived == null){
    //     IncomefromDigitalAssets = 0;
    //     IncomefromInterest = 0;
    //     OtherIncome = 0;
    //     RentalIncomeReceived = 0;
    // }
    return document.getElementById("GrossIncome").innerHTML = IncomefromSalary + IncomefromInterest + IncomefromDigitalAssets + OtherIncome + RentalIncomeReceived;
   }

//    var calculateDeductions = function(BasicDeductions80C, ExemptAllowances, MedicalInsurance80D, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, DonationstoCharity80G){
//     return deductions = BasicDeductions80C + ExemptAllowances + MedicalInsurance80D + InterestPaidonHomeLoan + InterestPaidonLoan + InterestfromDeposits80TTA + InterestonEducationalLoan80E + DonationstoCharity80G;
//    }

//    var calculateTaxableIncome = function( GrossIncome, deductions){
//     return taxableincome = GrossIncome - deductions;
//    }




//    var calculateTax = function(GrossIncome){
//     /*if (income > 0 && income < 9275){
//         //incomeTax = taxableIncome - 0;
//         //percentIT = incomeTax * (10/100);
//         taxOwed = (income - 0) * (10/100) + 0;
//         taxOwed = parseFloat(taxOwed);
//         taxOwed = taxOwed.toFixed(2); //the tax should be rounded two 
//         return taxOwed;
//     }*/
//     calculateDeductions(BasicDeductions80C, ExemptAllowances, MedicalInsurance80D, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, DonationstoCharity80G);
//     calculateGross(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived);
//     calculateTaxableIncome(GrossIncome, deductions);

//     if (IncomefromSalary < 25000){
//         taxOwed = taxableincome - 0 * .10 + 0;
//     }else if(IncomefromSalary > 25000 && IncomefromSalary < 50000){
//         taxOwed = ((IncomefromSalary - 9275) * .15) + 927.50;
//     }
//     else if(IncomefromSalary > 500000 && IncomefromSalary < 750000){
//         taxOwed = (taxableincome / 10) + 12500;
//     }
//     else if(IncomefromSalary > 500000 && IncomefromSalary < 750000){}
//     else if(IncomefromSalary > 750000 && IncomefromSalary < 100000){}
//     else if(IncomefromSalary > 100000 && IncomefromSalary < 1250000){}
//     else if(IncomefromSalary > 1250000 && IncomefromSalary < 150000){}
//     else if(IncomefromSalary > 1500000){}
//     return [
//         document.getElementById("taxOwed").innerHTML = taxOwed,
//         document.getElementById("GrossIncome").innerHTML = GrossIncome,
//         document.getElementById("deductions").innerHTML = deductions,
//         document.getElementById("taxableincome").innerHTML = taxableincome,
//         console.log(document.getElementById("deductions").innerHTML = deductions,
//         document.getElementById("taxableincome").innerHTML = taxableincome)
//     ]
// };

// var processEntry = function(){
//     IncomefromSalary = parseInt($("IncomefromSalary").value); //users entry should be converted 
//     BasicDeductions80C = parseInt($("BasicDeductions80C").value);
//     ExemptAllowances = parseInt($("ExemptAllowances").value);
//     MedicalInsurance80D = parseInt($("MedicalInsurance80D").value);
//     InterestPaidonHomeLoan = parseInt($("InterestPaidonHomeLoan").value);
//     InterestPaidonLoan = parseInt($("InterestPaidonLoan").value);
//     InterestfromDeposits80TTA = parseInt($("InterestfromDeposits80TTA").value);
//     InterestonEducationalLoan80E = parseInt($("InterestonEducationalLoan80E").value);
//     DonationstoCharity80G = parseInt($("DonationstoCharity80G").value);

//     if(isNaN(IncomefromSalary,BasicDeductions80C, ExemptAllowances, MedicalInsurance80D, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, DonationstoCharity80G)){
//         alert("Entry must be a number");
//     }else if (IncomefromSalary <= 0){
//         alert("income must be greater than 0");
//     }else{

//         $("taxOwed").value = calculateTax(IncomefromSalary);
//         $("taxOwed").value = calculateDeductions(IncomefromSalary);
//         $("taxOwed").value = calculateGross(IncomefromSalary);
//     }
// };  

// window.onload = function () {
//     $("calculate").onclick = processEntry;
//     $("IncomefromSalary").focus();
// };

var processEntry = function (){
    IncomefromSalary = document.getElementById("IncomefromSalary").value;
    IncomefromInterest = document.getElementById("IncomefromInterest").value;
    IncomefromDigitalAssets = document.getElementById("IncomefromDigitalAssets").value;
    OtherIncome = document.getElementById("OtherIncome").value;
    RentalIncomeReceived = document.getElementById("RentalIncomeReceived").value;
    IncomefromSalary = parseInt($("IncomefromSalary").value);
    IncomefromInterest = parseInt($("IncomefromInterest").value);
    if(isNaN(IncomefromSalary,IncomefromInterest)){
        alert("Enter a number")
    }
    else if (IncomefromSalary <= 0){
        alert("income must be grater than 0")
    }
    else{
        $("GrossIncome").value = calculateGross(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived);
        console.log($("GrossIncome").value);    
        return document.getElementById("GrossIncome").innerHTML = IncomefromSalary + IncomefromInterest + IncomefromDigitalAssets + OtherIncome + RentalIncomeReceived;
    }
}


window.onload = function () {
    $("calculate").onclick = processEntry;
    $("IncomefromSalary").focus();
}