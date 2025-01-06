import users from "../model/usermodel.js";
export const fetch = async (req, res) => {
  try {
    res.send("Hello World");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
