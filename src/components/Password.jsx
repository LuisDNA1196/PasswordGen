import { useState } from "react";
import {
  lowerCaseLetters,
  numbers,
  specialCharacters,
  upperCaseLetters,
} from "../utils/characters";
import "./styles/password.css";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPassWordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    let characterPool = "";
    if (includeNumbers) characterPool += numbers;
    if (includeUpperCase) characterPool += upperCaseLetters;
    if (includeLowerCase) characterPool += lowerCaseLetters;
    if (includeSymbols) characterPool += specialCharacters;

    if (characterPool.length === 0) {
      alert("Please select at least one checkbox");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    switch (name) {
      case "passwordLength":
        setPassWordLength(Number(val));
        break;
      case "includeNumbers":
        setIncludeNumbers(val);
        break;
      case "includeUpperCase":
        setIncludeUpperCase(val);
        break;
      case "includeLowerCase":
        setIncludeLowerCase(val);
        break;
      case "includeSymbols":
        setIncludeSymbols(val);
        break;
      default:
        break;
    }
  };



  return (
    <>
      <div className="container">
            <div className="box">
                <h2 className="title">Password Generator</h2>
                <div>
                    <input value={password} readOnly className="input" />
                </div>
                <div>
                    <label htmlFor="password-length" className="label">Password length</label>
                    <input
                        type="number"
                        id="password-length"
                        name="passwordLength"
                        value={passwordLength}
                        onChange={handleChange}
                        className="input"
                    />

                    <div className="checkbox-group">
                        <label htmlFor="uppercase" className="label">Add Uppercase Letters</label>
                        <input
                            type="checkbox"
                            id="uppercase"
                            name="includeUpperCase"
                            checked={includeUpperCase}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="checkbox-group">
                        <label htmlFor="lowercase" className="label">Add Lowercase Letters</label>
                        <input
                            type="checkbox"
                            id="lowercase"
                            name="includeLowerCase"
                            checked={includeLowerCase}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="checkbox-group">
                        <label htmlFor="numbers" className="label">Include Numbers</label>
                        <input
                            type="checkbox"
                            id="numbers"
                            name="includeNumbers"
                            checked={includeNumbers}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="checkbox-group">
                        <label htmlFor="symbols" className="label">Include Symbols</label>
                        <input
                            type="checkbox"
                            id="symbols"
                            name="includeSymbols"
                            checked={includeSymbols}
                            onChange={handleChange}
                        />
                    </div>

                    <button onClick={handleGeneratePassword} className="button">Generate Password</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Password;
