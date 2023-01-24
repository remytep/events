// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { doc, collection, query as firestoreQuery, where, getDoc } from "firebase/firestore";
import { auth, db } from '../../../config/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query;
    const { id } = query;
    const userDoc = doc(db, "user", String(id));

    async function getUser() {
        const docSnap = await getDoc(userDoc);
        try {
            return res.status(200).send({ doc: docSnap.data(), id: docSnap.id });
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    switch (req.method) {
        case "GET":
            getUser();
            break;
    }

}
