import axios from "axios";

//https://5f65bfe243662800168e6f65.mockapi.io/api/crud/flashcards

export default axios.create({
  baseURL: "https://5f65bfe243662800168e6f65.mockapi.io/api/crud",
});
