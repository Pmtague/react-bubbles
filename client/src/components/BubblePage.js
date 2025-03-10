import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);

  useEffect (() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(res => {
        console.log('Get Colors', res.data)
        setColorList(res.data)
      })
      .catch(err => {
        console.log('Get Colors Error', err.response)
      })
  }, [])

  return (
    <>
      <ColorList colors={ colorList } updateColors={ setColorList } />
      <Bubbles colors={ colorList } />
    </>
  );
};

export default BubblePage;
