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
   var deductions;
   var taxableincome;
   var taxOwed;


   var calculateGross = function(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived){
    var GrossIncome = Number.MAX_SAFE_INTEGER;
    console.log( typeof(GrossIncome));

    return  GrossIncome = parseInt(IncomefromSalary)  + parseInt(IncomefromInterest)  + parseInt(IncomefromDigitalAssets)  + parseInt(OtherIncome)  + parseInt(RentalIncomeReceived) ;
   }

   var calculateDeductions = function(BasicDeductions80C, ExemptAllowances, MedicalInsurance80D, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, DonationstoCharity80G){
    return deductions = parseInt(BasicDeductions80C) + parseInt(ExemptAllowances) + parseInt(MedicalInsurance80D) +  parseInt(InterestPaidonHomeLoan) + parseInt(InterestPaidonLoan)  + parseInt(InterestfromDeposits80TTA)  + parseInt(InterestonEducationalLoan80E)  + parseInt(DonationstoCharity80G) ;
   }

   var calculateTaxableIncome = function( GrossIncome, deductions){
    return taxableincome = parseInt(GrossIncome) - parseInt(deductions);
   }




   var calculateTax = function(taxableincome){
    /*if (income > 0 && income < 9275){
        //incomeTax = taxableIncome - 0;
        //percentIT = incomeTax * (10/100);
        taxOwed = (income - 0) * (10/100) + 0;
        taxOwed = parseFloat(taxOwed);
        taxOwed = taxOwed.toFixed(2); //the tax should be rounded two 
        return taxOwed;
    }*/
    if (IncomefromSalary < 25000){
        taxOwed = parseInt(taxableincome) - 0 * .10 + 0;
    }else if(IncomefromSalary > 25000 && IncomefromSalary < 50000){
        taxOwed = (( parseInt(IncomefromSalary) - 9275) * .15) + 927.50;
    }
    else if(IncomefromSalary > 500000 && IncomefromSalary < 750000){
        taxOwed = (parseInt(taxableincome)  / 10) + 12500;
    }
    else if(IncomefromSalary > 500000 && IncomefromSalary < 750000){}
    else if(IncomefromSalary > 750000 && IncomefromSalary < 100000){}
    else if(IncomefromSalary > 100000 && IncomefromSalary < 1250000){}
    else if(IncomefromSalary > 1250000 && IncomefromSalary < 150000){}
    else if(IncomefromSalary > 1500000){}
    return [
        document.getElementById("taxOwed").innerHTML = taxOwed,
        // document.getElementById("GrossIncome").innerHTML = GrossIncome,
        // document.getElementById("deductions").innerHTML = deductions,
        // document.getElementById("taxableincome").innerHTML = taxableincome,
        // console.log(document.getElementById("deductions").innerHTML = deductions,
        // document.getElementById("taxableincome").innerHTML = taxableincome)
    ]
};

// var processEntry = function(){
//     IncomefromSalary = document.getElementById("IncomefromSalary").value;
//     IncomefromInterest = document.getElementById("IncomefromInterest").value;
//     IncomefromDigitalAssets = document.getElementById("IncomefromDigitalAssets").value;
//     OtherIncome = document.getElementById("OtherIncome").value;
//     RentalIncomeReceived = document.getElementById("RentalIncomeReceived").value;
//     DonationstoCharity80G = document.getElementById("DonationstoCharity80G").value;
//     ExemptAllowances = document.getElementById("ExemptAllowances").value;
//     InterestonEducationalLoan80E = document.getElementById("InterestonEducationalLoan80E").value;
//     EmployeecontributiontoNPS80CCD = document.getElementById("EmployeecontributiontoNPS80CCD").value;
//     InterestPaidonHomeLoan = document.getElementById("InterestPaidonHomeLoan").value;
//     InterestPaidonLoan =  document.getElementById("InterestPaidonLoan").value;
//     InterestfromDeposits80TTA = document.getElementById("InterestfromDeposits80TTA").value;
//     InterestonHousingLoan80EEA = document.getElementById("InterestonHousingLoan80EEA").value;
//     BasicDeductions80C = document.getElementById("BasicDeductions80C").value;
//     MedicalInsurance80D = document.getElementById("MedicalInsurance80D").value;


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

//         // $("taxOwed").value = calculateTax(IncomefromSalary);
//         // $("taxOwed").value = calculateDeductions(IncomefromSalary);
//         // $("taxOwed").value = calculateGross(IncomefromSalary);
//         $("GrossIncome").value = calculateGross(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived);
//         console.log($("GrossIncome").value);    
//         return document.getElementById("GrossIncome").innerHTML = IncomefromSalary + IncomefromInterest + IncomefromDigitalAssets + OtherIncome + RentalIncomeReceived;
//     }
// };  

