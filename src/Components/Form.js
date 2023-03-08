import { useState } from 'react';

const emptyForm = {
  name: "",
  role: "",
  fovoriteTime: ""
}

function Form(props) {
  const [formData, setFormData] = useState(emptyForm);
  const { updateTeamList } = props;

  const changeHandler = (event) => {
    const stateOnChange = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(stateOnChange);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    updateTeamList(formData);
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor="name">
            İsim
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) => changeHandler(e)}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Role in Team</p>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={changeHandler}
            >
              <option value="">Seçiniz</option>
              <option value="F1">F1</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
              <option value="Basketball">Basketball</option>
            </select>
          </label>
        </div>
        <div>
          <label>Favorite Time</label>
          <label htmlFor="radioGece">Night</label>
          <input
            type="radio"
            id="radioGece"
            name="favoriteTime"
            value="Night"
            onChange={changeHandler}
          >
          </input>

          <label htmlFor="radioGündüz">Daytime</label>
          <input
            type="radio"
            id="radioGündüz"
            name="favoriteTime"
            value="Daytime"
            checked={formData.fovoriteTime === "Daytime"}
            onChange={changeHandler}
          >
          </input>
        </div>
        <div>
          <button className="button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
