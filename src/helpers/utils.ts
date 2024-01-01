import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";

export const toggleSvgColor = () => {
  const theme = storeToRefs(useStore()).theme;
  return theme.value === "light" ? "#000" : "#fff";
};

/**
 * Encrypts the given ID and returns the encoded path.
 *
 * @param id The ID to be encrypted.
 * @returns The encoded path.
 */
const key = "snipersnevermisstheirtarget";
export const encodeUrlPath = (id: string): string => {
  const path = `${key}${id}`;
  return encodeURIComponent(btoa(path));
};

/**
 * Decrypts the encoded URL and returns the decrypted value.
 *
 * @param {string} encodedUrl - The URL encoded string to be decrypted.
 * @return {string} The decrypted URL value.d
 */
export const decodeUrlPath = (encodedUrl: string | string[]): string => {
  const path = atob(decodeURIComponent(encodedUrl as string));
  const id = path.split("snipersnevermisstheirtarget")[1];
  return id;
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};
