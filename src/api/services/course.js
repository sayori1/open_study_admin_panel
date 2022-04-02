import axios from "axios";
import { baseURL, catchErrors } from "../api";

export async function create(dto) {
  return catchErrors(() => axios.post(baseURL + "/course", dto));
}

export async function getAll(count, page) {
  return catchErrors(() =>
    axios.get(baseURL + "/course", { params: { count, page } })
  );
}

export async function search(query) {
  return catchErrors(() =>
    axios.get(baseURL + "/course/find", { params: { query } })
  );
}

export async function getOne(id) {
  return catchErrors(() => axios.get(baseURL + "/course/" + id));
}

export async function deleteCourse(id) {
  return catchErrors(() => axios.delete(baseURL + "/course/" + id));
}

export async function getByTag(tag) {
  return catchErrors(() => axios.get(baseURL + "/course/tag/" + tag));
}

export async function addComment(dto) {
  return catchErrors(() => axios.post(baseURL + "/course/comment", dto));
}

export async function saveCourse(id, dto) {
  return catchErrors(() => axios.put(baseURL + "/course/" + id, dto));
}
