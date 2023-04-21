import { useState } from "react";
import "./App.css";
import Input from "./components/UI/Input/Input";

function App() {
  //Для хранения состояния формы
  const [formState, setFormState] = useState({
    name: "",
    password: "",
    text: "",
    remember: false,
    isOn: false,
    radioSelection: "Radio Selection 2",
    dropDown: "Option_1",
  });

  /**
   * Функция полной очистки формы
   */
  const handleClearForm = () => {
    setFormState({
      name: "",
      password: "",
      text: "",
      remember: false,
      radioSelection: "Radio Selection 2",
      dropDown: "Option_1",
    });
  };

  //функция для отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.stringify(formState);
    alert(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "isOn" ? checked : type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__element form__name">
          <label className="form__label">Username</label>
          <Input
            className="form__input"
            type="text"
            required
            name="name"
            value={formState.name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter username"
          />
        </div>

        <div className="form__element form__password">
          <label className="form__label">Password</label>
          <Input
            className="form__input"
            type="password"
            required
            name="password"
            value={formState.password}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter password"
          />
          <span className="form__input-description">
            Your password is between 4 and 12 characters
          </span>
        </div>

        <div className="form__element form__text">
          <label className="form__label">Input Text Label</label>
          <Input
            className="form__input"
            type="text"
            name="text"
            value={formState.text}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter message"
          />
          <span className="form__input-description">
            Error message informing me of a problem
          </span>
        </div>

        <div className="form__element form__remember">
          <input
            type="checkbox"
            name="remember"
            checked={formState.remember}
            onChange={handleChange}
          />
          <label>Remember me</label>
        </div>

        <div className="form__element form__on">
          <input
            type="checkbox"
            name="isOn"
            checked={formState.isOn}
            onChange={handleChange}
          />
          <label>{formState.isOn ? "On" : "Off"}</label>
        </div>

        <div className="form__element form__radio">
          <ul className="form__radio-list">
            <li>
              <input
                name="radioSelection"
                type="radio"
                value="Radio Selection 1"
                checked={formState.radioSelection === "Radio Selection 1"}
                onChange={handleChange}
              />
              <label htmlFor="radio 1">Radio selection 1</label>
            </li>
            <li>
              <input
                name="radioSelection"
                type="radio"
                value="Radio Selection 2"
                checked={formState.radioSelection === "Radio Selection 2"}
                onChange={handleChange}
              />
              <label htmlFor="radio 2">Radio selection 2</label>
            </li>
            <li>
              <input
                name="radioSelection"
                type="radio"
                value="Radio Selection 3"
                checked={formState.radioSelection === "Radio Selection 3"}
                onChange={handleChange}
              />
              <label htmlFor="radio 3">Radio selection 3 </label>
            </li>
          </ul>
        </div>

        <div className="form__element form__dropdown">
          <label className="form__label">DropDown</label>
          <select
            value={formState.dropDown}
            onChange={handleChange}
            name="dropDown"
          >
            <option value="Option_1" key="1">
              Dropdown option
            </option>
            <option value="Option_2" key="2">
              Dropdown option 1
            </option>
            <option value="Option_3" key="3">
              Dropdown option 2
            </option>
          </select>
        </div>
        <div className="form__buttons">
          <input type="reset" value={"Reset"} onClick={handleClearForm} />
          <input type="submit" value={"Add task"} />
        </div>
      </form>
    </div>
  );
}

export default App;
