// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../../config/firebase';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query;
    const { handle } = query;
    const docRef = doc(db, "users", String(handle));

    async function getUser() {
        const user = await getDoc(docRef);

        try {
            return res.status(200).send(user?.data());
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
