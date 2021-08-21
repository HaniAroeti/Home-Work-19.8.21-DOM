// 1.	צור דף html לרשימת קניות עם אלמנט input וכפתור.
// a.	 כל לחיצה על הכפתור מוסיפה את הערך למערך של רשימות הקנייה יש לוודא שאין כפילויות.
// b.	הציגו את הערך על המסך בנוסף לאובייקטים הקודמים.

// arrayOrderList = [];
// var inputBtn1 = document.getElementById ("inputBtn");
// var input1 = document.getElementById ("input")
// var orderList1 = document.getElementById ("orderList")

// inputBtn1.onclick = function(){
//     arrayOrderList.unshift(input1.value);
//       let unique = [...new Set(arrayOrderList)];
//     console.log(unique);
//        document.write (arrayOrderList);
// }


// 2.	כתוב פונקציה המקבלת 2 מספרים ומחזירה את הסכום שלהם - 
// הפעלת הפונקציה תתבצע ע"י לחיצה של כפתור.


// var click_For_Sum = document.getElementById ("clickForSum");
// var firstNumber = 6;
// var secondNumber = 6
// click_For_Sum.onclick = function(){
//     var sum = firstNumber + secondNumber;
//     console.log(sum);
// }


//  3.	צור כפתור שבלחיצה עליו הרקע שלו ישתנה לאדום.

// var click_To_Change_Color = document.getElementById ("clickToChangeColor");
// click_To_Change_Color.onclick = function (){
//     click_To_Change_Color.style.backgroundColor = "yellow";
// }


// 4.	צור כפתור שברגע שלוחצים עליו מציג מספר רנדומלי על אלמנט P.


// var btn_Randon_Number = document.getElementById ("btnRandonNumber");
// var p_Element = document.getElementById ("pElement");
// btn_Randon_Number.onclick = function (){
   
//     p_Element.innerText = Math.random();
// }

// 5.	צור מערך של מוצרים, הצג על המסך את שם ותמונת המוצרים.


// let phones = ["iphone", "samsung", "onepluse", "xiaomi"];
//  var iphone_Div = document.getElementById ("iphoneDiv");
//  var samsung_Div = document.getElementById ("samsungDiv");
//  var onepluse_Div = document.getElementById("onepluseDiv");
//  var xiaomi_Div = document.getElementById ("xiaomiDiv");
// iphone_Div.append (phones[0]);
// iphone_Div.style.textAlign = "center";
// samsung_Div.append (phones[1]);
// samsung_Div.style.textAlign = "center";
// onepluse_Div.append(phones[2]);
// onepluse_Div.style.textAlign = "center";
// xiaomi_Div.append(phones[3]);
// xiaomi_Div.style.textAlign = "center";

// 6.	צור אלמנט קלט וכפתור, בלחיצה על הכפתור הוסף את הערך למערך של מספרים.

// var push_The_Button = document.getElementById ("pushTheButton");
// var input_Of_Push_The_Button = document.getElementById ("inpurOfPushTheButton").Value;
// push_The_Button.onclick = function (){
//     let arrayOfNumbers =[];
   
//         console.log(input_Of_Push_The_Button);
            
//         }




// 7.	צור אלמנט פסקה בלחיצה עליו הטקסט ישתנה לתאריך הנוכחי.

// var p_Click_On_Me_And_I_Will_Changed_To_Date = document.getElementById ("pClickOnMeAndIWillChangedToDate");
// p_Click_On_Me_And_I_Will_Changed_To_Date.addEventListener ("click", function(){
//     myDate = new Date()
//      p_Click_On_Me_And_I_Will_Changed_To_Date.innerHTML = myDate;
// })

// 8.	צור אלמנט פסקה בלחיצה עליו הטקסט ישתנה לשעה הנוכחית.

