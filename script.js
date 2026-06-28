body{
    text-align: center;
    background-color: #f0f2f5;    
    color: #000;
    font-size: 60px;
    margin: 20px;
    font-family: "Yu Gothic", "Hiragino Sans", sans-serif;
    user-select: none;
}


#buttons{
    display: flex;
    justify-content: center;
    gap: 100px;
}

#count{
    font-size: 100px;
    margin: 0px;
}

#bt{
    margin-bottom: 0px;
    font-size: 70px;
}
#timer{
    margin-top: 10px;
    font-size: 100px;
}

#start{
    margin-bottom: 30px;
    width: 90%;
    max-width: 500px;
    height: 200px;
    font-size: 50px;
    background-color: rgb(132, 255, 255);
}
#stop{
    margin-bottom: 30px;
    width: 90%;
    max-width: 500px;
    height: 150px;
    font-size: 50px;
    background-color: rgb(190, 255, 255);
}

button{
    width: 180px;
    height: 150px;
    max-width: 40vw;
    font-size: 100px;
    border-radius: 20px;
    border: none;
    background-color: #ccced2;
    color: #000000;
    touch-action: manipulation;
    user-select: none;
    cursor:pointer;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout:none;
}

button:hover {
  opacity: 0.7;
}

p{
    margin-bottom: 10px;
}

.card{
    background-color: #f0f2f5;  
    border-radius: 15px;

    display: flex;

    flex-direction: column;   /* ←縦に並べる */

    justify-content: center;  /* ←上下中央 */

    align-items: center;      /* ←左右中央 */

    margin: auto;

    box-shadow: 5px 5px 10px rgb(164, 164, 164);

    margin-bottom: 100px;
    width:90%;
    max-width:1000px;
}

#waitcount{
    padding: 100px 0;
}
#timers{
    padding: 50px 0;
}