// window.onload = function () {
//     $("calculate").onclick = processEntry;
//     $("IncomefromSalary").focus();
// };

function checkforblank (){
    console.log("this is blank functino")
    for (i=0; i<=16; i++)
    {
         if(document.getElementById("BasicDeductions80C").value == "" )
        {
            return BasicDeductions80C = 0;
            }

            if (document.getElementById("ExemptAllowances").value  == ""){
                return ExemptAllowances = 0;
            }
            if( document.getElementById("MedicalInsurance80D").value == ""){
                return MedicalInsurance80D = 0;

            }
            if( document.getElementById("InterestPaidonHomeLoan").value  == ""){
                return InterestPaidonHomeLoan = 0;
            }
            if( document.getElementById("InterestPaidonLoan").value == ""){
                return InterestPaidonLoan = 0;
            }
            if( document.getElementById("InterestfromDeposits80TTA").value == ""){
                return InterestfromDeposits80TTA = 0;
            }
            if( document.getElementById("InterestonEducationalLoan80E").value == ""){
                return InterestonEducationalLoan80E = 0;
            }
            if( document.getElementById("DonationstoCharity80G").value == ""){
                return DonationstoCharity80G = 0;
            }
            if( document.getElementById("IncomefromDigitalAssets").value == ""){
                console.log(IncomefromDigitalAssets);
                alert('Please fill all fields with your data or "0');
                return IncomefromDigitalAssets = 0;
                   
            }}
             
        console.log(IncomefromSalary,ExemptAllowances, MedicalInsurance80D, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, DonationstoCharity80G);
        return document.getElementById("GrossIncome").innerHTML = calculateGross(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived);
}

var processEntry = function (){

    IncomefromSalary = document.getElementById("IncomefromSalary").value;
    IncomefromInterest = document.getElementById("IncomefromInterest").value;
    IncomefromDigitalAssets = document.getElementById("IncomefromDigitalAssets").value;
    OtherIncome = document.getElementById("OtherIncome").value;
    RentalIncomeReceived = document.getElementById("RentalIncomeReceived").value;
    DonationstoCharity80G = document.getElementById("DonationstoCharity80G").value;
    ExemptAllowances = document.getElementById("ExemptAllowances").value;
    InterestonEducationalLoan80E = document.getElementById("InterestonEducationalLoan80E").value;
    EmployeecontributiontoNPS80CCD = document.getElementById("EmployeecontributiontoNPS80CCD").value;
    InterestPaidonHomeLoan = document.getElementById("InterestPaidonHomeLoan").value;
    InterestPaidonLoan =  document.getElementById("InterestPaidonLoan").value;
    InterestfromDeposits80TTA = document.getElementById("InterestfromDeposits80TTA").value;
    InterestonHousingLoan80EEA = document.getElementById("InterestonHousingLoan80EEA").value;
    BasicDeductions80C = document.getElementById("BasicDeductions80C").value;
    MedicalInsurance80D = document.getElementById("MedicalInsurance80D").value;


    IncomefromSalary = parseInt($("IncomefromSalary").value); //users entry should be converted 
    BasicDeductions80C = parseInt($("BasicDeductions80C").value);
    ExemptAllowances = parseInt($("ExemptAllowances").value);
    MedicalInsurance80D = parseInt($("MedicalInsurance80D").value);
    InterestPaidonHomeLoan = parseInt($("InterestPaidonHomeLoan").value);
    InterestPaidonLoan = parseInt($("InterestPaidonLoan").value);
    InterestfromDeposits80TTA = parseInt($("InterestfromDeposits80TTA").value);
    InterestonEducationalLoan80E = parseInt($("InterestonEducationalLoan80E").value);
    DonationstoCharity80G = parseInt($("DonationstoCharity80G").value);




    if(IncomefromSalary <= 0){
        alert("income must be grater than 0")
    }
    


    else{
        // $("GrossIncome").value = calculateGross(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived);
        // console.log($("GrossIncome").value);    
        
        return [document.getElementById("GrossIncome").innerHTML = calculateGross(IncomefromSalary, IncomefromDigitalAssets, IncomefromInterest, OtherIncome, RentalIncomeReceived), document.getElementById("deductions").innerHTML = calculateDeductions(BasicDeductions80C, ExemptAllowances, MedicalInsurance80D, InterestPaidonHomeLoan, InterestPaidonLoan, InterestfromDeposits80TTA, InterestonEducationalLoan80E, DonationstoCharity80G), document.getElementById("taxableincome").innerHTML = calculateTaxableIncome(GrossIncome, deductions), document.getElementById("taxOwed").innerHTML = calculateTax(taxableincome)]
    }
    
}


window.onload = function () {
    $("calculate").onclick = checkforblank;
    $("calculate").onclick = processEntry;
    $("IncomefromSalary").focus();
}
