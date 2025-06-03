import axios from "axios";

export default async function shortenUrl(longUrl) {
  try {
    const response = await axios.get(`https://tinyurl.com/api-create.php`, {
      params: { url: longUrl },
    });
    return response.data || false; // Return short URL or fallback
  } catch (error) {
    console.error("Error shortening URL:", error);
    return false; // Fallback to original URL
  }
}
