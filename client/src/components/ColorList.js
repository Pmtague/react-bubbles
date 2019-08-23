import React, { useState, useEffect } from "react";
import axios from "axios";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ props, colors, updateColors }) => {

  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  // useEffect(() => {
  //   const id = colors.match.params.id;
  //   const colorInArray = colors.find(col => `${col.id}` === id);
  //   if(colorInArray) {
  //     setColorToEdit(colorInArray)
  //   }
  // }, [colors.match.params.id])

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // axios
    //   .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    //   .then(res => {
    //     console.log('Save Edit', res)
    //     // props.history.push('/bubblePage')
    //   })
    //   .catch(err => {
    //     console.log('Save Edit Error', err.response)
    //   })
  };

  const deleteColor = color => {
    // axios
    //   .delete(`http:localhost:5000/api/colors/${colorToEdit.id}`)
    //   .then(res => {
    //     console.log('Delete Call', res.data)
    //     // props.history.push('/bubblePage')
    //   })
    //   .catch(err => {
    //     console.log('Delete Error', err.response)
    //   })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {console.log('Colors', colors)}
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
