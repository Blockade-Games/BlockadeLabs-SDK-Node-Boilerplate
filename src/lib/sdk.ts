import { BlockadeLabsSdk } from "@blockadelabs/sdk";
import { env } from "@/config/env";

export const sdk = new BlockadeLabsSdk({ api_key: env.API_KEY });
