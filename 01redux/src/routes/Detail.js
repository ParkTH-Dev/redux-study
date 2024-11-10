import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state);
  const todo = todos.find((item) => String(item.id) === id);

  return (
    <>
      <h1>Detail</h1>
      <span>{todo.text}</span>
    </>
  );
};

export default Detail;
