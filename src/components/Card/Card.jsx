import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCardItem, checkCardItem } from "../redux/reducer/Reducer";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./CardStyle.css";
import { Link } from "react-router-dom";
function Card({ setFormStatus, setUpdate }) {
  const DataTodos = useSelector((state) => state.ToDo);
  const dispatch = useDispatch();

  const handleDelet = (id) => {
    dispatch(deleteCardItem(id));
  };
  const handleUpdate = (todo) => {
    setFormStatus(todo);
    setUpdate("update");
  };
  const handelCheck = (id) => {
    dispatch(checkCardItem(id));
  };
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Grid container item dir={"rtl"} display={"flex"}>
      <Grid
        item
        display={"flex"}
        sx={{ border: "1px solid #8888 ", borderRadius: "10px" }}
        xs={12}
        mb={2}
      >
        <Button variant="contained" color="success">
          <Link to={"/Form"}> Add + </Link>
        </Button>
        <IconButton type="button" sx={{ p: "11px" }} aria-label="جستجو">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleSearch}
          placeholder="جستجوی عبارت مورد نظر ..."
        />
      </Grid>
      {DataTodos.filter((todo) =>
        todo.title.toUpperCase().includes(search.toUpperCase())
      ).map((todo) => (
        <Grid
          key={todo.id}
          borderRadius={4}
          mx={0.5}
          mb={2}
          justifyContent={"space-between"}
          display={"flex"}
          padding={"16px"}
          sx={{ background: todo.color }}
        >
          <Grid>
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid>
                <input
                  type={"radio"}
                  checked={todo.state}
                  onClick={() => handelCheck(todo.id)}
                />
              </Grid>
              <Grid mr={2} flexWrap={"wrap"}>
                <Typography
                  sx={{ textDecoration: todo.state ? "line-through" : "unset" }}
                >
                  {todo.title}
                </Typography>
                <Typography>{todo.description}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ cursor: "pointer" }}>
            <Button
              variant="outline"
              onClick={() => handleDelet(todo.id)}
              sx={{ cursor: "pointer" }}
            >
              <DeleteIcon />
            </Button>
            <Link to={"/form"}>
              <Button
                variant="outline"
                onClick={() => handleUpdate(todo)}
                sx={{ cursor: "pointer" }}
              >
                <EditIcon />
              </Button>
            </Link>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
