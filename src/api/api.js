import { ElMessage } from "element-plus";

export const baseURL = "http://localhost:3000";

export async function catchErrors(func) {
  try {
    const response = await func();
    return response.data;
  } catch (e) {
    ElMessage.error(e.toString());
    throw e;
  }
}
