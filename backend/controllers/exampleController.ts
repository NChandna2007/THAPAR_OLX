import { Request, Response } from "express";
import { supabase } from "../utils/supabaseClient";

export const getExampleData = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from("items").select("*");

    if (error) throw error;

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
