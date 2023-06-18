1. var | let | const
(1) scope -> 被認得的範圍
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);
    
    output:
    0
    1
    2
    3
    4
    5
    ---------------------------
    for(let j = 0; j < 5; j++){
        console.log(j);
    }
    console.log(j);
    
    output:
    0
    1
    2
    3
    4
    Uncaught ReferenceError: j is not defined

(2) hoisting
    action()    // 先呼叫函數
    function action(){...}  // 補宣告
    ---------------------------
    temp += 1
    var temp = 100
    ---------------------------
    但是，let 和 const 不能先執行再補宣告

(3) const 宣告的變數不能被 reassigned
    const num = 100
    num = 50  // Uncaught TypeError: Assignment to constant variable.
    ---------------------------
    const house = {
        table:  5,
        chair: 10,
    };
    house.table = 12;  // 可以
    ---------------------------

    const man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriateColor: ['blue','black','gray'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2021,
        },
        retired: false,
        birthday: new Date(1982,10,17),
    }
    // 物件宣告盡量用 const , 用 let 會有一些雷區
========================================================
2 object shorthand 物件縮寫
(1) 屬性縮寫
    function circle(x, y, r){
        return {
            x: x,
            y: y,
            r: r,
        }
    }
    呼叫: let ans = circle(100, 100, 150)

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    function circle(x, y, r){
        return {
            x, 
            y, 
            r,
        }
    }
    ---------------------------
    // 用函式建物件
    function createObject(key, value){
        let obj = {}
        obj[key] = value

        return obj
    }
    呼叫: let man = createObject('name', 'Peter')
    執行: console.log(man);
    結果: {name: 'Peter'}
    
    呼叫: let dog = createObject('legs', 4)
    執行: console.log(dog);
    結果: {legs: 4}
    ---------------------------
    # 屬性可以計算
    function createObject(key, value){
        let obj = {
            // [key]: value,
            [key + 1]: value,
        }

        return obj
    }
    呼叫: let man = createObject('name', 'Peter')
    執行: console.log(man);
    結果: {name1: 'Peter'}
    
    呼叫: let dog = createObject('legs', 4)
    執行: console.log(dog);
    結果: {legs1: 4}

    呼叫: let cat = createObject('10', 4)
    執行: console.log(cat);
    結果: {101: 4}

(2) 函數縮寫
    const man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriateColor: ['blue','black','gray'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2021,
        },
        retired: false,
        birthday: new Date(1982,10,17),
        sayHello: function(){...},
        // 縮寫成以下
        sayHello(){...},
    }

========================================================
3 destructuring assignment 解構賦值
(1) 陣列解構
    let numArray = [1,3,5,7,9]
    let first = numArray[0]
    let second = numArray[1]

    執行: console.log(first);
    結果: 1

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let numArray = [1,3,5,7,9]
    let [first,second,third,fourth,fifth] = numArray

    執行: console.log(fourth);
    結果: 7

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let numArray = [1,3,5,7]
    let [first,second,third,fourth,fifth] = numArray

    執行: console.log(fifth);
    結果: undefined

    執行: console.log(third + fourth + fifth);
    結果: NaN
    ---------------------------
    # 給予預設值
    let numArray = [1,3,5,7]
    let [first,second,third,fourth,fifth=100] = numArray
    ---------------------------
    # 忽略部分元素
    let numArray = [1,3,5,7,9]
    let [,second] = numArray

    執行: console.log(second);
    結果: 3
    ---------------------------
    # 剩下的部分
    let numArray = [1,3,5,7,9]
    let [arr,...others] = numArray  // 「...」rest operator //(1_threeDots.html)

    執行: console.log(arr);
    結果: 1
    執行: console.log(others);
    結果: [3, 5, 7, 9]
    ---------------------------
    # swap // 互換
    // 將 x, y 的值互換
    // let x = 5, y = 10, temp;
    // temp = x
    // x = y
    // y = temp

    let x = 5, y = 10
    [x, y] = [y, x]

(2) 物件解構
    const circle = {
        x: 100,
        y: 100,
        r: 150,
    } 
    let x = circle.x
    let y = circle.y
    let r = circle.r

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    const circle = {
        x: 100,
        y: 100,
        r: 150,
    }

    let {x, y, r} = circle // x, y, r -> key值
    let {x, y, r, z=123} = circle

(3) 函數解構
    /* === 1 === */
    const circle = {
        x: 100,
        y: 100,
        r: 150,
    }
    //
    function drawCircle(){
        return Math.sqrt(circle.x * circle.x + circle.y * circle.y)
    }

    呼叫: let ans = drawCircle()
    執行: console.log(ans);
    結果: 141.4213562373095

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    // 常見
    function drawCircle({x, y}){
        return Math.sqrt(x * x + y * y)
    }

    呼叫: let ans = drawCircle(circle)
    執行: console.log(ans);
    結果: 141.4213562373095

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    //
    function drawCircle({x=200, y=200}){
        return Math.sqrt(x * x + y * y)
    }

    呼叫: let ans = drawCircle(circle)
    執行: console.log(ans);
    結果: 141.4213562373095

    /* === 2 === */ 
    const circle = {}

    function drawCircle({x=200, y=200}){
        return Math.sqrt(x * x + y * y)
    }

    呼叫: let ans = drawCircle(circle)
    執行: console.log(ans);
    結果: 282.842712474619
