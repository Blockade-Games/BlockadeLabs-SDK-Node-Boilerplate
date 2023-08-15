import { Request, Response } from "express";
import { sdk } from "@/lib/sdk";

export const getImagineById = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    const imagine = await sdk.getImagineById({ id: String(id) });

    return res.status(200).json(imagine);
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error retrieving imagine" });
  }
};

export const getImagineByObfuscatedId = async (req: Request, res: Response) => {
  try {
    const { obfuscated_id } = req.query;

    const imagine = await sdk.getImagineByObfuscatedId({
      obfuscated_id: String(obfuscated_id),
    });

    return res.status(200).json(imagine);
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error retrieving imagine" });
  }
};

export const getImagineHistory = async (req: Request, res: Response) => {
  try {
    const { status, limit, offset, order, imagine_id, query, generator } =
      req.query;

    const imagineHistory = await sdk.getImagineHistory({
      status: status ? String(status) : undefined,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: order ? (String(order) as "ASC" | "DESC") : undefined,
      imagine_id: imagine_id ? Number(imagine_id) : undefined,
      query: query ? String(query) : undefined,
      generator: generator ? String(generator) : undefined,
    });

    return res.status(200).json(imagineHistory);
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error retrieving imagine history" });
  }
};

export const cancelImagine = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    await sdk.cancelImagine({
      id: String(id),
    });

    return res
      .status(200)
      .json({ message: `imagine: ${id} cancelled with success!` });
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error canceling imagine" });
  }
};

export const cancelAllPedingImagines = async (req: Request, res: Response) => {
  try {
    await sdk.cancelAllPendingImagines();

    return res
      .status(200)
      .json({ message: "Pending imagines cancelled with success!" });
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error canceling pending imagines" });
  }
};

export const deleteImagine = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    await sdk.deleteImagine({ id: String(id) });

    return res
      .status(200)
      .json({ message: `imagine: ${id} deleted with success!` });
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res.status(400).json({ error: "Unexpected error deleting imagine" });
  }
};
