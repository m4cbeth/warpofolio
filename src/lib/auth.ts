import { adminAuth } from './firebaseAdmin';

export async function getUidFromRequest(req: Request) {
  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.slice('Bearer '.length).trim()
    : undefined;
  if (!token) {
    throw new Response('Unauthorized: missing Bearer token', { status: 401 });
  }
  try {
    const decoded = await adminAuth.verifyIdToken(token);
    const uid = decoded.uid;
    const email = decoded.email ?? null;
    return { uid, email };
  } catch (err) {
    throw new Response('Unauthorized: invalid token', { status: 401 });
  }
}

