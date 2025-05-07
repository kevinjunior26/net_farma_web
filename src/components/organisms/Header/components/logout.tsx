'use server';

import { cookies } from 'next/headers';

export async function getSessionInfo() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('my_app_token')?.value;

    return accessToken ? { accessToken } : null;
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('my_app_token');
}

export async function validateSession(fingerprint: string): Promise<boolean> {
    const sessionInfo = await getSessionInfo();

    if (!sessionInfo || !sessionInfo.accessToken) return false;
    console.log("SESSAO = ", { sessionInfo }, sessionInfo.accessToken);
    const response = await fetch(`${process.env.API_HOST}/session/validate`, {
        method: 'GET',
        headers: {
            'X-SESSION-TOKEN': sessionInfo.accessToken,
            'X-FINGERPRINT': fingerprint,
            'Content-Type': 'application/json',
        },
        cache: 'no-cache'
    });
    console.log(" Passou na validacao, mas ka txiga result = ", { response });
    if (!response.ok) return false;

    const result = await response.json();
    console.log(" txiga result = ", { result });
    return result.valid === true;
}

export async function getMyAccount(fingerprint: string) {
    const sessionInfo = await getSessionInfo();
    if (!sessionInfo || !sessionInfo.accessToken) return null;
    console.log("Nha conta = ", { sessionInfo }, sessionInfo.accessToken);
    const response = await fetch(`${process.env.API_HOST}/session/me`, {
        method: 'GET',
        headers: {
            'X-SESSION-TOKEN': sessionInfo.accessToken,
            'X-FINGERPRINT': fingerprint,
            'Content-Type': 'application/json',
        },
        cache: 'no-cache'
    });

    if (!response.ok) return null;

    return await response.json();
}
