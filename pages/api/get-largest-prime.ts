// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLargestPrime } from "@/lib/get-largest-prime";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const maxQueryParam = req.query.maximum;

  if (typeof maxQueryParam !== "string") {
    res.status(400).json("Must specify 'maximum' in query params");
    return;
  }

  const maxValue = Number.parseInt(maxQueryParam);

  const largestPrime = getLargestPrime(maxValue);

  res.status(200).json(largestPrime);
}