// var p_Change_To_Hour = document.getElementById ("pChangeToHour");
// p_Change_To_Hour.onclick = function (){
//     // var hour = new Date()
//     let todayDate = new Date();
//     let todayTime = todayDate.getHours();
//     p_Change_To_Hour.innerText = todayTime;
// }


// 9.	צור קלט הקולט מהמשתמש את הגיל שלו מחשב ומציג את שנת הלידה שלו על אלמנט P.

// var press_To_Get_Your_Year_Date = document.getElementById ("pressToGetYourYearDate");
// var new_P = document.getElementById ("newP");
// press_To_Get_Your_Year_Date.onclick = function (){
//     var input_Your_Age = document.getElementById ("inputYourAge").value;
//         // console.log(input_Your_Age);
//         var thisYear = new Date().getUTCFullYear();
//         // console.log(thisYear);
//          var yourAgeIs = thisYear - input_Your_Age;
//         //  console.log(yourAgeIs);
//         new_P.innerText = yourAgeIs
// }


// 10.	נתון מערך של מספרים, קלוט מספר מהמשתמש, 
// בלחיצה על כפתור חפש האם המספר מופיע 
// במערך הדפס את התוצאה על אלמנט P.

// let arrayOfNumbers = [2,7,6,5,4,3,8];
// let br_ = document.getElementById ("br")
// let search_If_Your_Number_Appears = document.getElementById ("searchIfYourNumberAppears");
// search_If_Your_Number_Appears.onclick = function (){
//     let input_Number = document.getElementById ("inputNumber").value;
//     let your_Number_Is_In_The_Array = document.getElementById("yourNumberIsInTheArray");
//     for (var i=0;i<arrayOfNumbers.length;i++){
//         if (input_Number == arrayOfNumbers[i]) {
//             console.log(input_Number);
//             your_Number_Is_In_The_Array.innerText += input_Number;
//             break
//         }
        
//     }

//     }

// 11.	קלוט שם פרטי ומשפחה באותו הקלט, הדפס כל אחד באלמנט P אחר.

// var btn_Enter_Full_Name = document.getElementById ("btnEnterFullName");

// btn_Enter_Full_Name.onclick = function (){
//     let full_Name_Input = document.getElementById ("fullNameInput").value;
//     let first_Name = document.getElementById ("firstName");
//     let last_Name = document.getElementById ("lastName");
//     first_Name.innerText += full_Name_Input.substr (0,4)
//     last_Name.innerText += full_Name_Input.substr (5,7);
    
// }

// 12.	צור 2 קלטים בלחיצה על כפתור השווה בין אורך הערכים שבקלטים

// var btn_00 = document.getElementById ("btn00");
// btn_00.onclick = function (){
//     let first_Input = document.getElementById ("firstInput").value;
//     let second_Input = document.getElementById ("secondInput").value;
//     let lengthOfFirstValue = first_Input.length;
//     let lengthOfsecondValue = second_Input.length;
//     if (lengthOfFirstValue > lengthOfsecondValue) {
//         console.log(lengthOfFirstValue + "is larger than" + lengthOfsecondValue);
//         }
//         else{
//         console.log( lengthOfsecondValue + "is larger than" + lengthOfFirstValue);
//         }
//  }

// 13.	צרו טופס של משתמש: שם פרטי, אימייל, גיל
// a.	לחיצה על שלח יוצרת אובייקט עם אותם שדות ומוסיפה אותו למערך הלקוחות.
// b.	הציגו את האובייקט על המסך

// let send_Btn = document.getElementById ("sendBtn");
// send_Btn.onclick = function(){
//     let input_Full_Name = document.getElementById ("inputFullName").value;
//     let input_Email = document.getElementById ("inputEmail").value;
//     let input_Age = document.getElementById ("inputAge").value;
//     var newClientInfo = {
//         Full_Name: input_Full_Name,
//         email: "input_Email",
//         age: "input_Age",
        
//     }
//     console.log(newClientInfo);
  
// }