========================================================
4 string template 字串模板(使用反引號 backtick)
(1) 字串串接
    let name = 'Peter'
    console.log('Hello ' + name + '!');

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    console.log(`Hello ${name}!`);

(2) 插入表達式
    function sayHello(name, days){
        console.log(`Hello, ${name}! It has been ${days * 24 * 60} mintues.`);
    }

    呼叫: sayHello('Peter',3)
    結果: Hello, Peter! It has been 4320 mintues.

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    function sayHello(name, days){
        console.log(`Hello, ${name}! ${(days > 5) ? 'It has been a long time since I saw you last.': ''}`);
    }

    呼叫: sayHello('Peter',3)
    結果: Hello, Peter! It has been 4320 mintues.

(3) 多行字串
    let longString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sint.' +
                     'Adipisci quia incidunt unde similique optio quo et dignissimos reprehenderit' + 
                     ' sint ipsum totam magni architecto praesentium veritatis quae fugiat, corporis' + 
                     'sapiente beatae autem eveniet ducimus? Totam quisquam rem, ab iusto deleniti animi' + 
                     ' molestias perspiciatis unde consequatur molestiae excepturi vel nesciunt!'

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let longString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sint. 
    Adipisci quia incidunt unde similique optio quo et dignissimos reprehenderit sint ipsum 
    totam magni architecto praesentium veritatis quae fugiat, corporis sapiente beatae autem 
    eveniet ducimus? Totam quisquam rem, ab iusto deleniti animi molestias perspiciatis unde 
    consequatur molestiae excepturi vel nesciunt!`

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let longString = `
        <form id="theForm">
            <fieldset>
                <legend>BMI</legend>
                <div>
                    <label for="height">height</label>
                    <input type="number" name="height" id="height" min="0" step="0.1">
                </div>
                <div>
                    <label for="weight">weight</label>
                    <input type="number" name="weight" id="weight" min="0" step="0.1">
                </div>            
                <div>
                    <button id="submit">Submit</button>
                </div>
                <div id="total"></div>
            </fieldset>
        </form>
    `
========================================================
5 關於 this
  .html  <button id="theButton">Click</button>

  .js
        document.getElementById('theButton').addEventListener('click',function(e){
            console.log(e.target.nodeName);      // BUTTON 
            console.log(this.nodeName);          // BUTTON 
            console.log(e.type);                 // click
        })

    ※ this 在 JavaScript 代表執行當下的外層物件，所以 this 在執行當下才有意義
        this 代表哪一個物件，跟他的情境(context)有關
    (1)
        function action(){
            console.log(this);
        }
        呼叫: action()
        結果: window 物件

    (2)
        let man = {
            name: 'Peter',
            sayHello(){
                console.log(this);
            },
        }

        呼叫: man.sayHello()
        結果: man 物件

    (3)
        let ans = function(){       // IIFE (Immediately Invoked Function Expression) 
            console.log(this);
        }

        呼叫: ans()
        結果: window 物件
        ---------------------------

        let hello = function(name){
            console.log(`Hello ${name}`);
        }('Simon');

        結果: Hello Simon
    
    (4) 箭頭函數: 內部的 this 和外部的 this 代表相同的物件
        let arrow = () => console.log(this);

        呼叫: arrow()
        結果: window 物件
        ---------------------------

        let man = {
            name: 'Peter',
            sayHello: () => console.log(this)
        }

        呼叫: man.sayHello()
        結果: window 物件
========================================================
6 arrow function 箭頭函數
目的: 用更簡短的方式宣告和定義函數

    let numArray = [1,3,5,7,9]
    // step 1
    numArray.map(function(){})  // callback function
    // step 2
    numArray.map(function(data){})  
    // step 3
    let newArray = numArray.map(function(data){return data * 5}) 
    console.log(newArray);    // [5, 15, 25, 35, 45]

    newArray = numArray.map(function(data){return `sn10${data}`}) 
    onsole.log(newArray);    // ['sn101', 'sn103', 'sn105', 'sn107', 'sn109']

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    使用箭頭函數

    let numArray = [1,3,5,7,9]

    let newArray = numArray.map(function(data){return data * 5})
    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let newArray = numArray.map((data) => {return data * 5})
    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  
    let newArray = numArray.map(data =>  data * 5)

    箭頭函數使用原則
    。箭頭函數省略關鍵字「function」
    。函數傳遞一個參數，不用加小括號 (函數如果傳遞多個參數或沒有傳遞參數，一定要加小括號)
    。傳回值只有一個敘述，不用加大括號 (如果這一個敘述有 return，可以省略 return)

    IIFE 使用箭頭函數

    let hello = function(name){
        console.log(`Hello ${name}`);
    }('Simon');

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let hello = name => console.log(`Hello ${name}`)
    console.log(hello('Simon'));
    ---------------------------
    # 自動綁定

    內部的 this 和外部的 this 代表相同的物件

    let ans = () => console.log(this)
    ans()       // window 物件

    console.log(this)       // window 物件
========================================================
    