var budgetin1=0;
function function1()
{
 var budgetin=document.getElementById("enterbudget").value;
budgetin1=parseInt(budgetin);
addBudget(budgetin1);
}

function addBudget(amt){
    var budget=parseInt(document.getElementById("budget1").innerHTML||0);
    document.getElementById("budget1").innerHTML=budget+parseInt(amt);
    calcuateBalance();
} 


var budgetuseage=0;
function function2()
{
 var budgetuse=document.getElementById("enteramount").value;
  budgetuseage= parseInt(budgetuse);
 

 var exptitle=document.getElementById("enterexpense").value;
 var arr=[];
 var obj={ 
        name:exptitle,
        value:budgetuseage,
    };
    arr.push(obj);
    arr.forEach(function(val,key)
    {
        $("table").append('<tr><td>'+val.name+'</td><td>'+val.value+'</td><td>'+
        '<button type="button"><img src="edot.png" width="15px" height="15px"></button>'+
        '<button type="button" onclick="deleteRow('+key+',this)"><img src="delete.png" width="15px" height="15px"></button></td></tr>');
    });
    addExpense(budgetuseage);
 calcuateBalance();
}

function addExpense(amt)
{
    var expense=parseInt(document.getElementById("budget2").innerHTML||0);
    document.getElementById("budget2").innerHTML= expense+ parseInt(amt);
}

function calcuateBalance(){
    var totalBudget=0,totalExpense=0, totalBalance=0;
    totalBudget=parseInt(document.getElementById("budget1").innerHTML||0);
    totalExpense=parseInt(document.getElementById("budget2").innerHTML||0);
    document.getElementById("budget3").innerHTML=totalBudget-totalExpense;
    
}
function deleteRow(amt,e)
{
    var exp=parseInt(document.getElementById("budget2").innerHTML);
    var expvalue=document.getElementById("enteramount").value;
    document.getElementById("budget2").innerHTML=exp-expvalue;
    calcuateBalance();
    $(e).parent().parent().remove();
}