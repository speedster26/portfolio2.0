// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../../sanity'
import { groq } from 'next-sanity'
import { Experience } from '../../../typing'
const query = groq`*[_type == "experience"]{
    ...,
    technologies[]->
}`;

type Data = {
    experience: Experience[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await sanityClient.fetch(query)
  res.status(200).json({experience})
}