// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, query as firestoreQuery, where, getDocs } from "firebase/firestore";
import { auth, db } from '../../../config/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query;
    const { handle } = query;
    const q = firestoreQuery(collection(db, "user"), where("handle", "==", String(handle)));

    async function getUser() {
        const querySnapshot = await getDocs(q);
        try {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                return res.status(200).send({ doc: doc.data(), id: doc.id });
            });
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
