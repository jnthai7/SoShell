import prisma from '@/lib/client'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    // console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)
    
    if (eventType === "user.created"){
        try{

            await prisma.user.create({
                data:{
                    id:evt.data.id,
                    username: evt.data.username ?? "",
                    avatar: evt.data.image_url || "/noAvatar.png",
                    cover: "/noCover.png",
                },
            });
            return new Response("User has been created!", {status:200});
        } catch(err){
            console.log(err)
            return new Response("Failed to create the user!" , {status:500})
        }
    }

    if (eventType === "user.updated"){
        try{

            await prisma.user.update({
                where:{
                    id:evt.data.id,
                },
                data:{
                    username: evt.data.username ?? "",
                    avatar: evt.data.image_url || "/noAvatar.png",
                },
            });
            return new Response("User has been updated!", {status:200});
        } catch(err){
            console.log(err)
            return new Response("Failed to update the user!" , {status:500})
        }
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}