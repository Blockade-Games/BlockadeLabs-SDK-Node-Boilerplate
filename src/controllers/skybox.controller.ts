import { Request, Response } from "express";
import { sdk } from "@/lib/sdk";

export const getSkyboxStyles = async (_req: Request, res: Response) => {
  try {
    const skyboxStyles = await sdk.getSkyboxStyles();

    return res.status(200).json(skyboxStyles);
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error retrieving skybox styles" });
  }
};

export const generateSkybox = async (req: Request, res: Response) => {
  try {
    const { prompt, skybox_style_id, remix_imagine_id, webhook_url } = req.body;

    const generation = await sdk.generateSkybox({
      prompt,
      skybox_style_id,
      remix_id: remix_imagine_id,
      webhook_url,
    });

    return res.status(200).json(generation);
  } catch (err) {
    if (err && typeof err === "object" && "message" in err)
      return res.status(400).json({ error: err.message });

    return res
      .status(400)
      .json({ error: "Unexpected error generating new skybox" });
  }
};
