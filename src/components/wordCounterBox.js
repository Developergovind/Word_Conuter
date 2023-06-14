import React, { useState } from 'react'
import Navbar from './navbar'
import './style.css'
function WordCounterBox() {
    let [inputValue, setInputValue] = useState("")

    function GetInputValue(e) {
        let inputValue = e.target.value
        setInputValue(inputValue)
    }

    // count characters
    let characters = inputValue.length

    // count words

    let word = inputValue.trim()
    let words = word.split(" ")
    let lengthOfWords = words.filter((element) => {
        return element != ""
    })

    // turn into upperCase

    function UpperCase() {
        let uppercasetext = inputValue.toUpperCase()
        setInputValue(uppercasetext)
    }
    function LowerCase() {
        let Lowercasetext = inputValue.toLowerCase()
        setInputValue(Lowercasetext)
    }

    function Clear() {
        let clear = inputValue = ""
        setInputValue(clear)
    }

    function Copy() {
        let copiedText = inputValue
        navigator.clipboard.writeText(copiedText);
        alert("text copied to clipboard ", copiedText)
    }

    function ExtractEmail() {
        let value = inputValue
        let count = 0;
        let extractEmail = value.split(" ")
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let arr = []
        for (var index = 0; index < extractEmail.length; index++) {

            if (extractEmail[index].match(validRegex)) {
                count++;
                let copiedText = extractEmail[index]
                console.log(copiedText);
                arr.push(copiedText)
                console.log(arr);


                // alert("text copied to clipboard ", copiedText)
            }
            navigator.clipboard.writeText(arr);
        }

        alert(`${count} Emails Found and copied to clipboard `);
    }

    function Save() {
        let value = inputValue
        localStorage.setItem("wordCounterText", JSON.stringify(value))
        alert("Data saved to the localstorage ");
    }

    return (
        <>
        <Navbar data = {inputValue}></Navbar>
            <div className="container mt-4 ">
                <div className="row">
                    <div className="col-md-2">
                        <div className="card">
                            <div className="col">
                                <div className="card">
                                    <button type="button" class="btn btn-primary m-4" onClick={UpperCase} >UpperCase</button>
                                    <button type="button" class="btn btn-success m-4 " onClick={LowerCase}>LowerCase</button>
                                    <button type="button" class="btn btn-danger m-4" onClick={Clear}>Clear</button>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card">
                            <textarea name="inputValue" onChange={GetInputValue} value={inputValue} placeholder='Enter text' cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="col">
                                <div className="card">

                                    <button type="button" class="btn btn-warning m-4" onClick={Copy}>Copy</button>
                                    <button type="button" class="btn btn-info m-4" onClick={ExtractEmail}>Extract Email</button>
                                    <button type="button" class="btn btn-dark m-4" onClick={Save}>Save</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p>
                    <span className="word">{lengthOfWords.length}</span> words and
                    <span className="char" > {characters} </span> characters
                </p>
            </div>
        </>
    );
}

export default WordCounterBox