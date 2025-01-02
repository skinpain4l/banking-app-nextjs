'use server'

import { Client, Account, Databases, Users } from 'node-appwrite'
import { cookies } from 'next/headers'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

  const cookie = await cookies()
  const session = cookie.get('appwrite-session')
  if (!session || !session.value) {
    throw new Error('No session')
  }

  client.setSession(session.value)

  return {
    get account() {
      return new Account(client)
    },
  }
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!)

  return {
    get account() {
      return new Account(client)
    },
    get database() {
      return new Databases(client)
    },
    get user() {
      return new Users(client)
    },
  }
}
