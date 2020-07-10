var budgetin1=0;
var deletearr=[];
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

var arr=[];
var obj={};
var budgetuseage=0;
function function2()
{
 var budgetuse=document.getElementById("enteramount").value;
  budgetuseage= parseInt(budgetuse);
  addExpense(budgetuseage);
  calcuateBalance();

 var exptitle=document.getElementById("enterexpense").value;
 
 obj={ 
        name:exptitle,
        value:budgetuseage,
    };
    arr.push(obj);
    deletearr.push(obj);
    arr.forEach(function(val,key)
    {
        $("table").append('<tr><td>'+val.name+'</td><td id="td1">'+val.value+'</td><td>'+
        '<img src="edot.png" width="15px" height="15px" onclick="editTable('+key+',this)">'+
        '<img src="delete.png" width="15px" height="15px" onclick="deleteRow('+key+',this)"></td></tr>');
        delete arr[key];
    });
   
 
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
var expvalue=0;
function deleteRow(amt,e)
{
    alert(amt);
   alert(deletearr[amt].value);
     var exp=parseInt(document.getElementById("budget2").innerHTML);
     alert(exp);
    document.getElementById("budget2").innerHTML=exp-deletearr[amt].value;
   
    // document.getElementById("budget2").innerHTML=exp-expvalue;
     calcuateBalance();
     $(e).parent().parent().remove();
    
}
function editTable(amt,e){

}