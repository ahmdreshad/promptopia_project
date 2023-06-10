import { connectToDB } from '@utils/database'
import Prompt from '@models/propmt'

export const GET = async (request) => {
  try {
    await connectToDB()

    const prompts = await Prompt.find({}).populate('creator')
    return new Response(JSON.stringify(prompts), {
      status: 200,
    })
  } catch (error) {
    return new Response('Faild to fetch', { status: 500 })
  }
}
