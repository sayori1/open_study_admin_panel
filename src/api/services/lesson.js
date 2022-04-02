import axios from "axios";
import { baseURL, catchErrors } from "../api";

export async function create(dto) {
  return catchErrors(() => axios.post(baseURL + "/lesson", dto));
}

export async function getOfCourse(id) {
  return catchErrors(() => axios.get(baseURL + "/lesson/all/" + id));
}

export async function getOne(id) {
  return catchErrors(() => axios.get(baseURL + "/lesson/" + id));
}

export async function deleteLesson(id) {
  return catchErrors(() => axios.delete(baseURL + "/lesson/" + id));
}

export async function createPage(dto) {
  return catchErrors(() => axios.post(baseURL + "/lesson/page", dto));
}

export async function saveLesson(id, dto) {
  return catchErrors(() => axios.put(baseURL + "/lesson/" + id, dto));
}

export async function editPage(id, dto) {
  return catchErrors(() => axios.put(baseURL + "/lesson/page/" + id, dto));
}

export async function deletePage(id) {
  return catchErrors(() => axios.delete(baseURL + "/lesson/page/" + id));
}
export async function getPage(id) {
  return catchErrors(() => axios.get(baseURL + "/lesson/page/" + id));
}
